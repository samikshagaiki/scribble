import { NextResponse } from "next/server"

// In a real app, this would be stored in MongoDB
const comments = {
  1: [
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
  2: [
    {
      id: "1",
      name: "Charlie Brown",
      message: "Excellent overview of MongoDB best practices. Very comprehensive!",
      date: "2024-01-11",
    },
  ],
  3: [],
}

export async function GET(request, { params }) {
  try {
    const postId = params.id
    const postComments = comments[postId] || []

    return NextResponse.json({ comments: postComments })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  try {
    const postId = params.id
    const body = await request.json()
    const { name, message } = body

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 })
    }

    const newComment = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toISOString().split("T")[0],
    }

    if (!comments[postId]) {
      comments[postId] = []
    }

    comments[postId].push(newComment)

    return NextResponse.json({ comment: newComment }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 })
  }
}
