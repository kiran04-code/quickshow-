const DateFormate = (timeday)=>{
  return new Date(timeday).toLocaleString('en-US',{
    weekday:"short",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"numeric"
  })
}

export default DateFormate