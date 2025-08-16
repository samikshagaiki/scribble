// MongoDB setup script for blog website
// This script would typically connect to MongoDB and create the necessary collections

console.log("Setting up MongoDB for TechBlog...")

// Blog posts collection structure
const blogPostSchema = {
  _id: "ObjectId",
  title: "String",
  excerpt: "String",
  content: "String",
  author: "String",
  date: "Date",
  image: "String",
  category: "String",
  tags: ["String"],
  published: "Boolean",
  createdAt: "Date",
  updatedAt: "Date",
}

// Comments collection structure
const commentSchema = {
  _id: "ObjectId",
  postId: "ObjectId",
  name: "String",
  email: "String",
  message: "String",
  approved: "Boolean",
  createdAt: "Date",
}

// Users collection structure (for future admin functionality)
const userSchema = {
  _id: "ObjectId",
  username: "String",
  email: "String",
  password: "String", // hashed
  role: "String", // 'admin', 'author', 'user'
  createdAt: "Date",
  updatedAt: "Date",
}

// Sample data insertion
const samplePosts = [
  {
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with Next.js 14 and its latest features including App Router and Server Components.",
    content:
      "Next.js 14 brings exciting new features that make building web applications faster and more efficient. In this comprehensive guide, we'll explore the latest additions to the Next.js ecosystem and how they can improve your development workflow...",
    author: "John Doe",
    date: new Date("2024-01-15"),
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "MongoDB Best Practices for Modern Apps",
    excerpt:
      "Discover essential MongoDB patterns and practices that will help you build scalable and performant applications.",
    content:
      "MongoDB is a powerful NoSQL database that offers flexibility and scalability for modern applications. In this article, we'll explore best practices that will help you build robust and efficient MongoDB-powered applications...",
    author: "Jane Smith",
    date: new Date("2024-01-10"),
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Database",
    tags: ["MongoDB", "Database", "NoSQL", "Backend"],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content:
      "Tailwind CSS revolutionizes how we approach styling in modern web development. This utility-first framework provides low-level utility classes that let you build custom designs without leaving your HTML...",
    author: "Mike Johnson",
    date: new Date("2024-01-05"),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Frontend", "UI/UX"],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

console.log("MongoDB collections and sample data structure defined.")
console.log("In a production environment, you would:")
console.log("1. Connect to MongoDB using mongoose or mongodb driver")
console.log("2. Create the collections with proper indexes")
console.log("3. Insert the sample data")
console.log("4. Set up proper authentication and authorization")

// Example MongoDB connection code (commented out):
/*
const { MongoClient } = require('mongodb')

async function setupDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI)
  
  try {
    await client.connect()
    const db = client.db('techblog')
    
    // Create collections
    await db.createCollection('posts')
    await db.createCollection('comments')
    await db.createCollection('users')
    
    // Create indexes
    await db.collection('posts').createIndex({ title: 'text', content: 'text' })
    await db.collection('posts').createIndex({ category: 1 })
    await db.collection('posts').createIndex({ date: -1 })
    await db.collection('comments').createIndex({ postId: 1 })
    
    // Insert sample data
    await db.collection('posts').insertMany(samplePosts)
    
    console.log('Database setup complete!')
  } finally {
    await client.close()
  }
}

setupDatabase().catch(console.error)
*/
