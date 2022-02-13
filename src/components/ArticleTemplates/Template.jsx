import { Col, Container, Row } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import Share from "../Buttons/Share";


const Template = ({ article }) => {

   const params = useParams(); 
  const createMarkup = () => {
    return { __html: article.content ? article.content : "" };
  };

  return article ? (
    <Container className="mt-2 mt-lg-4">
      <Row>
        <Col lg={1} > <Share /></Col>
        <Col xs={12} lg={7}>

          <Avatar
            alt={article.title}
            author={article.author}
            authorImage={article.authorImage}
            date={article.date}
            readTime={article.readTime}
          />
          <h2 className="mt-4 fw-bold">{article.title ? article.title : ""}</h2>
          <div style={{ width: "fit-content" }}>
            <Link
              to={`/articlefilter/${article.category ? article.category : ""}`}
            >
              <span
                className={`badge text-wrap d-flex align-items-center ${article.categoryColor}`}
              >
                {article.category}
              </span>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col xs={12} lg={7} xl={7}>
          <img
            src={article.image ? article.image : ""}
            alt=""
            className="w-100 mt-2 mt-lg-3"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col xs={12} lg={7} xl={7}>
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="mt-3 mt-lg-4 fs-5"
          ></div>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "80vh" }}
      >
        <span className="fs-2">Hmmm...</span>
        <span className="fs-6 " style={{ textAlign: "center" }}>
          We couldn't find any matches for 
          <span className="fw-bold"> "article Id {params.id}"</span>!
        </span>
      </div>
    </Container>
  );
};

export default Template;
