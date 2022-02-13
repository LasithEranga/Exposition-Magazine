import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const Template = ({ article }) => {
 
  return (
    <Container className="mt-2 mt-lg-4">
      <Row>
        <Col lg={2}></Col>
        <Col xs={12} lg={6}>
          <Avatar
            alt={article.title}
            author={article.author}
            authorImage={article.authorImage}
            date={article.date}
            readTime={article.readTime}
          />
          <h2 className="mt-4 fw-bold">{article.title}</h2>
          <div style={{width:'fit-content'}}>
          <Link to={`/articlefilter/${article.category}`}><span className={`badge text-wrap d-flex align-items-center ${article.categoryColor}`} >{article.category}</span></Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col xs={12} lg={6}>
          <img src={article.image} alt="" className="w-100 mt-2 mt-lg-3" />
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>
        <Col xs={12} lg={6}>
          <p className="mt-3 mt-lg-4 fs-5">{article.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Template;
