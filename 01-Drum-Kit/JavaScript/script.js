
// window.addEventListener("keydown", (e) => {
//     let keys = document.querySelectorAll('.key');
//     keys.forEach((key) => {
//         if (e.keyCode == key.dataset.key) {
//             let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//             key.classList.toggle('playing')
//             audio.currentTime = 0;
//             audio.play();
//         }
//     })
// })

window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return;

    let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
})

// transitionend event
let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', () => {
    key.classList.remove('playing');
}))



