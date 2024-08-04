// src/App.jsx
import "./App.css";

const App = () => {
  const items = [
    { name: "harrypotter", readed: true },
    { name: "jumami", readed: true },
    { name: "strabox", readed: false },
    { name: "eggwar", readed: true },
  ];

  return (
    <>
      <h1>books List</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            
            className={item.readed ? "completed" : "not-completed"}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
