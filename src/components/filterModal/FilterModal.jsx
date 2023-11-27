import React, { useState } from 'react'
import './filterModal.css'

const FilterModal = ({setGrouping, setFiltering}) => {
    const[selectValue, setSelectValue] = useState('Status');
    const[filterValue, setFilterValue] = useState('Priority');
    
    const group = [
        {
            id: 1,
            text:"Status"
        },
        {
            id: 2,
            text: "User"
        },
        {
            id: 3,
            text: "Priority"
        }
    ];

    const order = [
        {
            oid: 1,
            otext: "Priority"
        },
        {
            oid:2,
            otext: "Title"
        }
    ];
    localStorage.setItem("selectValue", selectValue);
    localStorage.setItem("filterValue", filterValue);
    console.log("OUTSIDE", selectValue);
  return (
    <div className='filterModalContainer'>
        <div className='grouping'>
            <div>Grouping</div>
            <select value={selectValue} onChange={(e)=>{console.log("Previous", selectValue); setSelectValue(e.target.value); setGrouping(e.target.value); localStorage.setItem("grouping", e.target.value);}}>
                {
                    group.map((groupItem) => (
                        <option value={groupItem.text} key={groupItem.id}>{groupItem.text}</option>
                    ))
                }
            </select>
        </div>

        <div className='ordering'>
            <div>Ordering</div>
            <select value={filterValue} onChange={(e) =>{setFilterValue(e.target.value); setFiltering(e.target.value); localStorage.setItem("filtering", e.target.value);}}>
                {
                    order.map((orderItem) => (
                        <option value={orderItem.otext} key={orderItem.oid}>{orderItem.otext}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default FilterModal
