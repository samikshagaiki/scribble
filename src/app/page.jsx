import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, Heart, MessageCircle, Eye, Clock } from "lucide-react"

// Dummy blog posts data
const blogPosts = [
  {
    id: "1",
    title: "The Ultimate Guide to Modern Web Development",
    excerpt:
      "Discover the latest trends, tools, and techniques that are shaping the future of web development in 2024.",
    content: "Modern web development is evolving rapidly with new frameworks, tools, and methodologies...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Development",
    readTime: "8 min read",
    likes: 156,
    comments: 0,
    views: 2847,
  },
  {
    id: "2",
    title: "Advanced React Patterns and Performance",
    excerpt:
      "Master advanced React patterns, hooks, and optimization techniques for building high-performance applications.",
    content:
      "React has evolved significantly, and understanding advanced patterns is crucial for modern development...",
    author: "Michael Chen",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Development",
    readTime: "12 min read",
    likes: 203,
    comments: 15,
    views: 3421,
  },
  {
    id: "3",
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "Learn how to design and implement robust, scalable APIs using Node.js, Express, and modern best practices.",
    content: "API design is fundamental to modern web applications, and Node.js provides excellent tools...",
    author: "Emma Rodriguez",
    date: "2024-01-08",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    category: "Development",
    readTime: "10 min read",
    likes: 89,
    comments: 7,
    views: 1892,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#af77fd] to-purple-600 bg-clip-text text-transparent">
                Scribble
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-[#af77fd] font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#af77fd] transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#af77fd] transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#af77fd]/10 to-purple-200/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">Welcome to Scribble </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Discover the latest trends, tutorials, and insights in web development, database management, and modern
            programming practices.
          </p>
          <Button
            size="lg"
            className="bg-[#af77fd] hover:bg-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Explore Articles
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#af77fd] text-white border-0 hover:bg-purple-600 transition-colors duration-300"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#af77fd] transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#af77fd]/30 text-[#af77fd] hover:bg-[#af77fd] hover:text-white transition-all duration-300 hover:shadow-md bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#af77fd] via-purple-600 to-purple-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-500/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <h4 className="text-3xl font-bold mb-4 text-white">Scribble</h4>
              <p className="text-purple-100 mb-6 leading-relaxed text-lg">
                Your go-to source for modern web development tutorials, best practices, and industry insights. Stay
                ahead of the curve with our expert-curated content.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white hover:text-[#af77fd] transition-all duration-300 bg-transparent"
                >
                  Subscribe
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 transition-all duration-300">
                  Newsletter
                </Button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-6 text-white text-lg">Quick Links</h5>
              <ul className="space-y-3 text-purple-100">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-6 text-white text-lg">Categories</h5>
              <ul className="space-y-3 text-purple-100">
                <li>
                  <Link
                    href="/category/development"
                    className="hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/design"
                    className="hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/tutorials"
                    className="hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-300 rounded-full mr-3"></span>
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-400/30 pt-8 text-center">
            <p className="text-purple-100">&copy; 2024 Scribble. All rights reserved. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
