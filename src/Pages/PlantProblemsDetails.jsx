import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Camera, Clock, AlertTriangle, CheckCircle } from "lucide-react"
import ImageUploadModal from "../components/ImageUploadModal/ImageUploadModal"
import { problemsData } from "../Images/PlantProblems/ProblemAssests"
import { IoBugSharp } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { FaSun } from "react-icons/fa";
import { GiDropletSplash } from "react-icons/gi";


const PlantProblemDetail = () => {
    const { problemId } = useParams()
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [problem, setProblem] = useState(null)


    useEffect(() => {
        const problemData = problemsData[problemId]
        if (problemData) {
            setProblem(problemData)
        }
    }, [problemId])

    const handleImageSelect = (image, preview) => {
        console.log("Selected image for diagnosis:", image)
        alert("Plant problem diagnosis feature would be implemented here!")
    }

    if (!problem) {
        return (
            <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Not Found</h2>
                    <Link to="/plant-problems" className="text-green-600 hover:text-green-700">
                        ← Back to Plant Problems
                    </Link>
                </div>
            </div>
        )
    }

    const getSeverityColor = (severity) => {
        switch (severity) {
            case "Low":
                return "text-green-600 bg-green-100"
            case "Medium":
                return "text-yellow-600 bg-yellow-100"
            case "High":
                return "text-red-600 bg-red-100"
            default:
                return "text-gray-600 bg-gray-100"
        }
    }

    const getDifficultyIcon = (difficulty) => {
        switch (difficulty) {
            case "Easy":
                return <CheckCircle className="w-5 h-5 text-green-600" />
            case "Moderate":
                return <Clock className="w-5 h-5 text-yellow-600" />
            case "Challenging":
                return <AlertTriangle className="w-5 h-5 text-red-600" />
            default:
                return <Clock className="w-5 h-5 text-gray-600" />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 w-full">
            {/* Header */}
            <div className="bg-white ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link to="/plant-problems" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Plant Problems
                    </Link>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{problem.name}</h1>
                            <div className="flex items-center space-x-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(problem.severity)}`}>
                                    {problem.severity} Severity
                                </span>
                                <span className="flex items-center space-x-1 text-gray-600">
                                    {problem.category === "Pests" ? <IoBugSharp className="w-4 h-4 text-amber-900" /> : <FaLeaf className="w-4 h-4 text-green-600" />}
                                    <span>{problem.category}</span>
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsUploadModalOpen(true)}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer"
                        >
                            <FaCameraRetro className="w-4 h-4" />
                            <span>Diagnose</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Main Image */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                    <img src={problem.image || "/placeholder.svg"} alt={problem.name} className="w-full h-64 object-cover" />
                </div>

                {/* Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{problem.fullDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start space-x-3">
                            {getDifficultyIcon(problem.difficulty)}
                            <div>
                                <p className="text-sm text-gray-500">Treatment Difficulty</p>
                                <p className="font-medium text-gray-900">{problem.difficulty}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CiClock2 className="w-5 h-5 min-w-5 min-h-5 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Recovery Time</p>
                                <p className="font-medium text-gray-900">{problem.timeline}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaLeaf className="w-5 h-5 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Common in</p>
                                <p className="font-medium text-gray-900">
                                    {problem.commonPlants.slice(0, 2).join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Symptoms */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <CiCircleAlert className="w-5 h-5 text-red-500 mr-2" />
                        Symptoms to Look For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {problem.symptoms.map((symptom, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{symptom}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Causes */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <FaSun className="w-5 h-5 text-orange-500 mr-2" />
                        Common Causes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {problem.causes.map((cause, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{cause}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Treatment */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <GiDropletSplash className="w-5 h-5 text-blue-500 mr-2" />
                        Treatment Plan
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Immediate Treatment */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-red-600">Immediate Actions</h3>
                            <div className="space-y-3">
                                {problem.treatment.immediate.map((action, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-red-600">{index + 1}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{action}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ongoing Treatment */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-blue-600">Ongoing Care</h3>
                            <div className="space-y-3">
                                {problem.treatment.ongoing.map((action, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{action}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prevention */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-green-600">Prevention</h3>
                            <div className="space-y-3">
                                {problem.treatment.prevention.map((action, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-green-600">{index + 1}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{action}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Commonly Affected Plants */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Commonly Affected Plants</h3>
                        <div className="flex flex-wrap gap-2">
                            {problem.commonPlants.map((plant, index) => (
                                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {plant}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Related Problems */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Related Problems</h3>
                        <div className="space-y-2">
                            {problem.relatedProblems.map((relatedProblem, index) => (
                                <button
                                    key={index}
                                    className="block w-full text-left px-3 py-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                                >
                                    {relatedProblem} →
                                </button>
                            ))}
                        </div>
                    </div>

                    

                </div>

                {/* CTA Section with Background Video */}
                <div className="relative overflow-hidden rounded-lg mb-8">
                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Videos/AgriBackground.mp4"
                        controls
                        
                    >
                        
                    </video>
                    
                

                    {/* Content */}
                    <div className="relative text-center py-16 px-6">
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCameraRetro className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Get Expert Plant Diagnosis</h2>
                            <p className="text-green-100 mb-8 text-lg">
                                Upload a photo and get instant AI-powered plant problem identification with personalized treatment plans
                            </p>
                            <button
                                onClick={() => setIsUploadModalOpen(true)}
                                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg cursor-pointer"
                            >
                                Diagnose My Plant
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

export default PlantProblemDetail
