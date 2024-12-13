let newsContainer = document.getElementById("news-container")
let loader = document.getElementById('loader')
function createCard(title, url, publishedTime){
    // element creation
    let card = document.createElement('div')
    let cardBody = document.createElement('div')
    let newsText = document.createElement('h5')
    let button = document.createElement('a')
    let cardTime = document.createElement('div')
    let millisecondDate = publishedTime * 1000
    let dateCard = new Date(millisecondDate)
    let readableDate = dateCard.toLocaleString()
    
    // Classes   
    card.className = 'card text-center'
    cardBody.className= 'card-body'
    newsText.className='card-title'
    button.className = 'btn btn-primary'
    button.innerText = 'Read More'
    cardTime.className='card-footer' 

    // card creation
    button.href = url
    cardTime.innerText = readableDate
    newsText.innerText = title
    
    newsContainer.append(card)
    card.appendChild(cardBody).appendChild(newsText)   
    cardBody.append(button)
    card.append(cardTime)
    
    if (url==='No URL here'){
        button.classList.add('disabled');
        button.innerText = 'not available'
    }
}