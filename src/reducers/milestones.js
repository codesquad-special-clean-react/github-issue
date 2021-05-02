const SET_MILESTONES = "SET_MILESTONES";

export const setMilestones = (payload) => {
  return { type: SET_MILESTONES, payload };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MILESTONES:
      return {
        ...state,
        milestones: action.payload,
      };
    default:
      console.log("해당되는 액션 타입이 존재하지 않습니다.");
  }
};
