// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Molly Raymond" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total 
let totalQty = document.querySelector('#qty-total')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector ('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gb++
total++
let qtyGb = document.querySelector('#qty-gb')
    qtyGb.textContent = gb
    totalQty.textContent = total
})
// TODO: Write the code to be run when the "-" button for "Gingerbread" is clicked
gbMinusBtn.addEventListener('click', function(){
gb--
total--
let qtyGb = document.querySelector ('#qty-gb')
    qtyGb.textContent = gb
    totalQty.textContent = total
})
// Event listener for clicks on the "+" button for Chocolate Chip
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    let qtyCc = document.querySelector('#qty-cc')
        qtyCc.textContent = cc
        totalQty.textContent = total
})

//Event listener for clicks on the "-" button for Chocolate Chip
ccMinusBtn.addEventListener('click', function(){
cc--
total--
let qtyCc = document.querySelector('#qty-cc')
qtyCc.textContent = cc
totalQty.textContent = total
})

// Event listener for clicks on the "+" Sugar Cookies
sugarPlusBtn.addEventListener('click', function(){
    sugar++
    total++
let qtySugar = document.querySelector('#qty-sugar')
qtySugar.textContent = sugar
totalQty.textContent = total
})

//Event listener for clicks on the "-" button for Sugar Cookies
sugarMinusBtn.addEventListener('click', function(){
    sugar--
    total--
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.textContent = sugar
    totalQty.textContent = total
    })

// TODO: Hook up event listeners for the rest of the buttons