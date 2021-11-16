import IndividualColor from "../../Component/IndividualColor/IndividualColor";
import "./ColorBody.css";

//function for filling the values in array by iterating first kepping red color value const and
// increasing green and blue value by 8 and once the value is
//grater than 256 restart the loop by increasing the value of red color
//and breaking the loop once the value of red is over 256
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
  //filling the RGB value in colors array
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
