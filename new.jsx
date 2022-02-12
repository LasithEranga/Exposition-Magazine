<Row className="px-0">
  <Row className="col-12">
    <Row className="mb-3 pe-0">
      <Col className="col-8 ">
        <Row>
          <CarouselView />
        </Row>
      </Col>

      <Col className="col-12 col-md-4 ">
        <Row className="mb-3">
          <Card className="border-0  ps-2 pt-0 border-0 rounded-0">
            <Card.Body>
              <EventCard />
            </Card.Body>
          </Card>
        </Row>
        <Row className="">
          <Card className="border-0  pt-0 border-0 rounded-0">
            <Card.Body>
              <EventCard />
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>

    <Row className="px-0">
      <Col className="col ms-md-3 ">
        <Row>
          <Card className="rounded-0 ps-3">
            <Card.Body>
              <Row>
                <Col className="col-12 col-md-6">
                  <TSFItem />
                </Col>
                <Col className="col-12 col-md-6">
                  <TSFItem />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  </Row>
</Row>;
