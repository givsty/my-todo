import React from "react";

const Categories = ({element,index, setOnCategory, category, setCategory}) => {
  return (
    <li
      style={{ fontWeight: index === category ? "700" : "" }}
      key={index}
      onClick={() => {
        setCategory(index)
        setOnCategory(element)
      }}
    >
      {element}
    </li>
  );
};

export default Categories;
