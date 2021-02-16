import { mapDOM, mapDOMMotion } from '../mapDOM/mapDOM.js'

//TEMPLATE DE CREATION D'UN WEB-COMPONENT
export default class MyHtmlElement extends HTMLElement{

     COMPONENT_NAME = "element"

     constructor(){
          // alert('a')
          super()
          // alert('b')
          this.err = []
          this.data = {}
          this.elements = {}
          this._ = new mapDOM()
          this._m = new mapDOMMotion()
          console.log('ok');
          console.log(this._.tags.html5.length);

     }
     // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
     connectedCallback(){
          alert('error: this alert should not be happening. Read the browser\'s console logs to understand why.')
          console.log("Navbar:::(cycleLife)connectedCallback => HTMLElement's cyclelife methods should strictly be called from web-component's script HTMLElement.\n \
                     Create a method in the component who called me...");
     
          /*
          alert("connectedCallback::connectedCallback() =>\n \
               erreur:  LA MéTHODE DU CYCLE DE VIE DES WEB-COMPOSANT 'connectedCallback' \
               n'a pa été CRéé DANS LA CLASSE PARENTE :p\n \
               VEUILLEZ LA CRéER SVP !\ voir les logs console pour plus de détails")
          console.log("CETTE METHODE DOIT: \n \
               1 RECUPERER LES data CORRESPONDANTS À CE WEB-COMPOSANT \
               2 RECUPERER LE SCHEMA ASSOCIE À CE WEB-COMPOSABT \
               3 CREER LES ELEMENTS DE FACON AUTOMATISEE");
          for(let componentName in this.data){
               // 2
               let elt = this.tag__(componentName)
               this.elements[componentName] = elt
               console.log(elt);
          }

          // 3AJOUTER LES COMPORTEMENTS AU ELEMENTS JUSTES CREES
          this.addBehaviorsToElements()
          */
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

/********************************************************************************
     ************************************************************************
********************************************************************************/


     getElementsFromData(){
          // LE SCHEMA DES ELEMENTS DU WEB-COMPOSANT
          // CE SCHEMA EST CALQUÉ SUR LE PROTOTYPE DU FICHIER data.js DE CE WEB-COMPOSANT
          // this.elements = {anchor:null,button:null,menu:null,form:null}
          
          // LE SCHEMA(this.elements) DE CE WEB-COMPOSANT EST 
          // 1PARCOURU 
          // 2CRéER LES ELEMENTS HTML CORRESPONDANTS VIA this.tag__(), ..puis sauvegardé pour compléter le schéma
          // 3AJOUTER LES COMPORTEMENTS AU ELEMENTS JUSTES CREES
          // 1
          for(let componentName in this.data){
               // 2
               let elt = this.tag__(componentName)
               this.elements[componentName] = elt
               console.log(elt);
          }
          // 3
          this.addBehaviorsToElements()
     }

     addBehaviorsToElements(){
          console.log("MyHtmlElement::addBehaviorsToElements => JE VAIS INSERER DANS LE BON ORDRE LES ELEMENTS DANS LE DOCUMENT (à la place de webcomposant lui-meme qui le fait pour l'instant avec sa fonction finish()).");
     }


/********************************************************************************
     ************************************************************************
********************************************************************************/
     
     getBasicTag(){
          // 1 document.create('element')
          // 2 insérer dans une propriété ".attrs" de la balise l'objet sous forme JSON de cette meme balise
          // 3 selon les options définis par la fonction appelante
          // ou selohn les options par défaut définis pour ce balicElement
          // crée sur ce composant les attributs nécessaires
     }
/**
 * 
 * @param {data} param0  JSON
 * @param {types} param1 Array 
 * 
 * DEROULEMENT:
 * 1) CREER LA BALISE
 * 2) CREER ET AJOUTER A LA BALISE DANS L'ATTRIBUT 'fulldata' L'OBJET JSON CONTENANT LES attributes ASSOCIES A LA BALISE <X/>, ET LES OBJETS properties, methods, events
 * 3) AJOUTER A LA BALISE LES ATTRIBUTS OBLIGATOIRES/RECOMMANDES/NECESSAIRES DE CETTE BALISE 
 * 4) BOUCLER SUR UN SWITCH: for(type in types)switch(type){}
 */
     
     
     tag__A({data, type}){
          let $errors = $("<div class='error'/>")
          let $element = $("<a/>")
          $element[0].attrs = {"attributes":{"download":{"value":"filename","description":"Specifies that the target will be downloaded when a user clicks on the hyperlink"},"href":{"value":"URL","description":"Specifies the URL of the page the link goes to"},"hreflang":{"value":"language_code","description":"Specifies the language of the linked document"},"media":{"value":"media_query","description":"Specifies what media/device the linked document is optimized for"},"ping":{"value":"list_of_URLs","description":"Specifies a space-separated list of URLs to which, when the link is \n followed, post requests with the body ping will be sent by the browser (in \n the background). Typically used for tracking."},"referrerpolicy":{"value":"no-referrerno-referrer-when-downgradeorigin\n origin-when-cross-originsame-originstrict-origin-when-cross-originunsafe-url","description":"Specifies which referrer information to send with the link"},"rel":{"value":"alternate\n author\n bookmarkexternal\n help\n license\n next\n nofollow\n noreferrernoopener\n prev\n search\n tag","description":"Specifies the relationship between the current document and the linked document"},"target":{"value":"_blank\n _parent\n _self\n _top","description":"Specifies where to open the linked document"},"type":{"value":"media_type","description":"Specifies the media type of the linked document"}},"properties":{"setters":{"download":{"description":"Sets or returns the value of the download attribute of a link"},"hash":{"description":"Sets or returns the anchor part of the href attribute value"},"host":{"description":"Sets or returns the hostname and port part of the href attribute value"},"hostname":{"description":"Sets or returns the hostname part of the href attribute value"},"href":{"description":"Sets or returns the value of the href attribute of a link"},"hreflang":{"description":"Sets or returns the value of the hreflang attribute of a link"},"password":{"description":"Sets or returns the password part of the href attribute value"},"pathname":{"description":"Sets or returns the pathname part of the href attribute value"},"port":{"description":"Sets or returns the port part of the href attribute value"},"protocol":{"description":"Sets or returns the protocol part of the href attribute value"},"rel":{"description":"Sets or returns the value of the rel attribute of a link"},"search":{"description":"Sets or returns the querystring part of the href attribute value"},"target":{"description":"Sets or returns the value of the target attribute of a link"},"text":{"description":"Sets or returns the text content of a link"},"type":{"description":"Sets or returns the value of the type attribute of a link"},"username":{"description":"Sets or returns the username part of the href attribute value"}},"getters":{"origin":{"description":"Returns the protocol, hostname and port part of the href attribute value"}}},"methods":{},"events":{}}
          $element.attr({href: data.href, title: data.title})
          type = type ? type : data.type ? data.type : "standard" 
          $element.html(data.html);
          switch(type){

               case"logo":
                    console.log("éllllll");
                    console.log(data);
                    if(data.img){$element.append(this.tag__Img({data:data.img}))
                    }else $errors.append("<p>tag__A::type==logo => il manque une propriété</p>")
                    if(data.icon)$element.append(tag__SpanIcon(data.icon))
                    console.log($element[0]);
               ;break;
               default://case=>"standard"
          }
          $element[0].errors = $errors
          // this.$anchor = $element
          // $element.html(data.title)

          return $element
     };tag__Anchor(data, type){return this.tag__A({...data, type:"anchor"})}
     ;tag__ALogo(data, type){return this.tag__A({...data, type:"logo"})}


     tag__Img({data, type}){
          return $(`<img src="${data.src} alt="${data.alt}" />`)
     }


     tag__Span(data, type){
          let $errors = $("<div class='error'/>")
          let $element = $("<span/>")
          $element[0].attrs = {attributes: {}, properties: {}, methods: {}, events: {}}
          
          switch(type){

               case"icon":
                    if(data.icon)$element.addClass('material-icon').html(data.icon)
                    else $errors.append("<p>tag__SpanIcon::type==icon => il manque une propriété</p>")
               break;
               default:break;
          }
          return $element
     }tag__SpanIcon(data, type){this.tag__Span(data, "icon")}


     tag__H1({data, type}){
          let $element = $('<h1/>')
          $element.attrs = this._.dom.html5['h1']
          switch(type){
               case"logo": if(data.html&&data.a&&data.img){
                    let a = this.tag__ALogo({data: {a: data.a, img: data.img}})
                    alert(a)
                    $element.html(data.html)
                    $element.append(a)
                    console.log("yyyyooo " +type);
                    console.log(a[0]);
                    console.log($element);
                    console.log($element[0]);
               };break;
               case"":
               break;
               default:break;
          }
          return $element
     };tag__H1Logo({data}){return this.tag__H1({data, type:"logo"})}
     tag__Button({data, type}){
          let $element = $("<button/>")
          this.$button = $element
          $element[0].setAttribute("data-toggle", "collapse")
          $element[0].setAttribute("data-target", "menu")
          $element[0].setAttribute("aria-expanded", "false")
          $element[0].setAttribute("aria-label", "Toggle navigation")
          //$compone[0]nt ==>> PAS BESOIN DE L'ATTRIBUT 'aria-controls' => https://www.accede-web.com/notices/interface-riche/panneaux-depliants/#ancre-06-->
          $element[0].setAttribute("aria-controls", "menu")
          $element[0].append(document.createElement('span'))
          
          return $element
     }
     tag__Menu({data, type}){
          let $element = $("<menu/>")
          this.$menu = $element
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
          $element.append(items)

          return $element
     }

     tag__Form(){
          let $element = $("<form/>")
          this.$form = $element

          return $element
     }

     
}