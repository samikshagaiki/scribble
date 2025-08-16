// app/blog/[id]/page.js
"use client";

import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import CommentForm from '../../../components/CommentForm';
import CommentsList from '../../../components/CommentsList';

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then(res => res.json())
      .then(data => setPost(data));

    fetch(`/api/comments?postId=${params.id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [params.id]);

  const handleCommentSubmit = async (name, message) => {
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: params.id, name, message }),
      });
      if (res.ok) {
        const newComment = await res.json();
        setComments(prev => [...prev, newComment]);
      } else {
        console.error('Failed to submit comment:', await res.text());
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Image src={post.image} alt={post.title} width={800} height={400} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>{new Date(post.date).toLocaleDateString()}</Typography>
      <Typography variant="body1" paragraph>{post.content}</Typography>
      <Typography variant="h5" gutterBottom>Comments</Typography>
      <CommentsList comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} />
    </Paper>
  );
}