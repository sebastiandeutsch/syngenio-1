import PropTypes from 'prop-types';
import { useState } from 'react';

const ShoppingList = (props) => {
  const { articles, headline, onAddArticle, onBoughtArticle, onDeleteArticle } = props;
  const [text, setText] = useState("Ich bin neu");

  const handleButtonClick = () => {
    onAddArticle(text);
  };

  const handleDeleteButtonClick = (id) => {
    onDeleteArticle(id);
  };

  return (
    <div>
      <h1>{headline}</h1>
      <ul>
        {articles.map(item => (
          <li key={item.id}>
            <span onClick={() => { onBoughtArticle(item.id) }}>
              {item.name}
              &nbsp;
              {item.isBought && <span>(gekauft)</span>}
            </span>
            <button onClick={() => { handleDeleteButtonClick(item.id) }}>
              -
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => { setText(event.target.value) }} />
        <button onClick={handleButtonClick}>
          hinzufügen
        </button>
      </div>
    </div>
  );
}

ShoppingList.propTypes = {
  headline: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isBought: PropTypes.bool.isRequired
  })).isRequired
};

ShoppingList.defaultProps = {
  headline: "Einkaufsliste"
};

export default ShoppingList;
