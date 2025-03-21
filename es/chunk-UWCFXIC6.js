import{f as y,p as S,q as A}from"./chunk-L25NALGY.js";import{$ as T,Ab as E,Fb as a,Hb as _,Ka as u,Nb as C,Pa as s,Qa as P,W as f,bb as v,da as p,jb as t,kb as i,lb as M,mb as m,nb as l,ub as c}from"./chunk-UJLB5NHQ.js";var I=(()=>{class e{constructor(r){this.locale=r,this.role="",this.urlImage=`${S.apiUrl}uploads/advisors/`;}ngOnInit(){this.urlImage+=this.adviser.image,this.role=this.adviser[`role_${this.locale.current}`];}static{this.ɵfac=function(n){return new(n||e)(P(A));};}static{this.ɵcmp=p({type:e,selectors:[["app-adviser"]],inputs:{adviser:"adviser"},standalone:!0,features:[C],decls:12,vars:10,consts:[[1,"adviser"],[3,"src","alt"],[1,"d-block","fs-5"],[1,"adviser__contact",3,"href"]],template:function(n,o){n&1&&(t(0,"div",0),M(1,"img",1),t(2,"div")(3,"span",2),a(4),i(),t(5,"span"),a(6),i()(),t(7,"div")(8,"a",3),a(9),i(),t(10,"a",3),a(11),i()()()),n&2&&(s(),v("src",o.urlImage,u)("alt",o.adviser.name),s(3),_(" ",o.adviser.name," "),s(2),_(" ",o.role," "),s(2),E("href","mailto:",o.adviser.email,"",u),s(),_(" ",o.adviser.email," "),s(),E("href","tel:",o.adviser.phone,"",u),s(),_(" ",o.adviser.phone," "));},styles:[".adviser[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.adviser[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:22rem;max-width:18rem;border-radius:1rem;object-fit:cover}.adviser__contact[_ngcontent-%COMP%]{display:block;color:#4f4f4f;text-decoration:none}"]});}}return e;})();var x=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)();};}static{this.ɵcmp=p({type:e,selectors:[["app-comments"]],standalone:!0,features:[C],decls:33,vars:0,consts:()=>{let r;r=" \u201CGracias a Invien encontr\xE9 la propiedad perfecta sin estr\xE9s ni demoras. Su equipo me gui\xF3 en cada paso y resolvieron todas mis dudas. \xA1Totalmente recomendado!\u201D ";let n;n="Compradora";let o;o=" \u201CInvien hizo que comprar mi primera casa fuera una experiencia incre\xEDble. Me acompa\xF1aron desde la b\xFAsqueda hasta la firma, siempre con atenci\xF3n personalizada y respuestas r\xE1pidas. \xA1Servicio de 10!\u201D ";let O;O="Comprador";let N;N="\u201CNo ten\xEDa experiencia comprando inmuebles, pero con Invien todo fue claro y f\xE1cil. Me ayudaron a encontrar la mejor opci\xF3n y a cerrar el trato sin complicaciones. \xA1Gran equipo!\u201D";let g;return g="Compradora",[r,n,o,O,N,g,["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","comments","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active"],[1,"carousel-item"]];},template:function(n,o){n&1&&(t(0,"article",6)(1,"div",7),M(2,"button",8)(3,"button",9)(4,"button",10),i(),t(5,"div",11)(6,"div",12)(7,"span"),c(8,0),i(),t(9,"span"),a(10," - "),m(11),a(12,"Mar\xEDa G., "),l(),m(13),c(14,1),l(),i()(),t(15,"div",13)(16,"span"),c(17,2),i(),t(18,"span"),a(19," - "),m(20),a(21,"Carlos M., "),l(),m(22),c(23,3),l(),i()(),t(24,"div",13)(25,"span"),c(26,4),i(),t(27,"span"),a(28," - "),m(29),a(30,"Laura S., "),l(),m(31),c(32,5),l(),i()()()());},styles:['.comments[_ngcontent-%COMP%]{background-image:url("./media/comments-UFKQQLSQ.png");background-size:cover;background-position-y:center}.comments[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   [data-bs-target][_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%}.comments[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{padding:8rem 1rem;text-align:center}.comments[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;color:#fff}.comments[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{font-size:1.7rem;max-width:42rem;margin:0 auto 1.5rem}']});}}return e;})();var z=(()=>{class e{constructor(r){this.http=r,this.API_URL=`${S.apiUrl}`;}getAdvisors(){return this.http.get(`${this.API_URL}advisor`);}static{this.ɵfac=function(n){return new(n||e)(T(y));};}static{this.ɵprov=f({token:e,factory:e.ɵfac,providedIn:"root"});}}return e;})();export{I as a,x as b,z as c};/**i18n:3955709bc36bd0ba7669313c1f79c91fc715c30fb3d7aaf5d8030353cbc277bc*/