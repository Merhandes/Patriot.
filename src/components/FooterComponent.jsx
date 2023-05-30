import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Patriot.</h3>
            <p className="desc">
              Sebuah kisah kepahlawanan para pejuang pada masa sebelum dan
              sesudah kemerdekaan. Tidak banyak yang tahu meskipun jasa mereka
              sungguh besar bagi tanah air Indonesia. Jangan sekali-kali
              melupakan sejarah.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 812-260-0960</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">patriot@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="penjajahanbelanda">Penjajahan Belanda</Link>
            <Link to="penjajahanjepang">Penjajahan Jepang</Link>
            <Link to="kemerdekaan">Kemerdekaan</Link>
            <Link to="quiz">Quiz</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <a className="btn btn-danger rounded-end-0" href="https://www.youtube.com/@Jokowi">
                Subscribe
              </a>
            </div>
            <div className="social mt-3">
              <a
                href="https://www.instagram.com/jokowi/"
                className="facebook fa-brands fa-instagram"
              ></a>
              <a
                href="https://www.facebook.com/Jokowi?mibextid=ZbWKwL"
                className="facebook fa-brands fa-facebook"
              ></a>
              <a
                href="https://twitter.com/jokowi?t=y2yQ_uggTbI44bbvwAqDDA&s=08"
                className="twitter fa-brands fa-twitter"
              ></a>
              <a
                href="https://www.youtube.com/@Jokowi"
                className=" fa-brands fa-youtube"
              ></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Kelompok 7</span> , Jaya! Jaya! Jaya!.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
