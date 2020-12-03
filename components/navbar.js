window.addEventListener('load', function(){
    alert('ok, doc\'s ready !')
    let i, the_component = document.getElementsByTagName('nav-bar')
    the_component = the_component.length!==0 ? the_component : document.getElementsByClassName('navbarre')
    if(the_component.length===0)return false
    for(i in the_component)if(the_component.hasOwnProperty(i))
        console.log(the_component[i] +" ok ");

let anchor, button, menu, form
    for(i in the_component)if(the_component.hasOwnProperty(i)){
        anchor = the_component[i].querySelector(':scope>a')
        button = the_component[i].querySelector(':scope>button')
        menu = the_component[i].querySelector(':scope>menu')
        form = the_component[i].querySelector(':scope>form')
    }
    button.setAttribute("data-toggle", "collapse")
    button.setAttribute("data-target", "menu")
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-label", "Toggle navigation")
    //button ==>> PAS BESOIN DE L'ATTRIBUT 'aria-controls' => https://www.accede-web.com/notices/interface-riche/panneaux-depliants/#ancre-06-->
    button.setAttribute("aria-controls", "menu")

})