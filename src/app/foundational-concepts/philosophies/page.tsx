import React from "react";
import { philosophies } from "@/utils/data";

function Philosophies() {
  return (
    <div>
      <h1>Philosophies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {philosophies.map((philosophy) => (
          <div key={philosophy.title}>{philosophy.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Philosophies;
