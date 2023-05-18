import { useState } from "react";
//This is for style use bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// This is Tooltip and Button component use from "reactstrap" library
import { Tooltip, Button } from "reactstrap";

function Tooltipcomponent({ tooltipdirection }) {
  // Tooltip Open state
  // if it is true tooltip will be open if false tooltip will be hide
  // use toogle attribute for change tooltipOpen state....inside tooltip attribute excute a function if i hover element then state will be true
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <div
      style={{
        width: "70vw",
        padding: 30,
        margin: "auto",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2vh",
      }}
    >
      <Button id="TooltipExample" style={{ height: 50, width: 150 ,borderBottom:"1px dotted",
      backgroundColor:"#a60af3"
    }}>
        Hover over me!
      </Button>
      <Tooltip
      // if it's true then open tooltip
        isOpen={tooltipOpen}
        // placement for place top right bottom left...if direction is undefined then it will be "right" by default
        placement={!tooltipdirection ? "right" : tooltipdirection}
        target="TooltipExample"
        // if state is false then if i hover element state will be true that is the reason i see tooltip
        toggle={() => {
          setTooltipOpen(!tooltipOpen);
        }}
      >
        Thanks for hovering! I'm a tooltip
      </Tooltip>
    </div>
  );
}

// export component
export default Tooltipcomponent;
