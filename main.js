/*
 <div id ="parent">
      <div id = "child">
      <h1>I m h1 tag.</h1>
      </div>
  </div>

*/

/*
const page = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am a h1 tag")
  )
);
*/

// creating siblings

/*
 <div id ="parent">
      <div id = "child">
      <h1>I m h1 tag.</h1>
      <p class = "para">I m a p tag.</p>
      </div>
  </div>

*/

/*const page = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("p", { class: "para" }, "I am a p tag"),
  ])
);
*/

/*

 <div id ="parent">
      <div id = "child1">
      <h1>I m h1 tag.</h1>
      <p class = "para">I m a p tag.</p>
      </div>
      <div id = "child2">
      <h1>I m h1 tag.</h1>
      <p class = "para">I m a p tag.</p>
      </div>
  </div>

*/

const page = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("p", { className: "para" }, "I am a p tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("p", { className: "para" }, "I am a p tag"),
  ]),
]);

// this code looks unreadable. So it would be hard to create complex structure through it.
// To overcome this, we ll take the help of JSX

console.log(page);

ReactDOM.createRoot(document.getElementById("root")).render(page);
// render method is helping us to put the react element or the object on the page.
