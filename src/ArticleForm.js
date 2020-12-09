import { useRef } from 'react';

export default function ArticleForm(props) {
  const { onAddArticle } = props;
  const inputNameEl = useRef("");
  const inputAmountEl = useRef(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputNameEl.current.value.length > 0) {
      onAddArticle(
        inputNameEl.current.value,
        inputAmountEl.current.value
      );
      inputNameEl.current.value = "";
      inputAmountEl.current.value = 1;
    } else {
      alert("Das Name Feld darf nicht leer sein.");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Namexxxeee:</label>
      <input id="name" ref={inputNameEl} defaultValue={""} type="text" />
      <label htmlFor="amount">Amount:</label>
      <input id="amount" ref={inputAmountEl} defaultValue={1} type="number" />
      <button>hinzufügen</button>
    </form>
  );
}
