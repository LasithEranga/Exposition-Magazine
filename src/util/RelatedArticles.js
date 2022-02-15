import ArticleList from "../Data/Articles.json";

const RetaledArticles = (filteredArticle) => {
  if (filteredArticle) {
    const shuffled = ArticleList.sort(() => 0.5 - Math.random());

    const filteredArray = shuffled.filter(
      (article) => article.id !== filteredArticle.id
    );
    let relatedArticles = filteredArray.filter(
      (article) => article.category === filteredArticle.category
    );
    let nonRelatedArticles = filteredArray.filter(
      (article) => article.category !== filteredArticle.category
    );

    if (relatedArticles.length >= 3) {
      relatedArticles = relatedArticles.slice(0, 2);
    }

    if (nonRelatedArticles.length >= 3) {
      nonRelatedArticles = nonRelatedArticles.slice(0, 2);
    }

    const nextArticle = shuffled[shuffled.length - 1];
    const previousArticle = shuffled[shuffled.length - 2];

    return {
      nonRelatedArticles,
      relatedArticles,
      nextArticle,
      previousArticle,
    };
  }else{
    return {
        nonRelatedArticles:undefined,
        relatedArticles:undefined,
        nextArticle:undefined,
        previousArticle:undefined,
      };
  }
};

export default RetaledArticles;
