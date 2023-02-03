const resultado = document.getElementById("resultado");
const calculadora = document.querySelector(".calculadora__itens");
const mostrarCalculos = document.querySelector('.calculos__mostrar');
const lista = document.querySelector('.calculos__lista');

calculadora.addEventListener("click", (e) => {
  if (
    e.target.classList[0] === "item__botao" &&
    e.target.classList[1] !== "botao-duplo__enter" &&
    e.target.classList[1] !== "botao__restart"
  ) {
    resultado.textContent += e.target.textContent;
  } else if (e.target.classList[1] === "botao-duplo__enter") {
    registraResultados();
    resultado.textContent = eval(resultado.textContent);
  } else if(e.target.classList[1] === 'botao__restart') {
    resultado.textContent = '';
  }
});

function registraResultados() {
    const itemNovo = document.createElement('li');
    itemNovo.classList.add('lista__item');
    itemNovo.innerHTML = resultado.textContent + ' = ' + eval(resultado.textContent);
    lista.append(itemNovo);
}

mostrarCalculos.addEventListener('click', () => {
    lista.classList.toggle('ativo');
})
