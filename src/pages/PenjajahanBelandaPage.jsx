import { Container, Row, Col } from "react-bootstrap";
import { PahlawanBelanda } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const PenjajahanBelanda = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Pahlawan Penjajahan Belanda
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Berikut adalah List Pahlawan Penjajahan Belanda.
              </p>
            </Col>
          </Row>
          <Row>
            {PahlawanBelanda.map((pahlawan) => {
              return (
                <Col
                  key={pahlawan.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={pahlawan.delay}
                >
                  <img
                    src={pahlawan.image}
                    alt="unsplash.com"
                    className="w-100 mb-3 rounded-top"
                  />
                  <h5 className="mb-3 px-3 text-center">
                    {pahlawan.title}
                    <br></br>
                    {pahlawan.wilayah}
                  </h5>
                  <p className="px-3 pb-3 text-justify">
                    {pahlawan.descripion}
                  </p>
                  <div className="ket justify-content-between align-items-center px-3 pb-4 text-center">
                    <a className="btn btn-danger rounded-1" href={pahlawan.url}>
                      {pahlawan.button}
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default PenjajahanBelanda;
