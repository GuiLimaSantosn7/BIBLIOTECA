// Função para alternar entre os modos claro e escuro
function toggleDarkMode(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Salva a preferência do usuário no localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
}

// Verifica a preferência de modo escuro ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const darkMode = localStorage.getItem("darkMode");
    const body = document.body;

    if (darkMode === "true") {
        body.classList.add("dark-mode");
    }
});

// Evento de clique no link de alternância
const toggleDarkModeLink = document.getElementById("toggleDarkMode");
toggleDarkModeLink.addEventListener("click", toggleDarkMode);
