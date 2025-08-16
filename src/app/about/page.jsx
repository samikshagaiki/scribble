import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gray-900 hover:text-blue-600">
                TechBlog
              </Link>
              <span className="ml-2 text-sm text-gray-500">Modern Web Development</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About TechBlog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about sharing knowledge and helping developers stay up-to-date with the latest trends and
            best practices in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide high-quality, practical content that helps developers build better applications and advance
                their careers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A growing community of developers, designers, and tech enthusiasts who share knowledge and learn
                together.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We believe in open source, continuous learning, and making technology accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              TechBlog was founded in 2024 with a simple mission: to create a platform where developers could find
              reliable, up-to-date information about modern web development technologies and best practices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What started as a small collection of tutorials has grown into a comprehensive resource covering
              everything from frontend frameworks like Next.js and React, to backend technologies like Node.js and
              MongoDB, to modern CSS frameworks like Tailwind CSS.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team of experienced developers and technical writers work tirelessly to ensure that every article is
              accurate, practical, and easy to understand. We believe that learning should be accessible to everyone,
              regardless of their experience level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, TechBlog serves thousands of developers worldwide, helping them stay current with the rapidly
              evolving world of web development. We're proud to be part of the developer community and look forward to
              continuing to serve as a trusted resource for years to come.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Meet Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="John Doe"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-gray-600 mb-2">Senior Frontend Developer</p>
                <p className="text-sm text-gray-500">
                  Specializes in React, Next.js, and modern JavaScript frameworks.
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Jane Smith"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Jane Smith</h3>
                <p className="text-gray-600 mb-2">Backend Developer</p>
                <p className="text-sm text-gray-500">Expert in Node.js, MongoDB, and database architecture.</p>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Mike Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Mike Johnson</h3>
                <p className="text-gray-600 mb-2">UI/UX Designer</p>
                <p className="text-sm text-gray-500">
                  Passionate about creating beautiful, accessible user interfaces.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
