import { useState } from "react";
import { PackingList } from "./PackingList";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";

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

  function handleDeleteItem (id) {
    setItems((items) => items.filter(item => item.id !== id));
  }
  function handleToggleItem (id) {
    setItems((items) => items.map((item) => 
      item.id === id ? { ...item, packed: !item.packed } 
      : item
    ));
  }

  function handleClearList () {
    const confirmed = window.confirm("Are you sure you want to clear the packing list?");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}