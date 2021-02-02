import MyHtmlElement from '../MyHtmlElement.js'

class NavbarStd extends MyHtmlElement{
    constructor(){
        super()
        
    }
    // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
    connectedCallback(){
        // VIA L'IMPORT DU SCRIPT ./data.js, JE RECUPERE LES DONNEES data
        // DU WEB-COMPOSANT navbar VIA LA VARIABLE CRÉÉE PAR CE SCRIPT DANS LE <head/> 
        this.data = navbar_data;
        console.log(this.data)
        // LE SCHEMA DES ELEMENTS DU WEB-COMPOSANT
        // CE SCHEMA EST CALQUÉ SUR LE PROTOTYPE DU FICHIER data.js DE CE WEB-COMPOSANT
        this.elements = {anchor:null,button:null,menu:null,form:null}
        // APPELLE LA METHODE PARENTE AFIN DE RECUPERER LES elements À PARTIR DES data
        super.getElementsFromData()


        
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
    attributeChangedCallback (){
    }

    finish(){
        if(this.err.length != 0)console.error(this.err);
        $(this).append([
            this.$anchor,
            this.$button,
            this.$menu,
            this.$form
        ])
    }

}
window.customElements.define('navbar-std', NavbarStd)

    
