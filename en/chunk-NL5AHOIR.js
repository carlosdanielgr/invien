import{a as F,b as k}from"./chunk-XFULGL7U.js";import"./chunk-KTQ27M5N.js";import{a as D}from"./chunk-TLFK3OR6.js";import"./chunk-NUD3W67S.js";import"./chunk-CLGHCBE3.js";import"./chunk-AJN2I6PP.js";import"./chunk-WPLGPZ2J.js";import"./chunk-AFUDEXJR.js";import"./chunk-MFZ6ZOJ4.js";import{e as G}from"./chunk-L25NALGY.js";import{$a as c,Fb as a,Gb as X,Hb as P,Ib as b,Ja as O,Ka as Y,La as w,Nb as z,Pa as r,Pb as f,Rb as y,Wa as L,bb as s,da as A,eb as R,fb as g,hb as S,ib as C,jb as t,kb as i,lb as o,mb as m,nb as T,ub as _,xb as N}from"./chunk-UJLB5NHQ.js";function B(n,d){if(n&1&&o(0,"app-form",13),n&2){let e=N(2);s("advisor",e.property.advisor);}}function H(n,d){n&1&&(m(0),_(1,8),T());}function U(n,d){n&1&&(m(0),_(1,9),T());}function V(n,d){if(n&1&&(t(0,"figure"),o(1,"img",33),i()),n&2){let e=d.$implicit,p=N(2);r(),s("src",p.apiUrl+e,Y)("alt",e);}}function j(n,d){if(n&1&&(t(0,"span",30),o(1,"img",34),a(2),i()),n&2){let e=d.$implicit;r(2),P(" ",e," ");}}function q(n,d){if(n&1&&(t(0,"article",10)(1,"div",11)(2,"figure"),o(3,"img",12),i(),c(4,B,1,1,"app-form",13),i(),t(5,"div")(6,"h1",14),a(7),i(),t(8,"span",15),a(9),i()(),t(10,"div",16)(11,"span"),c(12,H,2,0,"ng-container")(13,U,2,0),i(),t(14,"span"),a(15),f(16,"currency"),f(17,"currency"),i()(),t(18,"div",17),S(19,V,2,2,"figure",null,g),i(),t(21,"div",18)(22,"div"),o(23,"img",19),t(24,"span")(25,"span"),_(26,0),i(),a(27),i()(),t(28,"div"),o(29,"img",20),t(30,"span")(31,"span"),_(32,1),i(),a(33),i()(),t(34,"div"),o(35,"img",21),t(36,"span"),a(37),m(38),_(39,2),T(),i()(),t(40,"div"),o(41,"img",22),t(42,"span"),a(43),m(44),_(45,3),T(),i()(),t(46,"div"),o(47,"img",23),t(48,"span"),a(49),m(50),_(51,4),T(),i()()()(),t(52,"div",24)(53,"div",25)(54,"div",26)(55,"div")(56,"h2",27),_(57,5),i(),o(58,"div",28),i(),t(59,"div")(60,"h2",27),_(61,6),i(),o(62,"div",28),i()(),t(63,"div")(64,"h3",27),_(65,7),i(),t(66,"div",29),S(67,j,3,1,"span",30,g),i()()()(),t(69,"div",31),o(70,"iframe",32),i()),n&2){let e=N();r(4),R(4,e.property.advisor?4:-1),r(3),X(e.property.name),r(2),b("",e.property.location,", ",e.property.state.name,", ",e.property.town.name,""),r(3),R(12,e.property.is_for==="sale"?12:13),r(3),P("$ ",e.localeService.current==="es"?y(16,15,e.property.price_mxn,"MXN","","1.0-0")+" MXN":y(17,20,e.property.price_usd,"USD","","1.0-0")+" USD"," "),r(4),C(e.property.images),r(8),P(" ",e.property.total_size," m\xB2 "),r(6),P(" ",e.property.built_size," m\xB2 "),r(4),P(" ",e.property.rooms," "),r(6),P(" ",e.property.bathrooms," "),r(6),P(" ",e.property.garage," "),r(9),s("innerHTML",e.property.description,O),r(4),s("innerHTML",e.property.details,O),r(5),C(e.property.amenities),r(3),s("src",e.property.url_map,w);}}function J(n,d){n&1&&(t(0,"div",35),o(1,"app-loader"),i());}var te=(()=>{class n extends k{constructor(){super(),this.id=this.activatedRoute.snapshot.params.id;}static{this.ɵfac=function(p){return new(p||n)();};}static{this.ɵcmp=A({type:n,selectors:[["app-print-property"]],standalone:!0,features:[L,z],decls:2,vars:1,consts:()=>{let e;e="Land";let p;p="Construction";let E;E="Rooms";let M;M="Bathrooms";let u;u="Garage";let I;I="Description";let x;x="Details";let h;h="Amenities";let v;v="SALE";let $;return $="RENT",[e,p,E,M,u,I,x,h,v,$,[1,"property-detail"],[1,"property-detail__header"],["src","./assets/images/logo-dark.png","alt","logo"],[3,"advisor"],[1,"property-detail__title"],[1,"property-detail__type"],[1,"property-detail__price"],[1,"property-detail__print-img"],[1,"property-detail__features"],["src","./assets/icons/total.png","alt","measures"],["src","./assets/icons/totalsize.png","alt","measures"],["src","./assets/icons/rooms.png","alt","room"],["src","./assets/icons/bathroom.png","alt","bathroom"],["src","./assets/icons/garage.png","alt","garage"],[1,"property-detail__description","section"],[1,"property-detail__description-content"],[1,"property-detail__description-info"],[1,"property-detail__description-title"],[1,"property-detail__description-text",3,"innerHTML"],[1,"property-detail__description-amenities"],[1,"property-detail__description-amenity"],[1,"section","last-print"],["width","100%","height","450","allowfullscreen","","referrerpolicy","no-referrer-when-downgrade",2,"border","0",3,"src"],[1,"property-detail__carousel-img",3,"src","alt"],["src","./assets/icons/check-gray.svg","alt","check-gray"],[1,"property-detail__loader"]];},template:function(p,E){p&1&&c(0,q,71,25)(1,J,2,0),p&2&&R(0,E.loading?1:0);},dependencies:[F,D,G],styles:[`.property-detail__description-content,.property-detail{max-width:1300px;margin:0 auto}.header,.footer-section,.footer-section-map,.footer-section-legal,.footer-section hr,.whatsapp-button,app-carousel-properties,app-contact{display:none!important}.property-detail{padding:1rem;page-break-after:always}.property-detail__header{display:flex;align-items:center;justify-content:space-between;gap:1rem}.property-detail__header>figure{max-width:200px}.property-detail app-form div:not(form__adviser),.property-detail app-form button{display:none}.property-detail__print-img{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:3rem 0}.property-detail__print-img>figure:not(:first-child,:nth-child(2),:nth-child(3)){display:none}.property-detail__print-img>figure:nth-child(1){grid-column:1/3;grid-row:1/3}.property-detail__print-img>figure:nth-child(2){grid-column:3/4;grid-row:1/2}.property-detail__print-img>figure:nth-child(3){grid-column:3/4;grid-row:2/3}.property-detail__print-img>figure>img{border-radius:1rem;height:100%;object-fit:cover}.property-detail__title{font-size:3rem;font-family:bell;font-weight:700;margin-top:2rem}.property-detail__type{font-size:1.6rem;color:#7d7d7d}.property-detail__price{display:flex;gap:1rem}.property-detail__price>span{font-size:1.4rem;font-weight:600;color:#434343}.property-detail__features{display:flex;flex-wrap:wrap;gap:1rem;margin-top:1rem;page-break-after:always}.property-detail__features>div{display:flex;column-gap:.5rem}.property-detail__features img{width:25px;height:25px}.property-detail__features span{color:#747474}.property-detail__description{background-color:#f5f5f5}.property-detail__description-content{display:flex;flex-direction:column;gap:2rem}.property-detail__description-content>app-form{flex:1;max-width:460px}.property-detail__description-info{display:flex;flex-wrap:wrap;gap:2rem}.property-detail__description-info>div{display:flex;flex-direction:column;gap:.5rem;flex:1}.property-detail__description-info>button{max-width:fit-content}.property-detail__description-title{font-size:1.7rem;font-family:bell;font-weight:400}.property-detail__description-text{color:#626262}.property-detail__description-amenities{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.property-detail__description-amenity{display:flex;gap:.5rem;color:#626262}.property-detail__description-amenity>img{width:1rem}.property-detail__loader{padding:12rem 1rem 0}
`],encapsulation:2});}}return n;})();export{te as PrintPropertyComponent};/**i18n:3955709bc36bd0ba7669313c1f79c91fc715c30fb3d7aaf5d8030353cbc277bc*/