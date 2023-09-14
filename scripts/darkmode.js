document.addEventListener("DOMContentLoaded", function () {
    function toggleDarkMode() {
      const body = document.body;
      const darkModeButton = document.getElementById("darkModeButton");
      const themeIcon = document.getElementById("themeIcon");
      const head = document.head;
      const darkModeStylesheet = document.createElement("link");
      
      
      darkModeStylesheet.href = "./styles/darkmode.css";
      darkModeStylesheet.rel = "stylesheet";
  
      darkModeButton.addEventListener("click", () => {
        console.log("Botão de alternância de tema clicado.");
        body.classList.toggle("dark");
  
        if (body.classList.contains("dark")) {
          themeIcon.src = "/src/moon.png";
          themeIcon.alt = "Modo Escuro";
  
          const existingStylesheet = document.querySelector(
            'link[href="./styles/darkmode.css"]'
          );
          if (!existingStylesheet) {
            head.appendChild(darkModeStylesheet);
          }
        } else {
          themeIcon.src = "/src/sun.png";
          themeIcon.alt = "Modo Claro";
  
          const existingStylesheet = document.querySelector(
            'link[href="./styles/darkmode.css"]'
          );
          if (existingStylesheet) {
            head.removeChild(existingStylesheet);
          }
        }
      });
    }
  
    toggleDarkMode();
  });