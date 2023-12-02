import React, { useState } from "react";
import "./app.css";
import "./app.less";
import smallImg from "@/assets/imgs/sp1.png";
import bigImg from "@/assets/imgs/lp1.jpg";

export default function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <div>
      <h2>修改标题</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片" />
      <div className="smallImg"></div>
      {/* 小图片背景容器  */}
      <div className="bigImg"></div>
      {/* 大图片背景容器 */}

      {/* <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" /> */}
    </div>
  );
}
