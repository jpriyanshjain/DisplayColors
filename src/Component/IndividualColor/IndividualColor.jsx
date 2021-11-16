import "./IndividualColor.css";

function IndividualColor({ color, key }) {
  // extracting the RGBvalue from color object
  const [red, green, blue] = color;

  return (
    <div
      style={{ backgroundColor: `rgb(${red},${green},${blue}) ` }}
      className="individualcolor"
      key={key}
    />
  );
}

export default IndividualColor;
