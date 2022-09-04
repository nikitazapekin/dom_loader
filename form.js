document.body.style.overflow = 'hidden'
document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=> {
        document.querySelector('.fon').style.display = 'none';
        document.body.style.overflow = ''
    },1000)
})