
import data from './data'
import {useState} from 'react'

import './style.css'

export default function Accordian() {
    const [selected, setselected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
        setselected(getCurrentId == selected ? null: getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {

        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1){
            cpyMultiple.push(getCurrentId);
        }else{
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(cpyMultiple);
    }
    console.log(selected, multiple);

    return (<div className= 'wrapper'>
            <button onClick = {() => setEnableMultiSelection(!enableMultiSelection)}
                className= {`togglebutton ${enableMultiSelection ? 'active' : ''}`}>
                    Enable</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div className= 'item'>
                    <div onClick = {enableMultiSelection ? 
                        () => handleMultiSelection(dataItem.id)
                        :() => handleSingleSelection(dataItem.id)
                        } 
                        className="title">
                        
                        <h3>{dataItem.question}</h3>
                        <span id= 'plusSymbol'>+</span>
                    </div>
                    {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1? 
                        (<div className="contents">
                            {dataItem.answer}
                        </div>): null
                    }
                </div>
                ) : 
                <div>
                    No data found
                </div> 
            }
        </div>
    </div>);
}