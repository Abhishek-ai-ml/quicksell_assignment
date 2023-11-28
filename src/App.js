import { useEffect, useState } from 'react';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';

import Header from "./components/header/Header";

function App() {
  const[info, setInfo] = useState(null);
  const[grouping, setGrouping] = useState("Status");
  const[filtering, setFiltering] = useState("");
  const status = [
    { st: "Backlog"},
    { st: "Todo"},
    { st: "In progress"},
    { st: "Done"},
    { st: "Canceled"}
  ]

  const priority = [
    {pri: "No priority"},
    {pri: "Urgent"},
    {pri: "High"},
    {pri: "Medium"},
    {pri: "Low"}
  ]

  useEffect(() => {
    fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
    .then(res => res.json())
    .then(data => {
      console.log("API DATA IS ==>", data);
      setInfo(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className="mainContainer">
      <div><Header setGrouping={setGrouping} setFiltering={setFiltering}/></div>

      <div><Dashboard grouping={grouping} filtering={filtering} status={status} priority={priority} user={info?.users} info={info}/></div>
    </div>
  );
}

export default App;
