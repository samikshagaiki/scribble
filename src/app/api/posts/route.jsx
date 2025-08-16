// app/api/posts/route.js
"use server";

import { dbConnect } from '../../../lib/dbConnect';
import Post from '../../../models/Post';

export async function GET() {
  await dbConnect();
  const posts = await Post.find({}).sort({ date: -1 });
  // Convert _id to string for serialization
  const serializedPosts = posts.map(post => ({ ...post.toObject(), _id: post._id.toString() }));
  return new Response(JSON.stringify(serializedPosts), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const post = new Post(data);
  await post.save();
  // Convert _id to string
  const serializedPost = { ...post.toObject(), _id: post._id.toString() };
  return new Response(JSON.stringify(serializedPost), { status: 201 });
}