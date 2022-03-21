const inputs = document.querySelectorAll(".controls input");

function moverInputs(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}
inputs.forEach(inputs => inputs.addEventListener('change', moverInputs));
inputs.forEach(inputs => inputs.addEventListener('mousemove', moverInputs));