//  Fetch all properties from Shopify + client-side filtering

import { useState, useEffect, useMemo } from 'react';
import { fetchAllProperties, type ShopifyProperty } from '../lib/shopify';

export interface PropertyFilters {
    listingType: string;   // '' | 'rent' | 'buy' | 'off-plan' | 'commercial'
    location: string;   // free text search
    minPrice: string;
    maxPrice: string;
    bedrooms: string;   // '' | '0'(studio) | '1' | '2' | '3' | '4' | '5+'
    propertyType: string;   // '' | 'apartment' | 'villa' | ...
    furnishing: string;   // '' | 'furnished' | 'semi-furnished' | 'unfurnished'
}

export const DEFAULT_FILTERS: PropertyFilters = {
    listingType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: '',
    furnishing: '',
};

export function useProperties(filters: PropertyFilters = DEFAULT_FILTERS) {
    const [properties, setProperties] = useState<ShopifyProperty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchAllProperties()
            .then(data => { if (!cancelled) { setProperties(data); setLoading(false); } })
            .catch(err => { if (!cancelled) { setError(err.message); setLoading(false); } });

        return () => { cancelled = true; };
    }, []);

    const filtered = useMemo(() => {
        return properties.filter(p => {

            // Listing type tab
            if (filters.listingType && p.listingType !== filters.listingType) return false;

            // Location search (title + location metafield)
            if (filters.location) {
                const q = filters.location.toLowerCase();
                const inTitle = p.title.toLowerCase().includes(q);
                const inLocation = (p.location ?? '').toLowerCase().includes(q);
                const inEmirate = (p.emirate ?? '').toLowerCase().includes(q);
                if (!inTitle && !inLocation && !inEmirate) return false;
            }

            // Price
            const price = parseFloat(p.priceRange.minVariantPrice.amount);
            if (filters.minPrice && price < parseFloat(filters.minPrice)) return false;
            if (filters.maxPrice && price > parseFloat(filters.maxPrice)) return false;

            // Bedrooms
            if (filters.bedrooms) {
                if (filters.bedrooms === '5+') {
                    if (p.bedrooms === null || p.bedrooms < 5) return false;
                } else {
                    if (p.bedrooms !== parseInt(filters.bedrooms)) return false;
                }
            }

            // Property type
            if (filters.propertyType && p.propertyType !== filters.propertyType) return false;

            // Furnishing
            if (filters.furnishing && p.furnishing !== filters.furnishing) return false;

            return true;
        });
    }, [properties, filters]);

    return { properties: filtered, allProperties: properties, loading, error };
}