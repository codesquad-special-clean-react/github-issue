import LabelItemDetail from "./LabelItemDetail";

export default function LabelItem({ labelList }) {
  return (
    <>
      {labelList.map((label) => {
        return <LabelItemDetail label={label} />;
      })}
    </>
  );
}
