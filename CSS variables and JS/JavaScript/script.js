const inputs = document.querySelectorAll('input');

let root = document.documentElement;

function updateInputValue() {
    // avoid getting undefined
    const suff = this.dataset.sizing || '';
    root.style.setProperty(`--${this.name}`, this.value + suff);
}

inputs.forEach(input => {
    input.addEventListener('change', updateInputValue);
});