const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element1 = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"yellow", fontSize:"30px", color:"pink"}},"Hello jay bhai");

// Reactdom.render(element,document.getelementById('root'));

const div1 =React.createElement('div',{},[element,element1]);

const Reactroot = ReactDom.createRoot(document.getElementById('root'));

// React root container:  is
// Reactroot.render(element);
// Reactroot.render(element1);

Reactroot.render(div1);
