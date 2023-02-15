const newupdatedreducer = (state = [], action) => {
  if (action.type === "WishName") {
    console.log(action);
    return {
      ...state,
      studentname: action.payload,
    };
  }

  if (action.type === "WishDream") {
    console.log(action);
    return {
      ...state,
      studentId: action.payload,
    };
  }

  return state;
};

export default newupdatedreducer;