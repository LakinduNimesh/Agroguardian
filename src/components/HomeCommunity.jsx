import React from 'react'
import plantCommunity from '../Images/PlantCommunity.png'
import { Users} from "lucide-react"
import { Link } from "react-router-dom"

const HomeCommunity = () => {
  return (
    <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join a global plant community</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Become a part of our thriving global plant community and connect with passionate plant lovers from
                                around the world. Share tips, exchange experiences, and learn from fellow plant enthusiasts in our
                                rewarding experience.
                            </p>
                            <Link
                                to="/community"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
                            >
                                <Users className="w-5 h-5" />
                                <span>Join the Community</span>
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src={plantCommunity}
                                alt="Plant community"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default HomeCommunity