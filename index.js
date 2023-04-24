const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
// 1- this heading variable is not a h1 tag but a react element which means it is JS object and type of h1.
// 2- There is something called props under which your attributes(inside the {}) and whatever you pass on(in this case- Hello World from React!) comes
// 3- ex - {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "heading",
//         "children": "Hello World from React!"
//     },
//     "_owner": null,
//     "_store": {}
// }
console.log(heading);

// in {} we'll give attributes to the tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
