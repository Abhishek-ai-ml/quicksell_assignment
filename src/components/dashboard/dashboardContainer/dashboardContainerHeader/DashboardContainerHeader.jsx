import React from 'react'
import './dashboardContainerHeader.css'
import {MdAdd} from 'react-icons/md'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {FaRegCircle} from 'react-icons/fa'
import {BsCircleHalf} from 'react-icons/bs'
import {FaCheckCircle} from 'react-icons/fa'
import {MdCancel, MdOutlineSignalCellularAlt, MdSignalCellular3Bar, MdSignalCellular1Bar} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'

const DashboardContainerHeader = ({s, p, u, u1, u2, u3, u4, u5, setStatus, todo, backlog, inProg, canceled, done, noPriority, low, medium, high, urgent}) => {
  return (
    <div className='containerHeader'>
        <div className='headerLeft'>
            {s && (s?.st === "Backlog" ? <FaRegCircle/> : s?.st === "Todo" ? <FaRegCircle/> : s?.st === "In progress" ? <BsCircleHalf color='orange'/> : s?.st === "Done" ? <FaCheckCircle color='blue'/> : <MdCancel color='grey'/>)}
            {p && (p?.pri === "No priority" ? <HiOutlineDotsHorizontal/> : p?.pri === "Urgent" ? <RiErrorWarningFill color='orange'/> : p?.pri === "High" ? <MdOutlineSignalCellularAlt/> : p?.pri === "Medium" ? <MdSignalCellular3Bar/> : <MdSignalCellular1Bar/>)}
            {u && <div className='profilePic'></div>}

            {s && <div>{s?.st}</div>}
            {p && <div>{p?.pri}</div>}
            {u && <div>{u?.name}</div>}

            {s && <div>{s?.st === "Backlog" ? backlog?.length : s?.st === "Todo" ? todo?.length : s?.st === "In progress" ? inProg?.length : s?.st === "Done" ? done?.length : canceled?.length}</div>}
            {p && <div>{p?.pri === "No priority" ? noPriority.length : p.pri === "Urgent" ? urgent.length : p?.pri === "High" ? high.length : p?.pri === "Medium" ? medium.length : low.length}</div>}
            {u && <div>{u?.id === "usr-1" ? u1.length : u?.id === "usr-2" ? u2.length : u?.id === "usr-3" ? u3.length : u?.id === "usr-4" ? u4.length : u5.length}</div>}
        </div>

        <div className='headerRight'>
            <MdAdd/>
            <HiOutlineDotsHorizontal/>
        </div>
    </div>
  )
}

export default DashboardContainerHeader
