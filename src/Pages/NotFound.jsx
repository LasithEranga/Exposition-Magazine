import { Container } from "react-bootstrap";



const NotFound = ()=>{
    return <Container>
    <div className="d-flex justify-content-center align-items-center flex-column" style={{height:'80vh'}}>
      <span className="fs-1">Hmmm...</span>
      <span className="fs-5">
        We couldn't find any matches!
      </span>
    </div>
  </Container>
}

export default NotFound;