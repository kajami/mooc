const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "Mikko bloggaa",
    author: "Mikko",
    url: "www.jee.com",
    likes: 13,
  },
  {
    title: "Villi blogi",
    author: "Matti",
    url: "www.matti.com",
    likes: 12,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
};
