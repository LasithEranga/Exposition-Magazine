import React from "react";
import { Row } from "react-bootstrap";
import RelatedArticleCard from "./RelatedArticleCard";

function RelatedArticles() {
  return (
    <div>
      <p className="text-center " style={{fontWeight:"600"}}>When Banned Books </p>
      <Row className="ps-5">
        <RelatedArticleCard class="border border-bottom-3 border-top-2 py-2"/>
        <RelatedArticleCard class="py-2"/>
        <RelatedArticleCard class="border border-bottom-0 border-top-2 py-2" />
      </Row>
    </div>
  );
}

export default RelatedArticles;
