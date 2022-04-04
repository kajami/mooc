const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  if(!blogs){
      return 0;
  }  
  const likes = blogs.map((blog) => blog.likes)
  const reducer = (sum, item) => {
    return sum + item;
  };
  return likes.reduce(reducer, 0)
};

const favoriteBlog = blogs => {
    const favorite = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog);
    const favoriteInfo = {
        title: favorite.title,
        author: favorite.author,
        likes: favorite.likes
    }
    return favoriteInfo; 
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
