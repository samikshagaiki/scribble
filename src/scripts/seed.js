const mongoose = require('mongoose');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
require('dotenv').config({ path: '../.env.local' });

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  // Clear existing data
  await Post.deleteMany({});
  await Comment.deleteMany({});

  // Dummy posts
  const posts = [
    {
      title: 'The Future of AI',
      content: 'Artificial intelligence is transforming the world... (full content here).',
      date: new Date(),
      image: 'https://picsum.photos/800/400?random=1',
      category: 'Tech',
    },
    {
      title: 'Creative Writing Tips',
      content: 'Unlock your creativity with these tips... (full content here).',
      date: new Date(),
      image: 'https://picsum.photos/800/400?random=2',
      category: 'Creativity',
    },
    {
      title: 'Inspiring Stories from Innovators',
      content: 'Hear from leaders who changed the game... (full content here).',
      date: new Date(),
      image: 'https://picsum.photos/800/400?random=3',
      category: 'Inspiration',
    },
  ];

  const savedPosts = await Post.insertMany(posts);

  // Dummy comments for first post
  await Comment.insertMany([
    { postId: savedPosts[0]._id, name: 'John Doe', message: 'Great article!' },
    { postId: savedPosts[0]._id, name: 'Jane Smith', message: 'Very insightful.' },
  ]);

  console.log('Dummy data seeded');
  process.exit();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});