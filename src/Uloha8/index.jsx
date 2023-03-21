import React, { useState } from "react";

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [prsi, setPrsi] = useState("možná");

  const handleClick = () => {
    setPrsi(prsi === "možná" ? "ano" : prsi === "ano" ? "ne" : "možná");
  };

  return (
    <>
      <h3>Prší v Brně: {prsi}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
