// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderElement from "./SliderElement";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

SwiperCore.use([EffectFade]);

const sliderData = [
	{
		smHeading: "Clearance Sale",
		heading: "Collection",
		img: "/images/books/books1.jpg",
		description: "Fuel your imagination, one book at a time.",
	},
	{
		smHeading: "Collection 2023",
		heading: "Holiday Season",
		img: "/images/books/books2.jpg",
		description: "Immerse yourself in a world of words.",
	},
	{
		smHeading: "Books Storing",
		heading: "Extraordinary",
		img: "/images/books/books3.jpg",
		description: "The magic of reading, right here.",
	},
];

const SwiperCarousel = () => {
	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Autoplay, EffectFade]}
			effect={"fade"}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			// autoplay
			loop={true}
			className="mySwiper"
		>
			{sliderData.map((slideData, i) => (
				<SwiperSlide key={slideData.smHeading}>
					<SliderElement
						alignment={i === 0 ? "left" : i === 1 ? "center" : "right"}
						data={slideData}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperCarousel;
