const parent =React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{style:{color:"red"}},"Hello From React"),
React.createElement("p",null,"This is a paragraph")]));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);