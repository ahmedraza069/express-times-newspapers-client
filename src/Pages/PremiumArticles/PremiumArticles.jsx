import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import useArticle from "../../hooks/useArticle";


const PremiumArticles = () => {
    const [articles] = useArticle();
     const premiumContentNews = articles.filter(article => article.category.toLowerCase() === 'premium content');
    return (
        <div>
           <Helmet>
        <title>Express Times | Premium Article</title>
      </Helmet>
            <PageTitle pageTitle={'Premium'} animateTitle={'Articles'}></PageTitle>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8">
          {premiumContentNews.map((article) => (
            <ArticleCard key={article._id} article={article}></ArticleCard>
          ))}
        </div>
            </div>
        </div>
    );
};

export default PremiumArticles;