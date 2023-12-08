import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useArticle from "../../../hooks/useArticle";

const TrendingCategory = () => {
  const [articles] = useArticle();

  const sortedArticles = articles.sort((a, b) => b.view - a.view);

  const topViewedArticles = sortedArticles.slice(0, 6);

  return (
    <div>
      <SectionTitle heading={"Trending "} animateHeading={"Articles"}></SectionTitle>
      <div className="py-10">
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {topViewedArticles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="h-72">
                  <img
                    src={article.image}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">{article.title}</h2>
                    <p className="dark:text-gray-100"></p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-gray-800 text-white dark:text-gray-900"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCategory;
