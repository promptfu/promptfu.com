(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{IR05:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),i=a.n(l),m=a("Wbzz"),o=a("65eO"),c=function(e){var t=e.categories,a=e.pathPrefix;return r.a.createElement(r.a.Fragment,null,t.map((function(e,n){var l=("/"+a+"/categories/"+i()(e)).toLowerCase(),c=" | ";return n+1===t.length&&(c=""),r.a.createElement("span",{key:e+"-"+n},r.a.createElement(o.a,{variant:"info"},r.a.createElement(m.Link,{to:l,className:"text-white"},"#",e.toLowerCase())),c)})))};t.a=c,c.defaultProps={categories:[],pathPrefix:""}},Q0tz:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),m=a("Bl7J"),o=a("jNNy"),c=a("wx14"),u=a("zLVn"),s=a("TSYQ"),d=a.n(s),g=(a("2W6z"),a("JCAc")),p=a("vUet"),E=a("rQNl"),y=a("VWqr"),f=a("ILyh"),h={variant:void 0,active:!1,disabled:!1},v=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,i=e.disabled,m=e.className,o=e.variant,s=e.action,g=e.as,E=e.eventKey,h=e.onClick,v=Object(u.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(p.a)(a,"list-group-item");var b=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[i,h]);return l.a.createElement(y.a,Object(c.a)({ref:t},v,{eventKey:Object(f.b)(E,v.href),as:g||(s?v.href?"a":"button":"div"),onClick:b,className:d()(m,a,n&&"active",i&&"disabled",o&&a+"-"+o,s&&a+"-action")}))}));v.defaultProps=h,v.displayName="ListGroupItem";var b=v,P={variant:void 0,horizontal:void 0},O=l.a.forwardRef((function(e,t){var a,n=Object(g.a)(e,{activeKey:"onSelect"}),r=n.className,i=n.bsPrefix,m=n.variant,o=n.horizontal,s=n.as,y=void 0===s?"div":s,f=Object(u.a)(n,["className","bsPrefix","variant","horizontal","as"]),h=Object(p.a)(i,"list-group");return a=o?!0===o?"horizontal":"horizontal-"+o:null,l.a.createElement(E.a,Object(c.a)({ref:t},f,{as:y,className:d()(r,h,m&&h+"-"+m,a&&h+"-"+a)}))}));O.defaultProps=P,O.displayName="ListGroup",O.Item=b;var N=O,F=a("3Z9Z"),I=a("JI6e"),w=a("ma3e"),j=a("IR05"),U=a("Ksxj"),x=function(e){var t=e.items;return l.a.createElement(N,{as:"ul",variant:"flush"},t.map((function(e,t){var a=e.node,n=a.fields.slug,r=a.frontmatter,m=r.categories,o=r.created,c=r.title,u=r.updated,s=a.parent.sourceInstanceName;return l.a.createElement(N.Item,{key:e+"-"+t,as:"li",className:"p-0 py-1"},l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement(i.Link,{to:n,className:"text-dark"},l.a.createElement(w.j,{className:"mr-1"}),c))),l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement("p",{className:"text-muted my-1",style:S},u>o?"Updated on "+u+" in":"Created on "+o+" in",l.a.createElement("span",{className:"ml-1"},l.a.createElement(j.a,{categories:m,pathPrefix:s})),l.a.createElement("span",{className:"ml-1 float-right"},l.a.createElement(U.a,{slug:n,title:c}))))))})))};x.defaultProps={items:[]};var k=x,S={fontSize:".8rem"},C=a("7vrA"),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.wikiPostsFeatured.edges,a=e.wikiPosts.edges;return l.a.createElement(m.a,null,l.a.createElement(o.b,{pathname:this.props.location.pathname,pageType:o.a.WEBPAGE,title:"Wiki"}),l.a.createElement(C.a,null,l.a.createElement(F.a,{className:"my-3"},l.a.createElement(I.a,{lg:6,md:12,sm:12,xs:12},l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement("h1",null,"FEATURED WIKI"))),l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement(k,{items:t})))))),l.a.createElement(I.a,{lg:6,md:12,sm:12,xs:12},l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement("h1",null,"RECENT ACTIVITY"))),l.a.createElement(F.a,null,l.a.createElement(I.a,null,l.a.createElement(k,{items:a})))))))))},t}(l.a.Component);t.default=function(e){return l.a.createElement(i.StaticQuery,{query:"2261867155",render:function(t){return l.a.createElement(L,Object.assign({data:t},e))}})}},jNNy:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("TJpk"),i=a.n(l),m=a("Wbzz"),o=function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("meta",{property:"article:published_time",content:e.published_time}),e.modified_time&&r.a.createElement("meta",{property:"article:modified_time",content:e.modified_time}),e.expiration_time&&r.a.createElement("meta",{property:"article:expiration_time",content:e.expiration_time}),r.a.createElement("meta",{property:"article:author",content:e.author}),r.a.createElement("meta",{property:"article:section",content:e.section}),r.a.createElement("meta",{property:"article:tag",content:e.tags}));return r.a.createElement(i.a,null,r.a.createElement("meta",{property:"og:type",content:e.type}),r.a.createElement("meta",{property:"og:title",content:e.title}),r.a.createElement("meta",{property:"og:description",content:e.description}),r.a.createElement("meta",{property:"og:image",content:e.image}),r.a.createElement("meta",{property:"og:image:alt",content:e.description}),r.a.createElement("meta",{property:"og:locale",content:e.locale}),r.a.createElement("meta",{property:"og:url",content:e.url}),r.a.createElement("meta",{property:"og:site_name",content:e.site}),"article"===e.type?t:null)};o.defaultProps={author:"",expiration_time:null,locale:"en_US",modified_time:null,published_time:null,section:"",tags:[],type:"website"};var c=o,u=function(e){return r.a.createElement(i.a,null,r.a.createElement("meta",{name:"twitter:card",content:e.type}),r.a.createElement("meta",{name:"twitter:site",content:"@"+e.site}),e.username&&r.a.createElement("meta",{name:"twitter:creator",content:"@"+e.username}),r.a.createElement("meta",{name:"twitter:title",content:e.title}),r.a.createElement("meta",{name:"twitter:description",content:e.description}),r.a.createElement("meta",{name:"twitter:image",content:e.image}))};u.defaultProps={type:"summary_large_image",username:null};var s=u,d={ARTICLE:"ARTICLE",BLOG:"BLOG",BLOGPOST:"BLOGPOST",BREADCRUMB:"BREADCRUMB",WEBPAGE:"WEBPAGE"};function g(e){var t=Object(m.useStaticQuery)(p).allImageSharp.edges.find((function(t){return t.node.fixed.originalName===e}));if(t)return t.node.fixed.src}var p="4171525417";function E(e){var t=Object(m.useStaticQuery)(y).site.siteMetadata,a=t.defaultImage,n=t.defaultTitle,r=t.defaultUrl;return e?{"@type":"Person",name:""+e}:{"@type":"Organization",name:""+n,url:""+r,logo:{"@type":"ImageObject",url:""+r+g(a)}}}var y="1673447228",f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Article",name:""+e.headline,description:""+e.description,image:""+e.image,url:""+e.url,headline:""+e.headline,alternativeHeadline:""+e.alternativeHeadline,dateCreated:""+e.dateCreated,datePublished:""+e.datePublished,dateModified:""+e.dateModified,inLanguage:""+e.language,isFamilyFriendly:""+e.isFamilyFriendly,copyrightYear:""+(new Date).getFullYear(),author:E(e.author),publisher:{"@type":"Organization",name:""+e.orgName,url:""+e.orgUrl,logo:{"@type":"ImageObject",url:""+e.orgImageUrl}},mainEntityOfPage:""+e.mainEntityOfPage}))))};f.defaultProps={alternativeHeadline:"",author:"",isFamilyFriendly:!0,language:"en-US"};var h=f,v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Blog",name:""+e.headline,description:""+e.description,image:""+e.image,url:""+e.url,headline:""+e.headline,alternativeHeadline:""+e.alternativeHeadline,inLanguage:""+e.language,isFamilyFriendly:""+e.isFamilyFriendly,copyrightYear:""+(new Date).getFullYear(),author:E(e.author),publisher:{"@type":"Organization",name:""+e.orgName,url:""+e.orgUrl,logo:{"@type":"ImageObject",url:""+e.orgImageUrl}},mainEntityOfPage:""+e.mainEntityOfPage}))))};v.defaultProps={alternativeHeadline:"",author:"",isFamilyFriendly:!0,language:"en-US"};var b=v,P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"BlogPosting",name:""+e.name,description:""+e.description,image:""+e.image,url:""+e.url,headline:""+e.headline,alternativeHeadline:""+e.alternativeHeadline,dateCreated:""+e.datePublished,datePublished:""+e.datePublished,dateModified:""+e.dateModified,inLanguage:""+e.language,isFamilyFriendly:""+e.isFamilyFriendly,copyrightYear:""+(new Date).getFullYear(),author:E(e.author),publisher:{"@type":"Organization",name:""+e.orgName,url:""+e.orgUrl,logo:{"@type":"ImageObject",url:""+e.orgImageUrl}},mainEntityOfPage:""+e.mainEntityOfPage}))))};P.defaultProps={alternativeHeadline:"",author:"",isFamilyFriendly:!0,language:"en-US"};var O=P,N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@graph":[e.links.map((function(t,a){return{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":e.url+"#header-nav",name:""+t.name,url:""+e.url+t.link}}))]}))))};N.defaultProps={links:[],url:""};var F=N,I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"WebPage",name:""+e.headline,description:""+e.description,image:""+e.image,url:""+e.url,headline:""+e.headline,alternativeHeadline:""+e.alternativeHeadline,inLanguage:""+e.language,isFamilyFriendly:""+e.isFamilyFriendly,copyrightYear:""+(new Date).getFullYear(),author:E(e.author),publisher:{"@type":"Organization",name:""+e.orgName,url:""+e.orgUrl,logo:{"@type":"ImageObject",url:""+e.orgImageUrl}},mainEntityOfPage:""+e.mainEntityOfPage}))))};I.defaultProps={alternativeHeadline:"",author:"",isFamilyFriendly:!0,language:"en-US"};var w=I,j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"WebSite",name:""+e.name,url:""+e.url}))))};j.defaultProps={name:"",url:""};var U=j,x={author:"",description:"",image:"",keywords:[],node:{},pathname:"",pageType:d.WEBPAGE,title:"",article:!1},k=function(e){var t=e.data.site.siteMetadata,a=t.defaultDescription,n=t.defaultImage,l=t.defaultTitle,m=t.defaultUrl,o=t.language,u=t.links,p=t.social,E=t.url,y={description:e.description||a,image:e.image||n,title:e.title?e.title+" | "+l:l+" | "+a,url:""+E+(e.pathname||"")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,y.title),r.a.createElement("html",{lang:o}),r.a.createElement("meta",{name:"description",content:y.description}),r.a.createElement("meta",{name:"image",content:""+E+g(y.image)}),e.keywords.length>0?r.a.createElement("meta",{name:"keywords",content:e.keywords.join(", ")}):""),r.a.createElement(c,{description:y.description,image:""+E+g(y.image),locale:p.facebook.language,site:p.facebook.name,title:y.title,type:e.article?"article":"website",url:y.url}),r.a.createElement(s,{description:y.description,image:""+E+g(y.image),site:p.twitter.site,title:y.title}),r.a.createElement(U,{name:l,url:m}),r.a.createElement(F,{links:u,url:m}),function(t){switch(t){case d.ARTICLE:return r.a.createElement(h,{dateCreated:e.dateCreated,dateModified:e.dateModified,datePublished:e.datePublished,description:y.description,headline:y.title,image:""+E+g(y.image),mainEntityOfPage:y.url,name:y.title,orgImageUrl:""+E+g(n),orgName:l,orgUrl:m,url:y.url});case d.BLOG:return r.a.createElement(b,{description:y.description,headline:y.title,image:""+E+g(y.image),mainEntityOfPage:y.url,name:y.title,orgImageUrl:""+E+g(n),orgName:l,orgUrl:m,url:y.url});case d.BLOGPOST:return r.a.createElement(O,{dateCreated:e.dateCreated,dateModified:e.dateModified,datePublished:e.datePublished,description:y.description,headline:y.title,image:""+E+g(y.image),mainEntityOfPage:y.url,name:y.title,orgImageUrl:""+E+g(n),orgName:l,orgUrl:m,url:y.url});default:return r.a.createElement(w,{description:y.description,headline:y.title,image:""+E+g(y.image),mainEntityOfPage:y.url,name:y.title,orgImageUrl:""+E+g(n),orgName:l,orgUrl:m,url:y.url})}}(e.pageType))};k.defaultProps=x;var S="1673447228";t.b=function(e){return r.a.createElement(m.StaticQuery,{query:S,render:function(t){return r.a.createElement(k,Object.assign({data:t},e))}})}}}]);
//# sourceMappingURL=component---src-pages-wiki-index-js-8bf8cff29a4509184dae.js.map