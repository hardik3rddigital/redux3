// https://jsonplaceholder.typicode.com/todos/1

export const anothername = (name) => {
  return (anyname) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        anyname({
          type: "ChangeName",
          payload: json.title,
        });
      });
  };
};
