// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true },
  category: { type: String, default: 'General' },
});

// Convert _id to string when converting to JSON
postSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret._id = ret._id.toString();
    return ret;
  },
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);