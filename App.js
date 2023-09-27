import React from "react";
import ReactDOM from "react-dom/client";

// Core React element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

// // JSX
// // const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;
// // multiple line
// const jsxHeading = (
//   <h1 className="heading">
//     Namaste React using JSX
//   </h1>
// );
// // console.log(jsxHeading);

// // Both are same
// const fn = () => true;
// const fn2 = () => {
//   return true;
// }

// // React functional Component, we can skip return statement
// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// }
// const HeadingComponent2 = () => {
//   <h1>Namaste React Functional Component</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

// // Rendering React element
// root.render(jsxHeading);

// // Rendering React functional component
// root.render(<HeadingComponent/>)
const Title =  (
  <div>
    <h3>Hello Title Component</h3>
  </div>
);
const AyushComponent = () => (
    <div>
      <h3>Hello Ayush Component</h3>
    </div>
);

const number = 1000;
// Component composition
const AyushComponent2 = () => (
    <div id="container">
      {/* We can write javascript in curly braces */}
      {number}
      {Title}
      <h2>{number}</h2>
      {/* These three things are same */}
      {AyushComponent()}
      <AyushComponent />
      <AyushComponent></AyushComponent>   
      <h1>Working in Deloitte</h1>
    </div>
);

root.render(<AyushComponent2 />);