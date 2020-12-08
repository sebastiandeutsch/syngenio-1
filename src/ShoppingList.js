import PropTypes from 'prop-types';

const ShoppingList = (props) => {
  const { articles, headline } = props;

  return (
    <div>
      <h1>{headline}</h1>
      <ul>
        {articles.map(item => (
          <li key={item.id}>
            {item.name}
            &nbsp;
            {item.isBought && <span>(gekauft)</span>}
          </li>
        ))}
      </ul>
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
