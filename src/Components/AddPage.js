import React, { useState } from "react";
import SimplPage from "./SimplPage";

const AddPage = () => {
  const [colr, setColr] = useState({
    hadingcolor: "black",
    pragrap: "black",
    btncolor: "black",
  });

  const handlbtns = () => {
    setColr({ ...colr, hadingcolor: "red" });
  };
  const handlbtn2 = () => {
    setColr({ ...colr, pragrap: " rgb(161, 151, 151)" });
  };
  const handlbtn3 = () => {
    setColr({ ...colr, color: " rgb(132, 205, 15)" });
  };

  return (
    <div>
      <div className="com-container">
        <SimplPage
          colr={colr}
          setColr={setColr}
          variyent="primary"
          title="This should be the accepted answer"
          disc="This should be the accepted answer. Because justify-content: space-between if you only have 2 items in your flex container."
          button="Click"
        />

        <SimplPage
          colr={colr}
          setColr={setColr}
          variyent="secondary"
          title="This is the correct approach and any where"
          disc=" But for more than 2 items, to only align some on the right, this is the correct approach! The name of my country is Bangladesh"
          button="Click here"
        />

        <SimplPage
          colr={colr}
          setColr={setColr}
          variyent="success"
          title="This is a Card for cssDising blew here"
          disc=" Try setting the width of .c to 300px. The title is no longer centered. So yes, this answers the question, but this breaks the desig"
          button="See more"
        />
      </div>
      <div>
        <button className="btn" onClick={handlbtns}>
          click me
        </button>
        <button className="btn" onClick={handlbtn2}>
          click me
        </button>
        <button className="btn" onClick={handlbtn3}>
          click me
        </button>
      </div>
    </div>
  );
};

export default AddPage;
