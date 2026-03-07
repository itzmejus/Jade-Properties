//  Shopify Storefront API client + all property queries

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
const ENDPOINT = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

//  Types

export interface ShopifyProperty {
    id: string;
    handle: string;
    title: string;
    descriptionHtml: string;
    description: string;
    priceRange: {
        minVariantPrice: { amount: string; currencyCode: string };
    };
    images: { edges: { node: { url: string; altText: string | null } }[] };
    // metafields
    listingType: string | null;   // rent | buy | off-plan | commercial
    location: string | null;
    bedrooms: number | null;
    bathrooms: number | null;
    areaSqft: string | null;
    propertyType: string | null;   // apartment | villa | townhouse | penthouse | studio
    furnishing: string | null;   // furnished | semi-furnished | unfurnished
    yearBuilt: number | null;
    emirate: string | null;
    features: string[];
    mapEmbed: string | null;
    referenceNo: string | null;
}

// Raw node from GraphQL
interface RawProduct {
    id: string;
    handle: string;
    title: string;
    descriptionHtml: string;
    description: string;
    priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
    images: { edges: { node: { url: string; altText: string | null } }[] };
    listingType: { value: string } | null;
    location: { value: string } | null;
    bedrooms: { value: string } | null;
    bathrooms: { value: string } | null;
    areaSqft: { value: string } | null;
    propertyType: { value: string } | null;
    furnishing: { value: string } | null;
    yearBuilt: { value: string } | null;
    emirate: { value: string } | null;
    features: { value: string } | null;
    mapEmbed: { value: string } | null;
    referenceNo: { value: string } | null;
}

//  GraphQL query fragment shared across queries

const PROPERTY_FRAGMENT = `
  id
  handle
  title
  description
  descriptionHtml
  priceRange {
    minVariantPrice { amount currencyCode }
  }
  images(first: 20) {
    edges { node { url altText } }
  }
  listingType:  metafield(namespace: "property", key: "listing_type")  { value }
  location:     metafield(namespace: "property", key: "location")      { value }
  bedrooms:     metafield(namespace: "property", key: "bedrooms")      { value }
  bathrooms:    metafield(namespace: "property", key: "bathrooms")     { value }
  areaSqft:     metafield(namespace: "property", key: "area_sqft")     { value }
  propertyType: metafield(namespace: "property", key: "property_type") { value }
  furnishing:   metafield(namespace: "property", key: "furnishing")    { value }
  yearBuilt:    metafield(namespace: "property", key: "year_built")    { value }
  emirate:      metafield(namespace: "property", key: "emirate")       { value }
  features:     metafield(namespace: "property", key: "features")      { value }
  mapEmbed:     metafield(namespace: "property", key: "map_embed")     { value }
  referenceNo:  metafield(namespace: "property", key: "reference_no")  { value }
`;

// ─── Transform raw Shopify node → clean ShopifyProperty ──────────────────────

export function transformProduct(raw: RawProduct): ShopifyProperty {
    const featuresRaw = raw.features?.value ?? '';
    return {
        id: raw.id,
        handle: raw.handle,
        title: raw.title,
        description: raw.description,
        descriptionHtml: raw.descriptionHtml,
        priceRange: raw.priceRange,
        images: raw.images,
        listingType: raw.listingType?.value ?? null,
        location: raw.location?.value ?? null,
        bedrooms: raw.bedrooms?.value != null ? parseInt(raw.bedrooms.value) : null,
        bathrooms: raw.bathrooms?.value != null ? parseInt(raw.bathrooms.value) : null,
        areaSqft: raw.areaSqft?.value ?? null,
        propertyType: raw.propertyType?.value ?? null,
        furnishing: raw.furnishing?.value ?? null,
        yearBuilt: raw.yearBuilt?.value != null ? parseInt(raw.yearBuilt.value) : null,
        emirate: raw.emirate?.value ?? null,
        features: featuresRaw ? featuresRaw.split(',').map(f => f.trim()).filter(Boolean) : [],
        mapEmbed: raw.mapEmbed?.value ?? null,
        referenceNo: raw.referenceNo?.value ?? null,
    };
}

//  Core fetch helper 

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);
    return json.data as T;
}

//  Queries 

// Fetch ALL properties (up to 250)
export async function fetchAllProperties(): Promise<ShopifyProperty[]> {
    const query = `
    query AllProperties($cursor: String) {
      products(first: 100, after: $cursor) {
        pageInfo { hasNextPage endCursor }
        edges {
          node { ${PROPERTY_FRAGMENT} }
        }
      }
    }
  `;

    let allProducts: ShopifyProperty[] = [];
    let cursor: string | null = null;

    // paginate through all pages
    while (true) {
        const data: any = await shopifyFetch<{
            products: {
                pageInfo: { hasNextPage: boolean; endCursor: string };
                edges: { node: RawProduct }[];
            };
        }>(query, { cursor });

        const products = data.products.edges.map((e: any) => transformProduct(e.node));
        allProducts = [...allProducts, ...products];

        if (!data.products.pageInfo.hasNextPage) break;
        cursor = data.products.pageInfo.endCursor;
    }

    return allProducts;
}

// Fetch single property by handle (for detail page)
export async function fetchPropertyByHandle(handle: string): Promise<ShopifyProperty | null> {
    const query = `
    query PropertyByHandle($handle: String!) {
      product(handle: $handle) { ${PROPERTY_FRAGMENT} }
    }
  `;

    const data = await shopifyFetch<{ product: RawProduct | null }>(query, { handle });
    return data.product ? transformProduct(data.product) : null;
}

//  Helpers 

export function formatPrice(amount: string): string {
    const num = parseFloat(amount);
    if (num >= 1_000_000) return `AED ${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `AED ${(num / 1_000).toFixed(0)}K`;
    return `AED ${num.toLocaleString()}`;
}

export function formatFullPrice(amount: string): string {
    const num = parseFloat(amount);
    return `AED ${num.toLocaleString()}`;
}

export function getBedroomsLabel(beds: number | null): string {
    if (beds === null) return '—';
    if (beds === 0) return 'Studio';
    return `${beds}`;
}

export function getListingTypeLabel(type: string | null): string {
    const map: Record<string, string> = {
        'rent': 'For Rent',
        'buy': 'For Sale',
        'off-plan': 'Off Plan',
        'commercial': 'Commercial',
    };
    return type ? (map[type] ?? type) : '—';
}