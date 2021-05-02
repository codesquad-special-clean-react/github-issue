import React, {useState, useEffect} from "react";
import LabelItem from "./LabelItem";
import {fetchLabels, addLabels,  deteleLabel} from "../../api/LabelApi";
import Header from "./Header";
import styled from "styled-components";

function LabelList() {
    const [labels, setLabels] = useState([]);
    const [labelsLength, setLabelsLength] = useState(0);

    const getLabels = () => {
        fetchLabels("http://localhost:3001/labels")
            .then((data) => {
                setLabels(data);
                setLabelsLength(data.length);
            })
    }

    const addLabelAPI = (url, id) => {
        addLabels(url, id)
            .then((data) => {
                getLabels();
            })
    }

    const deleteLabelAPI = (url, id) => {
        deteleLabel(url, id)
            .then((data) => {
                getLabels();
            })
    }

    useEffect( ()=> {
        getLabels();
    }, []);

    return (
        <LabelListContainer>
            <Header addLabelAPI={addLabelAPI}/>
            <ListUl>
                <ListLi>
                    <div>
                        <b>{labelsLength} labels</b>
                    </div>
                </ListLi>
                <LabelItem labels={labels} addLabelAPI={addLabelAPI} deleteLabel={deleteLabelAPI}/>
            </ListUl>
        </LabelListContainer>
    );
}

export default LabelList;

const LabelListContainer = styled.div`
  padding: 3em 10% 0 10%;
`

const ListUl = styled.ul`
  padding: 0px;
  list-style:none;
  border: 1px solid #e4e7ea;
  border-radius: 5px;
`

const ListLi = styled.li`
  padding: 20px 20px;
  background-color: #f6f8fa;
  border-bottom: 1px solid #e3e6e9;
`
