import React from "react";
import { Link } from "react-router-dom";

/* ----------------------------------- mui ---------------------------------- */
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>

        <h2>{item.title}</h2>

        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
