import React from "react";
import { connect } from "react-redux";
import { anothername } from "./Action/myaction";
// import { newwindowload } from "./Action/windowload";
// import { useDispatch, useSelector } from "react-redux";

const Basic = (props) => {
  //console.log(props);

  const onclickgetdata = () => {
    props.changename("HD");
  };

  const onclickgetdata2 = () => {
    props.changeid("14");
  };

  // const selectdata = useSelector((anyname)=>anyname);
  // console.log(selectdata);

  // console.log({windowload});
  // console.log({newwindowload});

// console.log({newwindowload});

  return (
    <>
      <span>
        <span>{props.myname}, </span>
        <span>your Student id : {props.studid} </span>
        <button
          className="btn btn-primary"
          // onClick={() => {
          //   props.changename("HD");
          // }}

          onClick={() => {
            onclickgetdata();
            onclickgetdata2();
          }}
        >
          Get Data
        </button>
      </span>

      <div className="container">
        

      </div>
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
      //   argu({ type: "ChangeName", payload: name });
      argu(anothername(name));
    },
    changeid: (id) => {
      argu({ type: "ChangeID", payload: id });
    },
  };
};

export default connect(mappingstate, changename2)(Basic);
