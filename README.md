# ✨ Scribble Blog

Welcome to **Scribble Blog**, a modern and responsive blog platform built with **Next.js, React, MongoDB, and Material-UI (MUI)**.  
This project combines creativity with technology, featuring dynamic blog posts, comments, categories, and a clean design inspired by a **purple pastel theme**.

---

## 📖 Overview

Scribble Blog is a **full-stack web application** that demonstrates both front-end and back-end development skills.  
- **Next.js** provides a seamless SSR (server-side rendered) experience.  
- **MUI** powers the responsive UI and styling.  
- **MongoDB** handles persistent storage for blog posts and comments.  

The website includes:
- Dynamic blog posts
- Comment system
- Category browsing
- About page
- Navigation with smooth UX

---

## 🚀 Features

- 📱 **Responsive Design**: Works on desktop, tablet, and mobile using MUI Grid & media queries.  
- 📝 **Blog Posts**: Each post includes a title, content, date, and placeholder images.  
- 💬 **Comment System**: Users can submit comments that are saved to MongoDB.  
- 🧭 **Navigation**: Includes links to Home, Blog, Categories, and About pages.  
- 🗂️ **Categories**: Filter content by categories (basic implementation).  
- 🎨 **Custom Theme**: Pastel purple theme with bubbly UI and pencil-inspired icons.  
- 🛠️ **Backend Integration**: CRUD operations powered by MongoDB & Next.js API routes.  

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (LTS version, e.g. 18.x or 20.x)  
- [npm](https://www.npmjs.com/) (comes with Node.js)  
- [MongoDB](https://www.mongodb.com/) (local installation or [MongoDB Atlas](https://www.mongodb.com/atlas))  

---

## ⚡ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/samikshagaiki/scribble.git
   cd scribble
Install Dependencies

npm install


Set Up MongoDB

Install MongoDB locally or create a free cluster on MongoDB Atlas.

Create a database named scribble-blog.

Add your connection string in a .env.local file:

MONGO_URI=mongodb://localhost:27017/scribble-blog


Seed Dummy Data

node scripts/seed.js


Run the Development Server

npm run dev


Visit 👉 http://localhost:3000

🎮 Usage

Navigate using the top menu.

Explore blog posts on the Blog page.

Click a post to view details and add comments.

Browse by categories (basic implementation).

Check the About page for project info.

🧰 Technologies Used

Frontend: Next.js (App Router), React

Styling: Material-UI (MUI), CSS (gradients & custom elements)

Backend: Node.js, MongoDB, Mongoose

Images: Placeholder images from https://picsum.photos

📂 Project Structure
scribble/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.js
│   ├── page.js
│   ├── blog/
│   │   ├── page.js
│   │   └── [id]/page.js
│   ├── categories/page.js
│   └── about/page.js
├── components/       # Reusable React components
│   ├── PostCard.js
│   ├── CommentForm.js
│   └── CommentsList.js
├── lib/              # Database connection logic
│   ├── dbConnect.js
│   └── posts.js
├── models/           # Mongoose schemas
│   ├── Post.js
│   └── Comment.js
├── scripts/          # Seeding script
│   └── seed.js
├── .env.local        # Environment variables
├── README.md         # Documentation
└── package.json      # Project dependencies

🤝 Contributing

Contributions are welcome! 🎉

Fork the repo

Create a new branch:

git checkout -b feature-branch


Commit changes:

git commit -m "Description of changes"


Push the branch:

git push origin feature-branch


Open a Pull Request

📜 License

This project is licensed under the MIT License.

🙏 Acknowledgments

Inspired by the creative purple pastel theme.

Built with guidance from the Next.js community.