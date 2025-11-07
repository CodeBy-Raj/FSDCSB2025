import { use, useState } from "react";
import profileImg from "../assets/images/profilePNG.png";

export default function ImageManipulation() {
  const [heightInc, setHeight] = useState(200);
  const [widthInc, setWidthInc] = useState(200);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);

  const increaseWidth = () => {
    setWidthInc(widthInc + 10);
  };

  const increaseHeight = () => {
    setHeight(heightInc + 10);
  };

  const randomColors = () => {
    setRed(Math.random() * 255);
    setBlue(Math.random() * 255);
    setGreen(Math.random() * 255);
  };

  const imgRotate = () => {
    setRotateDeg(rotateDeg + 10);
  };

  return (
    <>
      <h2>ImageManipulation</h2>
      <div style={{ height: 450, width: 450, border: 2, borderColor: "black" }}>
        <img
          src={profileImg}
          alt="image_manipulation"
          height={heightInc}
          width={widthInc}
          style={{
            paddingTop: 70,
            paddingLeft: 70,
            background: `rgb(${red}, ${green}, ${blue})`,
            transform: `rotate(${rotateDeg}deg)`,
            transition:"transform 300ms ease",
            willChange:"transform"
          }}
        />
      </div>

      <h2>
        Current height {heightInc} and widht: {widthInc}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        <div>
          <button onClick={increaseHeight}>Increase Height</button>
        </div>
        <div>
          <button onClick={increaseWidth}>Increase width</button>
        </div>
        <div>
          <button onClick={randomColors}>Change Bgcolor</button>
        </div>
        <div>
          <button onClick={imgRotate}>Rotate image</button>
        </div>
      </div>
    </>
  );
}
