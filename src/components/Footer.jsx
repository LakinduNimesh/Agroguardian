import React from 'react'
import { Link } from "react-router-dom"
import logo from '../Images/logo.png'
import AppleStore from '../Images/AppStore.png'
import PlayStore from '../Images/GooglePlay.png'

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 align-top">
          {/* Company Info */}
          <div>
          <Link to="/" className="flex items-center ">
                        <div className="w-15 rounded-full flex items-center justify-center ">
                            <img
                                src={logo}
                                alt="logo"
                                className='w-15'/>        
                        </div>
                        <p className="text-xl font-bold text-gray-900"><span className='text-green-600'>A</span>gro<span className='text-green-600'>G</span>uardian</p>
                    </Link>
            <p className="text-gray-600 text-sm mb-4">
              Get plant identifier with database of more than 17,000 species is available for you to identify, diagnose
              plant diseases, ask botanist, get plant care recommendations, collect your plant care schedule, try
              disease identification, and more.
            </p>
          </div>

          {/* Plant Care */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Plant Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-green-600">
                  Plant Identifier
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Plant Problems
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Ask the Botanist
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Weed Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  PlantIn App review
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Ratings and reviews
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Hero of Ukraine
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-600">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms and Get Our App */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get Our App</h3>
            <div className="space-y-3">
              <a href="#"><img src={AppleStore} alt="Download on App Store" className="h-10" /></a> 
              <a href="#"><img src={PlayStore} alt="Get it on Google Play" className="h-10" /></a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Terms and Conditions</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <Link to="#" className="hover:text-green-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm  text-gray-600">
          <p>©2025 All rights reserved by <a className='text-amber-950 underline' href="https://github.com/LakinduNimesh">Lakindu Nimesh</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer