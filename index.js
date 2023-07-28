const customerImage = document.querySelector('#customer-img')
const customerName = document.querySelector('.customer-name')
const customerText = document.querySelector('#customer-text')

const btn = document.querySelectorAll('.btn')
let index = 0
const customers = []

class Customer{
        constructor(img,name,text){
        this.img = img
        this.name = name
        this.text = text
        }
}

function createCustomer(img,name,text){
    img = `img/${img}.jpg`
    
    let customer = new Customer(img,name,text)

    customers.push(customer)
    
}

createCustomer(0, 'John', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
createCustomer(1, 'Luka', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.')
createCustomer(2, 'David', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered')
createCustomer(3, 'Giorgi', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout')
createCustomer(4, 'Jora', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
console.log(customers)
btn.forEach(button => {
    button.addEventListener('click',(e) => {
        
        if(e.target.parentElement.classList.contains('prevBtn') || e.target.classList.contains('prevBtn')){
            
            if(index === 0){
                index = customers.length 
            }
            index--
            console.log(index)
            customerImage.src = customers[index].img 
            customerName.textContent = customers[index].name 
            customerText.textContent = customers[index].text 
        }else{
            index++
            if(index === customers.length){
                index = 0 
            }
            console.log(index)
            customerImage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
})