// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "../state/action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  let cog;
  switch (action.type) {
    case MOVE_CLOCKWISE:
      cog = state < 5 ? state + 1 : 0;
      return cog;
    //cog < 5 ? cog + 1 : 0
    case MOVE_COUNTERCLOCKWISE:
      cog = state !== 0 ? state - 1 : 5;
      return cog;
    //cog !== 0 ? cog - 1 : 5
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
