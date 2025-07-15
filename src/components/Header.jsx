import React from 'react'
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from '../Images/logo.png'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navigation = [
        { name: "Plant Identifier", href: "/plant-identifier" },
        { name: "Plant Problems", href: "/plant-problems" },
        { name: "Blog", href: "/blog" },
        { name: "Feed", href: "/community" },
        { name: "Company", href: "#", hasDropdown: true },
    ]

    return (
        <header className="bg-white shadow-sm p-2">
            {/* <div className="bg-green-100 text-center py-2 text-m">Identify, Get Care & Grow Healthy Plants with Us!</div> */}

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-15 rounded-full flex items-center justify-center ">
                            <img
                                src={logo}
                                alt="logo"
                                className='w-15'/>        
                        </div>
                        <p className="text-xl font-bold text-gray-900"><span className='text-green-600'>A</span>gro<span className='text-green-600'>G</span>uardian</p>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative">
                                <Link
                                    to={item.href}
                                    className={`flex items-center space-x-1 px-3 py-2 text-m font-medium rounded-md transition-colors ${location.pathname === item.href
                                            ? "text-green-600 bg-green-50"
                                            : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                                        }`}
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                            Sign Up Free
                        </button>
                        
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Sign Up Free
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header