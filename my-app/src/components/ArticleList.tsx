interface ArticleProps {
  title: string;
  children: string; // Restricting children to only text
}

const Article = ({ title, children }: ArticleProps) => {
  return (
    <div className="card shadow-sm my-3">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{children}</p> {/* Displays text content */}
    </div>
  </div>
  );
};

const articles = [
  { title: "React Basics", body: "React is a JavaScript library for building UIs." },
  { title: "Understanding Props", body: "Props allow components to receive data from their parent." },
  { title: "What is Bootstrap?", body: "Bootstrap is a CSS framework that helps in designing responsive websites." },
];

const ArticleList = () => {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} title={article.title}>
          {article.body}
        </Article>
      ))}
    </div>
  );
}

export default ArticleList;