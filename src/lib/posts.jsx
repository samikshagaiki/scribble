// lib/posts.js
import Post from '../models/Post';
import { dbConnect } from './dbConnect';

export async function getPosts() {
  await dbConnect();
  return await Post.find({}).sort({ date: -1 });
}

export async function getPostById(id) {
  await dbConnect();
  return await Post.findById(id);
}