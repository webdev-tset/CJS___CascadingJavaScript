//TEMPLATE DE CREATION D'UN WEB-COMPONENT
class MonTest extends HTMLElement{
// class MonTest extends HTMLSpanElement{
     static get observedAttributes(){ return ['ok'] }
     constructor(){
          super()
          this.shadow = this.attachShadow({mode: 'open'})

     }
     connectedCallback(){
          this.shadow.innerHTML="<style>span{background:red;}</style>"
          this.shadow.innerHTML+="<slot name='ok'></slot> ___ mon,<span>test</span>: " + this.getAttribute('ok') + " ___ <slot name='ko'></slot>"
     }
     disconnectedCallback(){
          
     }
     adoptedCallback (){
          
     }
     attributeChangedCallback (name, old, newV){
          // alert(newV)
          console.log(name)
          console.log(old)
          console.log(newV)
     }
}
window.customElements.define('mon-test', MonTest)
// window.customElements.define('mon-test-span', MonTest, {extends: 'span'})