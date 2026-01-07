 import React from "react";
 import ReactDOM from "react-dom/client";
 import Card from "../component/Card";
 import Footer from "../component/Footer";
 import Header from "../component/Header";

 



 //header 
 //body
 //footer

  const arr = [{cloth:"T-shirt", Offer:"20-40%Off"},{cloth:"pant", Offer:"30-50%Off"},{cloth:"Jeans",Offer:"30-60%Off"},{cloth:"Kurta",Offer:"20-40%Off"},{cloth:"Pajama", Offer:"10-45%Off"},{cloth:"Blazer",Offer:"20-55%Off"},{cloth:"Shirt",Offer:"20-55%Off"},{cloth:"Bag",Offer:"20-55%Off"}]

 

 function App(){
    return (<>
    
        <Header/>

        <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            

            {
                arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)
            }
       
        </div>

</>
        
    )
 }
 

 
 
 const Root = ReactDOM.createRoot(document.getElementById('root'));
 Root.render(<App/>);
 



 //utils  kya hote hai 
 // 