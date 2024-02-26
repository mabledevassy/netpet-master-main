import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Popular.css";
import { Buffer } from "buffer";

const Popular = () => {
  var [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/iview")
      .then((response) => {
        setItem(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="popular">
      <div className="popular-item">
        {item.map((rows, pos) => {
          return (
            <Item
              key={pos}
              id={rows._id}
              category={rows.Category}
              subcategory={rows.Subcategory}
              image={`data:image/jpeg;base64,${Buffer.from(
                rows.image1.data
              ).toString("base64")}`}
              description={rows.Description}
              price={rows.Price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
