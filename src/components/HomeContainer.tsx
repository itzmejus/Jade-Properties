import HomePage from './HomePage'
import ScrollingMarquee from './ScrollingMarquee'
import PropertyCardSection from './PropertyCardSection'
import WhyChooseUs from './WhyChooseUs'
import MortgageCalculator from './MortgageCalculator'

const HomeContainer = () => {
    return (
        <div>
            <HomePage />
            <ScrollingMarquee />
            <PropertyCardSection />
            <MortgageCalculator />
            <WhyChooseUs />
        </div>
    )
}

export default HomeContainer
