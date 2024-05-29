import React from "react";

function button(props){
    const {className,onSubmit,type,content}=props
    return (
        <button className={className} type={type} onSubmit={onSubmit}>
            {content}
        </button>
    );
}

export default button