class e extends EventTarget{constructor(e){super(),this.url=void 0,this.ws=void 0,this.url=e,this.addEventListener("message",e=>console.log(e))}connect(e){this.ws=new WebSocket(this.url),this.ws.onopen=e=>{const s=new Event("open");this.dispatchEvent(s)},this.ws.onclose=e=>{const s=new CloseEvent("close",{code:e.code});this.dispatchEvent(s)},this.ws.onmessage=e=>{const s=new MessageEvent("message",{data:e.data});this.dispatchEvent(s)},this.ws.onerror=e=>{this.dispatchEvent(e)};const s=new Event("connecting");this.dispatchEvent(s)}sendValue(e,s,t){var n;null==(n=this.ws)||n.send(JSON.stringify({name:e,value:s}))}on(e,s,t){return this.addEventListener(e,s,t)}off(e,s,t){return this.removeEventListener(e,s,t)}}export{e as default};
//# sourceMappingURL=index.modern.js.map
