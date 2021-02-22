import MyHtmlElement from '../MyHtmlElement.js'


export default class Headerbar extends MyHtmlElement{

    COMPONENT_NAME = "headerbar"

    constructor(){
        super()
        this.component = {a:null,h1:null,menu:null,ul:null,form:null,button:null}
    }
    // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
    connectedCallback(){

        alert('error: this alert should not be happening. Read the browser\'s console logs to understand why.')
        console.log("headerbar:::(cycleLife)connectedCallback => HTMLElement's cyclelife methods should strictly be called from web-component's script HTMLElement.\n \
                        Create a method in the component who called me...");
        
        /*
        this.$form.append($('<input/>').attr({'type': 'submmit', 'placeholder': 'Search'}))
        .append($('<button/>').addClass('btn btn-outline-success my-2 my-sm-0').text('Search').attr('type','submit'))
        // this.init()

        this.finish()
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
    
    getElementsFromData(componentOptions={}){
        this.component = {...this.component, ...componentOptions}
        // LE SCHEMA DES ELEMENTS DU WEB-COMPOSANT
        // CE SCHEMA EST CALQUÉ SUR LE PROTOTYPE DU FICHIER data.js DE CE WEB-COMPOSANT
        // this.component = {anchor:null,button:null,menu:null,form:null}
        
        // LE SCHEMA(this.component) DE CE WEB-COMPOSANT EST 
        // 1PARCOURU 
        // 2CRéER LES ELEMENTS HTML CORRESPONDANTS VIA this.tag__(), ..puis sauvegardé pour compléter le schéma
        // 3AJOUTER LES COMPORTEMENTS AU ELEMENTS JUSTES CREES
        // 1
        for(let elementName in this.data){
            // 2
            let elt = this.tag__(elementName)
            this.component[elementName] = elt
            // console.log("___ok "+elementName);
            // console.log(elt);
            // console.log("___ok");
        }
        // 3
        this.addBehaviorsToElements()
    }
    addBehaviorsToElements(){
        console.log("Headerbar::addBehaviorsToElements");
    }
   

/********************************************************************************
     ************************************************************************
********************************************************************************/
 
    //
    // this.tag__() C'EST LE TRAITEMENT DE DONNEES. CELA CONCERNE:
    //
    // 1LES DONNEES TEXTUELLES ET DONNEES PRIORITAIRE DU COMPOSANT,
    // 2LES ATTRIBUTS SUPPLEMENTAIRE
    // 3UNE CLASSE ET/OU UN IDENTIFIANT
    //
    tag__(elementName){
            
        let methodName = elementName.charAt(0).toUpperCase() + elementName.substring(1)
        //let methodTagName = methodName = MYGLOBALOBJECT.middleware(elementName.charAt(0).toUpperCase() + elementName.substring(1))
        
        if(elementName=="_"){

        }else if(super['tag__' + methodName]){
                return super['tag__'+ methodName]({data: this.data[elementName]/*, type: this.component[elementName]*/})
                // else return tag__basics(elementName)
        }else return document.createElement(elementName)
        
   }
    tag__basics(elementName){
        let elt = $(document.createElement(elementName))
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

    
