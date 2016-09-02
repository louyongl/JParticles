/**
 * Particleground.js v1.0.0 (https://github.com/Barrior/Particleground.js)
 * Copyright 2016 Barrior <Barrior@qq.com>
 * Licensed under the MIT (https://opensource.org/licenses/mit-license.php)
 */
!function(t){"object"==typeof module&&module.exports?module.exports=t():t()}(function(){"use strict";function t(t){return parseInt(t,10)}function e(){return"#"+w().toString(16).slice(-6)}function n(t,e){return w()*(t-e)+e}function i(){var t,e,n=arguments,o=n[0]||{},s=!1,a=n.length,c=1;for("boolean"==typeof o&&(s=o,o=n[1]||{},c++);c<a;c++)for(e in n[c])t=n[c][e],s&&(r(t)||b(t))?o[e]=i(s,b(t)?[]:{},t):o[e]=t;return o}function o(t,e){return Object.prototype.toString.call(t)===e}function s(t){return o(t,"[object Function]")}function r(t){return o(t,"[object Object]")}function a(t){return t&&"object"==typeof t&&1===t.nodeType}function c(e,n){var i=y.getComputedStyle(e)[n];return C.test(i)?t(i):i}function f(t){for(var e=t.offsetLeft||0,n=t.offsetTop||0;t=t.offsetParent;)e+=t.offsetLeft,n+=t.offsetTop;return{left:e,top:n}}function h(t,e,n){t.addEventListener(e,n)}function u(t,e,n){t.removeEventListener(e,n)}function l(t){var n=!!b(t)&&t.length,i=function(){return t[x(w()*n)]};return n?i:e}function p(t,e){if(!E)return!1;if(a(t))e.container=t;else if(!(e.container=g.querySelector(t)))throw new Error(t+" is not defined");return e.c=g.createElement("canvas"),e.cw=e.c.width=c(e.container,"width"),e.ch=e.c.height=c(e.container,"height"),e.cxt=e.c.getContext("2d"),e.paused=!1,e.container.innerHTML="",!!e.container.appendChild(e.c)}function d(t,e){E&&!t.paused&&(t.paused=!0,s(e)&&e.call(t))}function m(t,e){E&&t.paused&&(s(e)&&e.call(t),t.paused=!1,t.draw())}function v(t,e){t.set.resize&&h(y,"resize",function(){var n=t.cw,i=t.ch;t.cw=t.c.width=c(t.container,"width"),t.ch=t.c.height=c(t.container,"height");var o=t.cw/n,r=t.ch/i;t.dots.forEach(function(t){t.x*=o,t.y*=r}),s(e)&&e.call(t,o,r),t.paused&&t.draw()})}var y=window,g=document,w=Math.random,x=Math.floor,b=Array.isArray,E=!!g.createElement("canvas").getContext,C=/^\d+(\.\d+)?[a-z]+$/i;y.requestAnimationFrame=function(t){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(y);var T={version:"1.0.0",canvasSupport:E,util:{pInt:t,randomColor:e,createColor:l,limitRandom:n,extend:i,typeChecking:o,isFunction:s,isPlainObject:r,isElem:a,getCss:c,offset:f,createCanvas:p,pause:d,open:m,resize:v},inherit:{color:function(){return this.color=l(this.set.color),this.color()},pause:function(){d(this)},open:function(){m(this)},resize:function(){v(this)},requestAnimationFrame:function(){!this.paused&&y.requestAnimationFrame(this.draw.bind(this))}},event:{on:h,off:u},extend:function(t){return i(t,this.inherit),this}};return"function"==typeof define&&define.amd&&define(function(){return T}),y.Particleground=T,T}),+function(t,e){"use strict";function n(t,e){s[t](e.set.eventElem,"mousemove",e.handler),s[t](e.set.eventElem,"touchmove",e.handler)}function i(t,e){o.createCanvas(t,this)&&(this.set=o.extend({},i.configDefault,e),o.isElem(this.set.eventElem)||this.set.eventElem===document||(this.set.eventElem=this.c),this.posX=a()*this.cw,this.posY=a()*this.ch,this.createDot(),this.draw(),this.resize(),this.set.range>0&&this.event())}var o=e.util,s=e.event,r=(s.on,s.off,Math),a=r.random,c=r.abs,f=2*r.PI;i.configDefault={opacity:.6,color:null,speed:1,num:.12,max:2.4,min:.6,dis:130,lineWidth:.2,range:160,eventElem:null,resize:!0};var h=i.prototype={version:"1.0.0",createDot:function(){for(var t=this.set,e=t.speed,n=t.num>=1?t.num:this.cw*t.num,i=[],s=0;s<n;s++){var r=o.limitRandom(t.max,t.min);i.push({x:o.limitRandom(this.cw-r,r),y:o.limitRandom(this.ch-r,r),r:r,vx:o.limitRandom(e,.5*-e)||e,vy:o.limitRandom(e,.5*-e)||e,color:this.color()})}this.dots=i},draw:function(){var t=this.set,e=this.cw,n=this.ch,i=this.cxt;i.clearRect(0,0,e,n),i.lineWidth=t.lineWidth,i.globalAlpha=t.opacity,this.dots.forEach(function(t){var o=t.r;i.save(),i.beginPath(),i.arc(t.x,t.y,o,0,f),i.fillStyle=t.color,i.fill(),i.restore(),t.x+=t.vx,t.y+=t.vy;var s=t.x,r=t.y;(s+o>=e||s-o<=0)&&(t.vx*=-1),(r+o>=n||r-o<=0)&&(t.vy*=-1)}),t.range>0&&this.connectDot(),this.requestAnimationFrame()},connectDot:function(){var t=this.cxt,e=this.set,n=e.dis,i=this.posX,o=this.posY,s=e.range,r=this.dots;r.forEach(function(e){var a=e.x,f=e.y;c(a-i)<=s&&c(f-o)<=s&&r.forEach(function(i){var o=i.x,s=i.y;c(a-o)<=n&&c(f-s)<=n&&(t.save(),t.beginPath(),t.moveTo(a,f),t.lineTo(o,s),t.strokeStyle=e.color,t.stroke(),t.restore())})})},event:function(){this.set.eventElem!==document&&(this.elemOffset=o.offset(this.set.eventElem)),this.handler=function(t){this.posX=t.pageX,this.posY=t.pageY,this.elemOffset&&("fixed"===o.getCss(this.set.eventElem,"position")?(this.posX=t.clientX,this.posX=t.clientY):(this.posX-=this.elemOffset.left,this.posY-=this.elemOffset.top))}.bind(this),n("on",this)}};e.extend(h),h.pause=function(){o.pause(this,function(){this.set.range>0&&n("off",this)})},h.open=function(){o.open(this,function(){this.set.range>0&&n("on",this)})},h.resize=function(){o.resize(this,function(t,e){this.set.range>0&&(this.posX*=t,this.posY*=e,this.elemOffset=this.elemOffset?o.offset(this.set.eventElem):"")})},e.particle=h.constructor=i}(window,Particleground),+function(t,e){"use strict";function n(t,e){i.createCanvas(t,this)&&(this.set=i.extend({},n.configDefault,e),this.dots=[],this.createDot(),this.draw(),this.resize())}var i=e.util,o=Math.random,s=2*Math.PI;n.configDefault={opacity:1,color:["#fff"],max:6.5,min:.4,speed:.4,resize:!0},n.prototype={version:"1.0.0",snowShape:function(){var t=this,e=t.cw,n=t.set,s=n.speed,r=i.limitRandom(n.max,n.min);return{x:o()*e,y:-r,r:r,vx:o()||.4,vy:r*s,color:t.color()}},createDot:function(){for(var t=6*o(),e=this.dots,n=0;n<t;n++)e.push(this.snowShape())},draw:function(){var t=this,e=t.set,n=t.cxt,i=t.cw,r=t.ch,a=t.dots;n.clearRect(0,0,i,r),n.globalAlpha=e.opacity,a.forEach(function(e,c){var f=e.x,h=e.y,u=e.r;n.save(),n.beginPath(),n.arc(f,h,u,0,s),n.fillStyle=e.color,n.fill(),n.restore(),e.x+=e.vx,e.y+=e.vy,o()>.99&&o()>.5&&(e.vx*=-1),f<0||f-u>i?(a.splice(c,1),a.push(t.snowShape())):h-u>=r&&a.splice(c,1)}),o()>.9&&t.createDot(),this.requestAnimationFrame()}},e.extend(n.prototype),e.snow=n.prototype.constructor=n}(window,Particleground),+function(t,e){"use strict";function n(t,e){i.createCanvas(t,this)&&(this.set=i.extend({},n.configDefault,e),this.initAttr(),this.createDot(),this.draw(),this.resize())}var i=e.util,o=Math.random,s=Math.sin,r=2*Math.PI,a="undefined",c=Array.isArray;n.configDefault={opacity:1,lineColor:[],fillColor:[],num:null,lineWidth:[],offsetLeft:[],offsetTop:[],crest:[],rippleNum:[],speed:[],area:!1,stroke:!0,resize:!0},n.prototype={version:"1.0.0",initAttr:function(){function t(t){var i=h[t];if(c(i)){if("offsetTop"===t||"crest"===t||"offsetLeft"===t)for(var o="offsetLeft"===t?r:f,s=0;s<p;s++)i[s]=typeof i[s]===a?e(t):n(i[s],o);else if(i.length<p)for(var s=0,u=p-i.length;s<u;s++)i.push(e(t))}else if(h[t]=[],"number"==typeof i||"boolean"==typeof i||"string"==typeof i)for(var s=0;s<p;s++)"offsetTop"===t||"crest"===t?i=n(i,f):"offsetLeft"===t?i=n(i,r):"rippleNum"===t&&d.push(r/i),h[t].push(i)}function e(t){switch(t){case"lineColor":case"fillColor":t=u();break;case"lineWidth":t=l(2,.2);break;case"offsetLeft":t=o()*r;break;case"offsetTop":case"crest":t=o()*f;break;case"rippleNum":t=l(r/2,1),d.push(r/t);break;case"speed":t=l(.4,.1);break;case"area":t=!1;break;case"stroke":t=!0}return t}function n(t,e){return t>0&&t<1?t*e:t}var s=this,r=s.cw,f=s.ch,h=s.set,u=i.randomColor,l=i.limitRandom,p=h.num=h.num||l(f/2,1),d=this.rippleLength=[];["lineColor","fillColor","lineWidth","offsetLeft","offsetTop","crest","rippleNum","speed","area","stroke"].forEach(function(e){t(e)})},setOffsetTop:function(t){c(t)?this.set.offsetTop.forEach(function(e,n,i){i[n]=t[n]||e}):(t>0&&t<1&&(t*=this.ch),this.set.offsetTop.forEach(function(e,n,i){i[n]=t}))},createDot:function(){for(var t=this.set,e=this.cw,n=t.num,i=[],o=0;o<n;o++){for(var s=[],a=r/this.rippleLength[o],c=0;c<e;c++)s.push({x:c,y:c*a});i.push(s)}this.dots=i},draw:function(){var t=this.cxt,e=this.cw,n=this.ch,i=this.set;t.clearRect(0,0,e,n),t.globalAlpha=i.opacity,this.dots.forEach(function(o,r){t.save(),t.beginPath();var a=i.crest[r],c=i.offsetLeft[r],f=i.offsetTop[r],h=i.speed[r];o.forEach(function(e,n){t[n?"lineTo":"moveTo"](e.x,a*s(e.y+c)+f),e.y-=h}),i.area[r]&&(t.lineTo(e,n),t.lineTo(0,n),t.closePath(),t.fillStyle=i.fillColor[r],t.fill()),i.stroke[r]&&(t.lineWidth=i.lineWidth[r],t.strokeStyle=i.lineColor[r],t.stroke()),t.restore()}),this.requestAnimationFrame()}},e.extend(n.prototype),e.wave=n.prototype.constructor=n}(window,Particleground);