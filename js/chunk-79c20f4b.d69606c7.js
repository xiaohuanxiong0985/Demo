(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c20f4b"],{"42f7":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"phone"},[e("div",{staticClass:"cart"},[e("div",{staticClass:"cart__left"},[e("ul",{staticClass:"nav__list"},t._l(3,(function(n,i){return e("li",{key:i,staticClass:"nav__list__item",class:{active:i===t.navIndex},on:{click:function(n){return t.handleTab(i)}}},[t._v(t._s("按钮"+i))])})),0)]),e("div",{staticClass:"cart__right"},[e("div",{staticClass:"shop__list"},[e("h5",{staticClass:"nav__title"},[t._v(t._s("按钮"+t.navIndex))]),t._l(t.newShopList,(function(n,i){return e("div",{key:i,staticClass:"shop__list__item"},[e("img",{staticClass:"cover",attrs:{src:n.imgUrl,alt:n}}),e("div",{staticClass:"info"},[e("p",[t._v(t._s(n.name))]),e("div",{staticClass:"btn__wrap"},[e("span",{staticClass:"btn__wrap__icon",attrs:{hidden:!n.number},on:{click:function(e){return t.handleRemove(n,i)}}},[t._v("-")]),e("span",{attrs:{hidden:!n.number}},[t._v(t._s(n.number))]),e("span",{staticClass:"btn__wrap__icon",on:{click:function(e){return t.handleAdd(n,i)}}},[t._v("+")])])])])}))],2)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartList.length,expression:"cartList.length"}],staticClass:"cart__box"},[e("div",[t._v(t._s("已选"+t.cartList.length+"件商品"))])])])])},s=[],a=(e("99af"),e("4de4"),e("c740"),e("13d5"),e("45fc"),e("a434"),e("2909")),r=e("bc3a"),c=e.n(r),o={data:function(){return{navIndex:0,shopList:[],cartList:[]}},computed:{newShopList:function(){var t=this,n=Object(a["a"])(this.cartList).filter((function(n){return Object(a["a"])(t.shopList).some((function(t){return t.id===n.id}))}));return this.deduplication(this.shopList.concat(n),"id")}},methods:{deduplication:function(t,n){var e=this,i={};return t.reduce((function(t,s){if(i[s[n]]){var a=t.findIndex((function(t){return t.id===s.id}));e.$set(t,a,s)}else i[s[n]]=!0,t.push(s);return t}),[])},handleTab:function(t){this.navIndex=t},handleAdd:function(t,n){t.number=t.number?++t.number:1,this.$set(this.shopList,n,t);var e=this.cartList.some((function(n){return n.id===t.id}));e||this.cartList.push(t)},handleRemove:function(t,n){t.number=t.number?--t.number:0,this.$set(this.shopList,n,t);var e=this.cartList.some((function(n){return n.id===t.id}));e&&!t.number&&this.cartList.splice(this.cartList.findIndex((function(n){return n.id===t.id})),1)}},watch:{navIndex:{handler:function(t,n){var e=this;c.a.get("https://www.fastmock.site/mock/2ff9d5d575724c586c61a887a4ee50f7/api/shop".concat(t)).then((function(t){e.shopList=t.data.data}))},immediate:!0}}},d=o,u=(e("905f"),e("2877")),l=Object(u["a"])(d,i,s,!1,null,"5f0926ba",null);n["default"]=l.exports},"45fc":function(t,n,e){"use strict";var i=e("23e7"),s=e("b727").some,a=e("a640"),r=e("ae40"),c=a("some"),o=r("some");i({target:"Array",proto:!0,forced:!c||!o},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,n,e){"use strict";var i=e("23e7"),s=e("b727").filter,a=e("1dde"),r=e("ae40"),c=a("filter"),o=r("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"905f":function(t,n,e){"use strict";var i=e("e1d8"),s=e.n(i);s.a},a434:function(t,n,e){"use strict";var i=e("23e7"),s=e("23cb"),a=e("a691"),r=e("50c4"),c=e("7b0b"),o=e("65f0"),d=e("8418"),u=e("1dde"),l=e("ae40"),f=u("splice"),h=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,_=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,n){var e,i,u,l,f,h,b=c(this),w=r(b.length),g=s(t,w),L=arguments.length;if(0===L?e=i=0:1===L?(e=0,i=w-g):(e=L-2,i=_(v(a(n),0),w-g)),w+e-i>p)throw TypeError(m);for(u=o(b,i),l=0;l<i;l++)f=g+l,f in b&&d(u,l,b[f]);if(u.length=i,e<i){for(l=g;l<w-i;l++)f=l+i,h=l+e,f in b?b[h]=b[f]:delete b[h];for(l=w;l>w-i+e;l--)delete b[l-1]}else if(e>i)for(l=w-i;l>g;l--)f=l+i-1,h=l+e-1,f in b?b[h]=b[f]:delete b[h];for(l=0;l<e;l++)b[l+g]=arguments[l+2];return b.length=w-i+e,u}})},c740:function(t,n,e){"use strict";var i=e("23e7"),s=e("b727").findIndex,a=e("44d2"),r=e("ae40"),c="findIndex",o=!0,d=r(c);c in[]&&Array(1)[c]((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!d},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},e1d8:function(t,n,e){}}]);