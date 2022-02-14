import React from "react";

const Repos = ({ item }) => {
  return (
    <div className="mb-3 border-2 p-4 font-bold text-red-500">
      <p>{item.name}</p>
    </div>
  );
};

export default Repos;
