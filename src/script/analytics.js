class Analyze {
  static analyzeText(keyword) {

    if(!keyword){
        return Promise.reject("Please insert the text to analyze");
    }

    const myHeaders = new Headers();
    myHeaders.append("api-key", "24e57c9d-60f6-43f4-bf47-71d833c9a1dc");

    const formdata = new FormData();
    formdata.append("text", `${keyword}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      "https://api.deepai.org/api/sentiment-analysis",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return Promise.resolve(result.output);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default Analyze;
