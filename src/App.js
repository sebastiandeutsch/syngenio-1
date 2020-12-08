import SayHi from './SayHi';
import ShoppingList from './ShoppingList';
import HelloWorld from './HelloWorld';
import Button from './Button';
import Counter from './Counter';
import Clock from './Clock';

import './App.css';

function App() {
  const articles = [
    {
      id: 1,
      name: "Cola",
      isBought: false
    },
    {
      id: 2,
      name: "Mate",
      isBought: true
    },
    {
      id: 3,
      name: "Bier",
      isBought: false
    }
  ];

  const handleButtonClick = (event) => {
    alert("clicked");
  };

  return (
    <>
      <Clock />
      <Counter />
      <HelloWorld greet="World!!!11elf" />
      <Button onClick={handleButtonClick} >
        Submit 🙂
      </Button>
      <SayHi />
      <ShoppingList articles={articles} />
    </>
  );
}

export default App;
