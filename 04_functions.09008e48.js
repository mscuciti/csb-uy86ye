parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rIye":[function(require,module,exports) {
(function(){var e,t,n,r,i;for(n in t=window.gm,i=t.vport.dom,t.level.dom,r=t.tiles.dom,e=t.fnc,t.ins.pool=function(e,n){var r,i,o,a,s;for(i in r=0,o="",void 0===this[e.name]&&(this[e.name]={}),this[e.name])r++;for(s=r+n,a=[];r<s;)o=e.name+"_"+r,this[e.name][o]=new t.ins.New(e),this[e.name][o].active=0,a.push(r++);return a},t.ins.New=function(e){var t;for(t in e)this[t]=e[t]},t.obj)t.ins.pool(t.obj[n],t.obj[n].qty);t.ins.create=function(e,n,r){var i,o,a;for(o in void 0===(a=this[e.name])&&this.pool(e,100),i=0,a)if(0===i&&0===a[o].active)return a[o]=new t.ins.New(e),a[o].id=o,i=1,a[o].active=1,a[o].x=n,a[o].y=r,a[o].a=0,a[o].xSpeed=0,a[o].ySpeed=0,a[o];if(0===i)return this.pool(e,100),this.create(e,n,r)},t.ins.get=function(e){var r,i;for(n in t.ins)for(r in t.ins[n])if((i=t.ins[n][r]).id===e)return i},t.ins.rm=function(e){var r,i;for(n in t.ins)for(r in t.ins[n])if((i=t.ins[n][r]).id===e)return i.active=0,i},t.newObj=function(e,t){var r,i;for(i in i=void 0,n={},e)n.hasOwnProperty(i)&&console.log("Object property conflict! "+i),n[i]=e[i];return r=0,t.forEach(function(e){for(i in"function"==typeof e&&(n[e.name]=e),e)n.hasOwnProperty(i)?(console.log("Object property conflict! "+i),n[i+"_"+r]=e[i],r++):e[i]&&(n[i]=e[i])}),n},e.repo=function(e){var n,i;return n=t.offX,i=t.offY,e.parentElement===r&&(n*=.5,i*=.5),e.style.left=e.style.xx-n+"px",e.style.top=e.style.yy-i+"px",e.style.transform="rotate("+e.style.a+"deg)"},e.parseFrame=function(e,n){var r,i;for(r in t.sheetData.spriteData)for(i in t.sheetData.spriteData[r].sprites)if(e===i)return t.sheetData.spriteData[r].sprites[i][n]},e.chFrame=function(n,r,i){var o,a,s,f;if(n){if(!i)for(o in f=n.style.getPropertyValue("background-image").replace(/url\((['"])?(.*?)\1\)/gi,"$2"),s=t.sheetData)for(a in s[o])if(s[o][a].img===f){i=s[o][a];break}return e.divAddSheetData(n,i),n.style.backgroundPosition=-1*(r%i.numX+i.offX)*i.gridX+"px "+-1*Math.floor(r/i.numX+i.offY)*i.gridY+"px "}},e.destroySpr=function(e){if(e)return e.parentElement.removeChild(e)},e.searchForSpriteSheet=function(e,t){var n,r;for(r in t)for(n in t[r].sprites)if(e===n)return t[r]},e.searchForTileSheet=function(e,t){var n;for(n in t)if(e===n)return n},e.searchObject=function(e,t){var n,r;for(r in t)for(n in t[r])if(e===n)return t[r][n]},e.divInst=function(e,t,n,r){return this.parent=r||i,this.element=document.createElement("div"),this.element.id=e,this.style=this.element.style,this.style.xx=t,this.style.yy=n},e.divAddSheetData=function(e,t){var n;return void 0,n=window.getComputedStyle(document.getElementById(t.source)).getPropertyValue("background-image"),e.style.width=t.gridX+"px",e.style.height=t.gridY+"px",e.style.backgroundImage=n,e},e.sprInst=function(n,r,i){var o,a,s;return(o=new e.divInst(n,r,i)).element.className="sprite",a=e.searchObject(n,t.ins).sprite,s=e.searchForSpriteSheet(a,t.sheetData.spriteData),(o=e.divAddSheetData(o,s)).style.a=0,o.style.frame=0,e.repo(o.element),o.parent.appendChild(o.element),o},e.tileInst=function(n,i,o,a,s){var f;return(f=new e.divInst(n,i,o,r)).element.className="tile",f=e.divAddSheetData(f,t.sheetData.tileData[s]),e.repo(f.element),e.chFrame(f,a),f.parent.appendChild(f.element)}}).call(this);
},{}]},{},["rIye"], null)
//# sourceMappingURL=/csb-uy86ye/04_functions.09008e48.js.map