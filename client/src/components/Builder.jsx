import Team from "./Team";

function Builder({ data }) {
  const attributes = {};
  // let selected_formation = "433";

  return (
    <div>
      {data.map((formation) =>
        formation.formation === "433" ? (
          <div class="pitch">
            <ul>
              {formation.positions.map(
                (position, index) => (attributes[`key${index}`] = { position })
                // <li key={position + index}>{position}</li>
              )}

              {formation.left.map(
                (left, index) => (attributes[`key${index}`] = { left })
                // <li key={left + index}>{left}</li>
              )}

              {formation.top.map(
                (top, index) => (attributes[`key${index}`] = { top })
                // <li key={top + index}>{top}</li>
              )}
            </ul>

            <Team props={JSON.stringify(attributes)} />
          </div>
        ) : (
          <p></p>
        )
      )}
    </div>
  );
}

export default Builder;

//  return (
//   <div class="section">
//     {data.map((item) => (
//       <div class="container">
//         {item.formation === "433" ? (
//           <div class="pitch">
//             <Player
//               left={item.left}
//               top={item.top}
//               position={"LW"}
//               name={"Mudrk"}
//               id={"1920"}
//             />
//           </div>
//         ) : (
//           <p>
//             {item.left}
//             <br></br>
//           </p>
//         )}
//       </div>
//     ))}
//   </div>
// );
