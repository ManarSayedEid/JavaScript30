const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => panel.addEventListener('click', () => {
    console.log(panel)
    panel.classList.toggle('open');
}))

panels.forEach((panel) => panel.addEventListener('transitionend', (e) => {
    console.log(e)
    if (e.propertyName === 'flex-grow') {
       panel.firstElementChild.style.transform = 'translateY(0px)'
       panel.lastElementChild.style.transform = 'translateY(0px)'  
    }
   
}))
