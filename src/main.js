const form = document.querySelector('form');
const ul = document.createElement('ul')

// apenas um evento de submit
form.onsubmit = event => {
    event.preventDefault()

    const input = form.querySelector('input')
    const value = input.value

    const li = document.createElement('li');
    li.setAttribute("class", `px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b 
    last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between`)
    li.textContent = value

    ul.appendChild(li)
}

// um ou múltiplos eventos!
// form.addEventListener('submit', event=>{
//     event.preventDefault()
// })