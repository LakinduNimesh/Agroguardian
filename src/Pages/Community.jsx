import { useState } from "react"
import { Heart, MessageCircle, Share, MoreHorizontal, Camera, Plus } from "lucide-react"
import React from 'react'
import { ProfileUsers } from "../Images/Users/CommunityAssests"
import { Posts } from "../Images/Users/CommunityAssests"

const Community = () => {

    const [posts] = useState([
        {
          id: 1,
          user: { name: "Hiruni Chamathka", avatar: ProfileUsers.prof2 },
          timeAgo: "2 hours ago",
          content: "Look at my new succulent! It's growing so well!",
          image:Posts.succulentPost,
          likes: 24,
          comments: 8,
          isLiked: false,
        },
        {
          id: 2,
          user: { name: "Mike Chen", avatar: "/placeholder.svg?height=40&width=40" },
          timeAgo: "4 hours ago",
          content: "My tomato seedlings are finally sprouting! Any tips for the next stage?",
          image: "/placeholder.svg?height=300&width=400",
          likes: 15,
          comments: 12,
          isLiked: true,
        },
        {
          id: 3,
          user: { name: "Emma Wilson", avatar: "/placeholder.svg?height=40&width=40" },
          timeAgo: "6 hours ago",
          content: "First time growing herbs indoors. This basil is doing amazing!",
          image: "/placeholder.svg?height=300&width=400",
          likes: 31,
          comments: 5,
          isLiked: false,
        },
        {
          id: 4,
          user: { name: "David Park", avatar: "/placeholder.svg?height=40&width=40" },
          timeAgo: "8 hours ago",
          content: "My rose garden is blooming beautifully this season 🌹",
          image: "/placeholder.svg?height=300&width=400",
          likes: 42,
          comments: 18,
          isLiked: true,
        },
        {
          id: 5,
          user: { name: "Lisa Garcia", avatar: "/placeholder.svg?height=40&width=40" },
          timeAgo: "1 day ago",
          content: "Propagating my pothos - look at these roots!",
          image: "/placeholder.svg?height=300&width=400",
          likes: 28,
          comments: 9,
          isLiked: false,
        },
      ])

      
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Feed Community</h1>
              <p className="text-gray-600 mt-1">Share your plant journey with fellow enthusiasts</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create Post */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <img src={ProfileUsers.prof1} alt="Your avatar" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Share your plant story..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.user.avatar || "/placeholder.svg"}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{post.user.name}</h3>
                    <p className="text-sm text-gray-500">{post.timeAgo}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-900">{post.content}</p>
              </div>

              {/* Post Image */}
              <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-64 object-cover" />

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      className={`flex items-center space-x-2 transition-colors ${
                        post.isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${post.isLiked ? "fill-current" : ""}`} />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Share className="w-5 h-5" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Community