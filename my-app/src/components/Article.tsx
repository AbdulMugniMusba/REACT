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
export default Article;