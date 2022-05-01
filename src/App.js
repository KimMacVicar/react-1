import React from "react";
import "./App.css";
import Search from "./Search";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <div>
        <header>
          <div>
            <div>
              <Search />
              <forecast />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
