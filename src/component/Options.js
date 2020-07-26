/** @format */

import React, { useState } from "react";
import Button from "./Button";

const Options = ({ options, onClick, selected }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "inherit",
      }}
    >
      {options.map((option) => (
        <Button
          selected={selected}
          value={option}
          onClick={onClick}
          key={option}
          title={option}
          styles={{
            marginBottom: 20,
            width: 300,
            backgroundColor: option === selected ? "black" : "white",
            color: option === selected ? "white" : "black",
          }}
        />
      ))}
    </div>
  );
};

export default Options;
