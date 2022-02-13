import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArticleList from "../Data/Articles.json";
const LatestArticlesSlider = () => {
  return (
    <Carousel className="ms-0 " controls={false} indicators={false}>
      {
        ArticleList.map((article,index)=>{
          return <Carousel.Item key={index} interval={2000}><Link className=" ps-3 text-dark text-decoration-none" style={{fontSize:'0.9rem'}} to={`/articles/${article.id}`}>{article.title}<span className="text-muted "> - {article.date.toUpperCase()}</span></Link></Carousel.Item>
        })
      }
    </Carousel>
  );
};

export default LatestArticlesSlider;
