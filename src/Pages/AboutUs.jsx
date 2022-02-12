import { Container, Col } from "react-bootstrap";
import Title from "../components/Title";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";

const AboutUs = () => {
  return (
    <Container className="p-4">
      <Col xs={12} md={6}>
        <Title>About Us</Title>
        <p style={{ textAlign: "justify" }}>
          Exposition is a platform where IT, Management and Entrepreneurship
          bridge together to empower the industry of the country and expose the
          capabilities and talents of the undergraduates of Department of
          Industrial Management, University of Kelaniya , which is organized and
          launched by the Industrial Management Science Students Association
          (IMSSA), the official student body of the Department. Since its
          beginning in 2005, it ensures the marking of innovative footprints of
          the undergraduates of the Department of Industrial Management on the
          platform of the corporate world in Sri Lanka.
        </p>
      </Col>

      <Col xs={12} md={6}>
        <Title>Contact Us</Title>
        <div className="d-flex flex-column">
          <span>Department of Industrial Management,</span>
          <span>Faculty of Science,</span>
          <span>University of Kelaniya,</span>
          <span>Dalugama,</span>
          <span>Kelaniya,</span>
          <span>Sri Lanka</span>
          <br />
          <span>
            <span className="fw-bold">Phone:</span> +94 (0) 112 903 282
          </span>
          <span>
            <span className="fw-bold">Email:</span> info@exposition.lk
          </span>
        </div>
        <div className="pt-2 d-flex  align-items-center" style={{ gap: "0.5rem" }}>
          <a href="https://m.facebook.com/Exposition.MIT">
            <GrFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/company/theexposition/">
            <GrLinkedin style={{ color: "#0A66C2" }} size={30} />
          </a>
          <a href="https://www.instagram.com/exposition_lk/?hl=en">
            <GrInstagram
              size={38}
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                color: "#ebebeb",
                borderRadius: "50rem",
                border: 0,
              }}
            />
          </a>
        </div>
      </Col>
    </Container>
  );
};

export default AboutUs;
