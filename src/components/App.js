import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const { name, image, about, posts } = blogData;
  return (
    <>
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </>
  );
}

export default App;