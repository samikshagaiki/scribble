import { NextResponse } from "next/server"

// Dummy blog posts data (in a real app, this would come from MongoDB)
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with Next.js 14 and its latest features including App Router and Server Components.",
    content: "Next.js 14 brings exciting new features that make building web applications faster and more efficient...",
    author: "John Doe",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Web Development",
    comments: [],
  },
  {
    id: "2",
    title: "MongoDB Best Practices for Modern Apps",
    excerpt:
      "Discover essential MongoDB patterns and practices that will help you build scalable and performant applications.",
    content: "MongoDB is a powerful NoSQL database that offers flexibility and scalability for modern applications...",
    author: "Jane Smith",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Database",
    comments: [],
  },
  {
    id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: "Tailwind CSS revolutionizes how we approach styling in modern web development...",
    author: "Mike Johnson",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    category: "CSS",
    comments: [],
  },
]

export async function GET() {
  try {
    return NextResponse.json({ posts: blogPosts })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { title, excerpt, content, author, category, image } = body

    // In a real app, you would save to MongoDB here
    const newPost = {
      id: (blogPosts.length + 1).toString(),
      title,
      excerpt,
      content,
      author,
      category,
      image: image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      date: new Date().toISOString().split("T")[0],
      comments: [],
    }

    blogPosts.push(newPost)

    return NextResponse.json({ post: newPost }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
