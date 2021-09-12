import React from 'react';
import "./css/output.css";
import { useState } from "react";

/*class Output extends React.Component{
  constructor(props){
  
   
    super(props)
   
  }
  handleTotal=()=>{
    console.log("hello")

  }*/
  

  function Output(props){
    const [totalCust,setTotalCust]=useState(0);
    const [totalTip,settotalTip]=useState(0)
    function handleTotal(){
      console.log(setTotalCust(total_customers))
      settotalTip(total_tip)
      console.log(totalCust)
      console.log(totalTip)

    }
    var total_customers=0,tip=0,total_tip=0;
    return(<div className="outer_out"><div className="oupt"><div style={{textAlign:"center",fontWeight:"bold",marginTop:"5px",fontSize:"20px"}} > Customer List<hr></hr></div><div>


<ul>
  
{props.paymentDetails.map(item=>{
  total_customers=total_customers+1;
  if(item.service==20){
    tip=item.amount*(20/100);

  
  }
  else
  if(item.service==10){
    tip=item.amount*(10/100);

  }
  else
  if(item.service==5){
    tip=item.amount*(5/100);
    
  }
  
  total_tip=total_tip+tip;
  return(
    <li> {`${item.name} is offering  ${tip} rupees.`} </li>
  )
     
})}

</ul>

    </div>
    </div>
    <div className="btn_div">
    <button className="btn_cal" onClick={handleTotal}> Calculate Tip & Customer</button></div><br/>
    <div className="output_table">
    <table cellSpacing="0">
    
      

  <tr>
    <th style={{width:"60%"}} >Total Customers</th>
    <th style={{width:"40%"}}>Tip</th>
  </tr>
  <tr>
    <td style={{width:"70%",textAlign:"center"}}>{totalCust}</td>
    <td style={{width:"30%",textAlign:"center"}}>{totalTip}</td>
    </tr></table>
    </div>
    </div>
  )
  }

export default Output;