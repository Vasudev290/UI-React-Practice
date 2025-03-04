import React, { useState } from "react";
import PropsEx2 from "./PropsEx2";

const PropsEx1 = () => {
  const [products, setProducts] = useState({
    id: 101,
    name: "Oppof21Pro",
    price: 21999,
    desc: "Good Camara, 8GB, 128GB",
  });
  return (
    <div>
      <h2>Props Example</h2>
      <h4>Parent Example</h4>
      <PropsEx2 props = {products}/>
    </div>
  );
};

export default PropsEx1;
