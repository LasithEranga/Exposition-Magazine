import ArticleList from '../Data/Articles.json';

const RetaledArticles = (id,category)=>{

    const shuffled = ArticleList.sort(() => 0.5 - Math.random());

    const filteredArray = shuffled.filter(article=>article.id!== id);
    let relatedArticles = filteredArray.filter(article=>article.category === category);
    let nonRelatedArticles = filteredArray.filter(article=>article.category !== category);

    if(relatedArticles.length>=3){
        relatedArticles = relatedArticles.slice(0,2);
    }

    
    if(nonRelatedArticles.length>=3){
        nonRelatedArticles = nonRelatedArticles.slice(0,2);
    }

    const nextArticleId = shuffled.length;
    const previousArticleId = shuffled.length - 1;



console.log({
    nonRelatedArticles,
    relatedArticles,
    nextArticleId,
    previousArticleId
 })

 return{
    nonRelatedArticles,
    relatedArticles,
    nextArticleId,
    previousArticleId
 }



}

export default RetaledArticles;