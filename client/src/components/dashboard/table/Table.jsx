import React from "react";
import "./Table.css"

const Table =({data})=>{
    return(
        <>
        <div className="container" style={{"marginTop": "25px"}}>
            <div className="tablehead">Sr no.</div>
            <div className="tablehead">Code</div>
            <div className="tablehead">Name</div>
            <div className="tablehead">Leave Type</div>
            <div className="tablehead">Applied Date</div>
            <div className="tablehead">From</div>
            <div className="tablehead">To </div>
            <div className="tablehead">Status</div>
        </div>
        <div className="listContainer">
        {data.map((sData)=>{
            return(
                <div className="container" key = {sData.sr}>
                <div className="tablehead">{sData.sr}</div>
                <div className="tablehead">{sData.empcode}</div>
                <div className="tablehead">{sData.name}</div>
                <div className="tablehead">{sData.type}</div>
                <div className="tablehead">{sData.adate}</div>
                <div className="tablehead">{sData.from}</div>
                <div className="tablehead">{sData.to}</div>
                {sData.status === "APPROVED"?<div className="tablehead"><img src="img/icon/check-circle.svg" alt="dashboard_icon"/></div>: sData.status ==="REJECTED"?<div className="tablehead"><img src="img/icon/x.svg" alt="dashboard_icon"/></div>:<div className="tablehead"><img src="img/icon/loader.svg" alt="dashboard_icon"/></div>}
                
                {/* <div className="tablehead">{sData.status}</div> */}

            </div>
            )
        })}
       </div>
        </>
    )
}

export default Table 