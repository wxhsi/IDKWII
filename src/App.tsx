// import React, { useState } from "react";
import React, { lazy, Suspense, useState } from "react";
const LazyDemo = lazy(() => import("@/components/LazyDemo")); // 使用import语法配合react的Lazy动态引入资源
import "./app.css";
import "./app.less";
// //----代码调试热启动
// import smallImg from "@/assets/imgs/sp1.png";
// import bigImg from "@/assets/imgs/lp1.jpg";
// import { Demo1, Demo2 } from "@/components";

// export default function App() {
//   const [count, setCounts] = useState("");
//   const onChange = (e: any) => {
//     setCounts(e.target.value);
//   };
//   return (
//     <div>
//       <h2>热启动开启时 </h2>
//       {/* <img src={smallImg} alt="小于10kb的图片" /> */}
//       {/* <img src={bigImg} alt="大于10kb的图片" /> */}
//       {/* <div className="smallImg"></div> */}
//       {/* 小图片背景容器  */}
//       {/* <div className="bigImg"></div> */}
//       {/* 大图片背景容器 */}

//       <p>受控组件</p>
//       <input type="text" value={count} onChange={onChange} />
//       <br />
//       <p>非受控组件</p>
//       <input type="text" />
//     </div>
//   );
// }

////----删除没有引用的
// function App() {
//   return <Demo1 />;
// }
// export default App;

// function App() {
//   return (
//     <>
//       <div className="smallImg"></div>
//       <div className="bigImg"></div>
//     </>
//   );
// }
// export default App;

// //----懒加载
// function App() {
//   const [show, setShow] = useState(false);

//   // 点击事件中动态引入css, 设置show为true
//   const onClick = () => {
//     import("./app.css");
//     setShow(true);
//   };
//   return (
//     <>
//       <h2 onClick={onClick}>展示</h2>
//       {/* show为true时加载LazyDemo组件 */}
//       {show && (
//         <Suspense fallback={null}>
//           <LazyDemo />
//         </Suspense>
//       )}
//     </>
//   );
// }
// export default App;

// ----资源预加载
// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      "@/components/PreFetchDemo"
    )
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      "@/components/PreloadDemo"
    )
);

function App() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
  };
  return (
    <>
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载组件 */}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
    </>
  );
}
export default App;
