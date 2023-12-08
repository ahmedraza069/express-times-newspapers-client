
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useArticle from "../../hooks/useArticle";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AllArticle = () => {
 const [articles] = useArticle();
 const axiosSecure = useAxiosSecure()
 
 console.log(articles);
 const worldNews = articles.filter(article => article.category.toLowerCase() === 'world news');
 const travelNews = articles.filter(article => article.category.toLowerCase() === 'travel');
 const politicalNews = articles.filter(article => article.category.toLowerCase() === 'political affairs');
 const sportNews = articles.filter(article => article.category.toLowerCase() === 'sport highlights');
 const crimeNews = articles.filter(article => article.category.toLowerCase() === 'crime reports');
 const educationNews = articles.filter(article => article.category.toLowerCase() === 'educational insights');

 const handleUpdateCount = (id) => {
  axiosSecure.patch(`/allArticles/${id}`, { incrementView: true })
  .then(res => {
   console.log(res.data);
     if (res.data.modifiedCount > 0) {
         Swal.fire({
           title: "Success!",
           text: "Increment View",
           icon: "success",
           confirmButtonText: "OK",
         });
       }
  })
};

  return (
    <div>
      <Helmet>
        <title>Express Times | All Article</title>
      </Helmet>
      <div>
        <PageTitle
          pageTitle={"Discover Our Extensive"}
          animateTitle={"Article Library"}
        ></PageTitle>
      </div>

      <div>
        <div>
          <SectionTitle
            heading={"Global"}
            animateHeading={"Updates"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {worldNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            heading={"Political"}
            animateHeading={"Updates"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {politicalNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            heading={"Sports"}
            animateHeading={"Updates"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {sportNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            heading={"Crimes"}
            animateHeading={"Updates"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {crimeNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            heading={"Education"}
            animateHeading={"Updates"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {educationNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            heading={"Travel"}
            animateHeading={"Adventures"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {travelNews.map((article) => (
            <ArticleCard key={article._id} article={article} handleUpdateCount={handleUpdateCount}></ArticleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
