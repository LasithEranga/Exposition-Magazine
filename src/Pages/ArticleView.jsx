import { useParams } from "react-router-dom";

import ArticleList from "../Data/Articles.json";

const ArticleView = () => {
  const params = useParams();
  const filteredArticle = ArticleList.filter(
    (article) => article.id === params.id
  )[0];
  console.log(filteredArticle);

  return <div></div>;
};

export default ArticleView;
