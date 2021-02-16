// "js queryselector childs only" => https://stackoverflow.com/questions/3680876/using-queryselectorall-to-retrieve-direct-children
// --> Element.querySelector(':scope>button')
// 
// https://jaetheme.com/balises-html5/
HTML5Tags = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdo","bdi","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1 à h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","keygen","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]
// https://www.w3schools.com/tags/ref_attributes.asp
HTMLAttributes = {"input":["accept","alt","autocomplete","autofocus","checked","dirname","disabled","form","formaction","height","list","max","maxlength","min","multiple","name","onload","onsearch","pattern","placeholder","readonly","required","size","src","step","type","value","width"],"form":["accept-charset","action","autocomplete","enctype","method","name","novalidate","onreset","onsubmit","target"],"Global Attributes":["accesskey","class","contenteditable","data-*","dir","draggable","hidden","id","lang","spellcheck","style","tabindex","title","translate"],"Not supported in HTML 5.":["align","bgcolor","border","color"],"area":["alt","coords","download","href","hreflang","media","rel","shape","target"],"img":["alt","height","ismap","onabort","onerror","onload","sizes","src","srcset","usemap","width"],"script":["async","charset","defer","onerror","onload","src","type"],"button":["autofocus","disabled","form","formaction","name","type","value"],"select":["autofocus","disabled","form","multiple","name","required","size"],"textarea":["autofocus","cols","dirname","form","maxlength","name","placeholder","readonly","required","rows","wrap"],"audio":["autoplay","controls","loop","muted","onabort","oncanplay","oncanplaythrough","ondurationchange","onemptied","onended","onerror","onloadeddata","onloadedmetadata","onloadstart","onpause","onplay","onplaying","onprogress","onratechange","onseeked","onseeking","onstalled","onsuspend","ontimeupdate","onvolumechange","onwaiting","preload","src"],"video":["autoplay","controls","height","loop","muted","onabort","oncanplay","oncanplaythrough","ondurationchange","onemptied","onended","onerror","onloadeddata","onloadedmetadata","onloadstart","onpause","onplay","onplaying","onprogress","onratechange","onseeked","onseeking","onstalled","onsuspend","ontimeupdate","onvolumechange","onwaiting","poster","preload","width"],"meta":["charset","content","http-equiv","name"],"blockquote":["cite"],"del":["cite","datetime"],"ins":["cite","datetime"],"q":["cite"],"td":["colspan","headers","rowspan"],"th":["colspan","headers","rowspan","scope"],"object":["data","form","height","onabort","oncanplay","onerror","type","usemap","width"],"time":["datetime"],"track":["default","kind","label","oncuechange","src","srclang"],"fieldset":["disabled","form","name"],"optgroup":["disabled","label"],"option":["disabled","label","selected","value"],"textarea":["disabled"],"a":["download","href","hreflang","media","rel","target","type"],"label":["for","form"],"output":["for","name"],"meter":["form","high","low","max","min","optimum"],"output":["form"],"canvas":["height","width"],"embed":["height","onabort","oncanplay","onerror","src","type","width"],"iframe":["height","name","onload","sandbox","src","srcdoc","width"],"base":["href","target"],"link":["href","hreflang","media","onload","rel","type"],"progress":["max","value"],"source":["media","src","srcset"],"style":["media","onerror","onload","type"],"map":["name"],"object":["name"],"param":["name","value"],"body":["onafterprint","onbeforeprint","onbeforeunload","onerror","onhashchange","onload","onoffline","ononline","onpagehide","onpageshow","onpopstate","onresize","onstorage","onunload"],"All visible elements.":["onblur","onchange","onclick","oncontextmenu","oncopy","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpaste","onscroll","onselect","onwheel"],"details":["ontoggle","open"],"form":["rel"],"ol":["reversed","start"],"link,source":["sizes"],"col":["span"],"colgroup":["span"],"video":["src"],"menu":["type"],"source":["type"],"li":["value"],"meter":["value"]}
/*
a=$('.w3-table-all')
b=a.getElementsByTagName('tr')
let d, c={};for(z in b){
  //console.log( b[z].innerHTML)
  if(z == parseInt(z)){
    d = b[z].getElementsByTagName('td')
    tmp=d[1].textContent.replace(/↵/g,'').replace(/\/g,'').replace(/</g,'').replace(/>/g,'')
    tmp = tmp.split(', ')
    console.log('---'+tmp)
    if(tmp.length>1)console.log(tmp)
    for(a in tmp){
        //console.log(tmp[a])
        if(!c[tmp[a]])c[tmp[a]]=[]
        c[tmp[a]].push(d[0].textContent)
    }
    //console.log('___---')
    console.log('___---')
    //console.log(d)
  }
}


let tmp, tmpbis, d, c={properties:[], methods:[]};
for(z in b){
  //console.log( b[z].innerHTML)
  if(z == parseInt(z)){
    d = b[z].getElementsByTagName('td')
    tmp = d[2].getElementsByTagName('a')
    
    if(d[0].textContent.indexOf('()')!=-1)c.methods.push([d[0].textContent.replace('()',''), d[1].textContent.replace('<','&lt;').replace('>','&gt;'), d[2].textContent.replace(/\n/g,"").split(',')])
    else c.properties.push([d[0].textContent, d[1].textContent.replace('<','&lt;').replace('>','&gt;'), d[2].textContent.replace(/\n/g,"").split(',')])
    
  }
}


$('.w3-table-all tr').parentNode.removeChild($('.w3-table-all tr'))
a=$('.w3-table-all')
b=a.getElementsByTagName('tr')
let tmp, tmpbis, d, c={};
for(z in b){
  //console.log( b[z].innerHTML)
  if(z == parseInt(z)){
    d = b[z].getElementsByTagName('td')
    if(d[1].textContent.indexOf('Not supported in HTML5') == -1)
        c[d[0].textContent.replace('<','').replace('>','')] = {descr:                     d[1].textContent.replace('<','&lt;').replace('>','&gt;')}
  }
}


z=[];y=document.querySelectorAll('.w3-table-all th')
for(x in y)if(y[x].textContent!==undefined)z.push(y[x].textContent)
console.log(z)
$('.w3-table-all tr').parentNode.removeChild($('.w3-table-all tr'))
let a=$('.w3-table-all'), bool = true, tmpbis = 'properties',
    tmp, d, c={properties: {}, methods: {}};
//option
bool = false
// tmpbis = 'methods'
tmpbis = 'attributes'
// tmpbis = 'events'
//ENDoption--
b=a.getElementsByTagName('tr')
console.log(b.length)
for(z in b){
  //console.log( b[z].innerHTML)
console.log(b.length+" ___")
console.log(Object.assign({},c))
  if(z == parseInt(z)){
console.log(b.length+" ---")
    d = b[z].getElementsByTagName('td')
    if(bool && (tmpbis == "methods" || tmpbis == "events")){
      if(d[1].textContent.indexOf('Returns') != -1)tmp="getters";else if(d[1].textContent.indexOf('Sets') != -1) tmp="setters";else tmp="else"
      if(!c[tmpbis][tmp])c[tmpbis][tmp] = {}
    }
console.log(tmp)
    if(d[1].textContent.indexOf('Not supported in HTML5') == -1)if(bool){
      console.log('pasok')
      console.log(d[0].textContent.replace('()','').replace('<','').replace('>',''))
      console.log('pasok')
        c.properties[tmp][d[0].textContent.replace(/</,'').replace(/>/,'')] = {descr: d[1].textContent.replace(/</g,'&lt;').replace(/>/g,'&gt;')}
    }else {
      console.log('ok')
      console.log(d[0].textContent.replace('()','').replace(/</g,'').replace(/>/g,''))
      console.log('ok')
      c.methods[d[0].textContent.replace('()','').replace(/</g,'').replace(/>/g,'')] = {descr: d[1].textContent.replace(/</g,'&lt;').replace(/>/g,'&gt;')}
    }
  }
}
a.parentNode.removeChild(a)
document.write(JSON.stringify(c)) 




https://www.w3schools.com/tags/tag_a.asp
https://www.w3schools.com/jsref/dom_obj_anchor.asp
https://www.w3schools.com/jsref/dom_obj_all.asp
https://www.w3schools.com/jsref/dom_obj_event.asp
https://www.w3schools.com/tags/ref_byfunc.asp
https://jsonformatter.curiousconcept.com/#
// IL FAUT D'ABORD DEFINIR LA VARIABLE tmpbis AVANT DE LANCER CE SCRIPT
// 4 VALEURS POSSIBLES POUR tmpbis: attributes, properties, methods, events
label=[];y=document.querySelectorAll('.w3-table-all th')
for(x in y)if(y[x].textContent!==undefined)label.push(y[x].textContent)

$('.w3-table-all tr').parentNode.removeChild($('.w3-table-all tr'))
let a=$('.w3-table-all'), bool = true, tmpbis = prompt('Quel propriété ? ("attributes", "properties", "methods", or "events")') || 'attributes',
    tmp, d, c={[tmpbis]: {}}, ccc={attributes: {}, properties: {}, methods: {}, events: {}},
    lastCrowl=prompt('Il y a-t-il un ancien crowl ?');
// alert(tmpbis)
// alert(lastCrowl)
console.log(JSON.parse(lastCrowl))
console.log({...JSON.parse(lastCrowl), ...c})
b=a.getElementsByTagName('tr')

for(z in b)if(z == parseInt(z)){
    d = b[z].getElementsByTagName('td'), cptbis={}
    for(cpt in label)if(cpt!=0)
        cptbis[label[cpt].toLowerCase()]=d[cpt].textContent.replace('()','').replace(/</g,'').replace(/>/g,'')
    if(d[1].textContent.indexOf('Not supported in HTML5') == -1){
        //alert(tmpbis)
        if(tmpbis=="attributes"){
            c['attributes'][d[0].textContent.replace('()','').replace(/</g,'').replace(/>/g,'')] = cptbis
            // console.log(cptbis)
            // console.log(c)
        }else{
            if(d[1].textContent.indexOf('Returns') != -1)tmp="getters"
            else if(d[1].textContent.indexOf('Sets') != -1) tmp="setters"
            else tmp="else"
            if(!c[tmpbis][tmp])c[tmpbis][tmp] = {}
            c[tmpbis][tmp][d[0].textContent.replace('()','').replace(/</g,'').replace(/>/g,'')] = cptbis
        } 
    }
}
a.parentNode.removeChild(a)
console.log(lastCrowl)
console.log(c) 
if(typeof lastCrowl != "undefined"){
  // alert('ok')
  c={...JSON.parse(lastCrowl), ...c}
  c={...ccc, ...c}
}
document.write(JSON.stringify(c)) 




obj.coding = {...c}
$('.w3-table-all').parentNode.removeChild($('.w3-table-all'))
*/
ACSIIEncodings = {"0":{"win1252":"%30","utf8":"%30"},"1":{"win1252":"%31","utf8":"%31"},"2":{"win1252":"%32","utf8":"%32"},"3":{"win1252":"%33","utf8":"%33"},"4":{"win1252":"%34","utf8":"%34"},"5":{"win1252":"%35","utf8":"%35"},"6":{"win1252":"%36","utf8":"%36"},"7":{"win1252":"%37","utf8":"%37"},"8":{"win1252":"%38","utf8":"%38"},"9":{"win1252":"%39","utf8":"%39"},"space":{"win1252":"%20","utf8":"%20"},"!":{"win1252":"%21","utf8":"%21"},"\"":{"win1252":"%22","utf8":"%22"},"#":{"win1252":"%23","utf8":"%23"},"$":{"win1252":"%24","utf8":"%24"},"%":{"win1252":"%25","utf8":"%25"},"&":{"win1252":"%26","utf8":"%26"},"'":{"win1252":"%27","utf8":"%27"},"(":{"win1252":"%28","utf8":"%28"},")":{"win1252":"%29","utf8":"%29"},"*":{"win1252":"%2A","utf8":"%2A"},"+":{"win1252":"%2B","utf8":"%2B"},",":{"win1252":"%2C","utf8":"%2C"},"-":{"win1252":"%2D","utf8":"%2D"},".":{"win1252":"%2E","utf8":"%2E"},"/":{"win1252":"%2F","utf8":"%2F"},":":{"win1252":"%3A","utf8":"%3A"},";":{"win1252":"%3B","utf8":"%3B"},"<":{"win1252":"%3C","utf8":"%3C"},"=":{"win1252":"%3D","utf8":"%3D"},">":{"win1252":"%3E","utf8":"%3E"},"?":{"win1252":"%3F","utf8":"%3F"},"@":{"win1252":"%40","utf8":"%40"},"A":{"win1252":"%41","utf8":"%41"},"B":{"win1252":"%42","utf8":"%42"},"C":{"win1252":"%43","utf8":"%43"},"D":{"win1252":"%44","utf8":"%44"},"E":{"win1252":"%45","utf8":"%45"},"F":{"win1252":"%46","utf8":"%46"},"G":{"win1252":"%47","utf8":"%47"},"H":{"win1252":"%48","utf8":"%48"},"I":{"win1252":"%49","utf8":"%49"},"J":{"win1252":"%4A","utf8":"%4A"},"K":{"win1252":"%4B","utf8":"%4B"},"L":{"win1252":"%4C","utf8":"%4C"},"M":{"win1252":"%4D","utf8":"%4D"},"N":{"win1252":"%4E","utf8":"%4E"},"O":{"win1252":"%4F","utf8":"%4F"},"P":{"win1252":"%50","utf8":"%50"},"Q":{"win1252":"%51","utf8":"%51"},"R":{"win1252":"%52","utf8":"%52"},"S":{"win1252":"%53","utf8":"%53"},"T":{"win1252":"%54","utf8":"%54"},"U":{"win1252":"%55","utf8":"%55"},"V":{"win1252":"%56","utf8":"%56"},"W":{"win1252":"%57","utf8":"%57"},"X":{"win1252":"%58","utf8":"%58"},"Y":{"win1252":"%59","utf8":"%59"},"Z":{"win1252":"%5A","utf8":"%5A"},"[":{"win1252":"%5B","utf8":"%5B"},"\\":{"win1252":"%5C","utf8":"%5C"},"]":{"win1252":"%5D","utf8":"%5D"},"^":{"win1252":"%5E","utf8":"%5E"},"_":{"win1252":"%5F","utf8":"%5F"},"`":{"win1252":"%80","utf8":"%E2%82%AC"},"a":{"win1252":"%61","utf8":"%61"},"b":{"win1252":"%62","utf8":"%62"},"c":{"win1252":"%63","utf8":"%63"},"d":{"win1252":"%64","utf8":"%64"},"e":{"win1252":"%65","utf8":"%65"},"f":{"win1252":"%66","utf8":"%66"},"g":{"win1252":"%67","utf8":"%67"},"h":{"win1252":"%68","utf8":"%68"},"i":{"win1252":"%69","utf8":"%69"},"j":{"win1252":"%6A","utf8":"%6A"},"k":{"win1252":"%6B","utf8":"%6B"},"l":{"win1252":"%6C","utf8":"%6C"},"m":{"win1252":"%6D","utf8":"%6D"},"n":{"win1252":"%6E","utf8":"%6E"},"o":{"win1252":"%6F","utf8":"%6F"},"p":{"win1252":"%70","utf8":"%70"},"q":{"win1252":"%71","utf8":"%71"},"r":{"win1252":"%72","utf8":"%72"},"s":{"win1252":"%73","utf8":"%73"},"t":{"win1252":"%74","utf8":"%74"},"u":{"win1252":"%75","utf8":"%75"},"v":{"win1252":"%76","utf8":"%76"},"w":{"win1252":"%77","utf8":"%77"},"x":{"win1252":"%78","utf8":"%78"},"y":{"win1252":"%79","utf8":"%79"},"z":{"win1252":"%7A","utf8":"%7A"},"{":{"win1252":"%7B","utf8":"%7B"},"|":{"win1252":"%7C","utf8":"%7C"},"}":{"win1252":"%7D","utf8":"%7D"},"~":{"win1252":"%7E","utf8":"%7E"}," ":{"win1252":"%A0","utf8":"%C2%A0"},"":{"win1252":"%81","utf8":"%81"},"‚":{"win1252":"%82","utf8":"%E2%80%9A"},"ƒ":{"win1252":"%83","utf8":"%C6%92"},"„":{"win1252":"%84","utf8":"%E2%80%9E"},"…":{"win1252":"%85","utf8":"%E2%80%A6"},"†":{"win1252":"%86","utf8":"%E2%80%A0"},"‡":{"win1252":"%87","utf8":"%E2%80%A1"},"ˆ":{"win1252":"%88","utf8":"%CB%86"},"‰":{"win1252":"%89","utf8":"%E2%80%B0"},"Š":{"win1252":"%8A","utf8":"%C5%A0"},"‹":{"win1252":"%8B","utf8":"%E2%80%B9"},"Œ":{"win1252":"%8C","utf8":"%C5%92"},"":{"win1252":"%8D","utf8":"%C5%8D"},"Ž":{"win1252":"%8E","utf8":"%C5%BD"},"":{"win1252":"%8F","utf8":"%8F"},"":{"win1252":"%90","utf8":"%C2%90"},"‘":{"win1252":"%91","utf8":"%E2%80%98"},"’":{"win1252":"%92","utf8":"%E2%80%99"},"“":{"win1252":"%93","utf8":"%E2%80%9C"},"”":{"win1252":"%94","utf8":"%E2%80%9D"},"•":{"win1252":"%95","utf8":"%E2%80%A2"},"–":{"win1252":"%96","utf8":"%E2%80%93"},"—":{"win1252":"%97","utf8":"%E2%80%94"},"˜":{"win1252":"%98","utf8":"%CB%9C"},"™":{"win1252":"%99","utf8":"%E2%84"},"š":{"win1252":"%9A","utf8":"%C5%A1"},"›":{"win1252":"%9B","utf8":"%E2%80"},"œ":{"win1252":"%9C","utf8":"%C5%93"},"":{"win1252":"%9D","utf8":"%9D"},"ž":{"win1252":"%9E","utf8":"%C5%BE"},"Ÿ":{"win1252":"%9F","utf8":"%C5%B8"},"¡":{"win1252":"%A1","utf8":"%C2%A1"},"¢":{"win1252":"%A2","utf8":"%C2%A2"},"£":{"win1252":"%A3","utf8":"%C2%A3"},"¤":{"win1252":"%A4","utf8":"%C2%A4"},"¥":{"win1252":"%A5","utf8":"%C2%A5"},"¦":{"win1252":"%A6","utf8":"%C2%A6"},"§":{"win1252":"%A7","utf8":"%C2%A7"},"¨":{"win1252":"%A8","utf8":"%C2%A8"},"©":{"win1252":"%A9","utf8":"%C2%A9"},"ª":{"win1252":"%AA","utf8":"%C2%AA"},"«":{"win1252":"%AB","utf8":"%C2%AB"},"¬":{"win1252":"%AC","utf8":"%C2%AC"},"­":{"win1252":"%AD","utf8":"%C2%AD"},"®":{"win1252":"%AE","utf8":"%C2%AE"},"¯":{"win1252":"%AF","utf8":"%C2%AF"},"°":{"win1252":"%B0","utf8":"%C2%B0"},"±":{"win1252":"%B1","utf8":"%C2%B1"},"²":{"win1252":"%B2","utf8":"%C2%B2"},"³":{"win1252":"%B3","utf8":"%C2%B3"},"´":{"win1252":"%B4","utf8":"%C2%B4"},"µ":{"win1252":"%B5","utf8":"%C2%B5"},"¶":{"win1252":"%B6","utf8":"%C2%B6"},"·":{"win1252":"%B7","utf8":"%C2%B7"},"¸":{"win1252":"%B8","utf8":"%C2%B8"},"¹":{"win1252":"%B9","utf8":"%C2%B9"},"º":{"win1252":"%BA","utf8":"%C2%BA"},"»":{"win1252":"%BB","utf8":"%C2%BB"},"¼":{"win1252":"%BC","utf8":"%C2%BC"},"½":{"win1252":"%BD","utf8":"%C2%BD"},"¾":{"win1252":"%BE","utf8":"%C2%BE"},"¿":{"win1252":"%BF","utf8":"%C2%BF"},"À":{"win1252":"%C0","utf8":"%C3%80"},"Á":{"win1252":"%C1","utf8":"%C3%81"},"Â":{"win1252":"%C2","utf8":"%C3%82"},"Ã":{"win1252":"%C3","utf8":"%C3%83"},"Ä":{"win1252":"%C4","utf8":"%C3%84"},"Å":{"win1252":"%C5","utf8":"%C3%85"},"Æ":{"win1252":"%C6","utf8":"%C3%86"},"Ç":{"win1252":"%C7","utf8":"%C3%87"},"È":{"win1252":"%C8","utf8":"%C3%88"},"É":{"win1252":"%C9","utf8":"%C3%89"},"Ê":{"win1252":"%CA","utf8":"%C3%8A"},"Ë":{"win1252":"%CB","utf8":"%C3%8B"},"Ì":{"win1252":"%CC","utf8":"%C3%8C"},"Í":{"win1252":"%CD","utf8":"%C3%8D"},"Î":{"win1252":"%CE","utf8":"%C3%8E"},"Ï":{"win1252":"%CF","utf8":"%C3%8F"},"Ð":{"win1252":"%D0","utf8":"%C3%90"},"Ñ":{"win1252":"%D1","utf8":"%C3%91"},"Ò":{"win1252":"%D2","utf8":"%C3%92"},"Ó":{"win1252":"%D3","utf8":"%C3%93"},"Ô":{"win1252":"%D4","utf8":"%C3%94"},"Õ":{"win1252":"%D5","utf8":"%C3%95"},"Ö":{"win1252":"%D6","utf8":"%C3%96"},"×":{"win1252":"%D7","utf8":"%C3%97"},"Ø":{"win1252":"%D8","utf8":"%C3%98"},"Ù":{"win1252":"%D9","utf8":"%C3%99"},"Ú":{"win1252":"%DA","utf8":"%C3%9A"},"Û":{"win1252":"%DB","utf8":"%C3%9B"},"Ü":{"win1252":"%DC","utf8":"%C3%9C"},"Ý":{"win1252":"%DD","utf8":"%C3%9D"},"Þ":{"win1252":"%DE","utf8":"%C3%9E"},"ß":{"win1252":"%DF","utf8":"%C3%9F"},"à":{"win1252":"%E0","utf8":"%C3%A0"},"á":{"win1252":"%E1","utf8":"%C3%A1"},"â":{"win1252":"%E2","utf8":"%C3%A2"},"ã":{"win1252":"%E3","utf8":"%C3%A3"},"ä":{"win1252":"%E4","utf8":"%C3%A4"},"å":{"win1252":"%E5","utf8":"%C3%A5"},"æ":{"win1252":"%E6","utf8":"%C3%A6"},"ç":{"win1252":"%E7","utf8":"%C3%A7"},"è":{"win1252":"%E8","utf8":"%C3%A8"},"é":{"win1252":"%E9","utf8":"%C3%A9"},"ê":{"win1252":"%EA","utf8":"%C3%AA"},"ë":{"win1252":"%EB","utf8":"%C3%AB"},"ì":{"win1252":"%EC","utf8":"%C3%AC"},"í":{"win1252":"%ED","utf8":"%C3%AD"},"î":{"win1252":"%EE","utf8":"%C3%AE"},"ï":{"win1252":"%EF","utf8":"%C3%AF"},"ð":{"win1252":"%F0","utf8":"%C3%B0"},"ñ":{"win1252":"%F1","utf8":"%C3%B1"},"ò":{"win1252":"%F2","utf8":"%C3%B2"},"ó":{"win1252":"%F3","utf8":"%C3%B3"},"ô":{"win1252":"%F4","utf8":"%C3%B4"},"õ":{"win1252":"%F5","utf8":"%C3%B5"},"ö":{"win1252":"%F6","utf8":"%C3%B6"},"÷":{"win1252":"%F7","utf8":"%C3%B7"},"ø":{"win1252":"%F8","utf8":"%C3%B8"},"ù":{"win1252":"%F9","utf8":"%C3%B9"},"ú":{"win1252":"%FA","utf8":"%C3%BA"},"û":{"win1252":"%FB","utf8":"%C3%BB"},"ü":{"win1252":"%FC","utf8":"%C3%BC"},"ý":{"win1252":"%FD","utf8":"%C3%BD"},"þ":{"win1252":"%FE","utf8":"%C3%BE"},"ÿ":{"win1252":"%FF","utf8":"%C3%BF"}}
ISOLanguageCodes = {"ab":"Abkhazian","aa":"Afar","af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","an":"Aragonese","hy":"Armenian","as":"Assamese","av":"Avaric","ae":"Avestan","ay":"Aymara","az":"Azerbaijani","bm":"Bambara","ba":"Bashkir","eu":"Basque","be":"Belarusian","bn":"Bengali (Bangla)","bh":"Bihari","bi":"Bislama","bs":"Bosnian","br":"Breton","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ch":"Chamorro","ce":"Chechen","ny":"Chichewa, Chewa, Nyanja","zh":"Chinese","zh-Hans":"Chinese (Simplified)","zh-Hant":"Chinese (Traditional)","cv":"Chuvash","kw":"Cornish","co":"Corsican","cr":"Cree","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi, Dhivehi, Maldivian","nl":"Dutch","dz":"Dzongkha","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fo":"Faroese","fj":"Fijian","fi":"Finnish","fr":"French","ff":"Fula, Fulah, Pulaar, Pular","gl":"Galician","gd":"Gaelic (Scottish)","gv":"Manx","ka":"Georgian","de":"German","el":"Greek","kl":"Kalaallisut, Greenlandic","gn":"Guarani","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","he":"Hebrew","hz":"Herero","hi":"Hindi","ho":"Hiri Motu","hu":"Hungarian","is":"Icelandic","io":"Ido","ig":"Igbo","id, in":"Indonesian","ia":"Interlingua","ie":"Interlingue","iu":"Inuktitut","ik":"Inupiak","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kr":"Kanuri","ks":"Kashmiri","kk":"Kazakh","km":"Khmer","ki":"Kikuyu","rw":"Kinyarwanda (Rwanda)","rn":"Kirundi","ky":"Kyrgyz","kv":"Komi","kg":"Kongo","ko":"Korean","ku":"Kurdish","kj":"Kwanyama","lo":"Lao","la":"Latin","lv":"Latvian (Lettish)","li":"Limburgish ( Limburger)","ln":"Lingala","lt":"Lithuanian","lu":"Luga-Katanga","lg":"Luganda, Ganda","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Maori","mr":"Marathi","mh":"Marshallese","mo":"Moldavian","mn":"Mongolian","na":"Nauru","nv":"Navajo","ng":"Ndonga","nd":"Northern Ndebele","ne":"Nepali","no":"Norwegian","nb":"Norwegian bokmål","nn":"Norwegian nynorsk","ii":"Sichuan Yi","oc":"Occitan","oj":"Ojibwe","cu":"Old Church Slavonic, Old Bulgarian","or":"Oriya","om":"Oromo (Afaan Oromo)","os":"Ossetian","pi":"Pāli","ps":"Pashto, Pushto","fa":"Persian (Farsi)","pl":"Polish","pt":"Portuguese","pa":"Punjabi (Eastern)","qu":"Quechua","rm":"Romansh","ro":"Romanian","ru":"Russian","se":"Sami","sm":"Samoan","sg":"Sango","sa":"Sanskrit","sr":"Serbian","sh":"Serbo-Croatian","st":"Sesotho","tn":"Setswana","sn":"Shona","sd":"Sindhi","si":"Sinhalese","ss":"Swati","sk":"Slovak","sl":"Slovenian","so":"Somali","nr":"Southern Ndebele","es":"Spanish","su":"Sundanese","sw":"Swahili (Kiswahili)","sv":"Swedish","tl":"Tagalog","ty":"Tahitian","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","bo":"Tibetan","ti":"Tigrinya","to":"Tonga","ts":"Tsonga","tr":"Turkish","tk":"Turkmen","tw":"Twi","ug":"Uyghur","uk":"Ukrainian","ur":"Urdu","uz":"Uzbek","ve":"Venda","vi":"Vietnamese","vo":"Volapük","wa":"Wallon","cy":"Welsh","wo":"Wolof","fy":"Western Frisian","xh":"Xhosa","yi, ji":"Yiddish","yo":"Yoruba","za":"Zhuang, Chuang","zu":"Zulu"}
ISOCountryCodes = {"AF":"AFGHANISTAN","AL":"ALBANIA","DZ":"ALGERIA","AS":"AMERICAN SAMOA","AD":"ANDORRA","AO":"ANGOLA","AQ":"ANTARCTICA","AG":"ANTIGUA AND BARBUDA","AR":"ARGENTINA","AM":"ARMENIA","AW":"ARUBA","AU":"AUSTRALIA","AT":"AUSTRIA","AZ":"AZERBAIJAN","BS":"BAHAMAS","BH":"BAHRAIN","BD":"BANGLADESH","BB":"BARBADOS","BY":"BELARUS","BE":"BELGIUM","BZ":"BELIZE","BJ":"BENIN","BM":"BERMUDA","BT":"BHUTAN","BO":"BOLIVIA","BA":"BOSNIA AND HERZEGOVINA","BW":"BOTSWANA","BV":"BOUVET ISLAND","BR":"BRAZIL","IO":"BRITISH INDIAN OCEAN TERRITORY","BN":"BRUNEI DARUSSALAM","BG":"BULGARIA","BF":"BURKINA FASO","BI":"BURUNDI","KH":"CAMBODIA","CM":"CAMEROON","CA":"CANADA","CV":"CAPE VERDE","KY":"CAYMAN ISLANDS","CF":"CENTRAL AFRICAN REPUBLIC","TD":"CHAD","CL":"CHILE","CN":"CHINA","CX":"CHRISTMAS ISLAND","CC":"COCOS (KEELING) ISLANDS","CO":"COLOMBIA","KM":"COMOROS","CG":"CONGO","CD":"CONGO, THE DEMOCRATIC REPUBLIC OF THE","CK":"COOK ISLANDS","CR":"COSTA RICA","CI":"CÔTE D'IVOIRE","HR":"CROATIA","CU":"CUBA","CY":"CYPRUS","CZ":"CZECH REPUBLIC","DK":"DENMARK","DJ":"DJIBOUTI","DM":"DOMINICA","DO":"DOMINICAN REPUBLIC","EC":"ECUADOR","EG":"EGYPT","SV":"EL SALVADOR","GQ":"EQUATORIAL GUINEA","ER":"ERITREA","EE":"ESTONIA","ET":"ETHIOPIA","FK":"FALKLAND ISLANDS (MALVINAS)","FO":"FAROE ISLANDS","FJ":"FIJI","FI":"FINLAND","FR":"FRANCE","GF":"FRENCH GUIANA","PF":"FRENCH POLYNESIA","TF":"FRENCH SOUTHERN TERRITORIES","GA":"GABON","GM":"GAMBIA","GE":"GEORGIA","DE":"GERMANY","GH":"GHANA","GI":"GIBRALTAR","GR":"GREECE","GL":"GREENLAND","GD":"GRENADA","GP":"GUADELOUPE","GU":"GUAM","GT":"GUATEMALA","GN":"GUINEA","GW":"GUINEA-BISSAU","GY":"GUYANA","HT":"HAITI","HM":"HEARD ISLAND AND MCDONALD ISLANDS","HN":"HONDURAS","HK":"HONG KONG","HU":"HUNGARY","IS":"ICELAND","IN":"INDIA","ID":"INDONESIA","IR":"IRAN, ISLAMIC REPUBLIC OF","IQ":"IRAQ","IE":"IRELAND","IL":"ISRAEL","IT":"ITALY","JM":"JAMAICA","JP":"JAPAN","JO":"JORDAN","KZ":"KAZAKHSTAN","KE":"KENYA","KI":"KIRIBATI","KP":"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF","KR":"KOREA, REPUBLIC OF","KW":"KUWAIT","KG":"KYRGYZSTAN","LA":"LAO PEOPLE'S DEMOCRATIC REPUBLIC(LAOS)","LV":"LATVIA","LB":"LEBANON","LS":"LESOTHO","LR":"LIBERIA","LY":"LIBYA, STATE OF","LI":"LIECHTENSTEIN","LT":"LITHUANIA","LU":"LUXEMBOURG","MO":"MACAO","MK":"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF","MG":"MADAGASCAR","MW":"MALAWI","MY":"MALAYSIA","MV":"MALDIVES","ML":"MALI","MT":"MALTA","MH":"MARSHALL ISLANDS","MQ":"MARTINIQUE","MR":"MAURITANIA","MU":"MAURITIUS","YT":"MAYOTTE","MX":"MEXICO","FM":"MICRONESIA, FEDERATED STATES OF","MD":"MOLDOVA, REPUBLIC OF","MC":"MONACO","MN":"MONGOLIA","ME":"MONTENEGRO","MS":"MONTSERRAT","MA":"MOROCCO","MZ":"MOZAMBIQUE","MM":"MYANMAR","NA":"NAMIBIA","NR":"NAURU","NP":"NEPAL, FEDERAL DEMOCRATIC REPUBLIC OF","NL":"NETHERLANDS","AN":"NETHERLANDS ANTILLES","NC":"NEW CALEDONIA","NZ":"NEW ZEALAND","NI":"NICARAGUA","NE":"NIGER","NG":"NIGERIA","NU":"NIUE","NF":"NORFOLK ISLAND","MP":"NORTHERN MARIANA ISLANDS","NO":"NORWAY","OM":"OMAN","PK":"PAKISTAN","PW":"PALAU","PS":"PALESTINE, STATE OF","PA":"PANAMA","PG":"PAPUA NEW GUINEA","PY":"PARAGUAY","PE":"PERU","PH":"PHILIPPINES","PN":"PITCAIRN","PL":"POLAND","PT":"PORTUGAL","PR":"PUERTO RICO","QA":"QATAR","RE":"RÉUNION","RO":"ROMANIA","RU":"RUSSIAN FEDERATION","RW":"RWANDA","SH":"SAINT HELENA","KN":"SAINT KITTS AND NEVIS","LC":"SAINT LUCIA","PM":"SAINT PIERRE AND MIQUELON","VC":"SAINT VINCENT AND THE GRENADINES","WS":"SAMOA","SM":"SAN MARINO","ST":"SAO TOME AND PRINCIPE","SA":"SAUDI ARABIA","SN":"SENEGAL","RS":"SERBIA","SC":"SEYCHELLES","SL":"SIERRA LEONE","SG":"SINGAPORE","SK":"SLOVAKIA","SI":"SLOVENIA","SB":"SOLOMON ISLANDS","SO":"SOMALIA","ZA":"SOUTH AFRICA","GS":"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","SS":"SOUTH SUDAN","ES":"SPAIN","LK":"SRI LANKA","SD":"SUDAN","SR":"SURINAME","SJ":"SVALBARD AND JAN MAYEN","SZ":"SWAZILAND","SE":"SWEDEN","CH":"SWITZERLAND","SY":"SYRIAN ARAB REPUBLIC","TW":"TAIWAN","TJ":"TAJIKISTAN","TZ":"TANZANIA, UNITED REPUBLIC OF","TH":"THAILAND","TL":"TIMOR-LESTE","TG":"TOGO","TK":"TOKELAU","TO":"TONGA","TT":"TRINIDAD AND TOBAGO","TN":"TUNISIA","TR":"TURKEY","TM":"TURKMENISTAN","TC":"TURKS AND CAICOS ISLANDS","TV":"TUVALU","UG":"UGANDA","UA":"UKRAINE","AE":"UNITED ARAB EMIRATES","GB":"UNITED KINGDOM","US":"UNITED STATES","UM":"UNITED STATES MINOR OUTLYING ISLANDS","UY":"URUGUAY","UZ":"UZBEKISTAN","VU":"VANUATU","VE":"VENEZUELA","VN":"VIET NAM","VG":"VIRGIN ISLANDS, BRITISH","VI":"VIRGIN ISLANDS, U.S.","WF":"WALLIS AND FUTUNA","EH":"WESTERN SAHARA","YE":"YEMEN","ZM":"ZAMBIA","ZW":"ZIMBABWE"}
HTTPStatusMessages = {"100":[" Continue"," The server has received the request headers, and the client should proceed to send the request body"],"101":[" Switching Protocols","The requester has asked the server to switch protocols"],"103":[" Checkpoint","Used in the resumable requests proposal to resume aborted PUT or POST requests"],"200":[" OK","The request is OK (this is the standard response for successful HTTP requests)"],"201":[" Created","The request has been fulfilled, and a new resource is\n created \n "],"202":[" Accepted","The request has been accepted for processing, but the processing\n has not been completed\n "],"203":[" Non-Authoritative Information","The request has been successfully processed, but is returning information that may be from another source"],"204":[" No Content","The request has been successfully processed, but is not returning any content"],"205":[" Reset Content","The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view"],"206":[" Partial Content","The server is delivering only part of the resource due to a range header sent by the client"],"300":[" Multiple Choices","A link list. The user can select a link and go to that\n location. Maximum five addresses  "],"301":[" Moved Permanently","The requested page has moved to a new URL \n "],"302":[" Found","The requested page has moved temporarily to a new URL \n "],"303":[" See Other","The requested page can be found under a different URL"],"304":[" Not Modified","Indicates the requested page has not been modified since last requested"],"306":[" Switch Proxy","No longer used"],"307":[" Temporary Redirect","The requested page has moved temporarily to a new URL"],"308":[" Resume Incomplete","Used in the resumable requests proposal to resume aborted PUT or POST requests"],"400":[" Bad Request","The request cannot be fulfilled due to bad syntax"],"401":[" Unauthorized","The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided"],"402":[" Payment Required","Reserved for future use\n "],"403":[" Forbidden","The request was a legal request, but the server is refusing to respond to it"],"404":[" Not Found","The requested page could not be found but may be available again in the future"],"405":[" Method Not Allowed","A request was made of a page using a request method not supported by that page"],"406":[" Not Acceptable","The server can only generate a response that is not\n accepted by the client\n "],"407":[" Proxy Authentication Required","The client must first authenticate itself with the proxy\n "],"408":[" Request Timeout","The server timed out waiting for the request\n "],"409":[" Conflict","The request could not be completed because of a conflict\n in the request"],"410":[" Gone","The requested page is no longer available"],"411":[" Length Required","The \"Content-Length\" is not defined. The server\n will not accept the request without it \n "],"412":[" Precondition Failed","The precondition given in the request evaluated to false by\n the server\n "],"413":[" Request Entity Too Large","The server will not accept the request, because the request entity is\n too large\n "],"414":[" Request-URI Too Long","The server will not accept the request, because the URL is\n too long. Occurs when you convert a POST request to a GET request with\n a long query information \n "],"415":[" Unsupported Media Type","The server will not accept the request, because the media\n type is not supported \n "],"416":[" Requested Range Not Satisfiable","The client has asked for a portion of the file, but the server cannot supply that portion"],"417":[" Expectation Failed","The server cannot meet the requirements of the Expect request-header field"],"500":[" Internal Server Error","A generic error message, given when no more specific message is suitable"],"501":[" Not Implemented","The server either does not recognize the request method, or it lacks the ability to fulfill the request"],"502":[" Bad Gateway","The server was acting as a gateway or proxy and received an invalid response from the upstream server"],"503":[" Service Unavailable","The server is currently unavailable (overloaded or down)\n "],"504":[" Gateway Timeout","The server was acting as a gateway or proxy and did not receive a timely response from the upstream server"],"505":[" HTTP Version Not Supported","The server does not support the HTTP protocol version used in the request\n "],"511":[" Network Authentication Required","The client needs to authenticate to gain network access"]}

for(cpt in label)
cptbis[zz[cpt].toLowerCase()] = d[cpt].textContent.replace('()','').replace(/</g,'').replace(/>/g,'')
if(ok=='ok')