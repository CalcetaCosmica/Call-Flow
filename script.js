function startTheGame(selectedOption) {
    console.log(`Opción seleccionada: ${selectedOption}`);
    if (selectedOption === 'Resolver un disputa') {
        console.log("Seleccionaste la Opción 1");
        showSection('section2'); // Muestra la siguiente sección
    } else if (selectedOption === 'Decir cantidad total') {
        console.log("Seleccionaste la Opción 2");
        showSection('section3'); // Muestra la siguiente sección
    }
}

function avoidEarlyTermination() {
    console.log("Acción para evitar terminación temprana");
}

function link() {
    console.log("Acción para enlazar");
}

function showSection(sectionId) {
    // Oculta todas las secciones
    var sections = document.getElementsByClassName('hidden-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    // Muestra la sección deseada
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
}



function navigateToSection(sectionId) {
    // Ocultar todos los elementos de la pantalla actual
    document.getElementById('screen').style.display = 'none';
    
    // Mostrar solo la sección deseada
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
}

        // Agrega una clase para desvanecer la pantalla de carga después de que la página se cargue completamente
        window.addEventListener('load', function() {
            document.querySelector('.page-transition').classList.add('fade-out');
        });