/**
 * Even handler for when the user clicks the 'calculate' button. It takes all the
 * parameters needed and does a calculation according to the user's rates to generate
 * price in a consistent manner
 */
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
    //Calculation for total daily wage
    const daysPrice = days * 500
    //Extracted size value
    let sizeValue
    const fullFramePrice = 200 * 2
    //Checks user selection for rug size
    switch (size) {
        case '1/4 frame' : sizeValue = 0.25
                            break
        case '1/3 frame' : sizeValue = 0.33
                            break
        case '1/2 frame' : sizeValue = 0.5
                            break
        case 'full frame' : sizeValue = 1
    }
    //Calculation for cost of frame size used
    const sizePrice = fullFramePrice * sizeValue

    const smallWoolPrice = 24 * smallWoolValue
    const largeWoolPrice = 70 * largeWoolValue

    //Calculation to determine quote price
    let totalPrice = sizePrice + smallWoolPrice + largeWoolPrice + daysPrice
    const priceWithVat = Math.round(totalPrice + (totalPrice * 0.15))

    // Adding quote price to the output
    const output = document.querySelector('[data-output]')
    output.innerHTML = `<h1 class="heading">${priceWithVat}</h1>`

    window.scrollTo(0,0)
}

/**
 * Event handler for when the user clicks the 'clear' button. It takes all the 
 * input fields and resets them to their initial values
 */
const handleClear = () => {
    //Grab elements and stores each of them inside of a variable
    const sizeElement = document.querySelector('[data-size-select]')
    const woolLargeElement = document.querySelector('[data-wool-big-bundles]')
    const woolSmallElement = document.querySelector('[data-wool-small-bundles]')
    const daysElement = document.querySelector('[data-days]')

    //Resets the element's values
    sizeElement.value = '1/4 frame'
    woolLargeElement.value = ''
    woolSmallElement.value = ''
    daysElement.value = ''

    //Clears the output
    const output = document.querySelector('[data-output]')
    output.innerHTML = ``
}

//Assignment of event handlers
const calculateButton = document.querySelector('[data-calculate-button]')
calculateButton.addEventListener('click', handleCalculate)

const clearButton = document.querySelector('[data-clear-button]')
clearButton.addEventListener('click', handleClear)
