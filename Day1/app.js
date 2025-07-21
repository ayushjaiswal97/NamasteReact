const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement('h1', {}, "I'm a h1 tag")
    )
);

const heading = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"}, 
    "Hello World from React!"
);

console.log(parent); // objects

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 