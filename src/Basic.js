import React from "react";
import { connect } from "react-redux";

const Basic = (props) => {
  console.log(props);

  const onclickgetdata = () =>{
        props.changename('HD')
  }

  const onclickgetdata2 = () =>{
    props.changeid('14')
}

  return (
    <>
      <span>{props.myname}, </span>
      <span>your Student {props.studid} </span>
      <button
        className="btn btn-primary"
        // onClick={() => {
        //   props.changename("HD");
        // }}

        onClick={()=> {onclickgetdata(); onclickgetdata2();}}
      >
        Get Data
      </button>
    </>
  );
};

const mappingstate = (state) => {
  return {
    myname: state.studentname,
    studid: state.studentId,
  };
};

const changename2 = (argu) => {
  return {
    changename: (name) => {
      argu({ type: "ChangeName", payload: name });
    },
    changeid: (id) => {
      argu({ type: "ChangeID", payload: id });
    },
  };
};

export default connect(mappingstate, changename2)(Basic);
