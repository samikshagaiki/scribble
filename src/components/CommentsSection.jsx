"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, User, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CommentSection({ postId, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState({
    name: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newComment.name.trim() || !newComment.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate comment submission
    setTimeout(() => {
      const comment = {
        id: Date.now().toString(),
        name: newComment.name,
        message: newComment.message,
        date: new Date().toISOString().split("T")[0],
      }

      setComments((prev) => [...prev, comment])
      setNewComment({ name: "", message: "" })
      setIsSubmitting(false)

      toast({
        title: "Comment added!",
        description: "Thank you for your comment.",
      })
    }, 1000)
  }

  return (
    <div className="mt-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <MessageCircle className="w-6 h-6 mr-2" />
            Comments ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add Comment Form */}
          <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="comment-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="comment-name"
                  name="name"
                  type="text"
                  required
                  value={newComment.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="comment-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <Textarea
                id="comment-message"
                name="message"
                required
                rows={4}
                value={newComment.message}
                onChange={handleInputChange}
                placeholder="Share your thoughts..."
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(comment.date).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
