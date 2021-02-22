/*

CHAQUE COMPOSANT-WEB POSSEDE UN FICHIER data.js TEL QUE CELUI-CI

*/
// headerbar-standard
var cjsdatafile = {
    "headerbar_standard": {
        _: {
            // t for Traitment, 
            t: {type_traitment: "standard", attributes: "class:maclass par defaut;id:unid;test: je suis un test;"||{clas:"maclass par defaut",id:"unid",test:" je suis un  battribut test"}},
            // b for Behavior
            b: {type_behavior: "standard", behaviors: {behaviorName1: {datas: {}},behaviorName2: {datas: {}}}}
        },
        "h1Logo": {
            html: "Ma headerbarre for TheCompagnyName :p__",
            a: {href: "#mon-href", title: "uin titre d'ancre", html:"TheCompagnyName"},
            img: {src: "./img.jpg", alt: "okok", title: "un titre d'image"}
        },
        "menu": [
            {"html": "Home <span>(current)</span>", "href": "#lien-home"},
            {"html": "Link", "href": "#lien-link"},
            {"html": "Dropdown", "dropdown": [
                {"html": "Action 1", "href": "#action-1"},
                {"html": "Action 2", "href": "#action-2"},  ]
            },
        ],
        "button": {
            
        },
        "form": {
            
        },
        "fvfffdgorm": {
            
        }
    }
}