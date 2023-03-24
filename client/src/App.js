import React, { useEffect, useState } from "react";

function App() {
  const [Leagues, setBackendData] = useState([{}]);
  var league_names = [];
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    //To-Do: css file, player widget, search feature
    <div>
      <p>League index: </p>
      {typeof Leagues === "undefined" ? (
        <p>Loading...</p>
      ) : (
        //else
        Leagues.map((league) => {
          return <h1>{league.name}</h1>;
        })
      )}
    </div>
  );
}

export default App;
