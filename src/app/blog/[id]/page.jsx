import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, ArrowLeft } from "lucide-react"
import CommentsSection from "@/components/CommentsSection"

// Dummy blog posts data (same as homepage)
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with Next.js 14 and its latest features including App Router and Server Components.",
    content: `Next.js 14 brings exciting new features that make building web applications faster and more efficient. In this comprehensive guide, we'll explore the latest additions to the Next.js ecosystem and how they can improve your development workflow.

## What's New in Next.js 14

The latest version of Next.js introduces several groundbreaking features:

### App Router Stability
The App Router, introduced as experimental in Next.js 13, is now stable and production-ready. This new routing system provides better performance, improved developer experience, and more intuitive file-based routing.

### Server Components by Default
Server Components are now the default in the App Router, allowing you to build faster applications with better SEO and reduced JavaScript bundle sizes.

### Improved Performance
Next.js 14 includes significant performance improvements, including faster builds, optimized bundling, and better runtime performance.

## Getting Started

To create a new Next.js 14 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will set up a new Next.js project with all the latest features enabled by default.

## Conclusion

Next.js 14 represents a significant step forward in React-based web development. With its stable App Router, improved performance, and developer-friendly features, it's the perfect time to start your next project with Next.js 14.`,
    author: "John Doe",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    category: "Web Development",
    comments: [
      {
        id: "1",
        name: "Alice Johnson",
        message: "Great article! Very helpful for understanding the new features.",
        date: "2024-01-16",
      },
      {
        id: "2",
        name: "Bob Wilson",
        message: "Thanks for the detailed explanation. Looking forward to trying Next.js 14.",
        date: "2024-01-17",
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
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

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <CardHeader className="p-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-2" />
              <span>By {post.author}</span>
            </div>
          </CardHeader>

          <CardContent className="p-8 pt-0">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                } else if (paragraph.startsWith("```")) {
                  return (
                    <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                      <code className="text-sm">{paragraph.replace(/```\w*\n?/, "").replace(/```$/, "")}</code>
                    </pre>
                  )
                } else if (paragraph.startsWith("- ")) {
                  const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.includes("**") && paragraph.includes(":**")) {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed my-4">
                      <strong className="font-semibold text-gray-900">
                        {paragraph.split(":**")[0].replace("**", "")}:
                      </strong>
                      {paragraph.split(":**")[1]}
                    </p>
                  )
                } else {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed my-4">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <CommentsSection postId={post.id} initialComments={post.comments} />
      </article>
    </div>
  )
}
