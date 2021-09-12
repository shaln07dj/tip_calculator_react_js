import React from "react";
import Header from "./Header";
import Input from "./input";
import Output from "./output";
import Footer from "./footer";
 
 export default class Dashbord extends React.Component{
    constructor(props){
        super(props)
        this.state={info:[]

        }
        var val,ser,name;
    }
    handleChange1=(event)=>{
       this.val= parseInt(event.target.value)
       console.log(this.val)
      

    }
    handleChange2=(event)=>{
        this.ser=parseInt(event.target.value)
        console.log(this.ser)
    }
    handleChange3=(event)=>{
        this.name=(event.target.value)
        console.log(this.name)
    }
    handleClick=()=>{
        let paymentinfo={
            amount:this.val,
            service:this.ser,
            name:this.name,
        }
        this.setState({info:[...this.state.info,paymentinfo]})
        console.log(this.state.info)
    }
    
    render(){ 
        return(
            <diV>
                <Header/>
                <Input handle1={this.handleChange1} handle2={this.handleChange2} handle3={this.handleChange3}handle={this.handleClick}/>
                <Output paymentDetails={this.state.info}/>
                <Footer/>
            </diV>
        )
    }
    
    }
