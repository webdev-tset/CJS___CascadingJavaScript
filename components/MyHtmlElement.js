import mapDOM from '../../mapDOM/mapDOM.js'

//TEMPLATE DE CREATION D'UN WEB-COMPONENT
export default class MyHtmlElement extends HTMLElement{
     constructor(){
          // alert('a')
          super()
          // alert('b')
          this.err = []
          this.data = {}
          this.elements = {}
          this._ = new mapDOM()
          console.log('ok');
          console.log(this._.tags.html5.length);

     }
     // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
     connectedCallback(){
          alert("connectedCallback::connectedCallback() =>\n \
               erreur:  LA MéTHODE DU CYCLE DE VIE DES WEB-COMPOSANT 'connectedCallback' \
               n'a pa été CRéé DANS LA CLASSE PARENTE :p\n \
               VEUILLEZ LA CRéER SVP !\ voir les logs console pour plus de détails")
          console.log("CETTE METHODE DOIT: \n \
               1 RECUPERER LES data CORRESPONDANTS À CE WEB-COMPOSANT \
               2 RECUPERER LE SCHEMA ASSOCIE À CE WEB-COMPOSABT \
               3 CREER LES ELEMENTS DE FACON AUTOMATISEE");
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

     
     getElementsFromData(){
          // LE SCHEMA DES ELEMENTS DU WEB-COMPOSANT
          // CE SCHEMA EST CALQUÉ SUR LE PROTOTYPE DU FICHIER data.js DE CE WEB-COMPOSANT
          this.elements = {anchor:null,button:null,menu:null,form:null}
          
          // LE SCHEMA(this.elements) DE CE WEB-COMPOSANT EST 
          // 1PARCOURU 
          // 2ET SI CORRESPONDANCE 
          // 3CRéER LES ELEMENTS HTML CORRESPONDANTS VIA this.tag__(), ..puis sauvegardé pour compléter le schéma
          for(let componentName in this.elements){
               // 2VERIFIE SI L'ELEMENT LA CLE componentName EXISTE DANS LE FICHIER data
               if(this.data[componentName]){ 
                    // 3
                    let elt = this.tag__(componentName)
                    this.elements[componentName] = elt

                    // 4SAUVEGARDER CES elements AUSSI DANS LES data
                    //...pas très interessant au final, cause des problèmes lors de la boucles sur les data...normal :s
                    // if(Array.isArray(this.data[componentName])) this.data[componentName].push(elt)
                    // else this.data[componentName].component = elt
               }
               // TABLEAU D'ERREUR: COMPLETÉ? IL SERA LOGGUÉ PAR LE WEB-COMPOSANT HÔTE
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