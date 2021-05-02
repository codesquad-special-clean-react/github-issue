const SET_MILESTONES = "SET_MILESTONES";
const ADD_MILESTONE = "ADD_MILESTONE";
const UPDATE_MILESTONE = "UPDATE_MILESTONE";
const REMOVE_MILESTONE = "REMOVE_MILESTONE";
export const setMilestones = (payload) => {
  return { type: SET_MILESTONES, payload };
};

export const addMilestone = (payload) => {
  return { type: ADD_MILESTONE, payload };
};

export const updateMilestone = (payload) => {
  return { type: UPDATE_MILESTONE, payload };
};

export const removeMilestone = (payload) => {
  return { type: REMOVE_MILESTONE, payload };
};

export const reducer = (state, action) => {
  const { milestones } = state;
  const { payload } = action;

  switch (action.type) {
    case SET_MILESTONES:
      return {
        ...state,
        milestones: payload,
      };
    case ADD_MILESTONE:
      return {
        ...state,
        milestones: [...milestones, action.payload],
      };
    case UPDATE_MILESTONE:
      const targetMilestone = milestones.find((m) => m.id === payload.id);
      const targetMilestoneIndex = milestones.indexOf(targetMilestone);
      return {
        ...state,
        milestones: [
          ...milestones.slice(0, targetMilestoneIndex),
          payload,
          ...milestones.slice(targetMilestoneIndex + 1, milestones.length),
        ],
      };
    case REMOVE_MILESTONE:
      return {
        ...state,
        milestones: milestones.filter((m) => m.id !== payload),
      };
    default:
      console.log("해당되는 액션 타입이 존재하지 않습니다.");
  }
};
