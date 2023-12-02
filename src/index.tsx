import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
// v18 的新方法
root.render(<App />);

// import React from "react"
// import { createRoot } from "react-dom/client"
// import App from "./App"

// const root = document.getElementById("root")
// if(root){
//     createRoot(root).render(<App/>)
// }

// console.log("NODE_ENV环境变量-浏览器", process.env.NODE_ENV);
// console.log("BASE_ENV环境变量-浏览器", process.env.BASE_ENV);
