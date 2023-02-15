import React from "react";
import { connect } from "react-redux";

const Basic = (props) => {
    console.log(props);
    return(
        <>
            <span>{props.myname}, </span>
            <span>Your Student ID : {props.studid}</span>
        </>
    )
}

const mappingstate = (state) => {
    return {
        myname : state.studentname,
        studid : state.studentId
    }
}

export default connect(mappingstate)(Basic);
