////name and dict is require here,name should be a string datadict should be a array of object
function sortbyname(name,datadict){
  if((name.length!==0 )&& (!(name.includes("Emp_")))){
    let  nameresult = datadict.filter(obj => {
        return obj.name === name
      });
      return nameresult}
      else if(name.includes("Emp_")){
        let nameresult=sortby('empcode',name,datadict);
        return nameresult
      }
      else{
        return datadict
      }
     
}

////property shoulde be in string format propertyval should be in a string format datadict should be a array of object 
function sortby(property,propertyval,datadict){
  if(propertyval !== "none"){
      
      var propertyresult = datadict.filter(obj => {
          return obj[property] === propertyval
        })
  }
  else{
      var propertyresult = datadict
    }
    return propertyresult}
////removes time it is necessary to remove time from date otherwise it reates mess and give proper format of date that we have in database++++++++++++++++++++
function removeTime(date = new Date()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

}
///// sort by date here c1date and c2date should be free of time use above function for these and c1date<c2date 
function sortbydate(finaldict,c1date,c2date){
  const vfinaldict=[]
  finaldict.forEach(element => {
    if(c1date<=removeTime(new Date(element.ldate)) && removeTime(new Date(element.ldate))<=c2date){
      vfinaldict.push(element)
  }
  
});
return vfinaldict
}
//here propertyu should be as string first
function percentage_calculator(datadict,property,propertyval){
  /*propertyval should be string always*/
  const total=datadict.length
  var newdict=datadict.filter(obj => {
    return obj[property]===propertyval
  });
  
  return [newdict.length,total]
  


}
//here our data is having applied date saved as adate and ldate is nothing but leave date but we dont have to and from 
//kind of stuff and thats why we have to organise it by from to to format

function dateorganiser(dict){
  let i=0
  let j=0
  let newdict=[]
  let srcount=0
  while(i<dict.length){
    srcount+=1
    let count=0 
    //predefinig the property of object
    let name = dict[i].name
    let empcode=dict[i].empcode
    let type = dict[i].type
    let status = dict[i].status
    let period = dict[i].period
    let applied_date =dict[i].adate
    let from = dict[i].ldate
    let to= dict[i].ldate
    for(j=i;((j<dict.length)&&dict[j].adate===applied_date)&&(dict[j].name===name)&&((dict[j].type===type));j++){
       to=dict[i].ldate//changing to date
       count+=1//counting number of days between leave period
       i=j+1//shifting loop to j+1
    }
    newdict.push(
      {
        sr:srcount,//sr no to be displayed
        empcode:empcode,
        count:count,
        name:name,
        type:type,
        status:status,
        period:period,
        adate:applied_date,
        from:from,
        to:to
      }
    )
  }
  return newdict
}
  




export default {sortbyname,removeTime,sortbydate,percentage_calculator,sortby,dateorganiser}