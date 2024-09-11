import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import './index.scss'
import ReviewCard from "../../UI/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import userImage from "../../../assets/user-image.png";



const CustomerReviews = () => {


  const reviews = [
    {
      userImage: userImage,
      reviewNumber: "01",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },

    {
      userImage: userImage,
      reviewNumber: "02",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },
   

    {
      userImage: userImage,
      reviewNumber: "03",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },
   

    {
      userImage: userImage,
      reviewNumber: "04",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },

    {
      userImage: userImage,
      reviewNumber: "05",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },

    {
      userImage: userImage,
      reviewNumber: "06",
      userComment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.',
      userName: 'Lisa Smith',
    },
   
  ];
  return (
    <section className="reviews">
      <div className="container">
        <div className="rewiews-top">
          <div className="left-side">
            <SectionTitle to="#" title="Müştəri rəyləri" is={false} />
            <p className="reviews-descriprion">
              Lorem Ipsum Dolor Sit Amet Consectetur. Magna Tellus Nibh Lectus
              Congue Amet.
            </p>
          </div>
          <div className="right-side">
            <p className="total-reviews">Total Reviews</p>
            <span className="reviews-number">122 K</span>
          </div>
        </div>

        <div className="customers-reviews">


        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                  <ReviewCard  {...review} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
