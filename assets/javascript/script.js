const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    textColor: getStyle(html, "--text-color"),
}

const lightMode = {
    bg: "#fafafa",
    textColor: "#2F2D30"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})


// Função para alternar as abas
function openTab(tabName) {
    // Esconde todas as abas
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Remove a classe "active" de todas as abas
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Mostra a aba selecionada
    document.getElementById(tabName).classList.add('active');
    document.querySelector('.tab-button[onclick="openTab(\'' + tabName + '\')"]').classList.add('active');
}
