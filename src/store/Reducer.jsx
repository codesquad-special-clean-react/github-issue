export const initialCreateInfo = {
  createInput: {
    labelName: '',
    desc: '',
  },
  randomColor: 'color 선택',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATEINFO':
      return {
        ...state,
        createInput: { ...state.createInput, [action.labelName]: action.desc },
        randomColor: action.randomColor,
      };
    default:
      throw new Error();
  }
};
