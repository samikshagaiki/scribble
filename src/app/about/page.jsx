import Link from "next/link"
import { Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <header className="bg-white backdrop-blur-md shadow-sm border-b border-purple-100/50 relative z-10">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold bg-purple-600 bg-clip-text text-transparent"
              >
                Scribble
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                Home
              </Link>
              <Link
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="text-center mb-16 pt-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-purple-600 bg-clip-text text-transparent mb-6">
            About TechBlog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about sharing knowledge and helping developers stay up-to-date with the latest trends and
            best practices in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in border-0">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality, practical content that helps developers build better applications and advance
              their careers.
            </p>
          </div>

          <div className="text-center bg-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-200 border-0">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Community</h3>
            <p className="text-gray-600 leading-relaxed">
              A growing community of developers, designers, and tech enthusiasts who share knowledge and learn together.
            </p>
          </div>

          <div className="text-center bg-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-300 border-0">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in open source, continuous learning, and making technology accessible to everyone.
            </p>
          </div>
        </div>

        <div className="bg-white backdrop-blur-md rounded-2xl p-8 shadow-lg mb-16 animate-fade-in delay-400 border-0">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              TechBlog was founded in 2024 with a simple mission: to create a platform where developers could find
              reliable, up-to-date information about modern web development technologies and best practices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              What started as a small collection of tutorials has grown into a comprehensive resource covering
              everything from frontend frameworks like Next.js and React, to backend technologies like Node.js and
              MongoDB, to modern CSS frameworks like Tailwind CSS.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of experienced developers and technical writers work tirelessly to ensure that every article is
              accurate, practical, and easy to understand. We believe that learning should be accessible to everyone,
              regardless of their experience level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, TechBlog serves thousands of developers worldwide, helping them stay current with the rapidly
              evolving world of web development. We're proud to be part of the developer community and look forward to
              continuing to serve as a trusted resource for years to come.
            </p>
          </div>
        </div>

        <div className="bg-white backdrop-blur-md rounded-2xl p-8 shadow-lg animate-fade-in delay-500 border-0">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="John Doe"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-purple-200 group-hover:ring-purple-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">John Doe</h3>
              <p className="text-purple-600 font-medium mb-3">Senior Frontend Developer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Specializes in React, Next.js, and modern JavaScript frameworks.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Jane Smith"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-purple-200 group-hover:ring-purple-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-purple-600 font-medium mb-3">Backend Developer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Expert in Node.js, MongoDB, and database architecture.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Mike Johnson"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-purple-200 group-hover:ring-purple-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-purple-600 font-medium mb-3">UI/UX Designer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Passionate about creating beautiful, accessible user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
