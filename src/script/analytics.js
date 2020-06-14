class Analyze {

    static analyzeText(keyword){

        return fetch(`https://api.deepai.org/api/sentiment-analysis`,{
            method : 'POST',
            headers :{
                "api-key" : "24e57c9d-60f6-43f4-bf47-71d833c9a1dc"
            },
            body : JSON.stringify({
                text : `${keyword}`
            })
        })
        .then(response => {
            console.log(keyword)
            console.log(response)
            return response.json()
        })
        .then(responseJson=>{
            if (responseJson.output){
                // console.log("SUCCESS")
                return Promise.resolve(responseJson.output)
            }
            else{
                // console.log("FAIL")
                return Promise.reject("We couldn't analyze the text")
            }
        })
        .catch(error => {
            // console.log(error)
            return Promise.reject(error)
        })
    }
}

export default Analyze