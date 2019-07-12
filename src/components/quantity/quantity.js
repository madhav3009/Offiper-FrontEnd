import React, { useState } from "react";
import "./quantity.scss";

const Quantity = props => {
  const [count, setCount] = useState(1);
  const QtyI = () => {
    setCount(count + 1);
  };
  const QtyD = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const style={
    width:props.width
  }
  const buttonStyle={
   float:props.float
  }
  return (
    <div class="input-group mb-3"  style={buttonStyle}>
      <div class="input-group-prepend" >
        <button class="btn btn-outline-secondary" type="button" onClick={QtyD}>
          &mdash;
        </button>
      </div>
      <input
        type="text"
        class="form-control"
        value={count}
        style={style}
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" onClick={QtyI}>
          &#xff0b;
        </button>
      </div>
    </div>
  );
};
export default Quantity;
