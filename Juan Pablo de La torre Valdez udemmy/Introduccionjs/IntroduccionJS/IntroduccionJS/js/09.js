const inputNombre = document.querySelector("#nombre")
inputNombre.addEventListener('input',(e)=>{
 //  console.log(e.target.value.length)
})

const inputPass = document.querySelector('#password')
const functionPass = ()=>{
    inputPass.type = 'text'
    setTimeout(()=>{inputPass.type = 'password'},300)
}
inputPass.addEventListener('input',functionPass)



const form = document.querySelector('#formulario')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const pass = document.querySelector('#password').value
    const alertaP = document.querySelector('.alerta')
    alertaP?.remove();
   
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta','text-white','uppercase','text-sm','text-center','p-2','font-black')
    if(nombre ===''||pass===''){
        alerta.textContent="Todos los campos son obligatorios"
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent='Enviando FORM'
        alerta.classList.add('bg-green-500')

    }

    form.appendChild(alerta)
    setTimeout(()=>{alerta.remove()},3000)

})