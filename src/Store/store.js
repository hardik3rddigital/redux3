import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createreducer from "../Reducer/createreducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);



const reduxstore = createStore(createreducer, composeEnhancers(applyMiddleware(thunk)));
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