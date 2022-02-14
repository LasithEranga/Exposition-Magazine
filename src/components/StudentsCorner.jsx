import React from "react";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import "./StudentCorner.css";
import ArticleList from "../Data/Articles.json";

function StudentsCorner(props) {
  const filteredArticles = ArticleList.filter(
    (article) => article.category === `student's-corner`
  );
  return (
    <Card className={"border-0 ps-2 pt-0 rounded-0 " + props.className}>
      <Card.Body className=" student-corner-container ">
        {filteredArticles.map((article,index) => (
          <SmallCard article={article} key={index}/>
        ))}
      </Card.Body>
    </Card>
  );
}

export default StudentsCorner;
