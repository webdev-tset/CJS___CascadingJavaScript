//TEMPLATE DE CREATION D'UN WEB-COMPONENT
class MonTest extends HTMLElement{
     constructor(){
          super()
     }
     connectedCallback(){
          this.innerHTML="mon,test"
     }
     disconnectedCallback(){
          
     }
     adoptedCallback (){
          
     }
     attributeChangedCallback (){
          
     }
}
window.customElements.define('mon-test', MonTest)