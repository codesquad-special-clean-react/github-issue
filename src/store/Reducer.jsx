export const reducer = (state, action) => {
  console.log("reducer", action.type);

  switch (action.type) {
    case "CREATEINFO":
      return { labelName: state.labelName, desc: state.desc };
    default:
      throw new Error();
  }
};
