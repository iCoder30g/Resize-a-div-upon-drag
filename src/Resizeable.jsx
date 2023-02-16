import React, { useEffect, useRef } from "react";
import image from "./asset/img.jpg"
import "./resizable.css"


function Resizeable(props) {

  const refBox = useRef(null)
  const refTop = useRef(null)
  const refRight = useRef(null)
  const refBottom = useRef(null)
  const refLeft = useRef(null)


  useEffect(() => {
    const resizableElement = refBox.current;
    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10)
    let height = parseInt(styles.height, 10)

    let xCord = 0;
    let yCord = 0;

    resizableElement.style.top = "250px";
    resizableElement.style.left = "250px";



    // top 
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - yCord;
      height = height - dy;
      yCord = event.clientY;
      resizableElement.style.height = `${height}px`
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      yCord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };


    // Top 
    // const onMouseMoveTopResize = (event) => {
    //   const dy = event.clientY - yCord;
    //   height = height - dy;
    //   yCord = event.clientY;
    //   resizableElement.style.height = `${height}px`
    // };

    // const onMouseUpTopResize = (event) => {
    //   document.removeEventListener("mousemove", onMouseMoveTopResize);
    // };

    // const onMouseDownTopResize = (event) => {
    //   yCord = event.clientY;
    //   const styles = window.getComputedStyle(resizableElement);
    //   resizableElement.style.bottom = styles.bottom;
    //   resizableElement.style.top = null;
    //   document.addEventListener("mousemove", onMouseMoveTopResize);
    //   document.addEventListener("mouseup", onMouseUpTopResize);
    // };

    // Right 
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xCord;
      xCord = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      xCord = event.clientX;
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize)
      document.addEventListener("mouseup", onMouseUpRightResize)
    };

    // Bottom 
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - yCord;
      height = height + dy;
      yCord = event.clientY;
      resizableElement.style.height = `${height}px`
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    }

    const onMouseDownBottomResize = (event) => {
      yCord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize)
      document.addEventListener("mouseup", onMouseUpBottomResize)
    };

    // Left 
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xCord;
      xCord = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xCord = event.clientX;
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    }

    // Mouse down event Listener 
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };

  }, []);


  

  return (
    
      <div className="wrapper" id={props.id} > 
        <div ref={refBox} className="resizable-box">
        <img src={image} alt="" className="image" />
          <div ref={refLeft} className="resizer rleft"></div>
          <div ref={refRight} className="resizer rright"></div>
          <div ref={refTop} className="resizer rtop"></div>
          <div ref={refBottom} className="resizer rbottom"></div>
        </div>
      </div>
    
  );
}


export default Resizeable;