// creating h1 element ..... {}-> used for attributes to give to h1 tag
// createElement(---tag--   ,  ----object----  , ------children or content------)


{/* <div className="parent">
    <div className="child">
        <h1>H1 tag</h1>
        <h2>H2 tag</h2>
    </div>
</div> */}
//**********nested structure********* */
const parent=React.createElement("div",{id:"parent"},
             React.createElement("div",{id:"child"}, 
            [ React.createElement("h1",{},"H1 tag"),React.createElement("h2",{},"H2 tag")]));  // to create siblings use array

const heading=React.createElement("h1",{id:"heading"},"hello ji!!!!");

// creating react for browsers
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
console.log(parent);


    