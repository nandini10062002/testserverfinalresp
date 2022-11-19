import React from "react";
import "./Dashboard.css";

import Cards from "./cards/Cards";
import Search from "./search/Search";
import Table from "./table/Table"
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {

  const [searchData, setSearchData] = useState([])
  console.log(searchData[0])

  useEffect(()=>{
    setCardData(searchData[1]||[])
    setListData(searchData[0]||[])
  },[searchData])

  const defaultCardData = [
    {key: 1, count: 0, total: 0, title: 'APPROVED'},
    {key: 2, count: 0, total: 0, title: 'REJECTED'},
    {key: 3, count: 0, total: 0, title: 'PRIVILEGE LEAVES'},
    {key: 4, count: 0, total: 0, title: 'MATERNITY LEAVES'}
  ]

  const [cardData,setCardData] = useState(defaultCardData);
  const [listdata,setListData] = useState([]);

  return (
    <>
      <div className="main">
        <div className="head">
          <div className="head__title">Dashboard</div>
          <div className="head__profile">
            <span>Welcome, Jane!</span>
            <img src="img/Ellipse 2.png" alt="" />
          </div>
        </div>
        <Cards data={cardData} />
        <Search backData = {setSearchData}/>
        <Table data = {listdata} />
      </div>
    </>
  );
};

export default Dashboard;
