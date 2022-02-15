import { useParams } from "react-router-dom";
import Template from "../components/ArticleTemplates/Template";
import ArticleDataContext from "../context/ArticleDataContext";
import RelatedArticles from '../util/RelatedArticles';

import ArticleList from "../Data/Articles.json";

const ArticleView = () => {
  const params = useParams();

  const filteredArticle = ArticleList.filter(
    (article) => article.id === params.id
  )[0];

 const otherArticles = RelatedArticles(filteredArticle.id,filteredArticle.category);

  return (
    <ArticleDataContext.Provider value={{filteredArticle, ...otherArticles}}>
      <Template/>
    </ArticleDataContext.Provider>
  );
};

export default ArticleView;
