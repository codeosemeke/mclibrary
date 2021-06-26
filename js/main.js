// Mobile Menu Toggle Function
if(document.getElementById('mobile_menu_toggle_button') !='undefined'){
    let mobile_menu_button = document.getElementById('mobile_menu_toggle_button');

    mobile_menu_button.addEventListener('click', function (e) {
        document.getElementById('mobile-menu').classList.toggle("hidden");
        document.getElementById('menu-burger').classList.toggle("hidden");
        document.getElementById('menu-x').classList.toggle("hidden");
    })  
}

// FAQs Accordions Function
if(document.querySelectorAll('.accordion').length > 0){
    let accordion_buttons = document.querySelectorAll(".accordion-button");
    let accordions = document.querySelectorAll('.accordion')
    let panels = document.querySelectorAll('.panel')
    let svgs = document.querySelectorAll('.accordion-toggle-svg') 

    for (let i = 0; i < accordion_buttons.length; i++) {
        accordion_buttons[i].addEventListener("click", function() {
            let isActive = accordions[i].classList.contains('bg-primary-1') && accordions[i].classList.contains('accordion');

            accordions.forEach((accordion, x) => {
                panels[x].className += " hidden"
                svgs[x].className += " rotate-0"
                svgs[x].classList.remove('-rotate-180');
                accordion.className = "bg-white py-6 px-3 sm:px-6 border-b border-primary-5 accordion"
            })
            
            if(!isActive){
                accordions[i].classList.toggle('bg-white')
                accordions[i].className += ' bg-primary-1 active'
                panels[i].classList.toggle('hidden');
                ['rotate-0', '-rotate-180'].map(v => svgs[i].classList.toggle(v))
            }
        });
    }
}

// Brand Logo Slider
if(document.querySelectorAll('.brand-slider').length > 0){
    tns({
        container: '.brand-slider',
        items: 7,
        controls: false,
        slideBy: 1, //'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayDirection: 'forward',
        responsive: {
            320: { items: 3, edgePadding: 10,gutter: 10 },
            640: { edgePadding: 20, gutter: 20, items: 6 },
            900: { items: 7, edgePadding: 20, gutter: 20}
        }
    });
}

// Brand Logo Slider
if(document.querySelectorAll('.testimonial-slider').length > 0){
    let slider = tns({
        container: '.testimonial-slider',
        items: 3,
        controls: false,
        slideBy: 1, //'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayDirection: 'forward',
        responsive: {
            320: { items: 1, edgePadding: 10,gutter: 10 },
            640: { edgePadding: 20, gutter: 20, items: 2 },
            900: { items: 3, edgePadding: 20, gutter: 20}
        }
    });

    document.querySelector('.prev-button').onclick = function (e) {
        slider.goTo('prev');
        e.preventDefault();
    }

    document.querySelector('.next-button').onclick = function (e) {
        slider.goTo('next');
        e.preventDefault();
    }
}
