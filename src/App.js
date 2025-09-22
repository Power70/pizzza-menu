// import { useState } from "react";

import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App () {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handleNext () {
//     if (step < messages.length) {
//       setStep((s) => s + 1);
//     }
//   }

//   function handlePrevious () {
//     if (step > 1) {
//       setStep((s) => s - 1);
//     }
//   }

//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>

//       {isOpen && <div className="steps">
//       <div className="numbers">
//         <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
//         <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
//         <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
//       </div>
//       <p>
//         step {step}: {messages[step - 1]}
//       </p>

//       <div className="buttons">
//         <button style={{background: "#7950f2", color: "#fff"}} 
//         onClick={handlePrevious
//         }>
//           Previous
//         </button>
//         <button style={{background: "#7950f2", color: "#fff"}} 
//         onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>}
//     </div>
//   )
// }

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem (item) {
    setItems((items) => [...items, item]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo () {
  return <h1>Far Away 🏕️</h1>
}
function Form ({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit (event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { 
      description, quantity, 
      packed: false, id: Date.now() };
      console.log(newItem);

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select 
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value)) }
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>{num}
          </option>
        ))}
        </select>
        <input
          type="text"
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
    </form>
  );
}

function PackingList ({ items }) {
  return <div className="list">
    <ul>
      {items.map(item => ( 
        <Item item={item} />
      ))}
    </ul>
  </div>;
}
  
function Item ({item}) {
  return <li>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>;
}

function Stats () {
  return <footer className="stats">
    <em>💼 You have X items on your list, and you already packed X (X%)</em>
  </footer>
}