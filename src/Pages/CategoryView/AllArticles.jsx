import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import "./AllArticles.css";
import ArticleCard from "./ArticleCard";
import ArticleList from "../../Data/Articles.json";
import Title from "../../components/Title";

function AllArticles() {
  const params = useParams();
  const categoryName = params.category.replace("-", " ").toUpperCase();
  const filteredArray = ArticleList.filter((article) => {
    return article.category === params.category;
  });

  return filteredArray.length > 0 ? (
    <Container>
      <Title>{categoryName}</Title>
      <Row>
        {filteredArray.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              id={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              category={article.category}
            />
          );
        })}
      </Row>
    </Container>
  ) : (
    <Container>
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height:'80vh'}}>
        <span className="fs-2">Hmmm...</span>
        <span className="fs-6">
          We couldn't find any matches for{" "}
          <span className="fw-bold">"{categoryName}"</span>!
        </span>
      </div>
    </Container>
  );
}

export default AllArticles;
