const buttons=document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function(){

        // Obtenemos el id del objeto sobre el que pulsamos
        const id=button.getAttribute('data-id')
    
        if (button.classList.contains('liked')){
            button.classList.remove('liked')
            button.innerText='Me gusta'
        } else{
            button.classList.add('liked')
            button.innerText='No me gusta'
        }
    })
})

