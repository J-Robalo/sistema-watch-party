function abrirModal() {
  const modal = document.getElementById("janela-modal");

  modal.classList.add("abrir");

  modal.addEventListener("click", (event) => {
    if (event.target.id == "cancelar" || event.target.id == "janela-modal") {
      modal.classList.remove("abrir");
    }
  });
}
