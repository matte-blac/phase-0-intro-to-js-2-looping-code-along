// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    const thankYouMessages = []

    for (let i = 0; i < cards.length; i++) {
        thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }

    return thankYouMessages
}

const thankYouMessages = writeCards(cards)
console.log(thankYouMessages)



function countDown(){
    let i = 10;
    while (i >= 0 ){
        console.log(i)
        i--
    }
    return i;
}

countDown

