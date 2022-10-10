function initAlta() {
    console.warn('initNosotros()')

    const productos = [
        { nombre: 'Reloj', precio: '1234', stock: '35', marca: 'Seiko', categoria: 'Despertador', envio: true, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-128.png', detalles: 'Analógico'},
        { nombre: 'Escuadra', precio: '123321', stock: '23', marca: 'Pizzini', categoria: 'Útiles', envio: false, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png', detalles: 'Grande'},
        { nombre: 'Globo Terráqueo', precio: '43243', stock: '22', marca: 'Terráqueo', categoria: 'Premium', envio: true, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-128.png', detalles: 'Plástico'}
    ]
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
        console.log(valor, validador, index)
    
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
        
        // renderProdsObjetos()
        // renderProdsTemplateString()
        renderProds()
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
        let html = ''
    
        html += '<table>' 
        console.log(html)
    
        html += `
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Detalles</th>
                <th>Foto</th>
                <th>Envío</th>
            </tr>
            `
    
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i]
            console.log(producto)
            html += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.detalles}</td>
                    <td>${producto.foto}</td>
                    <td>${producto.envio}</td>
                </tr>
            `
        }
    
        html += '</table>'
    
        document.getElementById('listado-productos').innerHTML = html
    }
    
    const renderProds = () => {
    
        const xhr = new XMLHttpRequest()
        xhr.open('get', 'plantillas/listado.hbs')
        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                let plantillaHbs = xhr.response
                console.log(plantillaHbs)
    
                let template = Handlebars.compile(plantillaHbs)
                console.log(template)
    
                let html = template(
                    {
                        productos: productos
                    }
                )
                
                //console.log(html) // Le agregó a la plantilla los datos de productos
                document.getElementById('listado-productos').innerHTML = html
            }
        })
    
        xhr.send()
    }
    renderProds()
}

