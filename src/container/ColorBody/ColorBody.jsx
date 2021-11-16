import IndividualColor from "../../Component/IndividualColor/IndividualColor";
import "./ColorBody.css";

//filling the RGB value in colors array
const fillColors = (colors) => {
  for (let redItr = 8; redItr <= 256; redItr += 8) {
    for (let greenItr = 8; greenItr <= 256; greenItr += 8) {
      for (let blueItr = 8; blueItr <= 256; blueItr += 8) {
        colors.push([redItr, greenItr, blueItr]);
      }
    }
  }
};

function ColorBody() {
  const colorsArray = [];

  fillColors(colorsArray);

  return (
    <div className="colorbody">
      {colorsArray.map((color, index) => (
        <IndividualColor key={index} color={color} />
      ))}
    </div>
  );
}

export default ColorBody;
