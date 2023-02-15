import { legacy_createStore as createStore } from "redux";
import createreducer from "../Reducer/createreducer";

const reduxstore = createStore(createreducer);
export default reduxstore;

// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// function configureStore(initialState) {
//     return createStore(
//         initialState,
//         applyMiddleware()
//     )
// }

// const reduxstore = configureStore();

// export default reduxstore;