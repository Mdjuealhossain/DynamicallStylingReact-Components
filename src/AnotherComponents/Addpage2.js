import React, { useState } from "react";
import CardPage from "./CardPage";
import { bground, color } from "../Components/CssDisining";

const Addpage2 = () => {
  const [system, setSystem] = useState({
    CardBg: bground.cardbg,
    CardCol: color.btn1,
    Headers: color.btn1,
    prag: color.btn1,
  });

  const handlbtn1 = () => {
    setSystem({ ...system, Headers: bground.btn3 });
  };

  const handlbtn2 = () => {
    setSystem({ ...system, prag: color.btn3 });
  };

  return (
    <div>
      <div className="com-container">
        <CardPage
          system={system}
          setSystem={setSystem}
          variyent="primary"
          title="This should be the accepted answer"
          disc="This should be the accepted answer. Because justify-content: space-between if you only have 2 items in your flex container."
          button="Click"
        />
        <CardPage
          system={system}
          setSystem={setSystem}
          variyent="secondary"
          title="This is the correct approach and any where"
          disc=" But for more than 2 items, to only align some on the right, this is the correct approach! The name of my country is Bangladesh"
          button="Click here"
        />
        <CardPage
          system={system}
          setSystem={setSystem}
          variyent="success"
          title="This is a Card for cssDising blew here"
          disc=" Try setting the width of .c to 300px. The title is no longer centered. So yes, this answers the question, but this breaks the desig"
          button="See more"
        />
      </div>
      <div>
        <button className="btn" onClick={handlbtn1}>
          Button1
        </button>
        <button className="btn" onClick={handlbtn2}>
          Button1
        </button>
        <button className="btn">Button1</button>
      </div>
    </div>
  );
};

export default Addpage2;
