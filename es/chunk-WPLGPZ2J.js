import{f as h,p as l,q as p}from"./chunk-L25NALGY.js";import{$ as r,W as c,a as s,c as n,j as a}from"./chunk-UJLB5NHQ.js";var $=(()=>{class e{constructor(t,i){this.http=t,this.locale=i,this.API_URL=`${l.apiUrl}project/`,this.originProjects$=new a([]),this.loading=!1}getProjects(){return this.http.get(`${this.API_URL}paginated/${this.locale.current}`)}getProjectById(t){return this.http.get(`${this.API_URL}${t}/${this.locale.current}`)}getProjectsPaginate(t){return this.http.get(`${this.API_URL}paginated/${this.locale.current}`,{params:s({},t)})}initGetProjects(){this.loading=!0,this.getProjects().subscribe({next:t=>{let o=t,{data:i}=o,g=n(o,["data"]);this.pagination=g,this.originProjects$.next(i),this.loading=!1},error:t=>{this.loading=!1,console.error(t)}})}get projects$(){return this.originProjects$.asObservable()}static{this.\u0275fac=function(i){return new(i||e)(r(h),r(p))}}static{this.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{$ as a};
/**i18n:3955709bc36bd0ba7669313c1f79c91fc715c30fb3d7aaf5d8030353cbc277bc*/
