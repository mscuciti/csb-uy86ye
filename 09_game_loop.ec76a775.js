parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VZFa":[function(require,module,exports) {
(function(){var i,e;i=window.gm,e=i.mixins,i.fnc.loop=function(){var n,r,s,t,f,o;for(n in o=function(i,n,r,s,t){var f,o;if(i in n)return n[i](r,s,t);for(f in e[i]){if(f in n)return n[f](r,s,t);for(o in f)if(o in n)return n[o](r,s,t)}},i.ins)for(s in i.ins[n])if(1===(r=i.ins[n][s]).active)for(o("key",r),t=0;t<10;)o("key_"+t,r),t++;for(n=0;n<i.keyPressed.length;)i.keyPressed[n]=0,i.keyReleased[n]=0,n++;for(n in i.ins)for(s in i.ins[n])1===(r=i.ins[n][s]).active&&(o("checkTimer",r),o("step",r),r.lastSprite=r.sprite,r.sprite=o("spriteTable",r),r.sprite!==r.lastSprite&&(r.tick=0),o("animate",r,r.tick,r.ticksPerFrame),o("move",r),o("checkHP",r));for(n in f=[],i.ins)f.push(function(){var e;for(s in e=[],i.ins[n])1===(r=i.ins[n][s]).active?(r.x+=r.xSpeed,e.push(r.y+=r.ySpeed)):e.push(void 0);return e}());return f}}).call(this);
},{}]},{},["VZFa"], null)
//# sourceMappingURL=/csb-uy86ye/09_game_loop.ec76a775.js.map