import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/Logo1.png";

import { dataSwiper, semuaPahlawan } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { useEffect, useState } from "react";

const HomePage = () => {
  let navigate = useNavigate();

  const url = "https://indonesia-public-static-api.vercel.app/api/heroes";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getDataProducts();
  }, []);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Temukan <br /> <span>Pahlawan Indonesia</span> <br />
                Bersama Kami
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Sebuah kisah kepahlawanan para pejuang pada masa sebelum dan
                sesudah kemerdekaan. Tidak banyak yang tahu meskipun jasa mereka
                sungguh besar bagi tanah air Indonesia. Jangan sekali-kali
                melupakan sejarah.
              </p>
              <button
                onClick={() => navigate("/penjajahanbelanda")}
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
              >
                Lihat Selengkapnya
              </button>
              <button
                onClick={() => navigate("/quiz")}
                className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
              >
                Quiz
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Pahlawan Indonesia</h1>
              <p className="text-center">
                Temukan dan teladani tokoh pahlawan yang berkesan bagi Anda!
              </p>
            </Col>
          </Row>
          <Row>
            {semuaPahlawan.map((pahlawan) => {
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
                  <p className="px-3 pb-20 text-justify">
                    {pahlawan.descripion}
                  </p>
                  <div className="ket justify-content-between align-items-center px-3 pb-4 text-center">
                    <a className="btn btn-danger rounded-1" href={pahlawan.url}>
                      Lihat Selengkapnya
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/penjajahanbelanda")}
              >
                Penjajahan Belanda
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>

              <button
                className="btn btn-success rounded-5 btn-lg mx-3 my-3 mt-3 mb-3 "
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/penjajahanjepang")}
              >
                Penjajahan Jepang
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>

              <button
                className="btn btn-success rounded-5 btn-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/kemerdekaan")}
              >
                Kemerdekaan<i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">About Us</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50
                }
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="add">{data.add}</p>
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section FAQ */}
      <FaqComponent />
      {/* Section FAQ */}
    </div>
  );
};

export default HomePage;
