let newsContainer = document.getElementById("news-container")
let loader = document.getElementById('loader')

function createCard(title, url, publishedTime){
    let card = document.createElement('div')
    card.className = 'card text-center'
    let cardBody = document.createElement('div')
    cardBody.className= 'card-body'
    // TITLE
    let newsText = document.createElement('h5')
    newsText.className='card-title'
    newsText.innerText = title
    // URL
    let button = document.createElement('a')
    button.className = 'btn btn-primary'
    button.innerText = 'Read More'
    button.href = url
    // DATE
    let millisecondDate = publishedTime * 1000
    let dateCard = new Date(millisecondDate)
    let readableDate = dateCard.toLocaleString()
    let cardTime = document.createElement('div')
    cardTime.className='card-footer'
    cardTime.innerText = readableDate

    // CARD CREATION
    newsContainer.append(card)
    card.appendChild(cardBody).appendChild(newsText)   
    cardBody.append(button)
    card.append(cardTime)
}