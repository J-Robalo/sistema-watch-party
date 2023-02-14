function abrirModal() {
  const modal = document.getElementById("janela-modal");
  const blocoTexto = document.getElementById("bloco-texto");

  modal.classList.add("abrir");
  blocoTexto.classList.add("fechar");

  modal.addEventListener("click", (event) => {
    if (event.target.id == "cancelar" || event.target.id == "janela-modal") {
      modal.classList.remove("abrir");
      blocoTexto.classList.remove("fechar");
    }
  });
}
