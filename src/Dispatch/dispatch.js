const changename = (name) => {
  return {
    type: "ChangeName",
    payload: name,
  };
};

export default changename;
