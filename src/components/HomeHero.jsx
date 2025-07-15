import React from 'react'
import bgPlant from "../Images/bg-plant.png"
import { FaCameraRetro } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Plant Identifier by Picture</h1>
              <p className="text-xl text-gray-600 mb-8">
                Identify plants, use custom care guides, and learn how to care for each particular species.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="What plant do you have?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
                  <FaCameraRetro className="w-5 h-5" />
                  <span>Identify a plant</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={bgPlant}
                alt="Plant identification illustration"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HomeHero