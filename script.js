const header = document.querySelector(".nav-back")
const itemColor = document .querySelectorAll(".item-color")
itemColor.forEach(item => console.log(item))
console.log(header)
document.addEventListener('scroll',()=>{
    if(scrollY>100){
        header.classList.replace("nav-back","nav-back2")
        itemColor.forEach((item)=>{
            item.classList.replace("item-color","item-color2")
        })
    }
    else{
        header.classList.replace("nav-back2","nav-back")
        itemColor.forEach((item)=>{
            item.classList.replace("item-color2","item-color")
        })
    }
})