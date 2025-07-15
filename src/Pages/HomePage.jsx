import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeFeatures from '../components/HomeFeatures'
import HomeCommunity from '../components/HomeCommunity'
import HomeCTA from '../components/HomeCTA'




const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <HomeHero />

            {/* Features Section */}
            <HomeFeatures />

            {/* Community Section */}
            <HomeCommunity />

            {/* CTA Section */}
            <HomeCTA />


        </div>
    )
}

export default HomePage