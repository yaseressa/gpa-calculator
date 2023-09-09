import React, { useState } from "react";
import Courses from "./Courses";
function Body() {
  const [G1, setG1] = useState("");
  const [G2, setG2] = useState("");
  const [G3, setG3] = useState("");
  const [G4, setG4] = useState("");
  const [G5, setG5] = useState("");
  const [G6, setG6] = useState("");
  const [per, setPer] = useState("");
  const [ne, setNe] = useState(0);
  var G11 = Number(G1.trim());
  var G22 = Number(G2.trim());
  var G33 = Number(G3.trim());
  var G44 = Number(G4.trim());
  var G55 = Number(G5.trim());
  var G66 = Number(G6.trim());
  var shit;

  if (
    G1 != "invalid mark" &&
    G2 != "invalid mark" &&
    G3 != "invalid mark" &&
    G4 != "invalid mark" &&
    G5 != "invalid mark" &&
    G6 != "invalid mark"
  ) {
    shit = ((G11 + G22 + G33 + G44 + G55 + G66) / 6).toFixed(2);
  }
  const perch = () => {
    if (shit == 4 || shit >= 3.67) {
      setPer("A | EXCELLENT");
    } else if (shit >= 3.33 || shit >= 3.0) {
      setPer("VERY GOOD");
    } else if (shit >= 2.67) {
      setPer("GOOD");
    } else if (shit >= 2.33 || shit == 2.0) {
      setPer("SATISFACTORY");
    } else if (shit >= 1.6) {
      setPer("PASS");
    } else if (shit >= 1.0) {
      setPer("POOR");
    } else if (shit < 1.0 && shit >= 0) {
      setPer("FAILED");
    } else {
      setPer("invalid Marks");
    }
  };

  return (
    <div id="bgreat">
      <div id="coursera">
        <Courses number={1} setG={setG1} G={G1} />
        <Courses number={2} setG={setG2} G={G2} />
        <Courses number={3} setG={setG3} G={G3} />
        <Courses number={4} setG={setG4} G={G4} />
        <Courses number={5} setG={setG5} G={G5} />
        <Courses number={6} setG={setG6} G={G6} />
      </div>
      <button
        isDisabled={false}
        id="bbut"
        onClick={() => {
          document.getElementById("TG").value = shit;
          perch();
        }}
      >
        Generate
      </button>
      <div id="ttg">
        <h1>TOTAL GPA: </h1>
        <input readOnly id="TG" />
      </div>
      <div id="ttgl">
        <h1>Performance: </h1>
        <input readOnly value={per} />
      </div>
    </div>
  );
}

export default Body;
