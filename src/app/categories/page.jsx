// app/categories/page.js
import Typography from '@mui/material/Typography';
import Link from 'next/link';
export default function Categories() {
  // For simplicity, hardcode categories; in real, fetch from DB
  return (
    <div>
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <ul>
        <li><Link href="/blog?category=Tech">Tech</Link></li>
        <li><Link href="/blog?category=Creativity">Creativity</Link></li>
        <li><Link href="/blog?category=Inspiration">Inspiration</Link></li>
      </ul>
    </div>
  );
}