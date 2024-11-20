import{a as x,b as P,c as M,d as O,e as b,f as E}from"./chunk-C7LKXJB2.js";import{Ca as t,Da as e,Ea as a,Fa as _,Ja as n,Ka as u,Ma as s,R as l,aa as p,ka as f,ma as g,na as d,pa as C,xa as v,ya as h}from"./chunk-XU4PZOPC.js";var S=[{path:"",loadComponent:()=>import("./chunk-6FSYXACO.js").then(o=>o.HomePageComponent)},{path:"about-us",loadComponent:()=>import("./chunk-P63ON6BD.js").then(o=>o.AboutUsComponent)},{path:"properties",loadComponent:()=>import("./chunk-LP3F3OYF.js").then(o=>o.PropertiesComponent)},{path:"properties/:id",loadComponent:()=>import("./chunk-P3TJBB7Y.js").then(o=>o.PropertyDetailComponent)},{path:"our-services",loadComponent:()=>import("./chunk-CBXM3QHT.js").then(o=>o.OurServicesComponent)},{path:"advisers",loadComponent:()=>import("./chunk-Y4CJAQ2K.js").then(o=>o.AdvisersComponent)},{path:"sell",loadComponent:()=>import("./chunk-3SXMRPN4.js")}];var y={providers:[E(S)]};var w=(()=>{class o{onWindowScroll(){(window.scrollY||document.documentElement.scrollTop)>50?this.addClass():this.removeClass()}constructor(r,i){this.el=r,this.renderer=i,this.lightHeader=!1}addClass(){this.renderer.addClass(this.el.nativeElement.querySelector("header"),"header__shadow"),!this.lightHeader&&this.renderer.addClass(this.el.nativeElement.querySelector("header"),"navbar-scrolled")}removeClass(){this.renderer.removeClass(this.el.nativeElement.querySelector("header"),"header__shadow"),!this.lightHeader&&this.renderer.removeClass(this.el.nativeElement.querySelector("header"),"navbar-scrolled")}static{this.\u0275fac=function(i){return new(i||o)(d(p),d(C))}}static{this.\u0275cmp=l({type:o,selectors:[["app-header"]],hostBindings:function(i,c){i&1&&_("scroll",function(){return c.onWindowScroll()},!1,f)},inputs:{lightHeader:"lightHeader"},standalone:!0,features:[s],decls:57,vars:2,consts:[["id","header",1,"header"],["routerLink","",1,"header__logo"],["id","navbarLogo","src","./assets/images/logo-invien.png","alt","Logo",1,"logo"],["id","navbarLogo","src","./assets/images/logo-dark.png","alt","Logo",1,"logo"],[1,"header__nav"],[1,"header__links","navbar-nav"],[1,"nav-item","me-2","me-xl-4","me-xxl-5"],["routerLink","about-us",1,"nav-link"],["routerLink","our-services",1,"nav-link"],["routerLink","properties",1,"nav-link"],["routerLink","advisers",1,"nav-link"],[1,"nav-link"],["role","button","data-bs-toggle","offcanvas","href","#offcanvasExample","aria-controls","offcanvasExample",1,"btn","header__btn-menu"],["src","./assets/icons/menu.png","alt","menu"],[1,"nav-i18n"],["href",""],["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-end"],[1,"offcanvas-header"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body"],[1,"navbar-nav"],["routerLink","about-us","data-bs-dismiss","offcanvas",1,"nav-link"],["routerLink","our-services","data-bs-dismiss","offcanvas",1,"nav-link"],["routerLink","properties","data-bs-dismiss","offcanvas",1,"nav-link"],["routerLink","advisers","data-bs-dismiss","offcanvas",1,"nav-link"],["data-bs-dismiss","offcanvas",1,"nav-link"],[1,"mt-3","nav-i18n"]],template:function(i,c){i&1&&(t(0,"header",0)(1,"a",1),a(2,"img",2)(3,"img",3),e(),t(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),n(8,"Acerca de Nosotros"),e()(),t(9,"li",6)(10,"a",8),n(11,"Servicios"),e()(),t(12,"li",6)(13,"a",9),n(14,"Propiedades"),e()(),t(15,"li",6)(16,"a",10),n(17,"Asesores"),e()(),t(18,"li",6)(19,"a",11),n(20,"Contacto"),e()()(),t(21,"a",12),a(22,"img",13),e(),t(23,"div",14)(24,"a",15),n(25,"ESP"),e(),t(26,"div"),n(27,"|"),e(),t(28,"a",15),n(29,"ENG"),e()()()(),t(30,"div",16)(31,"div",17),a(32,"button",18),e(),t(33,"div",19)(34,"ul",20)(35,"li",6)(36,"a",21),n(37," Acerca de Nosotros "),e()(),t(38,"li",6)(39,"a",22),n(40," Servicios "),e()(),t(41,"li",6)(42,"a",23),n(43," Propiedades "),e()(),t(44,"li",6)(45,"a",24),n(46," Asesores "),e()(),t(47,"li",6)(48,"a",25),n(49,"Contacto"),e()()(),t(50,"div",26)(51,"a",15),n(52,"ESP"),e(),t(53,"div"),n(54,"|"),e(),t(55,"a",15),n(56,"ENG"),e()()()()),i&2&&h("navbar-scrolled",c.lightHeader)},dependencies:[b],styles:[".header[_ngcontent-%COMP%]{position:fixed;display:flex;align-items:center;justify-content:space-between;width:100%;padding:1rem;color:#fff;z-index:1000;transition:all .2s linear}@media screen and (min-width: 992px){.header[_ngcontent-%COMP%]{padding:1rem 3rem}}.header__shadow[_ngcontent-%COMP%]{box-shadow:0 0 1rem #00000080}.header__logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-width:120px}.header__logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:last-child{display:none}.header__btn-menu[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:25px}.header__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.header__links[_ngcontent-%COMP%]{flex-direction:row}@media screen and (max-width: 850px){.header__links[_ngcontent-%COMP%]{display:none}}.navbar-scrolled[_ngcontent-%COMP%]{background-color:#fff}.header.navbar-scrolled[_ngcontent-%COMP%]   .header__btn-menu[_ngcontent-%COMP%]{filter:brightness(0)}.header.navbar-scrolled[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:last-child{display:block}.header.navbar-scrolled[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:first-child{display:none}.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#fff;font-size:.944rem}.header.navbar-scrolled[_ngcontent-%COMP%], .header.navbar-scrolled[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header.navbar-scrolled[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .header.navbar-scrolled[_ngcontent-%COMP%]   .nav-i18n[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#000!important}.offcanvas-body[_ngcontent-%COMP%]   .nav-i18n[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#000}.nav-i18n[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-left:.5rem}.nav-i18n[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;font-size:.6rem;text-decoration:none}.nav-i18n[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:-.3rem}@media screen and (max-width: 850px){.nav-i18n[_ngcontent-%COMP%]{display:none}}"]})}}return o})();var k=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-footer"]],standalone:!0,features:[s],decls:52,vars:1,consts:[[1,"footer-section"],[1,"footer-section-logo"],["src","./assets/images/logo-dark.png","alt","logo"],[1,"my-5","footer-section-info"],[1,"d-block","my-3"],["type","button",1,"btn","btn-invien","px-3"],[1,"footer-section-map"],[1,"footer-section-links"],["href",""],[1,"footer-section-social"],[1,"bi","bi-instagram"],[1,"bi","bi-facebook"],[1,"bi","bi-twitter-x"],[1,"footer-section-legal"]],template:function(i,c){i&1&&(t(0,"footer",0)(1,"figure",1),a(2,"img",2),e(),t(3,"div",3)(4,"div")(5,"span"),n(6,"Dejanos un mensaje"),e(),t(7,"span",4),n(8,"Diversificar tu patrimonio. "),e(),t(9,"button",5),n(10,"Contacto"),e()(),t(11,"div")(12,"span"),n(13,"Contacto"),e(),t(14,"span"),n(15,"+52 662 424 7136"),e(),t(16,"span"),n(17),e()(),t(18,"div")(19,"span"),n(20,"Visitanos"),e(),t(21,"span"),n(22," Blvd. Fco. Eusebio kino # 514 "),e(),t(23,"span"),n(24,"Colonia Pitic Hermosillo, Sonora. "),e(),t(25,"span"),n(26,"C\xF3digo postal 83150"),e()()(),t(27,"div",6)(28,"div",7)(29,"a",8),n(30,"Acerca de Nosotros"),e(),t(31,"a",8),n(32,"Servicios"),e(),t(33,"a",8),n(34,"Propiedades"),e(),t(35,"a",8),n(36,"Asesorias"),e(),t(37,"a",8),n(38,"Contacto"),e()(),t(39,"div",9)(40,"a",8),a(41,"i",10),e(),t(42,"a",8),a(43,"i",11),e(),t(44,"a",8),a(45,"i",12),e()()(),a(46,"hr"),t(47,"div",13)(48,"span"),n(49,"\xA9 2024 Invien. Todos los derechos reservados."),e(),t(50,"a",8),n(51,"Terminos de Servicio"),e()()()),i&2&&(g(17),u("invien@invien.mx"))},styles:[".footer-section[_ngcontent-%COMP%]{padding:4rem 1rem 3rem}@media screen and (min-width: 768px){.footer-section[_ngcontent-%COMP%]{padding:5rem 3rem 4rem}}.footer-section-logo[_ngcontent-%COMP%]{max-width:11rem}.footer-section-map[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2rem}.footer-section-social[_ngcontent-%COMP%]{display:flex;gap:.5rem}.footer-section-social[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:var(--primary);border:1px solid;border-radius:50%;padding:.1rem .35rem}.footer-section-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem}.footer-section-links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:.96rem;color:#818181}.footer-section-info[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem}@media screen and (min-width: 768px){.footer-section-info[_ngcontent-%COMP%]{gap:4rem}}.footer-section-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.footer-section-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{font-size:1.4rem}.footer-section-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){font-size:.88rem;color:#626262}.footer-section-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:fit-content}.footer-section-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child > span[_ngcontent-%COMP%]:nth-child(2){font-size:.77rem}.footer-section-legal[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}.footer-section-legal[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .footer-section-legal[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:.9rem}.footer-section-legal[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#000}"]})}}return o})();var H=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-contact"]],standalone:!0,features:[s],decls:26,vars:0,consts:[[1,"contact"],[1,"col"],["src","./assets/images/contact.png","alt","contact"],[1,"col","contact-form"],[1,"contact-form__content"],[1,"contact-title"],[1,"contact__inputs"],["for","name",1,"form-label"],["type","text","id","name","placeholder","Nombre","required","",1,"form-control"],["for","phone",1,"form-label"],["type","text","id","phone","placeholder","+123 456 7890","required","",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","placeholder","tucorreo@email.com","required","",1,"form-control"],["for","message",1,"form-label"],["id","message","rows","5","placeholder","Dejanos un mensaje","required","",1,"form-control"],["type","submit",1,"btn","btn-invien","px-3","mt-3"]],template:function(i,c){i&1&&(t(0,"article",0)(1,"figure",1),a(2,"img",2),e(),t(3,"form",3)(4,"div",4)(5,"h5",5),n(6,"Conecta con los Expertos"),e(),t(7,"div",6)(8,"div")(9,"label",7),n(10,"Nombre"),e(),a(11,"input",8),e(),t(12,"div")(13,"label",9),n(14,"Tel\xE9fono"),e(),a(15,"input",10),e(),t(16,"div")(17,"label",11),n(18,"Correo electr\xF3nico"),e(),a(19,"input",12),e(),t(20,"div")(21,"label",13),n(22,"Mensaje"),e(),a(23,"textarea",14),e()(),t(24,"button",15),n(25,"Enviar"),e()()()())},styles:[".contact[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;background-color:#f5f5f5}@media screen and (min-width: 768px){.contact[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.contact__inputs[_ngcontent-%COMP%]{display:grid;gap:1rem}@media screen and (min-width: 768px){.contact__inputs[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.contact__inputs[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .contact__inputs[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{grid-column:span 2}}.contact-form[_ngcontent-%COMP%]{padding:1rem}.contact-form__content[_ngcontent-%COMP%]{max-width:550px;margin:0 auto}.contact-title[_ngcontent-%COMP%]{font-size:2.6rem;font-family:bell;font-weight:400;margin:1.5rem 0;max-width:15rem}.contact[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{font-weight:400}.contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:0}.contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #ec1c2457}"]})}}return o})();var L=(()=>{class o{constructor(r){this.router=r,this.activeLightHeader=!1}ngOnInit(){this.router.events.subscribe(r=>{r instanceof P&&(this.activeLightHeader=r.url.includes("/properties/"),window.scrollTo(0,0))})}static{this.\u0275fac=function(i){return new(i||o)(d(O))}}static{this.\u0275cmp=l({type:o,selectors:[["app-root"]],standalone:!0,features:[s],decls:6,vars:1,consts:[[3,"lightHeader"],["href","https://api.whatsapp.com/send?phone=526624247136&text=%C2%A1Hola%21%2C%20Quisiera%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20una%20propiedad%20de%20Invien.","target","_blank",1,"whatsapp-button"],[1,"bi","bi-whatsapp"]],template:function(i,c){i&1&&(a(0,"app-header",0)(1,"router-outlet")(2,"app-contact")(3,"app-footer"),t(4,"a",1),a(5,"i",2),e()),i&2&&v("lightHeader",c.activeLightHeader)},dependencies:[M,w,k,H],styles:[".whatsapp-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#fff;border-radius:50px;box-shadow:2px 2px 3px #999;z-index:1100;text-decoration:none}.whatsapp-button[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:30px}"]})}}return o})();x(L,y).catch(o=>console.error(o));
