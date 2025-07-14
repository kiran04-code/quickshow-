const ConvertInK = (num)=>{
    if(num>1000){
        const value = (num/1000).toFixed(1) + "K"
     return  value
    }
    else{
        return  null
}
    }
const data = ConvertInK(1220)
console.log(data)

export default ConvertInK