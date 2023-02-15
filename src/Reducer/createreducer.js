const initialData = {
  studentname: "Hardik Patel",
  studentId: 104,
};

const createreducer = (state = initialData, action) => {
  if (action.type === "ChangeName") {
    console.log(action);
    return {
      ...state,
      studentname: action.payload,
    };
  }

  if (action.type === "ChangeID") {
    console.log(action);
    return {
      ...state,
      studentId: action.payload,
    };
  }

  if (action.type === "CollegeName") {
    console.log(action);
    return {
      ...state,
      studentname: action.payload,
    };
  }

  return state;
};

export default createreducer;
