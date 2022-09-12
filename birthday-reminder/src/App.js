import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [birthday, setBirthday] = useState(data);
  return (
    <div id="root">
      <main>
        <section className="container">
          <h3>{birthday.length} birthdays today</h3>
          <List birthday={birthday} />
          <button
            onClick={() => {
              setBirthday([]);
            }}
          >
            Clear All
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
