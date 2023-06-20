import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../Assets/img_1.jpg";
import { MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Date from "./date";

function CarouselHome(props) {
  const { promotions } = props;

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Display three slides at a time
        initialSlide={2} // Set the initial slide index to 1 (second slide)
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {promotions.map((promotion) => {
          return (
            <SwiperSlide key={promotion.Id}>
              <Link
                className="carousel-main-link"
                to={`/campaign/${promotion.SeoName}/${promotion.Id}`}
              >
                <img
                  className="promotion-img"
                  src={promotion.ImageUrl}
                  alt="slide_image"
                />
                <img
                  className="promotion-brand"
                  src={promotion.BrandIconUrl}
                  alt="slide_image"
                />
                <Date styleDate={"date-container"} />

                <div className="promotion-text-container">
                  <MDBTypography className="promotion-text">
                    <div
                      dangerouslySetInnerHTML={{ __html: promotion.Title }}
                    />
                  </MDBTypography>
                  <MDBTypography
                    style={{
                      color: promotion.PromotionCardColor,
                    }}
                    className="promotion-text"
                  >
                    <Link
                      style={{
                        marginTop: "10px",
                        color: promotion.PromotionCardColor,
                      }}
                      className="carousel-promotion-link"
                      to={`/campaign/${promotion.SeoName}/${promotion.Id}`}
                    >
                      Daha Fazla Gör
                    </Link>
                  </MDBTypography>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default CarouselHome;
