//TEMPLATE DE CREATION D'UN WEB-COMPONENT
export default class MyHtmlElement extends HTMLElement{
     constructor(){
          super()
          this.err = []


          // RECUPERE LES DONNEE DU COMPOSANT VIA LA VARIABLE CRÉÉ DANS LE <head/> VIA L'IMPORT DU SCRIPT ./data.js
          this.data = navbar_data;
     }
     // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
     connectedCallback(){
        //
        this.init()
          //    this.connectedCallback_()
        
     }


     // APPELÉ LORSQUE L'ÉLEMENNT EST SUPPRIMÉ DE LA PAGE
     disconnectedCallback(){
     }

     
     // APPELÉ À CHAQUE FOIS QUE L'ÉLEMENNT CHANGE DE DOCUMENT
     adoptedCallback (){
     }


     // POUR OBSERVER LES CHANGEMENTS AU NIVEAU DES ATTRIBUTS
     attributeChangedCallback (){
     }

     
     getElements(){
          for(let componentName in this.elements){
               // VERIFIE SI L'ELEMENT LA CLE componentName EXISTE DANS LES data
               if(this.data[componentName]){ 
                    let elt = this.tag__(componentName)
                    this.elements[componentName] = elt
                    // if(Array.isArray(this.data[componentName])) this.data[componentName].push(elt)
                    // else this.data[componentName].component = elt
               }
               else this.err.push(`MyHtmlElement:::getElements() => le tag '${componentName}' n'est pas valide.`)
          }
     }

     tag__(componentName){
          let name = componentName.charAt(0).toUpperCase() + componentName.substring(1)
          return this['tag__'+ name](this.data[componentName])
     }
     tag__Anchor(data){
          let $component = $("<a/>")
          this.$anchor = $component
          $component.html(data.title)
          $component.attr('href', data.href)

          return $component
     }
     tag__Button(data){
          let $component = $("<button/>")
          this.$button = $component
          $component[0].setAttribute("data-toggle", "collapse")
          $component[0].setAttribute("data-target", "menu")
          $component[0].setAttribute("aria-expanded", "false")
          $component[0].setAttribute("aria-label", "Toggle navigation")
          //$compone[0]nt ==>> PAS BESOIN DE L'ATTRIBUT 'aria-controls' => https://www.accede-web.com/notices/interface-riche/panneaux-depliants/#ancre-06-->
          $component[0].setAttribute("aria-controls", "menu")
          $component[0].append(document.createElement('span'))
          
          return $component
     }
     tag__Menu(data){
          let $component = $("<menu/>")
          this.$menu = $component
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
          $component.append(items)

          return $component
     }

     tag__Form(){
          let $component = $("<form/>")
          this.$form = $component

          return $component
     }

    componentDropdown(){
        return `TODO: 
            <a href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div aria-labelledby="dropdownId"><!--div,ul,ol,dt-->
                <a href="#">Action 1</a>
                <a href="#">Action 2</a>
            </div
        `
    }
}