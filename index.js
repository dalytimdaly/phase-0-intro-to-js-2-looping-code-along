// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];


function writeCards(cards, event) {
    for (let i=0; i < 3; i++)
    console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    return cards
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")



function countDown () {
   for (let i = 10; i > -1; i--)
    console.log(i)
}

countDown(10)