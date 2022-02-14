import React from "react";
import SmallCard from "./SmallCard";
import Card from "react-bootstrap/Card";
import './StudentCorner.css';
import ArticleList from '../Data/Articles.json';

function News() {
  const filteredArticles = ArticleList.filter(
    (article) => article.category === `news`
  );
  return (
      <Card className="border-0 ps-2 pt-0 border-0 rounded-0">
        <Card.Body className=" student-corner-container ">
          {filteredArticles.map((article,index)=>(
            <SmallCard class="sm-card" article={article} key={index}/>
          ))}
          
          
        </Card.Body>
      </Card>
  );
}

export default News;