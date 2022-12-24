import { useState } from "react";

const url = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [fetchData, setfetchData] = useState([]);

  const handleFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setfetchData(data);
  };

  return (
    <div className="App">
      <button onClick={handleFetch}>hello</button>
      <img src={fetchData.message} style={{ width: "200px" }} alt="name"></img>
    </div>
  );
}

export default App;
