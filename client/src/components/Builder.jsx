import Pitch from "./Pitch";

function Builder({ data }) {
  return (
    <div class="pitch-container">
      {data.map((formation) =>
        formation.formation === "433" ? (
          <div class="pitch">
            <Pitch data={formation} />
          </div>
        ) : (
          <p clas="hidden"></p>
        )
      )}
    </div>
  );
}

export default Builder;
