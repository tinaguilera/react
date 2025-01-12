const heading = document.querySelector(".heading")
//console.log(heading.classList)

const links =  document.querySelectorAll('.navegacion a')
//console.log(links)

heading.textContent='CULO2'

links.forEach((num,l)=>{
   
    l.textContent=`Martin ${num}`
    return num+1
},1)



heading.addEventListener('click',()=>{
    heading.textContent="ANA"
})

links.forEach((l)=>{
   
    l.addEventListener('click',(e)=>{
      e.preventDefault()

      console.log(e.target)
      e.target.textContent = e.target.textContent+" diste click"
    })
})
