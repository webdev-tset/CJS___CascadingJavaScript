//TEMPLATE DE CREATION D'UN WEB-COMPONENT
class MyClass extends HTMLElement{
     constructor(){
          super()
     }
     // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
     connectedCallback(){
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


}
window.customElements.define('my-class', MyClass)