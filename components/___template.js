//TEMPLATE DE CREATION D'UN WEB-COMPONENT
class MyClass extends HTMLElement{
     static get observedAttributes(){ return ['ok'] }
     
     constructor(){
          super()
          this.shadow = this.attachShadow({mode: 'open'/*shadow accessible à js*/ || 'close'/*shadow non accessible à js*/})
          // DANS LE shadowRoot, LE CSS NE DÉBORDE PAS NI VERS L'EXTERIEUR NI PAR L'EXTERIEUR
          this.shadow.innerHTML = `
               something ___template.js <br/>
               <slot />
          `;
          alert("en CSS, la seul manière de communiquer d'un parent vers un enfant est de passer par les variables css:\n --mavar/var(--mavar)")
          alert("la pseudo class :host, permet d'accrocher l'élement qui accueil le shadowDOM")
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
     attributeChangedCallback (name, oldV, newV){
     }

/********************************************************************************
     ************************************************************************
 ********************************************************************************/

}
window.customElements.define('my-class', MyClass)