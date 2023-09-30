import React, { useState } from "react";

const Categories = ({element,index}) => {
  const [category, setCategory] = useState(0);
  const categories = [
    "Favourites",
    "Groceries",
    "Work",
    "Study",
    "Sports",
    "+New category",
  ];
  return (
    <li
      style={{ fontWeight: index === category ? "700" : "" }}
      key={index}
      onClick={() => setCategory(index)}
    >
      {element}
    </li>
  );
};

export default Categories;
