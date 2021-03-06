import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import ArticleDataContext from "../../context/ArticleDataContext";
import RelatedArticleCard from "./RelatedArticleCard";

function RelatedArticles(props) {

  const articles = useContext(ArticleDataContext);
  let relatedArticles = props.related?articles.relatedArticles : articles.nonRelatedArticles;

  

  return (
    <div>
      <p className="text-center " style={{ fontWeight: "600" }}>
     { relatedArticles.length>0 ? (props.related?"ARTICLES FROM THE SAME CATEGORY":"YOU MAY ALSO INTERESTED IN"):''}
      </p>
      <Row className="ps-5">
        {relatedArticles.map((article, index) => {
          return (
            <RelatedArticleCard
              key={index}
              article={article}
              class="border border-bottom-3 border-top-2 py-2"
            />
          );
        })}
      </Row>
    </div>
  );
}

export default RelatedArticles;
