import { useEffect, useState } from "react";


const useAllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://express-times-newspapers-server.vercel.app/allArticles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false)
      });
  }, []);
  return [articles, loading]
};

export default useAllArticles;