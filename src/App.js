import ShoppingList from './ShoppingList';
import { useState } from 'react';

import './App.css';

let id = 1;

function App() {
  const [articles, setArticles] = useState([
    {
      id: id++,
      name: "Cola",
      isBought: false
    },
    {
      id: id++,
      name: "Mate",
      isBought: true
    },
    {
      id: id++,
      name: "Bier",
      isBought: false
    }
  ]);

  const handleAddArticle = (text) => {
    setArticles([
      ...articles,
      {
        id: id++,
        name: text,
        isBought: false
      }
    ]);
  };

  const handleBoughtArticle = (id) => {
    const newArticles = articles.map((article) => {
      if(article.id === id) {
        return {
          ...article,
          isBought: !article.isBought
        };
      } else {
        return article;
      }
    });
    setArticles(newArticles);
  };

  const handleDeleteArticle = (id) => {
    const newArticles = articles.filter((article) => {
      return article.id !== id;
    });
    setArticles(newArticles);
  }

  return (
    <>
      <ShoppingList
        articles={articles}
        onAddArticle={handleAddArticle}
        onBoughtArticle={handleBoughtArticle}
        onDeleteArticle={handleDeleteArticle}
      />
    </>
  );
}

export default App;
