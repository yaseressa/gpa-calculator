import React from "react";
import { useState } from "react";
function Courses({ number, setG, G }) {
  const handle1 = (e) => {
    var a = Number(e.target.value);
    var g;
    if (a <= 100 && a >= 0) {
      if (a >= 95.0) {
        setG(" 4.0");
      } else if (a >= 90) {
        setG("4.0");
      } else if (a >= 85) {
        setG("3.67");
      } else if (a >= 80) {
        setG("3.33");
      } else if (a >= 75) {
        setG("3.0");
      } else if (a >= 70) {
        setG("2.67");
      } else if (a >= 65) {
        setG("2.33");
      } else if (a >= 60) {
        setG("2.00");
      } else if (a >= 55) {
        setG("1.67");
      } else if (a >= 50) {
        setG("1.00");
      } else {
        setG("0");
      }
    } else {
      setG("invalid mark");
    }
  };
  return (
    <>
      <label>
        <h4>Course {number}: </h4>
        <br />
        <div>
          <input
            placeholder="Enter Your Marks: "
            onChange={handle1}
            type="number"
          />
          <input
            placeholder="Performance"
            id="per1"
            className="read"
            value={G}
          />
        </div>
      </label>
    </>
  );
}

export default Courses;
