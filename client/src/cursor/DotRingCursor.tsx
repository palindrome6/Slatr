import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "./MouseContext";
import styled from "styled-components";

const DotRing = () => {
    const { cursorType } = useContext(MouseContext);
    const { x, y } = useMousePosition();
    return (
        <StyledCursor>
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={"ring " + cursorType}
            ></div>
            <div
                className={"dot " + cursorType}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
        </StyledCursor>
    );
};

export default DotRing;

const StyledCursor = styled.div`
    .ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border: 2px solid #ff6900;;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
}

.dot {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: #ff6900;;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
}

.ring.hovered {
  width: 50px;
  height: 50px;
  border-width: 3px;
  border-color: lightgray;
}

.dot.hovered {
  display: none;
}

`
