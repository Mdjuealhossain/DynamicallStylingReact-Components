import React, { useEffect, useState } from "react";
import { bground, color, fontsize, redius } from "./CssDisining";

const SimplPage = ({ disc, button, variyent, title, colr, setColr }) => {
  const [style, setStyle] = useState({});

  function switchCase(
    backgrColbtn1,
    backgrColbtn2,
    backgrColbtn3,
    fontColorbtn1,
    fontColorbtn2,
    fontColorbtn3,
    fontsizebtn1,
    fontsizebtn2,
    fontsizebtn3,
    brediusbtn1,
    brediusbtn2,
    brediusbtn3
  ) {
    switch (variyent) {
      case "primary":
        setStyle({
          ...style,
          ...{
            background: backgrColbtn1,
            color: fontColorbtn1,
            fontSize: fontsizebtn1,
            borderRadius: brediusbtn1,
          },
        });

        break;
      case "secondary":
        setStyle({
          ...style,
          ...{
            background: backgrColbtn2,
            color: fontColorbtn2,
            fontSize: fontsizebtn2,
            borderRadius: brediusbtn2,
          },
        });
        break;
      case "success":
        setStyle({
          ...style,
          ...{
            background: backgrColbtn3,
            color: fontColorbtn3,
            fontSize: fontsizebtn3,
            borderRadius: brediusbtn3,
          },
        });
        break;
      default:
        return "this result is not found";
    }
  }

  useEffect(() => {
    switchCase(
      bground?.btn1,
      bground?.btn2,
      bground?.btn3,
      color?.btn1,
      color?.btn2,
      color?.btn3,
      fontsize?.btn1,
      fontsize?.btn2,
      fontsize?.btn3,
      redius?.btn1,
      redius?.btn2,
      redius?.btn3
    );
  }, []);

  const handleBtn = () => {
    switchCase(
      color?.btn1,
      color?.btn2,
      color?.btn3,
      bground?.btn1,
      bground?.btn2,
      bground?.btn3,
      fontsize?.btn1,
      fontsize?.btn2,
      fontsize?.btn3,
      redius?.btn1,
      redius?.btn2,
      redius?.btn3
    );

    if (variyent === "primary") {
      setColr({ ...colr, ...{ background: "blue", color: "white" } });
    } else if (variyent === "secondary") {
      setColr({ ...colr, ...{ background: "bisque", color: "black" } });
    } else {
      setColr({
        ...colr,
        ...{ background: " rgb(142, 128, 128)", color: "white" },
      });
    }
  };

  return (
    <div className="simp-container" onMouseEnter={handleBtn}>
      <h1 className="title" style={{ color: colr.hadingcolor }}>
        {title}
      </h1>
      <p className="discription" style={{ color: colr.pragrap }}>
        {disc}
      </p>

      <button className="btn" type="button" style={style} onClick={handleBtn}>
        {button}
      </button>
    </div>
  );
};

export default SimplPage;
