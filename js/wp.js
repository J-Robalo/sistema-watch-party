const urlVideo = document.getElementById("meuframe").src;

const compartilharLink = () => {
  document.addEventListener("click", () => {
    navigator.clipboard
      .writeText(urlVideo)
      .then(() => {
        console.log("successfully copied");
      })
      .catch(() => {
        console.log("something went wrong");
      });
  });
};
