import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import LabelItem from "./LabelItem";

const LabelList = ({ labels }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => labels)
  }, [labels])

  return (
      <>
        <LabelListHeader>{data.length} Labels</LabelListHeader>
        {data && data.map(label => <LabelItem key={label.id} label={label}/>)}
      </>
  );
};

const LabelListHeader = styled.div`
margin-top: 2em;
padding: 1.5em;
background-color:#F5F8FA;
border: 1px solid #CCC;
`

export default LabelList;
