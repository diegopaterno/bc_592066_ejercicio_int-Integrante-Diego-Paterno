function Card(heading, description, image) {
    // Propiedades/Atributos
    this.heading = heading
    this.description = description
    this.image = image

    // Método
    this.appendTo = function (destinationElement) {
        let card = document.createElement('a')
        card.classList.add('card')
        card.href = 'https://sony.com'

        card.innerHTML = `

                <article class="card__article">
                    <div class="card__image-container">
                    <img
                        class="card__image"
                        src=${this.image}
                        alt=${this.heading}
                    />
                    </div>
                    <div class="card__content">
                    <h2 class="card__heading">${this.heading}</h2>
                    <div class="card__description">
                        <p>${this.description}</p>
                    </div>
                    </div>
                </article>
            `
        destinationElement.appendChild(card)
    }

}

const elemCardsContainer = document.getElementsByClassName('cards-container')[0]
console.log(elemCardsContainer)

const card1 = new Card(
    'Celular', 
    'apple iphone 11 pro max',
    'img/productos/apple-iphone-11-pro-max.jpg'
    )

const card2 = new Card(
    'Drone', 
    'dji mavic 2 pro',
    'img/productos/dji-mavic-2-pro.jpg'
    )

const card3 = new Card(
    'Celular', 
    'apple iphone 12',
    'img/productos/apple-iphone-12.jpg'
    )

const card4 = new Card(
    'Auriculares', 
    'auriculares sony',
    'img/productos/auriculares-sony.jpg'
    )

const card5 = new Card(
    'Camara Fotos', 
    'camara canon',
    'img/productos/camara-canon.jpg'
)

const card6 = new Card(
    'Camara Fotos', 
    'camara canon',
    'img/productos/camara-canon.jpg'
)

const card7 = new Card(
    'Televisor', 
    'televisor lg',
    'img/productos/televisor-lg.jpg'
)

const card8 = new Card(
    'Consola', 
    'sony playstation 5',
    'img/productos/sony-playstation-5.jpg'
)

const card9 = new Card(
    'Celular', 
    'samsung galaxy s21 plus 5g',
    'img/productos/samsung-galaxy-s21-plus-5g.jpg'
)
    
console.log(card1)
console.log(card2)
console.log(card3)
console.log(card4)
console.log(card5)
console.log(card6)
console.log(card7)
console.log(card8)
console.log(card9)

const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9
]

/* console.warn('-----')
console.log(cards[0].heading)
console.log(cards[0].image)
console.warn('-----')
console.log(cards[7].heading)
console.log(cards[7].image) */

console.log(cards)

/* card1.appendTo(elemCardsContainer)
card2.appendTo(elemCardsContainer)
card3.appendTo(elemCardsContainer)
card4.appendTo(elemCardsContainer)
card5.appendTo(elemCardsContainer)
card6.appendTo(elemCardsContainer)
card7.appendTo(elemCardsContainer)
card8.appendTo(elemCardsContainer)
card9.appendTo(elemCardsContainer)
card1.appendTo(elemCardsContainer) */

/* cards[0].appendTo(elemCardsContainer)
cards[1].appendTo(elemCardsContainer)
cards[2].appendTo(elemCardsContainer)
cards[3].appendTo(elemCardsContainer)
cards[4].appendTo(elemCardsContainer)
cards[5].appendTo(elemCardsContainer)
cards[6].appendTo(elemCardsContainer)
cards[7].appendTo(elemCardsContainer)
cards[8].appendTo(elemCardsContainer) */

for(const unaCard of cards) {
    unaCard.appendTo(elemCardsContainer)
}

