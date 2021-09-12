import React from'react';
import "./css/Headerstyle.css";
 export default class Header extends React.Component{
    constructor(props){
        super(props)



    }
    render() {
        return(<div className="outer">
            <div className="head">Tip Calculator</div>
            <div className="info">Build in React</div>
        </div>)
    }
}