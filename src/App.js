const { useState } = require("react");

let App = () => {
  let [c, setC] = useState(0);
  let [a, setA] = useState([]);

  let inc = () => {
    setC(c + 1);
    // setC(1);
  };
  let add = () => {
    setA([...a, c]);
    setC(0);
  };
  let rst = () => {
    setA([]);
  };
  return (
    <div>
      <h3>{c}</h3>
      <button onClick={inc}>Inc</button>
      <button onClick={add}>Add</button>
      <button onClick={rst}>Rst</button>
      {a.map((str, i) => (
        <div>
          counter-{i + 1}
          ---{str}
        </div>
      ))}
    </div>
  );
};
export default App;
