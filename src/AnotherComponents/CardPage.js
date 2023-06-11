import React, { useEffect, useState } from "react";
import { bground, color } from "../Components/CssDisining";

const CardPage = ({ disc, button, variyent, title, system, setSystem }) => {
  const [style, setStyle] = useState({
    Background: bground.cardbg,
    Color: color.btn1,
    CardBg: bground.cardbg,
  });

  function SwitchCase(bg1, bg2, bg3, col1, col2, col3) {
    switch (variyent) {
      case "primary":
        setStyle({ ...style, Background: bg1, Color: col1 });
        break;
      case "secondary":
        setStyle({ ...style, Background: bg2, Color: col2 });
        break;
      case "success":
        setStyle({ ...style, Background: bg3, Color: col3 });
        break;
      default:
        return "thi result is not found";
    }
  }

  useEffect(() => {
    SwitchCase(
      bground.btn1,
      bground.btn3,
      color.btn3,
      color.btn1,
      color.btn2,
      color.btn2
    );
  }, []);

  const handlbtn = () => {
    SwitchCase(
      color.btn1,
      color.btn2,
      color.btn2,
      bground.btn1,
      bground.btn3,
      color.btn3
    );

    if (variyent === "primary") {
      setSystem({ ...system, CardBg: color.btn2, CardCol: color.btn1 });
    } else if (variyent === "secondary") {
      setSystem({ ...system, CardBg: color.btn1, CardCol: color.btn2 });
    } else {
      setSystem({ ...system, CardBg: color.btn3 });
    }
  };

  const handlMous = () => {
    if (variyent === "primary") {
      setSystem({ ...system, CardBg: bground.btn2, CardCol: color.btn1 });
    } else if (variyent === "secondary") {
      setSystem({ ...system, CardBg: bground.btn1, CardCol: color.btn2 });
    } else {
      setSystem({ ...system, CardBg: bground.btn3 });
    }
  };

  return (
    <div
      className="simp-container"
      onMouseEnter={handlMous}
      style={{ background: system.CardBg, color: system.CardCol }}
    >
      <h1 style={{ color: system.Headers }}>{title}</h1>
      <p style={{ color: system.prag }}>{disc}</p>
      <button
        onClick={handlbtn}
        className="btn"
        type="button"
        style={{ background: style.Background, color: style.Color }}
      >
        {button}
      </button>
    </div>
  );
};

export default CardPage;
