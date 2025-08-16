// components/PostCard.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post._id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardMedia component="img" height="140" image={post.image} alt={post.title} />
        <CardContent>
          <Typography gutterBottom variant="h5">{post.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(post.date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}