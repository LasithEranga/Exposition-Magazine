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
  const categoryName = params.category.replace("-"," ").toUpperCase(); 
  const filteredArray = ArticleList.filter((article) => {
    return article.category === params.category;
  });


  return (
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
  );
}

export default AllArticles;
