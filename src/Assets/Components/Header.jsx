import React from "react";

const Header = (props) => {
    return (
        <div className="container text-center mt-5">
            <h1>{props.title}</h1>  
            <hr className="border border-4 border-primary rounded"/>     
        </div>
    )
}

export default Header