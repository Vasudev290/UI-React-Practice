import React, { useState, useEffect } from "react";

const WithData = (WrappedComponent, dataUrl) => {
  const WithDataComponent = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(dataUrl)
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };

  return WithDataComponent;
};

export default WithData;
