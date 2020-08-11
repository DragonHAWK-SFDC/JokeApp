function joke()
{
   
    
    

fetch('https://sv443.net/jokeapi/v2/joke/Any', {
        method: 'get'
    })
    .then(res => {
        return res.json()
      })
    .then((response) => {
        if(response.type==='single'){
            var joke= JSON.stringify(response.joke);
            document.getElementById("#out").innerHTML = joke;
        }
    else{
        var setup= JSON.stringify(response.setup);
        var delivery = JSON.stringify(response.delivery);
            document.getElementById("#out").innerHTML = setup + '<br>' + delivery;
        
    }
    })
    
}