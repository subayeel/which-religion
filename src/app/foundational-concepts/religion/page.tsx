import React from "react";
import { majorReligions } from "@/utils/data";
function Page() {
  return (
    <div>
      <h1>Religion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {majorReligions.map((religion) => (
          <div key={religion.title}>{religion.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Page;

// references:https://www.pewresearch.org/short-reads/2025/06/10/islam-was-the-worlds-fastest-growing-religion-from-2010-to-2020/
