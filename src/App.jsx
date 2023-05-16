// Dit project werkt met de volgende bestanden:
// App, Componenten: Fruit, Button, Counter, Input
// Autofocusing using React useRef()and useEffect() Hooks - https://blog.logrocket.com/how-to-autofocus-using-react-hooks/
// ref={firstnameInput} (useRef hook): To give this input field autoFocus after Mounting and after form submission.
// https://youtu.be/FGM6FQmdX8I (How to Use a Single Function to Manage React Form State)
// https://edhub.novi.nl/study/courses/516/content/15153 (Meerdere inputs met één onChange-handler)
// Input types checkbox = e.target.checked. Radio = e.target.value.
// React.forwardRef (useRef props op componenten) - https://www.youtube.com/watch?v=0YTYqg0ETx8
// Nog niet gelukt om variaties op bepaalde componenten te maken die ietwat afwijken
// React
import { useEffect, useRef, useState } from 'react';
// Components
import Fruit from './components/product/Fruit';
import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import Input from './components/input/Input';
import Select from './components/select/Select';
// Fruit images
import strawberry from './assets/strawberry.jpg';
import banana from './assets/banana.jpg';
import apple from './assets/apple.jpg';
import kiwi from './assets/kiwi.jpg';
// CSS
import './App.css';

export default function App() {
  // Fruit fields - Simple state notation
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  // Form fields - Advanced state notation
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    age: '',
    postcode: '',
    frequency: '',
    moment: '',
    comment: '',
    term: '',
  });

  // useRef variables. To focus input field when first loading the form or when just submitted
  const firstnameInput = useRef(null);

  // Form variables. Simple validation: All input fields may not be empty.
  // Refactor this code:
  const isEmpty =
    !formState.firstname ||
    !formState.lastname ||
    !formState.age ||
    !formState.postcode ||
    !formState.frequency ||
    !formState.moment ||
    !formState.comment ||
    !formState.term;

  // Clears the console for form submissions. Focusses on the first input field. When the form loads for the first time.
  useEffect(() => {
    console.clear();
    if (firstnameInput.current) {
      firstnameInput.current.focus();
    }
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    console.log(`Aardbeien aantal: ${strawberries}`);
    console.log(`Bananen aantal: ${bananas}`);
    console.log(`Appels aantal: ${apples}`);
    console.log(`Kiwi's aantal: ${kiwis}`);
    console.table(formState);
    firstnameInput.current.focus();
    resetForm();
  }

  // Reset the products to 0 products in cart
  function resetForm() {
    // Reset fruit
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
    // Reset form fields
    setFormState({
      firstname: '',
      lastname: '',
      age: '',
      postcode: '',
      frequency: '',
      moment: '',
      comment: '',
      term: '',
    });
  }

  function handleChange(event) {
    const changedFieldName = event.target.name;
    const newValue =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    setFormState({
      ...formState,
      [changedFieldName]: newValue,
    });
  }

  return (
    <>
      {/* Fruit counter */}
      <section className="section">
        <h1>Fruitmand Bezorgservice</h1>
        <h3>Vers fruit voor een redelijke prijs</h3>
        {/* Aardbeien */}
        <Fruit
          productNameNL="Aardbeien" // Alt, title en productnaam
          fruitImage={strawberry}
        >
          <Counter fruitCount={strawberries} setFruitCount={setStrawberries} />
        </Fruit>

        {/* Bananen */}
        <Fruit productNameNL="Bananen" fruitImage={banana}>
          <Counter fruitCount={bananas} setFruitCount={setBananas} />
        </Fruit>

        {/* Appels */}
        <Fruit productNameNL="Appels" fruitImage={apple}>
          <Counter fruitCount={apples} setFruitCount={setApples} />
        </Fruit>

        {/* Kiwi's */}
        <Fruit productNameNL="Kiwi's" fruitImage={kiwi}>
          <Counter fruitCount={kiwis} setFruitCount={setKiwis} />
        </Fruit>

        <Button type="reset" handleClick={resetForm}>
          Reset
        </Button>
      </section>

      {/* Form */}
      <section className="section">
        <h3>Formulier</h3>
        <form onSubmit={submitHandler}>
          {/* Voornaam */}
          <Input
            type="text"
            name="firstname"
            id="fname"
            label="Voornaam"
            value={formState.firstname}
            changeHandler={handleChange}
            ref={firstnameInput}
          />

          {/* Achternaam */}
          <Input
            type="text"
            name="lastname"
            id="lname"
            label="Achternaam"
            value={formState.lastname}
            changeHandler={handleChange}
          />

          {/* Leeftijd */}
          <Input
            type="number"
            name="age"
            id="age"
            label="Leeftijd"
            value={formState.age}
            changeHandler={handleChange}
          />

          {/* Postcode */}
          <Input
            type="text"
            name="postcode"
            id="postcode"
            label="Postcode"
            value={formState.postcode}
            changeHandler={handleChange}
          />

          {/* Frequency */}
          <label htmlFor="frequency">Bezorgfrequentie:</label>
          <select
            name="frequency"
            id="frequency"
            value={formState.frequency}
            onChange={handleChange}
          >
            <option value="" selected>
              --Selecteer een optie--
            </option>
            <option value="Iedere week">Iedere week</option>
            <option value="Iedere maand">Iedere maand</option>
          </select>

          {/* Overdag of 's avonds */}
          <label htmlFor="day">
            <input
              type="radio"
              id="day"
              name="moment"
              value="Overdag"
              onChange={handleChange}
              checked={formState.moment === 'Overdag'}
            />
            Overdag
          </label>
          <label htmlFor="evening">
            <input
              type="radio"
              id="evening"
              name="moment"
              value="Avond"
              onChange={handleChange}
              checked={formState.moment === 'Avond'}
            />
            Avond
          </label>

          {/* Opmerking */}
          <label htmlFor="comment-area">Opmerking:</label>
          <textarea
            name="comment"
            id="comment-area"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.comment}
          ></textarea>

          {/* Voorwaarden */}
          <label htmlFor="voorwaarden">
            <input
              type="checkbox"
              id="voorwaarden"
              name="term"
              value="Akkoord"
              checked={formState.term}
              onChange={handleChange}
            />
            Ik ga akkoord
          </label>

          <Button disabled={isEmpty} type="submit">
            {isEmpty ? '---' : 'Verzenden'}
          </Button>
        </form>
      </section>
    </>
  );
}
