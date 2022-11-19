import React,{useState} from "react";
import axios from "axios"
import "./Search.css";


const Search = ({backData}) => {
  const names = ['Virat Kohli', 'Sonakshi Sinha', 'Alia Bhatt', 'Gopichand', 'Virender Sehwag', 'Adityanath Yogi', 'Shoaib Akhtar', 'Aishwarya Rai', 'Anil Kapoor', 'Rohit Sharma', 'Rakulpreet Singh','Emp_Code_1',
  'Emp_Code_2',
  'Emp_Code_3',
  'Emp_Code_4',
  'Emp_Code_5',
  'Emp_Code_6',
  'Emp_Code_7',
  'Emp_Code_8',
  'Emp_Code_9',
  'Emp_Code_10',
  'Emp_Code_11',]

  const baseURL = "https://magnadatadashboard.herokuapp.com/sort"

  const getData = (e)=>{
    e.preventDefault();
    axios
      .post(baseURL, formData)
      .then((response) => {
        backData(response.data)
        console.log("Date recivied successfully")
      });
  }
 
  const todayDate = new Date()
  console.log(todayDate)
  const [formData, setformData] = useState({name:"",type:"none",period:"none",status:"none",start_date:"2022-01-01",end_date:"2022-11-15"});
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  

  return (
    <form className="searchbar" onSubmit={getData}>
      <div className="search">

        <input list="names" placeholder="Employee Name / ID" name ="name" onChange={handleChange}/>
        
        <datalist id="names">
          {names.map((name) => {
            return <option key = {name}>{name}</option>;
          })}
        </datalist>

        <img src="img/icon/search.svg" alt="search bar" />
      </div>

      <select name="type" onChange={handleChange}>
        <option value="none" defaultValue>
          Leave Type
        </option>
        <option value="Maternity">Maternity Leave</option>
        <option value="Privilege">Privilege Leave</option>
      </select>

      <select name="status" onChange={handleChange}>
        <option value="none" defaultValue>
          Status
        </option>
        <option value="APPROVED">Approved</option>
        <option value="REJECTED">Rejected</option>
        <option value="INPROCESS">Inprocess</option>
      </select>

      <select name="period" onChange={handleChange}>
        <option value="none" defaultValue>
          Period
        </option>
        <option value="full">Full Date</option>
        <option value="1st Half">First Half</option>
        <option value="2nd Half">Second Half</option>
      </select>

      <input className="input__date" type="date" name="start_date" onChange={handleChange}></input>
      <input className="input__date" type="date" name="end_date" onChange={handleChange}></input>

      <button type="submit">
        <img src="img/icon/go.svg" alt="" />
      </button>

      <button onClick={getData}>
        <img src="img/icon/close.svg" alt="" />
      </button>
    </form>
  );
};

export default Search;
