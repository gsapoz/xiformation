import React, { useEffect, useState } from "react";
import "../index.css";

export function setPlayer(role) {
  const input = document.getElementById(role);
  const player = document.getElementById(role + "p");
  const nametag = document.getElementById(role + "n");
  const lastname = getLastName(input.value);

  player.firstChild.setAttribute(
    "src",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIsAigMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAMCAQUH/8QAHxABAAICAgMBAQAAAAAAAAAAAAEDAhMREiExQWEi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBQQCBv/EAB8RAQACAQUBAQEAAAAAAAAAAAABAgMEERITMTIUIv/aAAwDAQACEQMRAD8A/IscWuNfJhj5VV4OS1n0WHFFmMVPdSzGv8da/wAV83bGljZDqNS/XBrhHNP5YQajUv1wa4OZ+WEGo1L9cGuDmflhBqNS7X+Gv8OZ+WEOo1L9cPNcHM/LCHU4yqfR1/jPPBMXebaaNnzs8OHHVXbix4WxLhyYtpd1R5lbVCOr3K2pVd3aWG+OLvqYOlEy1a1jZz1OroHrjDnqdXQHGHPUnF0BxhzEPer0DaHPU6ugOMOJxZWQollmmJV5KxsiuhOpu+p19WRmj+ntXuVlSOr3KypF1ulVYOnODpRLWr4ACQAAAAAAAkJZZtZZZkK8niO76nUXfU7or4yM309q9ysqR1e5WVIus0qrB05wdKJa1QASAAAAAAAEhLLNrLLMhXk8R3fU6i76ndFfGRm+ntXuVlSKnxMrakXWaVVg6c4OlEtaoAJB68AB6DwAAAkJZZtZZZkK8niO76nUXfU7or4yM309q9ysqR1e5WVIus0qrB05wdKJa1QASAAAA9ePXgABISyzayyzIV5PEd31Oou+p3RXxkZvp7V7lZUjq9ysqRdZpVWDpzg6US1q+ABukANwB6bg8A3ABASyzayyz9JhXk8R3J1Fyd0V8Y+f6e1T/UrKpQVz5lZXl4Rd601lmEu+U+GbvvCmYatckbNeTll3g7wjZPZDXk5Zd4O8Gx2Q15OWXeDvBsdkNeTll3g7wbJ7Ia8nLLvB3g2R2Q0mWWc+HvbmGdk+HqsK8mSNk9ydpdkw5X1hk5bRMuMcvLfCxhjjHLviIl7tDmx5JhTFrraleq+LqjPKnabUse3snGE98qtrzamDjB3yp2m1JycnGDvlXtNqTk5OMHfZZtebUsOo9ScYO+VMXcOLL5n0n5eSmKvFs8yWWTLPt+GbjhZEOS15f//Z"
  );
  nametag.textContent = lastname;
}

function getLastName(fullname) {
  const words = fullname.split(" ");
  if (words.length != 1) {
    words.shift(); // remove the first word
    const lastname = words.join(" ");
    return lastname;
  }
  return fullname;
}

const Player = (props, name) => {
  // const [player, getPlayer] = useState([{}]);

  // useEffect(() => {
  //   fetch(`/players/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       getPlayer(data);
  //     });
  // }, []);

  const playerStyle = {
    left: props.x_axis,
    top: props.y_axis,
  };

  return (
    <div className="player" id={props.position + "p"} style={playerStyle}>
      <img src={props.image} />
      <a id={props.position + "n"}>{props.name}</a>
    </div>
  );
};

export default Player;
