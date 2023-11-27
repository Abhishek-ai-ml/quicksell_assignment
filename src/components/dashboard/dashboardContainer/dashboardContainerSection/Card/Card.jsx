import React from 'react'
import './Card.css'

import {MdAdd} from 'react-icons/md'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {FaRegCircle} from 'react-icons/fa'
import {BsCircleHalf} from 'react-icons/bs'
import {FaCheckCircle} from 'react-icons/fa'
import {MdCancel, MdOutlineSignalCellularAlt, MdSignalCellular3Bar, MdSignalCellular1Bar} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'

const Card = ({data, p, s}) => {
  return (
    <div className='cardContainer'>
      <div className='mainCard'>
        <div className='cardHeader'>
            <div>{data?.id}</div>
            <div className='cardPic'></div>
        </div>

        <div className='cardTitle'>
            {s && (s === "Backlog" ? <FaRegCircle/> : s === "Todo" ? <FaRegCircle/> : s === "In progress" ? <BsCircleHalf color='orange'/> : s === "Done" ? <FaCheckCircle color='blue'/> : <MdCancel color='grey'/>)}
            {data?.title.substr(0, 26)}..
        </div>

        <div className='cardDetails'>
        {p && (p === 0 ? <HiOutlineDotsHorizontal/> : p === 4 ? <RiErrorWarningFill color='orange'/> : p === 3 ? <MdOutlineSignalCellularAlt/> : p === 2 ? <MdSignalCellular3Bar/> : <MdSignalCellular1Bar/>)}
            <div className='cardTags'>
                {
                    data?.tag.map((tg) => (<div className='cardTag'> <div className='tagCircle'></div> {tg}</div>))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
