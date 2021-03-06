// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   var productName = ['Photoshop','All Apps',"Acrobat Pro"];
//   var productPrice = ['US$-9.99','US$-53.99','US$-14.99'];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Product name = {productName[0]} price = {productPrice[0]}></Product>
//         <Product name = {productName[1]} price = {productPrice[1]}></Product>
//         <Product name = {productName[2]} price = {productPrice[2]}></Product>

//       </header>
//     </div>
//   );
// }

// // --Create a Component --//
// function Product(props) {
// const productStyle={
//   border:'1px solid gray',
//   borderRadius:'5px',
//   backgroundColor:'lightgray',
//   color:'black',
//   width:'200px',
//   margin:'10px',
//   float:'left'

// }

//   return (
//     <div style={productStyle}>
//       <img
//         src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.adobe.com%2Fcontent%2Fdam%2Fshared%2Fimages%2Fproduct-icons%2Fsvg%2Fdocument-cloud.svg&imgrefurl=https%3A%2F%2Fwww.adobe.com%2Fproducts%2Fcatalog.html&tbnid=Qok2bFYDqO6LCM&vet=12ahUKEwjU2ayp-ZvvAhXM4XMBHXYXCiwQMygAegUIARDQAQ..i&docid=Z_qi08Xobhlv2M&w=800&h=780&q=adobe&ved=2ahUKEwjU2ayp-ZvvAhXM4XMBHXYXCiwQMygAegUIARDQAQ"
//         alt="adobe"
//       />
//       <h3>{props.name}</h3>
//       <h2>{props.price}</h2>
//       <p>
//         Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of
//         cloud storage (1TB available).
//       </p>
//       <p>Compare photography plans See plan & pricing details</p>
//       <button style={{backgroundColor:'#0D66D0',border:'none',padding:'10px',color:'white'}}>Buy Now</button>
//     </div>
//   );
// }

// --Create Multiple Component from an array of objects --//
import React,{useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  var cricketers = [
    "Shakib Al Hasan",
    "Tamim Iqbal",
    "Mushfiqur Rahman",
    "Mahrafi Murtaza",
    "Mahmudullah Riyad",
    "Mustafizur Rahman",
    "Soumya Sarkar",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h4>Bangaldesh Cricketers List :</h4>

        {/* --Component State -- */}
        <Counter>

        </Counter>

        {/* --React Dynamic Way -- */}
        <ul>
          {cricketers.map((player) => (
            <li>{player}</li>
          ))}
        </ul>

        {/* --Normal Way-- */}

        <u>
          <p>Normar Way</p>
        </u>
        <ul>
          <li>{cricketers[0]}</li>
          <li>{cricketers[1]}</li>
          <li>{cricketers[2]}</li>
          <li>{cricketers[3]}</li>
          <li>{cricketers[4]}</li>
        </ul>
      </header>
    </div>
  );
}

// -- Create a Component --//
function Counter(){
  // --Create or Declare  a State --//
  const [count,setCount] = useState(0);

  // --Increse Button --//
  const handleIncrese = () => {
    const newCount = count + 1;
    setCount(newCount);
  };


  // --Decrece Button --//
  // const handleDecrece = () =>{
  //   const newCount = count -1;
  //   setCount(newCount);
  // }
  const handleDecrece = () => setCount(count - 1);


  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrese}>Increse</button>
      {/* <button onClick={() => setCount(count + 1)}>Increse</button> */}

      <button onClick = {handleDecrece}>Decrece</button>
      
    </div>
  )
}

export default App;
