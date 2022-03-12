//section that shows the sponsor logos
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Title from "./Title";
import CreativeSoftware from '../images/SponsorLogos/Creative Software_logo.png';
import LSEG from '../images/SponsorLogos/LSEG_LOGO.png';
import Perabeats from '../images/SponsorLogos/perabeats_life.png';
import Tingo from '../images/SponsorLogos/tingo.jpg';
import KelaniSteam from '../images/SponsorLogos/KelaniSteam.png';
import SponsorCard from "./SponsorCard";

function Sponsors() {
  return (
    <Container className="">
      <Row className="px-3 px-lg-0 justify-content-center">
        <Title>Our Sponsors</Title>
        
            <SponsorCard image={LSEG} title={'Co-Sponsor'} wh={'w-100'}/>
            <SponsorCard image={CreativeSoftware} title={'Event Partner'} wh={'w-100'}/>
            <SponsorCard image={Tingo} title={'Knowledge Partner'} wh={'w-100'}/>
            <SponsorCard image={Perabeats} title={'Media Partner'} wh={'h-100'}/>
            <SponsorCard image={KelaniSteam} title={'Photography Partner'} wh={'w-100'}/>
      </Row>
    </Container>
  );
}

export default Sponsors;