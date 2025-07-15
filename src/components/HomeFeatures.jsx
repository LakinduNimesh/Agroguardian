import React from 'react'
import {Search } from "lucide-react"
import { Link } from "react-router-dom"
import { IoBugSharp } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";

const HomeFeatures = () => {
  return (
    <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Recognize Plants */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recognize unknown plants</h3>
          <p className="text-gray-600">
            Get personalized plant care recommendations using our extensive plant database and AI-powered plant
            identification.
          </p>
          <Link
            to="/plant-identifier"
            className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 cursor-pointer"
          >
            Identify a Plant →
          </Link>
        </div>

        {/* Plant Growth */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaLeaf className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Boost plant growth & thrive</h3>
          <p className="text-gray-600">
            Get personalized plant care based on your plant's needs and environment. Track your plant care with our
            plant care calendar.
          </p>
          <button className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 cursor-pointer">
            Get Care Tools →
          </button>
        </div>

        {/* Plant Problems */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <IoBugSharp className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Grow healthy plants</h3>
          <p className="text-gray-600">
            Prevent plant diseases with our advanced plant diagnosis tool. Detect issues early and get expert
            treatment recommendations.
          </p>
          <Link to="/plant-problems" className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 cursor-pointer">
            Diagnose a Plant →
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeFeatures