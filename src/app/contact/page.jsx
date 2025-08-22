"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-20 w-100 h-100"></div>
        <div className="absolute -bottom-40 -left-20 w-100 h-100"></div>
        <div className="absolute top-40 left-20 w-100 h-100"></div>
      </div>

      <header className="backdrop-blur-md bg-white border-b border-purple-100 relative z-10">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold bg-purple-600 bg-clip-text text-transparent transition-all "
              >
                Scribble
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                About
              </Link>
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-purple-600 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in animation-delay-200">
            <Card className="backdrop-blur-md bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-2xl bg-purple-600 bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 text-white border-0 shadow-lg hover:shadow-xl hover:bg-purple-500 transform hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in animation-delay-400">
              <Card className="backdrop-blur-md bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-2xl bg-purple-600 bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        hello@techblog.com
                      </p>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        support@techblog.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in animation-delay-600">
              <Card className="backdrop-blur-md bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl bg-purple-600 bg-clip-text text-transparent">
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between hover:bg-purple-50/50 p-2 rounded transition-colors duration-300">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-purple-700">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-purple-50/50 p-2 rounded transition-colors duration-300">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-purple-700">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-purple-50/50 p-2 rounded transition-colors duration-300">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-purple-700">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in animation-delay-800">
              <Card className="backdrop-blur-md bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl bg-purple-600  bg-clip-text text-transparent">
                    FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="hover:bg-purple-50/50 p-3 rounded transition-colors duration-300">
                      <h4 className="font-medium text-gray-900 mb-1">How quickly do you respond?</h4>
                      <p className="text-sm text-gray-600">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                    <div className="hover:bg-purple-50/50 p-3 rounded transition-colors duration-300">
                      <h4 className="font-medium text-gray-900 mb-1">Can I suggest article topics?</h4>
                      <p className="text-sm text-gray-600">
                        We love hearing from our community about what they'd like to learn.
                      </p>
                    </div>
                    <div className="hover:bg-purple-50/50 p-3 rounded transition-colors duration-300">
                      <h4 className="font-medium text-gray-900 mb-1">Do you accept guest posts?</h4>
                      <p className="text-sm text-gray-600">
                        Yes, we welcome high-quality guest contributions. Please reach out with your ideas!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
