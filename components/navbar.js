window.addEventListener('load', function(){
    // alert('ok, doc\'s ready !')
    let i, $the_component = $('nav-bar').length
        ? $('nav-bar')
        : $('.navbarre'), the_component = $the_component[0]
        
    if(the_component.length===0)return false
    $the_component.on('open',()=>{alert('oui')})
    
    // the_component.dataset.data = `{"anchor":{"title": "${$the_component.find('>a').text()||title}", href=}}`
    let data = navbar_data;

    let anchor = the_component.querySelector(':scope>a'),$anchor=$(anchor),
    button = the_component.querySelector(':scope>button'),$button=$(button),
    menu = the_component.querySelector(':scope>menu'),$menu=$(menu),
    form = the_component.querySelector(':scope>form'),$form=$(form)

    ;
    $anchor.html(anchor.innerHTML || data.anchor.title)
    $anchor.attr('href', $anchor.attr('href') || data.anchor.href)
    button.setAttribute("data-toggle", "collapse")
    button.setAttribute("data-target", "menu")
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-label", "Toggle navigation")
    //button ==>> PAS BESOIN DE L'ATTRIBUT 'aria-controls' => https://www.accede-web.com/notices/interface-riche/panneaux-depliants/#ancre-06-->
    button.setAttribute("aria-controls", "menu")
    button.append(document.createElement('span'))
    console.log(getTag__Menu(data.menu));
    $menu.append(getTag__Menu(data.menu))
    $form.append($('<input/>').attr({'type': 'submmit', 'placeholder': 'Search'}))
        .append($('<button/>').addClass('btn btn-outline-success my-2 my-sm-0').text('Search').attr('type','submit'))
})



    function getTag__Menu(data){
        let items = data.map(li=>$('<li/>'))
        items.forEach((li,i)=>{
            console.log(data[i]);
            $(li).append(
                $('<a/>').html(data[i].html||'Lien menu '+i).
                attr({'href': data[i].href||'#menu-'+i})
                .addClass('nav-link')
            )
            if(i==0)$(li).addClass('active')
            if(data[i].dropdown){
                $(li).find('>a')
                    .addClass('dropdown-toggle')
                    .attr({id:'navbarmenu_dropdown_'+i, 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false'})
                $(li).append(
                    $('<div class="dropdown-menu" aria-labelledby="navbarmenu_dropdown_'+i+'" />')
                        .append(data[i].dropdown.map(
                            dropdown=>$('<a/>').addClass('dropdown-item')
                                .html(dropdown.html)
                                .attr('href', dropdown.href)
                        ))
                )
            }
        })
        return items
    }

    // function getComponent__Dropdown(){
    //     return `TODO: 
    //         <a href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    //         <div aria-labelledby="dropdownId"><!--div,ul,ol,dt-->
    //             <a href="#">Action 1</a>
    //             <a href="#">Action 2</a>
    //         </div
    //     `
    // }
    
    
    



