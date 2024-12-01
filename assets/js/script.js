// script.js

// Arreglos de propiedades
const alquilerProperties = [
    {
        title: "Apartamento en el centro de la ciudad",
        location: "123 Main Street, Anytown, CA 91234",
        price: 2000,
        bedrooms: 2,
        bathrooms: 2,
        petsAllowed: true,
        smokingAllowed: false,
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        title: "Apartamento luminoso con vista al mar",
        location: "456 Ocean Avenue, Seaside Town, CA 56789",
        price: 2500,
        bedrooms: 3,
        bathrooms: 3,
        petsAllowed: true,
        smokingAllowed: true,
        imageUrl: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "Condominio moderno en zona residencial",
        location: "789 Lakeview Street, Anytown, CA 12345",
        price: 2200,
        bedrooms: 2,
        bathrooms: 2,
        petsAllowed: false,
        smokingAllowed: true,
        imageUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        title: "Casa amplia en las afueras",
        location: "123 Suburban Lane, Suburbia, CA 98765",
        price: 3000,
        bedrooms: 4,
        bathrooms: 3,
        petsAllowed: true,
        smokingAllowed: false,
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    }
];

const ventaProperties = [
    {
        title: "Apartamento de lujo en zona exclusiva",
        location: "123 Luxury Lane, Prestige Suburb, CA 45678",
        price: 5000,
        bedrooms: 4,
        bathrooms: 4,
        petsAllowed: false,
        smokingAllowed: false,
        imageUrl: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
    },
    {
        title: "Apartamento acogedor en la montaña",
        location: "789 Mountain Road, Summit Peaks, CA 23456",
        price: 1200,
        bedrooms: 2,
        bathrooms: 1,
        petsAllowed: true,
        smokingAllowed: true,
        imageUrl: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"
    },
    {
        title: "Penthouse de lujo con terraza panorámica",
        location: "567 Skyline Avenue, Skyview City, CA 56789",
        price: 4500,
        bedrooms: 3,
        bathrooms: 3,
        petsAllowed: true,
        smokingAllowed: false,
        imageUrl: "https://images.unsplash.com/photo-1597438453753-798e6cda5f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        title: "Villa espaciosa con jardín",
        location: "123 Garden Lane, Green Valley, CA 67890",
        price: 6500,
        bedrooms: 5,
        bathrooms: 4,
        petsAllowed: false,
        smokingAllowed: true,
        imageUrl: "https://images.unsplash.com/photo-1560185009-b03503b918c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    }
];

// Función para mostrar un mensaje de bienvenida en la consola
function showWelcomeMessage() {
    console.log("Bienvenido a Inmobiliaria ADL");
}

// Función para manejar el clic en una tarjeta
function handleCardClick(event) {
    const cardTitle = event.currentTarget.querySelector('.card-title').innerText;
    alert(`Has hecho clic en: ${cardTitle}`);
}

// Añadir el evento de clic a todas las tarjetas
function addCardClickEvents() {
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        card.addEventListener('click', handleCardClick);
    }
}

// Función para generar templates de propiedades
function generatePropertyCards(properties) {
    return properties.map(property => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${property.imageUrl}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="card-text">${property.location}</p>
                    <p><i class="fas fa-bed"></i> ${property.bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${property.bathrooms} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${property.price}</p>
                    <p class="${property.smokingAllowed ? 'text-success' : 'text-danger'}"><i class="fas fa-smoking${property.smokingAllowed ? '' : '-ban'}"></i> ${property.smokingAllowed ? 'Permitido fumar' : 'No se permite fumar'}</p>
                    <p class="${property.petsAllowed ? 'text-success' : 'text-danger'}"><i class="fas fa-paw${property.petsAllowed ? '' : '-ban'}"></i> ${property.petsAllowed ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para mostrar propiedades en la página
function displayProperties(containerId, properties) {
    const container = document.querySelector(`#${containerId}`);
    if (container) {
        container.innerHTML = generatePropertyCards(properties);
    }
}

// Función para utilizar slice (ejemplo)
function displayLimitedProperties(properties, start, end) {
    const limitedProperties = properties.slice(start, end);
    for (const property of limitedProperties) {
        console.log(property.title);  // Solo para mostrar cómo se usa slice
    }
}

// Llamar a las funciones para mostrar propiedades en las respectivas páginas
window.onload = function() {
    showWelcomeMessage();

    if (document.querySelector('#venta')) {
        displayProperties('venta', ventaProperties);
        addCardClickEvents();
        displayLimitedProperties(ventaProperties, 0, 2);  // Ejemplo de uso de slice
    }

    if (document.querySelector('#alquiler')) {
        displayProperties('alquiler', alquilerProperties);
        addCardClickEvents();
        displayLimitedProperties(alquilerProperties, 0, 2);  // Ejemplo de uso de slice
    }
};

