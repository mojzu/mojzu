(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(t,e,a){"use strict";a.r(e);var c=a(0);function r(t,e){var a,r,j,n,s,h,b=e.i+1,O=e.page.metadata.title;return{c(){a=Object(c.g)("li"),r=Object(c.g)("a"),j=Object(c.h)(b),n=Object(c.h)(". "),s=Object(c.h)(O),this.h()},l(t){a=Object(c.e)(t,"LI",{},!1);var e=Object(c.d)(a);r=Object(c.e)(e,"A",{href:!0},!1);var h=Object(c.d)(r);j=Object(c.f)(h,b),n=Object(c.f)(h,". "),s=Object(c.f)(h,O),h.forEach(c.j),e.forEach(c.j),this.h()},h(){r.href=h=e.page.href},m(t,e){Object(c.m)(a,t,e),Object(c.a)(r,a),Object(c.a)(j,r),Object(c.a)(n,r),Object(c.a)(s,r)},p(t,e){t.pages&&O!==(O=e.page.metadata.title)&&(s.data=O),t.pages&&h!==(h=e.page.href)&&(r.href=h)},d(t){t&&Object(c.j)(a)}}}function j(t,e,a){const c=Object.create(t);return c.page=e[a],c.each_value=e,c.i=a,c}function n(t){if(Object(c.l)(this,t),this._state=Object(c.b)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var a,n,s=e.pages,h=[],b=0;b<s.length;b+=1)h[b]=r(0,j(e,s,b));return{c(){a=Object(c.g)("nav"),n=Object(c.g)("ul");for(var t=0;t<h.length;t+=1)h[t].c()},l(t){a=Object(c.e)(t,"NAV",{},!1);var e=Object(c.d)(a);n=Object(c.e)(e,"UL",{},!1);for(var r=Object(c.d)(n),j=0;j<h.length;j+=1)h[j].l(r);r.forEach(c.j),e.forEach(c.j)},m(t,e){Object(c.m)(a,t,e),Object(c.a)(n,a);for(var r=0;r<h.length;r+=1)h[r].m(n,null)},p(t,e){if(t.pages){s=e.pages;for(var a=0;a<s.length;a+=1){const c=j(e,s,a);h[a]?h[a].p(t,c):(h[a]=r(0,c),h[a].c(),h[a].m(n,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=s.length}},d(t){t&&Object(c.j)(a),Object(c.i)(h,t)}}}(0,this._state),t.target){var e=Object(c.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.j),this._mount(t.target,t.anchor)}}Object(c.b)(n.prototype,c.o);var s=n;function h(t){if(Object(c.l)(this,t),this._state=Object(c.b)({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var a,r,j,n,h,b,O,o,i,g,f=e.page.metadata.title,l=e.page.html;document.title=a=e.page.metadata.title;var p={pages:e.pages},m=new s({root:t.root,store:t.store,data:p});return{c(){r=Object(c.h)("\n\n\n"),j=Object(c.g)("header"),n=Object(c.g)("h1"),h=Object(c.g)("a"),b=Object(c.h)(f),o=Object(c.h)("\n\n"),m._fragment.c(),i=Object(c.h)("\n\n"),g=Object(c.g)("div"),this.h()},l(t){r=Object(c.f)(t,"\n\n\n"),j=Object(c.e)(t,"HEADER",{class:!0},!1);var e=Object(c.d)(j);n=Object(c.e)(e,"H1",{class:!0},!1);var a=Object(c.d)(n);h=Object(c.e)(a,"A",{class:!0,href:!0},!1);var s=Object(c.d)(h);b=Object(c.f)(s,f),s.forEach(c.j),a.forEach(c.j),e.forEach(c.j),o=Object(c.f)(t,"\n\n"),m._fragment.l(t),i=Object(c.f)(t,"\n\n"),g=Object(c.e)(t,"DIV",{class:!0},!1),Object(c.d)(g).forEach(c.j),this.h()},h(){h.className="link white hover-yellow",h.href=O=e.page.href,n.className="f3 fw6 ma0",j.className="w-100 bg-purple pa3",g.className="content"},m(t,e){Object(c.m)(r,t,e),Object(c.m)(j,t,e),Object(c.a)(n,j),Object(c.a)(h,n),Object(c.a)(b,h),Object(c.m)(o,t,e),m._mount(t,e),Object(c.m)(i,t,e),Object(c.m)(g,t,e),g.innerHTML=l},p(t,e){t.page&&a!==(a=e.page.metadata.title)&&(document.title=a),t.page&&f!==(f=e.page.metadata.title)&&(b.data=f),t.page&&O!==(O=e.page.href)&&(h.href=O);var c={};t.pages&&(c.pages=e.pages),m._set(c),t.page&&l!==(l=e.page.html)&&(g.innerHTML=l)},d(t){t&&(Object(c.j)(r),Object(c.j)(j),Object(c.j)(o)),m.destroy(t),t&&(Object(c.j)(i),Object(c.j)(g))}}}(this,this._state),t.target){var e=Object(c.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.j),this._mount(t.target,t.anchor),this._lock=!0,Object(c.c)(this._beforecreate),Object(c.c)(this._oncreate),Object(c.c)(this._aftercreate),this._lock=!1}}Object(c.b)(h.prototype,c.o),h.preload=async function({params:t,query:e}){const a=await this.fetch(`documentation/${t.content}.json/${t.page||"index"}.json`),c=await a.json();if(200===a.status)return{page:c.page,pages:c.pages};this.error(a.status,c.message)};e.default=h}}]);