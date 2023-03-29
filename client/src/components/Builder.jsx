import Player from "./Player";

function Builder({ data }) {
  // let selected_formation = "433"; //Must be user submitted
  /** TO-DO:
   * 1. The return logic below should be done inside "Team.jsx"
   * 2. This class (Builder.js) should be a form, which takes user input
   *      (formation & player names) and passes it to pitch.jsx
   * 3. And once thats done, we need to gloss over formations.json one more
   *      time, its missing positions here and there
   * 5. After that, all thats left to do is to style the squad builder page
   */

  return (
    <div>
      {data.map((formation) =>
        formation.formation === "433" ? (
          <div class="pitch">
            {formation.positions.map((position, index) => (
              <Player
                left={formation.left[index]}
                top={formation.top[index]}
                position={formation.positions[index]}
                name={"Mudrk"}
                id={"1920"}
              />
            ))}
          </div>
        ) : (
          <p></p>
        )
      )}
    </div>
  );
}

export default Builder;
