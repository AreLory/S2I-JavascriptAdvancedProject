let forVar=0
let nOfNews=forVar+10

async function f(){
    let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    if(response.ok) {
        let dataId = await response.json()
        for(i=forVar; i<nOfNews; i++){
            let article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataId[i]}.json`);
              if(article.ok){
                let resObj = await article.json();
                createCard(resObj?.title, resObj?.url, resObj?.time);
              }
            else {
              alert("HTTP-Error: " + article.status)
            }
          }  
    }
    else {
        alert("HTTP-Error: " + response.status)
      }
}

f()
loader.addEventListener('click', ()=>{
    forVar+=10
    nOfNews=forVar+10
    f()
})