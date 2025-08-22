import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, Heart, Eye, MessageCircle, Clock } from "lucide-react"
import CommentsSection from "@/components/CommentsSection"

const blogPosts = [
  {
    id: "1",
    title: "The Ultimate Guide to Modern Web Development",
    excerpt:
      "Discover the latest trends, tools, and techniques that are shaping the future of web development in 2024.",
    content: `Modern web development has evolved dramatically over the past few years. In this comprehensive guide, we'll explore the cutting-edge technologies and methodologies that are defining the future of how we build for the web.

## The Evolution of Web Development

The landscape of web development continues to shift at a rapid pace. From the rise of JAMstack architecture to the adoption of edge computing, developers today have more powerful tools than ever before.

## Key Trends Shaping 2024

Server-Side Rendering Renaissance: The return to server-side rendering through frameworks like Next.js and Nuxt.js has brought significant performance improvements and better SEO capabilities.

Edge Computing Integration: Moving computation closer to users through edge functions and CDN-based processing is revolutionizing how we think about application architecture.

AI-Powered Development: Tools like GitHub Copilot and ChatGPT are transforming the development workflow, making developers more productive than ever.

## Modern Framework Ecosystem

## React and Beyond

React continues to dominate the frontend landscape, but new contenders like Svelte and Solid.js are gaining traction with their innovative approaches to reactivity and performance.

## Full-Stack Solutions

Frameworks like Next.js, Remix, and SvelteKit are blurring the lines between frontend and backend development, offering integrated solutions for modern web applications.

## Performance and User Experience

## Core Web Vitals

Google's Core Web Vitals have become essential metrics for web performance, focusing on:

- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Progressive Enhancement

Building applications that work for everyone, regardless of their device or connection speed, remains a fundamental principle of good web development.

## The Future of Web Development

As we look ahead, several technologies are poised to reshape how we build for the web:

- WebAssembly: Bringing near-native performance to web applications
- Web Components: Creating truly reusable UI components
- **Progressive Web Apps**: Bridging the gap between web and native applications

## Conclusion

The future of web development is bright, with new tools and techniques emerging constantly. By staying informed about these trends and continuously learning, developers can build better, faster, and more accessible web experiences for users around the world.`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=800",
    category: "Development",
    readTime: "8 min read",
    likes: 156,
    views: 2847,
    comments: [
      {
        id: "1",
        name: "Alice Johnson",
        message: "Great article! Very helpful for understanding the new trends in web development.",
        date: "2024-01-16",
      },
      {
        id: "2",
        name: "Bob Wilson",
        message: "Thanks for the detailed explanation. Looking forward to implementing these practices.",
        date: "2024-01-17",
      },
      {
        id: "3",
        name: "Carol Davis",
        message: "Excellent overview of the current state of web development. Very comprehensive!",
        date: "2024-01-18",
      },
    ],
  },
  {
    id: "2",
    title: "MongoDB Best Practices for Modern Apps",
    excerpt:
      "Discover essential MongoDB patterns and practices that will help you build scalable and performant applications.",
    content: `MongoDB is a powerful NoSQL database that offers flexibility and scalability for modern applications. In this article, we'll explore best practices that will help you build robust and efficient MongoDB-powered applications.

## Schema Design Principles

### Embed vs Reference
One of the most important decisions in MongoDB is whether to embed documents or use references. Here are some guidelines:

- **Embed when**: Data is accessed together, relationships are one-to-few, and data doesn't change frequently
- **Reference when**: Data is accessed independently, relationships are one-to-many or many-to-many, and data changes frequently

### Indexing Strategies
Proper indexing is crucial for MongoDB performance:

1. **Compound Indexes**: Create indexes that support your most common query patterns
2. **Text Indexes**: Use for full-text search capabilities
3. **Sparse Indexes**: For fields that don't exist in all documents

## Performance Optimization

### Query Optimization
- Use projection to limit returned fields
- Implement proper pagination with skip and limit
- Use aggregation pipeline for complex queries

### Connection Management
- Use connection pooling
- Monitor connection usage
- Implement proper error handling

## Security Best Practices

### Authentication and Authorization
- Enable authentication
- Use role-based access control
- Implement field-level security

### Data Protection
- Encrypt data at rest and in transit
- Regular security audits
- Backup and disaster recovery plans

## Conclusion

Following these MongoDB best practices will help you build applications that are not only functional but also scalable, secure, and maintainable. Remember to always test your queries and monitor performance in production.`,
    author: "Jane Smith",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    category: "Database",
    comments: [
      {
        id: "1",
        name: "Charlie Brown",
        message: "Excellent overview of MongoDB best practices. Very comprehensive!",
        date: "2024-01-11",
      },
    ],
  },
  {
    id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `Tailwind CSS revolutionizes how we approach styling in modern web development. This utility-first framework provides low-level utility classes that let you build custom designs without leaving your HTML.

## Why Tailwind CSS?

### Utility-First Approach
Instead of writing custom CSS, Tailwind provides utility classes that you can compose to build any design:

\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-blue-100">Card content goes here.</p>
</div>
\`\`\`

### Responsive Design Made Easy
Tailwind's responsive utilities make it simple to create responsive designs:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Grid items -->
</div>
\`\`\`

## Key Features

### Design System Integration
- Consistent spacing scale
- Predefined color palette
- Typography scale
- Shadow and border radius utilities

### Performance Benefits
- Purge unused CSS in production
- Small bundle sizes
- No runtime overhead

### Developer Experience
- IntelliSense support
- Easy customization
- Great documentation

## Advanced Techniques

### Custom Components
While Tailwind is utility-first, you can still create reusable components:

\`\`\`css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
\`\`\`

### Dark Mode Support
Tailwind makes dark mode implementation straightforward:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content that adapts to dark mode
</div>
\`\`\`

## Conclusion

Tailwind CSS offers a powerful and efficient way to build modern, responsive user interfaces. Its utility-first approach, combined with excellent developer experience, makes it an ideal choice for projects of any size.`,
    author: "Mike Johnson",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    category: "CSS",
    comments: [],
  },
]

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/">

          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-0 shadow-sm">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
              >
                Scribble
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br via-purple-500 to-purple-00 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-transparent"></div>
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.image || "/placeholder.svg?height=400&width=800&query=modern web development"}
                alt={post.title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm hover:bg-white/30 transition-colors">
                  {post.category}
                </Badge>
                <div className="flex items-center text-white/90 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-white/90">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">By {post.author}</span>
                  <span className="mx-3">•</span>
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-5 h-5" />
                    <span className="font-medium">{post.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-0 mb-8">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                } else if (paragraph.startsWith("```")) {
                  return (
                    <pre
                      key={index}
                      className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6 shadow-lg border-0"
                    >
                      <code className="text-sm">{paragraph.replace(/```\w*\n?/, "").replace(/```$/, "")}</code>
                    </pre>
                  )
                } else if (paragraph.startsWith("- ")) {
                  const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.includes("**") && paragraph.includes(":**")) {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed my-6">
                      <strong className="font-semibold text-purple-800">
                        {paragraph.split(":**")[0].replace("**", "")}:
                      </strong>
                      {paragraph.split(":**")[1]}
                    </p>
                  )
                } else {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed my-6 text-lg">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 mb-8 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-purple-700 hover:text-purple-800 hover:bg-purple-200/50 border-0 transition-all duration-200"
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">{post.likes} Likes</span>
                </Button>
                <div className="flex items-center gap-2 text-purple-700">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">{post.comments.length} Comments</span>
                </div>
                <div className="flex items-center gap-2 text-purple-700">
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">{post.views} Views</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                Share Article
              </Button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <CommentsSection postId={post.id} initialComments={post.comments} />
      </article>
    </div>
  )
}
