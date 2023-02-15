// export const windowload = () => {
//   return (anyname) => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => {
//         anyname({
//           type: "ChangeName",
//           payload: json.title,
//         });
//       });
//   };
// };


export const newwindowload = () => {
    return async () =>{
        const datalink = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const res2 = datalink.json();
        return res2;
    }
}