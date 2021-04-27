import React from "react";

// 액션 타입 만들기
const DIALOG_OPEN = "DIALOG_OPEN";
const DIALOG_CLOSE = "DIALOG_CLOSE";

// 액션 생성 함수 만들기
export const dialogOpen = () => ({ type: DIALOG_OPEN });
export const dialogClose = () => ({ type: DIALOG_CLOSE });

// 초기 상태 선언
const initialDialog = false;

// 리듀서
export default function labelsReducer(state = initialDialog, action) {
  switch (action.type) {
    case DIALOG_OPEN:
      return true;
    case DIALOG_CLOSE:
      return false;
    default:
      throw new Error();
  }
}

export const DialogContext = React.createContext();
