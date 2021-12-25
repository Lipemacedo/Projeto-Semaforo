let semaforos = document.querySelectorAll('.semaforos img')
let desligado = document.querySelector('.semaforos .desligado')
let verde = document.querySelector('.semaforos .verde')
let vermelho = document.querySelector('.semaforos .vermelho')
let automatico = document.querySelector('.botoes .automatico')
let amarelo = document.querySelector('.semaforos .amarelo')
let botoes = document.querySelectorAll('.botoes button')
let semaforoIndex = 0
let automatic;
 
       botoes[0].addEventListener('click',()=>{
           semaforos.forEach((elementos)=>{
           elementos.setAttribute('src', 'imagens/desligado.png')
           })
               
           clearInterval(automatic)
       })
       botoes[1].addEventListener('click',()=>{
           semaforos.forEach((elementos)=>{
           elementos.setAttribute('src', 'imagens/verde.png')
           })
       })
       botoes[2].addEventListener('click',()=>{
           semaforos.forEach((elementos)=>{
           elementos.setAttribute('src', 'imagens/vermelho.png')
           })
           clearInterval(automatic)
       })

       botoes[3].addEventListener('click',()=>{
           semaforos.forEach((elementos)=>{
               elementos.setAttribute('src', 'imagens/amarelo.png')
           })
           clearInterval(automatic)
       })

        automatico.onclick = function(){
            automatic =  setInterval(()=>{
                semaforoIndex++
                if(semaforoIndex == 1){
                    semaforos.forEach((elementos)=>{
                        elementos.setAttribute('src', 'imagens/vermelho.png')
                    })
                }
                else if(semaforoIndex == 2){
                    semaforos.forEach((elementos)=>{
                        elementos.setAttribute('src', 'imagens/amarelo.png')
                    })
                }
                else if(semaforoIndex == 3){
                    semaforos.forEach((elementos)=>{
                        elementos.setAttribute('src', 'imagens/verde.png')
                        semaforoIndex = 0
                    })
                   
                }
            },1000)

        }
 
 