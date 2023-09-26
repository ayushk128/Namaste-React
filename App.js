// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz : "abc"},
//   "Hello world from React!"
// );

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  //Take the object, creates the tag and put the tag inside root

// /**
//  *
//  * <div id = "parent">
//  *  <div id = "child">
//  *      <h1>I am h1 tag</h1>
//  *  </div>
//  * </div>
//  *
//  **/

// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         React.createElement("h1", {}, "I am h1 tag")
//     )
// )
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

/**
 *
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 *
 **/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/**
 *
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 *  <div id = "child2">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 *
 **/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
