import React, { useState } from "react";
import "./kasicka.css";
import penizeUrl from "./penize.svg";

// Zadání 1: Přichystej v komponentě `Kasicka` proměnnou pro počet uložených peněz s výchozí hodnotou podle prop proměnné `pocatecniStav`.
// Zadání 2: Prvním tlačítkem přidej pět a druhým nastav na nulu.
// Zadání 3: Počet peněz vypiš.

const Kasicka = ({ pocatecniStav }) => {
  const [ulozeno, setUlozeno] = useState(pocatecniStav);

  return (
    <div className="kasicka">
      <h3>
        <img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce:
        {ulozeno}
      </h3>
      <button onClick={() => setUlozeno(ulozeno + 5)}>
        přihodit pětikorunu
      </button>{" "}
      <button onClick={() => setUlozeno(0)}>vysypat</button>
    </div>
  );
};

export const ZaverecnyBonus2 = () => {
  return (
    <>
      {[0, 20, 50, 8].map((hodnota, i) => (
        <Kasicka pocatecniStav={hodnota} key={i} />
      ))}
    </>
  );
};
