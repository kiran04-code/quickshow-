const timeFirmater  = (min)=>{
  const hr = Math.floor(min/60);
  const minremider = min%60;
   return `${hr}hr:${minremider}min`

}
export default timeFirmater