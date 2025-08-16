// models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Convert _id and postId to string when converting to JSON
commentSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret._id = ret._id.toString();
    ret.postId = ret.postId.toString();
    return ret;
  },
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);