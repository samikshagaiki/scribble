// app/api/comments/route.js
"use server";

import { dbConnect } from '../../../lib/dbConnect';
import Comment from '../../../models/Comment';

export async function GET(request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const comments = await Comment.find({ postId }).sort({ date: -1 });
  // Convert _id to string
  const serializedComments = comments.map(comment => ({ ...comment.toObject(), _id: comment._id.toString(), postId: comment.postId.toString() }));
  return new Response(JSON.stringify(serializedComments), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const comment = new Comment(data);
  await comment.save();
  // Convert _id to string
  const serializedComment = { ...comment.toObject(), _id: comment._id.toString(), postId: comment.postId.toString() };
  return new Response(JSON.stringify(serializedComment), { status: 201 });
}