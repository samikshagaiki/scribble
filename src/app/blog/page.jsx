// app/blog/page.js
import PostCard from '../../components/PostCard';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Typography';
import { getPosts } from '../../lib/posts';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Blog Posts</Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} md={4} key={post._id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}