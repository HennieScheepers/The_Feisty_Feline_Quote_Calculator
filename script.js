const handleCalculate = (event) => {
    //Storing elements in variables
    const sizeElement = document.querySelector('[data-size-select]')
    const woolLargeElement = document.querySelector('[data-wool-big-bundles]')
    const woolSmallElement = document.querySelector('[data-wool-small-bundles]')
    const daysElement = document.querySelector('[data-days]')

    //Storing element values in variables
    const size = sizeElement.value
    const largeWoolValue = woolLargeElement.value
    const smallWoolValue = woolSmallElement.value
    const days = daysElement.value
    const daysPrice = days * 500
    //Extracted size value
    let sizeValue
    const fullFramePrice = 200 * 2
    switch (size) {
        case '1/4 frame' : sizeValue = 0.25
                            break
        case '1/3 frame' : sizeValue = 0.33
                            break
        case '1/2 frame' : sizeValue = 0.5
                            break
        case 'full frame' : sizeValue = 1
    }
    const sizePrice = fullFramePrice * sizeValue

    const smallWoolPrice = 24 * smallWoolValue
    const largeWoolPrice = 70 * largeWoolValue

    let totalPrice = sizePrice + smallWoolPrice + largeWoolPrice + daysPrice
    const priceWithVat = Math.round(totalPrice + (totalPrice * 0.15))


    const output = document.querySelector('[data-output]')
    output.innerHTML = `<h1 class="heading">${priceWithVat}</h1>`

}

const calculateButton = document.querySelector('[data-calculate-button]')
calculateButton.addEventListener('click', handleCalculate)
