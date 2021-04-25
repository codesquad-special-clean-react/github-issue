export const setMutationOption = ({ params }) => {
  return {
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
