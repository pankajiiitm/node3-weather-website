const request=require('request')  
  
  const forecast= (latitude,longitude,callback) => {
      const url='http://api.weatherstack.com/current?access_key=be31b95855a3f9ee22652c6abafdd6ff&query='+latitude+','+longitude+'&units=m'
request({url,json:true},(error,{ body})=> {
    if(error){
callback('unable to connect to weather service',undefined)
    }
    else if(body.error){
callback('unable to find location',undefined)
    }
    else {
callback(undefined, body.current.weather_descriptions[0]+ " .It is currently " + body.current.temperature +" degress out. It feels like " +body.current.feelslike +" degress out. The humidity is "+body.current.humidity+"%. " )
    }

})
}
module.exports=forecast