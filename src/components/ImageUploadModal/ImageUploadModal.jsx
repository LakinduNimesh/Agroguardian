"use client"

import { useState, useRef } from "react"
import { X, Camera, Upload, ImageIcon, Check } from "lucide-react"

const ImageUploadModal = ({ isOpen, onClose, onImageSelect, title = "Upload Plant Image" }) => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadMethod, setUploadMethod] = useState("upload") // "upload", "camera", or "url"
  const [imageUrl, setImageUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [cameraStream, setCameraStream] = useState(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0])
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use back camera on mobile
      })
      setCameraStream(stream)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      alert("Unable to access camera. Please check permissions.")
    }
  }

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop())
      setCameraStream(null)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const ctx = canvas.getContext("2d")
      ctx.drawImage(video, 0, 0)

      canvas.toBlob(
        (blob) => {
          const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" })
          handleFileSelect(file)
          stopCamera()
          setUploadMethod("upload")
        },
        "image/jpeg",
        0.8,
      )
    }
  }

  const handleUrlSubmit = () => {
    if (imageUrl) {
      setImagePreview(imageUrl)
      setSelectedImage({ url: imageUrl, type: "url" })
    }
  }

  const handleSubmit = async () => {
    if (!selectedImage) return

    setIsProcessing(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    onImageSelect(selectedImage, imagePreview)
    handleClose()
  }

  const handleClose = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setImageUrl("")
    setUploadMethod("upload")
    setIsProcessing(false)
    stopCamera()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Upload Method Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => {
                setUploadMethod("upload")
                stopCamera()
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                uploadMethod === "upload" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Upload File
            </button>
            <button
              onClick={() => {
                setUploadMethod("camera")
                startCamera()
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                uploadMethod === "camera" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Camera className="w-4 h-4 inline mr-2" />
              Take Photo
            </button>
            <button
              onClick={() => {
                setUploadMethod("url")
                stopCamera()
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                uploadMethod === "url" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900 "
              }`}
            >
              <ImageIcon className="w-4 h-4 inline mr-2" />
              Image URL
            </button>
          </div>

          {/* Upload File Section */}
          {uploadMethod === "upload" && (
            <div>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drop your plant image here, or{" "}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-green-600 hover:text-green-700 underline cursor-pointer"
                  >
                    browse
                  </button>
                </p>
                <p className="text-sm text-gray-500">Supports: JPG, PNG, GIF up to 10MB</p>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInput} className="hidden" />
              </div>
            </div>
          )}

          {/* Camera Section */}
          {uploadMethod === "camera" && (
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <video ref={videoRef} autoPlay playsInline className="w-full max-w-md mx-auto rounded-lg" />
                <canvas ref={canvasRef} className="hidden" />
              </div>
              {cameraStream && (
                <button
                  onClick={capturePhoto}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  <Camera className="w-5 h-5 inline mr-2" />
                  Capture Photo
                </button>
              )}
            </div>
          )}

          {/* URL Section */}
          {uploadMethod === "url" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ">Image URL</label>
              <div className="flex space-x-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/plant-image.jpg"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleUrlSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Load
                </button>
              </div>
            </div>
          )}

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 ">Preview</h3>
              <div className="bg-gray-100 rounded-lg p-4">
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Processing State */}
          {isProcessing && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-green-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                <span>Processing image...</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div className="text-sm text-gray-500">
            {selectedImage ? "Image ready for identification" : "Select an image to continue"}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedImage || isProcessing}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Identify Plant</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageUploadModal
