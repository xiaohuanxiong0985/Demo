(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e15eaf9e"],{"0345":function(t,n,e){t.exports=e.p+"img/turntable.abaa96e7.png"},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var a=e("1d80"),o=e("5899"),r="["+o+"]",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),i=function(t){return function(n){var e=String(a(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:i(1),end:i(2),trim:i(3)}},"98ea":function(t,n,e){"use strict";var a=e("bada"),o=e.n(a);o.a},"99af":function(t,n,e){"use strict";var a=e("23e7"),o=e("d039"),r=e("e8b5"),c=e("861d"),u=e("7b0b"),i=e("50c4"),s=e("8418"),l=e("65f0"),m=e("1dde"),f=e("b622"),d=e("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",h=d>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=m("concat"),k=function(t){if(!c(t))return!1;var n=t[b];return void 0!==n?!!n:r(t)},x=!h||!v;a({target:"Array",proto:!0,forced:x},{concat:function(t){var n,e,a,o,r,c=u(this),m=l(c,0),f=0;for(n=-1,a=arguments.length;n<a;n++)if(r=-1===n?c:arguments[n],k(r)){if(o=i(r.length),f+o>p)throw TypeError(g);for(e=0;e<o;e++,f++)e in r&&s(m,f,r[e])}else{if(f>=p)throw TypeError(g);s(m,f++,r)}return m.length=f,m}})},a547:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"chrray-main"},[a("div",{staticClass:"bg"},[a("img",{staticClass:"pointer",attrs:{src:e("e6e3"),alt:""},on:{click:t.onClick}}),a("img",{staticClass:"turntable",attrs:{src:e("0345"),alt:""}})])])},o=[],r=(e("99af"),e("4795"),e("e25e"),e("d4ec"),e("bee2"),e("c24f")),c={data:function(){return{obj:[{name:"商品一",prob:1},{name:"商品二",prob:2},{name:"商品三",prob:3},{name:"商品四",prob:4},{name:"商品五",prob:5},{name:"谢谢惠顾",prob:95}],goods:{},offOn:!0,oPointer:null,oTurntable:null,cat:51.4,num:0,timer:null,id:4}},computed:{},mounted:function(){this.oPointer=document.getElementsByClassName("pointer")[0],this.oTurntable=document.getElementsByClassName("turntable")[0]},methods:{onClick:function(){var t=this,n=0;this.oTurntable.style.transform="rotate(".concat(n,"deg)"),setTimeout((function(n){t.offOn&&(t.oTurntable.style.transition="all 4s ease",t.offOn=!t.offOn,Object(r["b"])().then((function(n){console.log(n),t.ratating(n.data.id)})))}),500)},ratating:function(t){var n=this,e=this,a=0;clearInterval(e.timer),this.timer=setInterval((function(o){Math.floor(a/360<3)?(a=51.4*t-25.7+1800,console.log(a)):(e.oTurntable.style.transform="rotate(".concat(a,"deg)"),clearInterval(e.timer),setTimeout((function(t){switch(e.offOn=!e.offOn,e.num=Math.floor(a%360),e.oTurntable.style.removeProperty("transition"),!0){case e.num<=1*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 一等奖"));break;case e.num<=2*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 二等奖"));break;case e.num<=3*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 三等奖"));break;case e.num<=4*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 四等奖"));break;case e.num<=5*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 五等奖"));break;case e.num<=6*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 六等奖"));break;case e.num<=7*e.cat:console.log("rmd=".concat(a,", num=").concat(n.num,", 七等奖"));break}}),4e3))}),30)}}},u=c,i=(e("98ea"),e("2877")),s=Object(i["a"])(u,a,o,!1,null,"23071ebb",null);n["default"]=s.exports},bada:function(t,n,e){},c20d:function(t,n,e){var a=e("da84"),o=e("58a8").trim,r=e("5899"),c=a.parseInt,u=/^[+-]?0[Xx]/,i=8!==c(r+"08")||22!==c(r+"0x16");t.exports=i?function(t,n){var e=o(String(t));return c(e,n>>>0||(u.test(e)?16:10))}:c},e25e:function(t,n,e){var a=e("23e7"),o=e("c20d");a({global:!0,forced:parseInt!=o},{parseInt:o})},e6e3:function(t,n,e){t.exports=e.p+"img/pointer.25cb28ca.png"}}]);