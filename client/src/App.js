import React, { useEffect, useState } from "react";

function App() {
  const [backEndData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <p></p>
      {/* {typeof backEndData.test === "undefined" ? ( //init: proxy test
          <p>Loading...</p>
        ) : (
          backEndData.test.map((test, i) => <p key={i}>{test}</p>)
        )} */}
    </div>
  );
}

export default App;
