import { useState } from "react"
import ImageUploadModal from "../components/ImageUploadModal/ImageUploadModal"
import { Link } from "react-router-dom"
import { tabs } from "../Images/PlantProblems/ProblemAssests"
import { problems } from "../Images/PlantProblems/ProblemAssests"
import { FaCameraRetro } from "react-icons/fa";
import ppb2 from "../Images/ppb2.png"

const PlantProblems = () => {
  const [selectedTab, setSelectedTab] = useState("All Problems")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const filteredProblems = problems.filter(
    (problem) => selectedTab === "All Problems" || problem.category === selectedTab,
  )

  const handleImageSelect = (image, preview) => {
    console.log("Selected image for diagnosis:", image)
    console.log("Preview URL:", preview)
    // Here you would typically send the image to your plant problem diagnosis API
    alert("Plant problem diagnosis feature would be implemented here!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Plant Problems Diagnosis, Identification & Preventing
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We cannot always prevent our plants to have problems, but we can identify various diseases. Let's begin
                treatment with our plant disease identifier and easy fix-app ID tool.
              </p>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <FaCameraRetro className="w-5 h-5" />
                <span>Diagnose a plant</span>
              </button>
            </div>
            <div className="relative flex ">
             
              <img
                src={ppb2}
                alt="Plant diagnosis illustration"
                className="w-160 h-100 object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            Many factors have potential for damage to plants. In this case, it is probably serious plant problems such
            as illnesses and pests that directly affect the health of your plants. Plant diseases occur due to various
            causes, such as pathogens and adverse environmental conditions. They manifest in a violation of the
            functions and structure of the organism. Most importantly, they may negatively affect the plant's ability to
            manage its life systems. Diagnosing different plant problems is key to the plant's successful growth.
          </p>
          <button className="text-green-600 font-medium mt-4 hover:text-green-700 transition-colors">More info</button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer ${selectedTab === tab
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {filteredProblems.map((problem) => (
            <Link
              key={problem.id}
              to={`/plant-problems/${problem.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer block"
            >
              <img src={problem.image || "/placeholder.svg"} alt={problem.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{problem.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{problem.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Background Video */}
           <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Videos/AgriBackground2.mp4"
                        controls                    
                    >                     
                    </video>

     

          {/* Content */}
          <div className="relative text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCameraRetro className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Get access for 3 days</h2>
              <p className="text-green-100 mb-8 text-lg">Try all premium features free for 3 days</p>
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg cursor-pointer">
                Get Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <ImageUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onImageSelect={handleImageSelect}
        title="Diagnose Plant Problems"
      />
    </div>
  )
}

export default PlantProblems
