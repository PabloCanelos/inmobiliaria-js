
const propiedadesAlquiler = [
    {
        titulo: "Apartamento en el centro de la ciudad",
        ubicacion: "123 Calle Principal, Cualquierciudad, CA 91234",
        precio: 2000,
        habitaciones: 2,
        banos: 2,
        mascotasPermitidas: true,
        fumarPermitido: false,
        imagenUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        titulo: "Apartamento luminoso con vista al mar",
        ubicacion: "456 Avenida Oceano, Ciudad Costera, CA 56789",
        precio: 2500,
        habitaciones: 3,
        banos: 3,
        mascotasPermitidas: true,
        fumarPermitido: true,
        imagenUrl: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        titulo: "Condominio moderno en zona residencial",
        ubicacion: "789 Calle Vista Lago, Cualquierciudad, CA 12345",
        precio: 2200,
        habitaciones: 2,
        banos: 2,
        mascotasPermitidas: false,
        fumarPermitido: true,
        imagenUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        titulo: "Casa amplia en las afueras",
        ubicacion: "123 Calle Suburbia, Afueras, CA 98765",
        precio: 3000,
        habitaciones: 4,
        banos: 3,
        mascotasPermitidas: true,
        fumarPermitido: false,
        imagenUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    }
];

const propiedadesVenta = [
    {
        titulo: "Apartamento de lujo en zona exclusiva",
        ubicacion: "123 Calle Lujo, Suburbio Prestigioso, CA 45678",
        precio: 5000,
        habitaciones: 4,
        banos: 4,
        mascotasPermitidas: false,
        fumarPermitido: false,
        imagenUrl: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
    },
    {
        titulo: "Apartamento acogedor en la montaña",
        ubicacion: "789 Calle Montaña, Cumbres, CA 23456",
        precio: 1200,
        habitaciones: 2,
        banos: 1,
        mascotasPermitidas: true,
        fumarPermitido: true,
        imagenUrl: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"
    },
    {
        titulo: "Penthouse de lujo con terraza panorámica",
        ubicacion: "567 Avenida Skyline, Ciudad del Cielo, CA 56789",
        precio: 4500,
        habitaciones: 3,
        banos: 3,
        mascotasPermitidas: true,
        fumarPermitido: false,
        imagenUrl: "https://images.unsplash.com/photo-1597438453753-798e6cda5f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        titulo: "Villa espaciosa con jardín",
        ubicacion: "123 Calle Jardín, Valle Verde, CA 67890",
        precio: 6500,
        habitaciones: 5,
        banos: 4,
        mascotasPermitidas: false,
        fumarPermitido: true,
        imagenUrl: "https://images.unsplash.com/photo-1560185009-b03503b918c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    }
];

// Función para mostrar un mensaje de bienvenida en la consola
function mostrarMensajeBienvenida() {
    console.log("Bienvenido a Inmobiliaria ADL");
}


function manejarClicTarjeta(event) {
    const tituloTarjeta = event.currentTarget.querySelector('.card-title').innerText;
    alert(`Has hecho clic en: ${tituloTarjeta}`);
}

// Añadir el evento de clic a todas las tarjetas
function agregarEventosClicTarjetas() {
    const tarjetas = document.querySelectorAll('.card');
    for (const tarjeta of tarjetas) {
        tarjeta.addEventListener('click', manejarClicTarjeta);
    }
}

// Función para generar templates de propiedades
function generarTarjetasPropiedades(propiedades) {
    return propiedades.map(propiedad => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.imagenUrl}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.titulo}</h5>
                    <p class="card-text">${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                    <p class="${propiedad.fumarPermitido ? 'text-success' : 'text-danger'}"><i class="fas fa-smoking${propiedad.fumarPermitido ? '' : '-ban'}"></i> ${propiedad.fumarPermitido ? 'Permitido fumar' : 'No se permite fumar'}</p>
                    <p class="${propiedad.mascotasPermitidas ? 'text-success' : 'text-danger'}"><i class="fas fa-paw${propiedad.mascotasPermitidas ? '' : '-ban'}"></i> ${propiedad.mascotasPermitidas ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                </div>
            </div>
        </div>
    `).join('');
}


function mostrarPropiedades(contenedorId, propiedades) {
    const contenedor = document.querySelector(`#${contenedorId}`);
    if (contenedor) {
        contenedor.innerHTML = generarTarjetasPropiedades(propiedades);
    }
}


function mostrarPropiedadesLimitadas(propiedades, inicio, fin) {
    const propiedadesLimitadas = propiedades.slice(inicio, fin);
    propiedadesLimitadas.forEach(propiedad => {
        console.log(propiedad.titulo);  
    });
}

window.onload = function() {
    mostrarMensajeBienvenida();

    if (document.querySelector('#venta')) {
        mostrarPropiedades('venta', propiedadesVenta);
        agregarEventosClicTarjetas();
        mostrarPropiedadesLimitadas(propiedadesVenta, 0, 2);
    }

    if (document.querySelector('#alquiler')) {
        mostrarPropiedades('alquiler', propiedadesAlquiler);
        agregarEventosClicTarjetas();
        mostrarPropiedadesLimitadas(propiedadesAlquiler, 0, 2);
    }
}; 


