import Headerbar from './headerbar.js'

export default class HeaderbarStandard extends Headerbar{
     
     COMPONENT_NAME = "headerbar_standard"

     constructor(){
          super()
          this.component = {h1:"logo",menu:"primary",ul:"seondary",form:"headerbar",button:"responsive"}

     }
     // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
     connectedCallback(){
          // VIA L'IMPORT DU SCRIPT ./data.js, JE RECUPERE LES DONNEES data
          // DU WEB-COMPOSANT headerbar VIA LA VARIABLE CRÉÉE PAR CE SCRIPT DANS LE <head/> 
          this.data = datafile[COMPONENT_NAME] || datafile[COMPONENT_NAME.replace('_','-')]
          // 1) RECUPERER LES ELEMTNS DU compoenent À PARTIR DES data EN APPELLANT LA JUMELLE METHODE PARENTE
          //  THEN) INTO getElementsFromData() CALL this.addBehaviorsToElements() IN ORDER TO:
          //  "AJOUTE DES COMPORTEMENTS AUX ELEMENTS JUSTES CREES"
          this.getElementsFromData(this.component)
          
          
          this.$form.append($('<input/>').attr({'type': 'submmit', 'placeholder': 'Search'}))
          .append($('<button/>').addClass('btn btn-outline-success my-2 my-sm-0').text('Search').attr('type','submit'))
          // this.init()
          this.finish()
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

     getElementsFromData(){
          super.getElementsFromData()
          
          
          
          /*
          // LE SCHEMA DES ELEMENTS DU WEB-COMPOSANT
          // CE SCHEMA EST CALQUÉ SUR LE PROTOTYPE DU FICHIER data.js DE CE WEB-COMPOSANT
          // this.component = {anchor:null,button:null,menu:null,form:null}
          
          // LE SCHEMA(this.component) DE CE WEB-COMPOSANT EST 
          // 1PARCOURU 
          // 2CRéER LES ELEMENTS HTML CORRESPONDANTS VIA this.tag__(), ..puis sauvegardé pour compléter le schéma
          // 3AJOUTER LES COMPORTEMENTS AU ELEMENTS JUSTES CREES
          // 1
          for(let componentName in this.data){
               // 2
               let elt = this.tag__(componentName)
               this.component[componentName] = elt
               console.log(elt);
          }
          // 3
          this.addBehaviorsToElements()
     */
     }

     addBehaviorsToElements(){
          console.log("headerbarStd::addBehaviorsToElements");
     }
    
     finish(){
          if(this.err.length != 0)
              console.error(this.err);
          for(let a in this.component)
              $(this).append(this.component[a])

          this.id = this.COMPONENT_NAME+"___"+Math.round(Math.random()*100)
      }


/********************************************************************************
     ************************************************************************
********************************************************************************/

     
     tag__basics(componentName){
          let elt = $(document.createElement(componentName))
     }
}
window.customElements.define('headerbar-standard', HeaderbarStandard)