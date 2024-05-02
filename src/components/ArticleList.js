import Article from "./Article";
const ArticleList = ({ posts }) => {
  const articlesComponent = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{articlesComponent}</main>;
};

export default ArticleList;