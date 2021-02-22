class MonTest0 extends HTMLElement{
     constructor(){
          super()
          this.s=this.attachShadow({mode:'closed'})
     }
     connectedCallback() {
          // alert('ok')
          this.innerHTML='<span id="ok">oui</span>'
          this.s.innerHTML='<span id="okk">non</span>'
          this.innerHTML+=`
               <style>span{color:red;}</style>
          `
          this.s.innerHTML+=`<style>span{color:blue;border:solid green}</style>`
     }
}
window.customElements.define('ok-ok', MonTest0)