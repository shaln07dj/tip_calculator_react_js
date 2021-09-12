import React  from 'react';
import "./css/footer.css";

class Footer  extends React.Component{
    constructor(porps){
        super(porps)
    }
    render(){
    
        var year = new Date().getFullYear();
        return(<div className="footer_div"><div className="inner_div_footer">©{year} TIP-CALCULATOR</div></div>)
    }
}
export default Footer;