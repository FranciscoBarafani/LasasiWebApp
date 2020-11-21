import { createStore } from "redux";
import reducers from "../reducers/reducers";

//Estado inicial del store al arrancar la aplicacion
const initialState = {
  topics: {
    topics: [{}],
    currentList: {},
    totalItems: 0,
    currentPage: 0,
  },
  links: {
    links: [{}],
  },
};

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
