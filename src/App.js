
import React, {useState} from 'react';
//import {Payment,Input,PaymentInfo} from './input';
//import Output from './output';
//import PaymentInfo from './paymentinfo';
import Header from './Header';
import Input from './input';
import Output from './output';
import Footer from './footer';
import Dashboard from "./Dashboard";

function App() {

/*const [amtstate,Setamtstate]=useState(0);
const [service,Setservice]=useState(0)
const [namestate,Setnamestate]=useState("Shailendra");


const [theArray, setTheArray] = useState([]);

var arr=" ";

const changesAmt=(value)=>{
  Setamtstate(value);
  setTheArray(theArray=>[...theArray,value]);
 
};
const changeSer=(value)=>{
  arr=value+"this";
  Setservice(arr);
};
const changeName=(value)=>{
  Setnamestate(value);
  setTheArray(theArray=>[...theArray,value]);
};
function handle(){

  console.log("Hello")
  
  

}*/



  return (
    <div className="App">
      {/*<Payment change1={changesAmt} />
       <Input change2={changeSer  } /><br/>
       <PaymentInfo change3={changeName } handleChange={handle}  /><br/>
       <Output name={amtstate} data={service} dataarr={theArray}/>
     {/* <Input2 change1={change1}/> <br/>    
     <Header/>
     <Input/>
     <Output/>
     <Footer/>*/}
     <Dashboard/>
     

      
    </div>
  );
}

export default App;
