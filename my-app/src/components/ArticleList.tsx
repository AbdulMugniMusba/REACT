import Article from './Article';
import  fetchArticles from '../Services/ArticleServices';
  const ArticleList = () => {
    return (
        <div className="container mt-4">
        <div className="row">
          {(fetchArticles()).map((article, index) => (
            <div className="col-md-4" key={index}>
              <Article
               title={article.title}>
                {article.body}
              </Article>        
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default ArticleList;