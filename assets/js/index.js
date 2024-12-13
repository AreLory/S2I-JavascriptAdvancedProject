let forVar=0
let nOfNews=forVar+10

function getData(){
  axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
  .then(response => {
    for(i=forVar; i<nOfNews; i++){
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`)
      .then(res => {
        let myUrl = _.get(res, 'data.url', 'No URL here')        
        console.log(res.data.title, myUrl, res.data.time)
        createCard(res.data.title, myUrl, res.data.time)
      }).catch(err=> {
        console.log(err)
      })
    }
  }).catch(err=>{
    console.log(err);
  })
}

getData()
loader.addEventListener('click', ()=>{
  forVar+=10
  nOfNews=forVar+10
  getData()
})