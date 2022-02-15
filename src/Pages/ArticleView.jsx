import { useParams } from "react-router-dom";
import Template from "../components/ArticleTemplates/Template";
import ArticleDataContext from "../context/ArticleDataContext";

import ArticleList from "../Data/Articles.json";

const ArticleView = () => {
  const params = useParams();

  const filteredArticle = ArticleList.filter(
    (article) => article.id === params.id
  )[0];

  return (
    <ArticleDataContext.Provider value={filteredArticle}>
      <Template/>
    </ArticleDataContext.Provider>
  );
};

export default ArticleView;
