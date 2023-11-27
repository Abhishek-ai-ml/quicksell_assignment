import React, { useState } from 'react'
import DashboardContainerHeader from './dashboardContainerHeader/DashboardContainerHeader'
import DashboardContainerSection from './dashboardContainerSection/DashboardContainerSection'
import './dashboardContainer.css'

const DashboardContainer = ({s, p, u, info, filtering}) => {
    const[status, setStatus] = useState(s);
    const[priority, setPriority] = useState(p);
    const[user, setUser] = useState(u);
    const filter = localStorage.getItem("filtering") ? localStorage.getItem("filtering") : filtering;
    const group = localStorage.getItem("grouping");
    var todo = [];
    var inProg = [];
    var done = [];
    var backlog = [];
    var canceled = [];
    var noPriority = [];
    var urgent = [];
    var high = [];
    var medium = [];
    var low = [];
    var u1 = [];
    var u2 = [];
    var u3 = [];
    var u4 = [];
    var u5 = [];

    info?.tickets.map((i) => {if(i.status === "Todo") {todo.push(i)}})
    info?.tickets.map((i) => {if(i.status === "In progress") {inProg.push(i)}})
    info?.tickets.map((i) => {if(i.status === "Done") {done.push(i)}})
    info?.tickets.map((i) => {if(i.status === "Backlog") {backlog.push(i)}})
    info?.tickets.map((i) => {if(i.priority === 0) {noPriority.push(i)}})
    info?.tickets.map((i) => {if(i.priority === 1) {low.push(i)}})
    info?.tickets.map((i) => {if(i.priority === 2) {medium.push(i)}})
    info?.tickets.map((i) => {if(i.priority === 3) {high.push(i)}})
    info?.tickets.map((i) => {if(i.priority === 4) {urgent.push(i)}})
    info?.tickets.map((i) => {if(i.userId === "usr-1") {u1.push(i)}})
    info?.tickets.map((i) => {if(i.userId === "usr-2") {u2.push(i)}})
    info?.tickets.map((i) => {if(i.userId === "usr-3") {u3.push(i)}})
    info?.tickets.map((i) => {if(i.userId === "usr-4") {u4.push(i)}})
    info?.tickets.map((i) => {if(i.userId === "usr-5") {u5.push(i)}})

    if(group === "Status" && filter === "Priority") {
      todo = todo.sort((a,b) => b.priority - a.priority);
      inProg = inProg.sort((a, b) => b.priority - a.priority);
      done = done.sort((a, b) => b.priority - a.priority);
      backlog = backlog.sort((a, b) => b.priority - a.priority);
    }

    if(group === "Status" && filter === "Title") {
      todo = todo.sort((a, b) => a.title.length - b.title.length);
      inProg = inProg.sort((a, b) => a.title.length - b.title.length);
      done = done.sort((a, b) => a.title.length - b.title.length);
      backlog = backlog.sort((a, b) => a.title.length - b.title.length);
    }

    if(group === "User" && filter === "Priority") {
      u1 = u1.sort((a, b) => b.priority - a.priority);
      u2 = u2.sort((a, b) => b.priority - a.priority);
      u3 = u3.sort((a, b) => b.priority - a.priority);
      u4 = u4.sort((a, b) => b.priority - a.priority);
      u5 = u5.sort((a, b) => b.priority - a.priority);
    }

    if(group === "User" && filter === "Title") {
      u1 = u1.sort((a, b) => a.title.length - b.title.length);
      u2 = u2.sort((a, b) => a.title.length - b.title.length);
      u3 = u3.sort((a, b) => a.title.length - b.title.length);
      u4 = u4.sort((a, b) => a.title.length - b.title.length);
      u5 = u5.sort((a, b) => a.title.length - b.title.length);
    }

    if(group === "Priority" && filter === "Priority") {
      noPriority = noPriority.sort((a, b) => b.priority - a.priority);
      urgent = urgent.sort((a, b) => b.priority - a.priority);
      high = high.sort((a, b) => b.priority - a.priority);
      medium = medium.sort((a, b) => b.priority - a.priority);
      low = low.sort((a, b) => b.priority - a.priority);
    }

    if(group === "Priority" && filter === "Title") {
      noPriority = noPriority.sort((a, b) => a.title.length - b.title.length);
      urgent = urgent.sort((a, b) => a.title.length - b.title.length);
      high = high.sort((a, b) => a.title.length - b.title.length);
      medium = medium.sort((a, b) => a.title.length - b.title.length);
      low = low.sort((a, b) => a.title.length - b.title.length);
    }

  return (
    <div className='dashboardContainer'>
        {s && <DashboardContainerHeader s={s} setStatus={setStatus} todo={todo} inProg={inProg} done={done} backlog={backlog} canceled={canceled}/>}
        {p && <DashboardContainerHeader p={p} setPriority={setPriority} noPriority={noPriority} low={low} medium={medium} high={high} urgent={urgent}/>}
        {u && <DashboardContainerHeader u={u} setUser={setUser} u1={u1} u2={u2} u3={u3} u4={u4} u5={u5}/>}

        {s && <DashboardContainerSection info={info} status={status} todo={todo} inProg={inProg} done={done} backlog={backlog}/>}
        {p && <DashboardContainerSection info={info} priority={priority} noPriority={noPriority} low={low} medium={medium} high={high} urgent={urgent}/>}
        {u && <DashboardContainerSection info={info} user={user} u1={u1} u2={u2} u3={u3} u4={u4} u5={u5}/>}
    </div>
  )
}

export default DashboardContainer
