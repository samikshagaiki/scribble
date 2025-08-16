// app/api/posts/[id]/route.js
"use server";

import { dbConnect } from '../../../../lib/dbConnect';
import Post from '../../../../models/Post';

export async function GET(request, { params }) {
  await dbConnect();
  const post = await Post.findById(params.id);
  if (!post) return new Response('Post not found', { status: 404 });
  // Convert _id to string
  const serializedPost = { ...post.toObject(), _id: post._id.toString() };
  return new Response(JSON.stringify(serializedPost), { status: 200 });
}