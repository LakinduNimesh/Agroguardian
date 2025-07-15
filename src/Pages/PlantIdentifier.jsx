import React from 'react'
import { useEffect, useRef, useState } from "react"
import { plants, categories } from '../Images/Plants/assets'
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";



const PlantIdentifier = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Plants")
  const [selectedLight, setSelectedLight] = useState("All")
  const [selectedWater, setSelectedWater] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const filterRef = useRef(null)

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Plants" || plant.category === selectedCategory
    const matchesLight = selectedLight === "All" || plant.light === selectedLight
    const matchesWater = selectedWater === "All" || plant.water === selectedWater
    const matchesDifficulty = selectedDifficulty === "All" || plant.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesLight && matchesWater && matchesDifficulty
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Plant Identifier</h1>
          <p className="text-lg text-gray-600 mb-8">
            Easily identify plants, use custom care guides, and learn how to care for each particular species.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="What plant do you have?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2 cursor-pointer">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer ${selectedCategory === category
                      ? "bg-green-100 text-green-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Plant Results ({filteredPlants.length})</h2>
              <div className="relative inline-block text-left cursor-pointer" ref={filterRef}
                onMouseEnter={() => setShowFilters(true)}
                onMouseLeave={() => setShowFilters(false)}
              >
                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters((prev) => !prev)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <CiFilter className="w-4 h-4" />
                  <span>Filter</span>
                </button>

                {/* Dropdown Panel */}
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-xl z-20">
                    <div className="p-4 space-y-4 text-sm">

                      {/* Light Filter */}
                      <div>
                        <label className="block mb-1 text-gray-700">Light</label>
                        <select
                          value={selectedLight}
                          onChange={(e) => setSelectedLight(e.target.value)}
                          className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                        >
                          <option>All</option>
                          <option>Full Sun</option>
                          <option>Partial Shade</option>
                          <option>Shade</option>
                        </select>
                      </div>

                      {/* Water Filter */}
                      <div>
                        <label className="block mb-1 text-gray-700">Water</label>
                        <select
                          value={selectedWater}
                          onChange={(e) => setSelectedWater(e.target.value)}
                          className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                        >
                          <option>All</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                        </select>
                      </div>

                      {/* Difficulty Filter */}
                      <div>
                        <label className="block mb-1 text-gray-700">Difficulty</label>
                        <select
                          value={selectedDifficulty}
                          onChange={(e) => setSelectedDifficulty(e.target.value)}
                          className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                        >
                          <option>All</option>
                          <option>Easy</option>
                          <option>Moderate</option>
                          <option>Difficult</option>
                        </select>
                      </div>

                      {/* Reset Filters Button */}
                      <button
                        onClick={() => {
                          setSelectedLight("All")
                          setSelectedWater("All")
                          setSelectedDifficulty("All")
                        }}
                        className="mt-2 w-full text-center text-sm text-green-600 hover:underline cursor-pointer"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>



            </div>




            {/* Plant Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPlants.map((plant, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <img src={plant.image || "/placeholder.svg"} alt={plant.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{plant.name}</h3>
                    <p className="text-sm text-gray-500">{plant.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredPlants.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No plants found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantIdentifier