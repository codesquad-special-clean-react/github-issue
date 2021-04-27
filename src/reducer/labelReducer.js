import React from "react";
import labelFetcher from "../service/LabelFetch";
// import from "../"
import LabelFetch from "../service/LabelFetch";

// 액션 타입 만들기
const SET_LABLES = "SET_LABELS";
const CREATE_LABEL = "CREATE_LABEL";
const READ_LABELS = "READ_LABELS";
const UPDATE_LABEL = "UPDATE_LABEL";
const DELETE_LABEL = "DELETE_LABEL";

// 액션 생성 함수 만들기
export const setLabels = (labels) => ({ type: SET_LABLES, labels });
export const createLabel = (label) => ({ type: CREATE_LABEL, label });
export const readLabels = () => ({ type: READ_LABELS });
export const updateLabel = () => ({ type: UPDATE_LABEL });
export const deleteLabel = () => ({ type: DELETE_LABEL });

// 초기 상태 선언
const initialLabels = [];

// 리듀서
export default function labelsReducer(state = initialLabels, action) {
  switch (action.type) {
    case SET_LABLES:
      return action.labels;
    case CREATE_LABEL:
      return state.concat(action.label);
    case READ_LABELS:
      break;
    case UPDATE_LABEL:
      break;
    case DELETE_LABEL:
      break;
    default:
      throw new Error();
  }
}

export const LabelsContext = React.createContext();
