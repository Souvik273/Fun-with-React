import React from "react";
import Button from "./button";

const Navbar = ({ color, setColor }) => {
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Purple",
    "Magenta",
    "Lavender",
    "Yellow",
    "Pink",
    "Black",
  ];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {/* <Button color="Red" setColor={setColor}/>
          <Button color="green" setColor={setColor}/>
          <Button color="blue" setColor={setColor}/>
          <Button color="purple" setColor={setColor}/>
          <Button color="magenta" setColor={setColor}/>
          <Button color="lavender" setColor={setColor}/>
          <Button color="yellow" setColor={setColor}/>
          <Button color="pink" setColor={setColor}/>
          <Button color="black" setColor={setColor}/> */}

          {colors.map((clr) => (
            <Button key={clr} color={clr} setColor={setColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
