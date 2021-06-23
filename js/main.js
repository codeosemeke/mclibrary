if(document.getElementById('mobile_menu_toggle_button') !='undefined'){
    let mobile_menu_button = document.getElementById('mobile_menu_toggle_button');

    mobile_menu_button.addEventListener('click', function (e) {
        let mobile_menu = document.getElementById('mobile-menu');
        let menu_burger = document.getElementById('menu-burger');
        let menu_x = document.getElementById('menu-x');
        toggleElementClass(mobile_menu, 'hidden')
        toggleElementClass(menu_burger, 'hidden')
        toggleElementClass(menu_x, 'hidden')
    })
    
}


// Function to toggle a class
function toggleElementClass(element, elemClass) {
    if(element.classList.contains(elemClass)){
        element.classList.remove(elemClass) 
    }
    else{
        element.classList.add(elemClass) 
    }
}

