import useAllArticles from "../../../hooks/useAllArticles";
import AllArticlesCard from "./AllArticlesCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useArticle from "../../../hooks/useArticle";

const AllArtilces = () => {
  const [articles, refetch] = useArticle();
  const axiosSecure = useAxiosSecure();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allArticles/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h3 className="text-4xl text-center font-bold pt-8 pb-6">Total Article : {articles.length}</h3>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-7 p-8">
            {articles.map((article) => (
              <AllArticlesCard
                key={article._id}
                article={article}
                handleDeleteArticle={handleDeleteArticle}
              ></AllArticlesCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllArtilces;
