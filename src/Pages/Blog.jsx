import React from 'react'
import { useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"
import { assests } from '../Images/Blogs/blogAssests'
import { categories } from '../Images/Blogs/blogAssests'
import { articles } from '../Images/Blogs/blogAssests'

const Blog = () => {

    const [selectedCategory, setSelectedCategory] = useState("All Articles")

    // const categories = [
    //   "All Articles",
    //   "Beginner",
    //   "Top Choice",
    //   "Plant Of The Week",
    //   "Care Guide",
    //   "Entertainment",
    //   "Plants For Spaces",
    //   "Sprouting 101",
    // ]
  
    // const articles = [
    //   {
    //     id: 1,
    //     title: "What Are Tiny Black Bugs That Look Like Poppy Seeds?",
    //     excerpt:
    //       "Are these poppy seeds, you wonder? 🤔 From fungus gnats to aphids, we'll teach you to identify those tiny black bugs—and kick them out before they take over.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Care Guide",
    //     author: "Plant Expert",
    //     date: "May 15, 2024",
    //     readTime: "5 min read",
    //   },
    //   {
    //     id: 2,
    //     title: "What Bugs Look Like Flying Termites?",
    //     excerpt:
    //       "Think you saw flying termites? Don't panic—yet. Learn to identify what's swarming your light and how to deal with these uninvited guests.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Care Guide",
    //     author: "Garden Specialist",
    //     date: "May 12, 2024",
    //     readTime: "4 min read",
    //   },
    //   {
    //     id: 3,
    //     title: "What Does a Cockroach Look Like & How to Identify Them",
    //     excerpt:
    //       "Is that creepy crawler crawling your plant pots? We'll teach you to identify cockroaches and keep them away from your green friends.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Care Guide",
    //     author: "Pest Control Expert",
    //     date: "May 10, 2024",
    //     readTime: "6 min read",
    //   },
    //   {
    //     id: 4,
    //     title: "Full Guide to California Native Plants",
    //     excerpt:
    //       "Say goodbye to thirsty lawns! Discover the stunning, low-maintenance plants that belong in California gardens.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Top Choice",
    //     author: "Native Plant Society",
    //     date: "May 8, 2024",
    //     readTime: "8 min read",
    //   },
    //   {
    //     id: 5,
    //     title: "Full Guide to Texas Native Plants",
    //     excerpt:
    //       "Think Texas is just dirt and tumbleweeds? Think again! From desert blooms to forest flowers, discover the native plants that thrive in the Lone Star State.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Top Choice",
    //     author: "Texas Botanist",
    //     date: "May 5, 2024",
    //     readTime: "7 min read",
    //   },
    //   {
    //     id: 6,
    //     title: "Top Winter Veggies for Your Garden",
    //     excerpt:
    //       "From greens to winter! Absolutely can be a time for growing vegetables. Uncover the best winter vegetables for your garden.",
    //     image: "/placeholder.svg?height=200&width=300",
    //     category: "Plants For Spaces",
    //     author: "Vegetable Gardener",
    //     date: "May 3, 2024",
    //     readTime: "5 min read",
    //   },
    // ]
  
    const filteredArticles = articles.filter(
      (article) => selectedCategory === "All Articles" || article.category === selectedCategory,
    )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Plant Blog – Grow Plants & Knowledge</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover expert advice, plant care tips, and grow your gardening skills with our plant blog featuring the
              latest trends and techniques.
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="What plants do you want?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New in our blog</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={assests.LittleBlackBugs}
                  alt="Featured article"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    Care Guide
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>May 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Plant Expert</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What Are Tiny Black Bugs That Look Like Poppy Seeds?
                </h3>
                <p className="text-gray-600 mb-6">
                  Are these poppy seeds, you wonder? 🤔 From fungus gnats to aphids, we'll teach you to identify those
                  tiny black bugs—and kick them out before they take over.
                </p>
                <button className="text-green-600 font-medium flex items-center space-x-2 hover:text-green-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog