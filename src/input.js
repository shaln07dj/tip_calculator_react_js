import React from 'react';
import "./css/input.css";

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div className="inpt">
            <div style={{height:"150px"}}><h4> Enter Your Bill Amount</h4>
                <input style={{width:"70%",marginLeft:"15%",boxShadow: "2px 5px 5px 2px rgba(71, 71, 71, 0.3)",border:"1px solid",height:"25px"}} onChange={this.props.handle1}/>
            
            </div>
            <hr/>
            <div className="service_info">
                
            <label for="service">How was the service:</label>
<select className="option" name="service" onChange={this.props.handle2} >
<option value ="0" >select</option>
  <option value ="20">Excellent</option>
  <option value="10">Modrate</option>
  <option value="5">Bad</option>

</select> 
<input style={{marginLeft:"20px"}} placeholder="  Customer Name" onChange={this.props.handle3}/>
<button style={{marginLeft:"20px",backgroundColor:"rgb(57, 174, 241)", boxShadow: "2px 5px 5px 2px rgba(71, 71, 71, 0.3)",color:"#fff",border:"none",height:"30px"}} onClick={this.props.handle}>Add Customer</button>
            </div>
        </div>)
    }
}
export default Input;