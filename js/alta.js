const productos = []
const camposValidos = [false, false, false, false, false, false, false]

const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const button = document.querySelector('button')

button.disabled = true

console.log(inputs, form, button)

// Mostrar u ocultar el mensaje
const setCustomValidityJS = (mensaje, index) => {
    let divs = document.querySelectorAll('form div')
    divs[index].innerHTML = mensaje
    divs[index].style.display = mensaje ? 'block' : 'none'
}

// Para comprobar la validez de los campos
const algunCampoValido = () => {
    let valido = // false
        camposValidos[0] && // true
        camposValidos[1] && // true
        camposValidos[2] && // true
        camposValidos[3] && // true
        camposValidos[4] && // true
        camposValidos[5] && // false
        camposValidos[6] // true
        
    return !valido // true
}

// Validar campos
const validar = (valor, validador, index) => {
    
    if(!validador.test(valor)) {
        setCustomValidityJS('Este campo no es válido', index)
        camposValidos[index] = false
        button.disabled = true
        return null // break
    }

    camposValidos[index] = true
    button.disabled = algunCampoValido() // boolean

    setCustomValidityJS('', index)
    return valor
}

// Todas las expresiones regulares de los campos
const regExpValidar = [
    /^.+$/, // regexp nombre
    /^.+$/, // regexp precio
    /^[0-9]+$/, // regexp stock
    /^.+$/, // regexp marca
    /^.+$/, // regexp categoria
    /^.+$/, // regexp detalles
    /^.+$/ // regexp foto
]

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        validar(input.value, regExpValidar[index], index)
    })
})

form.addEventListener('submit', e => {
    e.preventDefault()

    const producto = {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        stock: inputs[2].value,
        marca: inputs[3].value,
        categoria: inputs[4].value,
        detalles: inputs[5].value,
        foto: inputs[6].value,
        envio: inputs[7].checked
    }

    // borrar todos los input
    inputs.forEach(input => input.value = '')

    // console.log(producto)
    productos.push(producto)

    button.disabled = true
    console.log(productos)
    renderProdsObjetos()
})

// Dibuja los productos
const renderProdsObjetos = () => {
    let html = ''
    for (let i = 0; i < productos.length; i++) {
        html += `<p>${JSON.stringify(productos[i])}</p>`     
    }
    document.getElementById('listado-productos').innerHTML = html
}

// Me va permitir dibujar cada una de las nuevas filas de tabla
const renderProdsTemplateString = () => {

}