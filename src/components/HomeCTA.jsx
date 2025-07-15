import React from 'react'
import LeavesPattern from '../Images/LeavesPattern.png'

const HomeCTA = () => {
  return (
    <section
                className="relative py-16 bg-cover bg-center text-white rounded-lg"
                style={{ backgroundImage: `url(${LeavesPattern})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                {/* Foreground content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Get access for 3 days</h2>
                    <p className="text-xl text-green-100 mb-8">Try all premium features free for 3 days</p>
                    <button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors cursor-pointer">
                        Get Trial
                    </button>
                </div>
            </section>
  )
}

export default HomeCTA