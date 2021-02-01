import MyHtmlElement from './MyHtmlElement.js'

class NavbarStd extends MyHtmlElement{
    constructor(){
        super()
        this.elements = {anchor:null,button:null,menu:null,form:null}
        this.getElements()
        
    }
    // APPELÉ LORSQUE L'ÉLEMENNT EST CONNECTÉ À LA PAGE
    connectedCallback(){
        // MyHtmlElement.prototype.connectedCallback();
        // this.innerHTML="okokok"
        this.init()
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


    init(){
        // ON CRÉE LES ELEMENTS DU COMPOSANT
        // D'ABORD LES ELEMENTS DE LA COUCHE RACINE
        /*
        this.$anchor = $("<a/>")
        this.$button = $("<button/>")
        this.$menu = $("<menu/>")
        this.$form = $("<form/>")
        let anchor = this.$anchor[0]
        , button = this.$button[0]
        , menu = this.$menu[0]
        , form = this.$form[0]
        */
/* TEMPLATE DU WEB-COMPONENT
<nav>
    <a></a>
    <button></button>
    <menu></menu>
    <form></form>
</nav>
*/



/*
        // ON TRAITE LES DIFFERENTS ELEMENTS RECUPERES JUSTE AVANT
        // BALISE <A/>
        this.tag__Anchor(this.data.anchor, this.$anchor)
        //BALISE <BUTTON/>
        this.tag__Button(this.data.button, this.$button)
        // BALISE <MENU/>
        this.tag__Menu(this.data.menu, this.$menu)
*/
        // BALISE <FORM/>
        this.$form.append($('<input/>').attr({'type': 'submmit', 'placeholder': 'Search'}))
            .append($('<button/>').addClass('btn btn-outline-success my-2 my-sm-0').text('Search').attr('type','submit'))
        
        
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

    
