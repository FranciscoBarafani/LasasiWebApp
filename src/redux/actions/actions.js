import * as actions from "./constants";

//REDUX ACTIONS
export const getTopics = (state) => {
  return {
    type: actions.GET_TOPICS,
    payload: state,
  };
};

export const setCurrentTopicList = (state) => {
  return {
    type: actions.SET_CURRENT_LIST_TOPICS,
    payload: state,
  };
};

export const setTotalItemsTopics = (state) => {
  return {
    type: actions.SET_TOTAL_ITEMS_TOPICS,
    payload: state,
  };
};

export const changeTopicsPage = (state) => {
  return {
    type: actions.CHANGE_TOPICS_PAGE,
    payload: state,
  };
};
