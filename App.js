const head1 = React.createElement("h1", {}, "This is H1");
const head2 = React.createElement("h1", {}, "This is H2");
const child=React.createElement("div", {id:"child"}, [head1 , head2]);
const parent=React.createElement("div", {id:"parent"}, [child, child]);

const heading = React.createElement("h1", { id: "heading" }, "Hey there");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
