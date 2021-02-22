# ...LE FRAMEWORK AURA DES WIDGET? ET UN DE CEUX L0 SERA DE PERMETTRE 0 TOUS D EPERSONNALISER NIMPORTE QUEL DOMAINE WEB VIA UN MENU ACCROCHE EN HAUT GAUCHE ET QUI PERMET D'INTERAGIR AVEC LE SIEWEB, NOTAMMENT EN TANT QUE GESTIONNAIRE DE FAVORIS AM2LIORE MAIS BIEN PLUS ENCORE. 
# CE WIDGET PERMETTRA EN PLUS PAR EXEMPLEDE SERVIR DE FEUILLE DE BROUILLON? OU DE TODI LISTS OU QUE SAIS6JE NECORE, TOUT CE QUI PEUT S'AFFICHER ET ETRE UTILE !)


# PROCESS
un webcompoasnt est appelé dans le docupment html
le constructor de la classe du composant est appelé, qui appelle le constructor de sa base, qui appelle le constructor de sa class parente
     - celui-ci recherche dans la variable json5 cjsdatafile si la clé correspondant au nom ou code machine existe ou pas. 
     - on crée this.options = si la clé existe et qu'une régle est définie (clé == "_") dans cette objet on l'extirpe de l'objet || {} objet vide
     - on crée this.data = la valeur de cette clé si elle existe || {} un objet vide
     - crée les elements en bouclant sur la liste des schémas de la class de base  correspondant au webcomponent (chaque class de base à une liste de l'ensemble des webcomposant que l'on peut construire avec (cette class de base))
          les methodes sont appelés pour générer les élements. Si des données sont manquantes ou meme s'il n'y a aucune donnée, ces méthodes génerent quand même un contenu HTML avec du dummy content.
le constructor de la class de base
     - implémente des fonctionnalités pour permettre la modification et la manipulation du web-composant ou de certains de ces éléments. => ensemble de FONCTIONNALITES A DEFINIR !!!
le constructor du webcomposant
     - utilise this.options pour implémenter des fonctionnalité sur le webcomposant ou sur certains de ses élements. 



# TODO LIST

# LISTE DES COMPOSANTS (bootstrap):
- alerts 2
- badges 1X
- breadcrumb 2 -- 
- buttons 1X
- btnGroups 2X
- cards 3,(5)
- carousels 4,5,3
- collapses 2,5,3
- dropdowns 3X
- forms 3X
- input groups ??
- jumbotrons 3
- list groups 3X
- modals 3 (btns)
- navs 3X
- navbars 1
- paginations 2,3
- popovers 2X
- progress 1X
- scrollspy 3 (nav,navbar)
- tooltips


# JE CLASSE CHACUN DE CES COMPOSANTS, EN FONCTION DE SI CE COMPOSANT:
- 1) Composant d'ordre primitif: ne peut en contenir aucun autre
- 2) Composant de groupe: peut en contenir d'autre mais 1 ou 2 tout au plus
- 3) Composant d'ordre supérieur

# LISTE DES COMPOSANTS HTML D'ORDRE 0:
- body 0
- html -1
- head -2
- ...tous les composants dévenues obselete -#
# LISTE DES COMPOSANTS HTML D'ORDRE 1:
- header 1
- nav 2
- main 3
- aside 4
- footer 5

# GET STARTED: first things first
Pour commencer rapidement, dans le terminal faire: sass index.scss build/index.css --watch
Puis via vscode et emmet, dans index.html utiliser les snippets du framework css(bootstrap au départ) pour afficher le contenu html/css à convertir en balises html5 simplifiées et en code scss simplifié à coup d'@extend



## IL S'AGIT DE TRIER LES COMPOSANTS DU FWK POUR LES ASSIGNER À UN COMPOSANT HTML D'ORDRE 1

### HEADER
- navbar

#### QUELQUES LIENS UTILES
- notions l'accessibilité: https://www.accede-web.com/