import express from "express";
import functions from "../functions/functions.js"
import tp from "../data/tp.js"

const router = express();

const data=tp.data

const removeTime = functions.removeTime
const percentage_calculator = functions.percentage_calculator


router.post("/",(req,res)=>{
    console.log(req.body)
    const {name,type,period,status,start_date,end_date} = req.body;

    // Sorting : 
    var nameresult=functions.sortbyname(name,data)//sort by names
    var sortedperiod=functions.sortby('period',period,nameresult)//sort by perios
    var sortedtype=functions.sortby('type',type,sortedperiod)//sortbytype
    var finaldict =functions.sortby('status',status,sortedtype)//sortbystatus
    
    // changing date format to readable formate
    const c1date=removeTime(new Date(start_date.toString()))//start date of filter
    const c2date=removeTime(new Date(end_date.toString()))//end date of filter

    console.log(c2date>c1date) //check that start date should be always less than end date

    if (c1date>c2date){
        res.send("invalid date format")
    }
    let vfinaldict=functions.sortbydate(finaldict,c1date,c2date) //sort by date fliter
    //percentage dict
    vfinaldict=functions.dateorganiser(vfinaldict)

    const carddata=[{key : 1,count:percentage_calculator(vfinaldict,'status','APPROVED')[0],total:percentage_calculator(vfinaldict,'status','APPROVED')[1],title:"APPROVED"},
                    {key :2,count:percentage_calculator(vfinaldict,'status','INPROCESS')[0],total:percentage_calculator(vfinaldict,'status','INPROCESS')[1],title:"INPROCESS"},
                    {key:3,count:percentage_calculator(vfinaldict,'type','Privilege')[0],total:percentage_calculator(vfinaldict,'type','Privilege')[1],title:"PRIVILEGE LEAVES"},
                    {key:4,count:percentage_calculator(vfinaldict,'type','Maternity')[0],total:percentage_calculator(vfinaldict,'type','Maternity')[1],title:"MATERNITY LEAVES"}

    ]
    ///////////////////////////////////////sending part
    res.send([vfinaldict,carddata]);

    console.log(`react connected... and sends ${name} ${type} ${period} ${status} ${start_date} ${end_date}` )
})

export default router;