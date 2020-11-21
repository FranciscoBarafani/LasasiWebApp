import { combineReducers } from "redux";
import * as actions from "../actions/constants";

let initialTopics = {
  topics: [{}],
  currentList: {},
  totalItems: 0,
  currentPage: 0,
};

let initialLinks = {
  links: [{}],
};
//REDUCERS
function topics(state = initialTopics, action) {
  switch (action.type) {
    case actions.GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    case actions.CHANGE_TOPICS_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case actions.SET_CURRENT_LIST_TOPICS:
      return {
        ...state,
        currentList: action.payload,
      };
    case actions.SET_TOTAL_ITEMS_TOPICS:
      return {
        ...state,
        totalItems: action.payload,
      };
    default:
      return state;
  }
}

function links(state = initialLinks, action) {
  switch (action.type) {
    case actions.SET_LINKS:
      return {
        ...state,
        links: action.payload,
      };
    default:
      return state;
  }
}

const reducers = combineReducers({ topics, links });

export default reducers;
