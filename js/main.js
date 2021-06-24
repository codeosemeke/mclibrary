if(document.getElementById('mobile_menu_toggle_button') !='undefined'){
    let mobile_menu_button = document.getElementById('mobile_menu_toggle_button');

    mobile_menu_button.addEventListener('click', function (e) {
        document.getElementById('mobile-menu').classList.toggle("hidden");
        document.getElementById('menu-burger').classList.toggle("hidden");
        document.getElementById('menu-x').classList.toggle("hidden");
    })  
}

if(document.querySelectorAll('.accordion').length > 0){
    var acc = document.querySelectorAll(".accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // return console.log(i, this.parentElement.nextElementSibling)
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            // this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.parentElement.nextElementSibling;
            // var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}


