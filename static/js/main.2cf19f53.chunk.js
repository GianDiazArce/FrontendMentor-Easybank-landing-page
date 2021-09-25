(this["webpackJsonpeasybank-landing-page"]=this["webpackJsonpeasybank-landing-page"]||[]).push([[0],{20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o=t(2),l=t.n(o),s=t(10),d=t.n(s),h=(t(20),t(3)),g=t(5),j=t(4),p={darkBlue:"hsl(233, 26%, 24%)",limeGreen:"hsl(136, 65%, 51%)",brightCyan:"hsl(192, 70%, 51%)"},b={grayishBlue:"hsl(233, 8%, 62%)",lightGrayishBlue:"hsl(220, 16%, 96%)",veryLightGray:"hsl(0, 0%, 98%)",white:"hsl(0, 0%, 100%)"},x=t(1),u=j.a.button(i||(i=Object(h.a)(["\n    background-image: linear-gradient(\n        90deg,\n        rgba(49, 211, 92, 1) 5%,\n        rgba(43, 183, 218, 1) 92%\n    );\n    border: none;\n    cursor: pointer;\n    padding: 12px 25px;\n    border-radius: 30px;\n    color: ",";\n    font-weight: 600;\n    letter-spacing: 0.5px;\n    min-width: 140px;\n\n    box-shadow: 0 0 10px -3px rgba(49, 211, 92, 0.4),\n        0 0 10px -3px rgba(43, 183, 218, 0.4);\n\n    transition: opacity 0.3s;\n\n    /* filter: drop-shadow(0 0 10px rgba(49,211,92,.6)), drop-shadow(0 0 10px rgba(43,183,218,.6)); */\n\n    &:hover {\n        opacity: 0.5;\n    }\n\n    &:active {\n        opacity: 0.9;\n    }\n"])),b.white),m=function(n){var e=n.title,t=n.style;return Object(x.jsx)(u,{style:t,children:e})},f=t(14),O=t(15);function y(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}var w,v,k,B,z,C,L,G,R,E,S,T,W,_,A,H,N,I,M,V,q,P,D,F,J,X,Y,K,Q,U,Z,$,nn,en,tn,an,rn,cn,on,ln=["Home","About","Contact","Blog","Careers"],sn=j.a.nav(a||(a=Object(h.a)(["\n    width: 100%;\n"]))),dn=j.a.div(r||(r=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    z-index: 999;\n    /* overflow: hidden; */\n    background-color: ",";\n    padding-top: 20px;\n\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        padding: 20px;\n        & > button {\n            display: none;\n        }\n    }\n"])),b.white),hn=j.a.ul(c||(c=Object(h.a)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n\n    color: hsl(233, 8%, 62%);\n    font-size: 0.9rem;\n    /* height: 100%; */\n    /* font-size: 18px; */\n\n    & > li {\n        list-style: none;\n        cursor: pointer;\n        line-height: 50px;\n        height: 50px;\n    }\n    & > li:hover {\n        border-bottom: 2.5px solid ",";\n        color: black;\n    }\n\n    & > li > a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    @media only screen and (max-width: 768px) {\n        /* display: none; */\n        flex-direction: column;\n        position: absolute;\n        width: 50%;\n        min-width: 289px;\n        background-color: ",";\n        top: 85px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        gap: 10px;\n        color: ",";\n    }\n"])),p.limeGreen,b.white,p.darkBlue),gn=function(){var n=Object(o.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],a=Object(o.useState)(!0),r=Object(g.a)(a,2),c=r[0],l=r[1],s=function(){var n=Object(o.useState)(y()),e=Object(g.a)(n,2),t=e[0],i=e[1];return Object(o.useEffect)((function(){function n(){i(y())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}(),d=s.width;return Object(o.useEffect)((function(){l(d>=768)}),[d]),Object(x.jsx)(sn,{children:Object(x.jsxs)(dn,{className:"container",children:[Object(x.jsx)("figure",{onClick:function(n){return console.log(c)},children:Object(x.jsx)("img",{src:"./assets/images/logo.svg",alt:""})}),c?Object(x.jsx)(hn,{style:{display:"flex"},children:ln.map((function(n,e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:n})},e)}))}):Object(x.jsx)(hn,{style:{display:t?"flex":"none"},children:ln.map((function(n,e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:n})},e)}))}),Object(x.jsx)(m,{title:"Request Invite",style:{marginBottom:"1em"}}),!1===c&&Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)(O.a,{onClick:function(n){return i(!1)},style:{cursor:"pointer"},color:p.darkBlue,size:"25px"}):Object(x.jsx)(f.a,{onClick:function(n){return i(!0)},style:{cursor:"pointer"},color:p.darkBlue,size:"25px"})})]})})},jn="Next generation digital banking",pn="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. ",bn="Request Invite",xn="Why choose Easybank?",un="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",mn=[{title:"Online Banking",paragraph:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",img:"icon-online.svg"},{title:"Simple Budgeting",paragraph:"See exactly where your money goes each month. Receive notifications when you\u2019re close to hitting your limits.",img:"icon-budgeting.svg"},{title:"Fast Onboarding",paragraph:"We don\u2019t do branches. Open your account in minutes online and start taking control of your finances right away.",img:"icon-onboarding.svg"},{title:"Open API",paragraph:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",img:"icon-api.svg"}],fn={title:"Lastest Articles",cardText:[{img:"image-currency.jpg",author:"By Claire Robinson",title:"Receive money in any currency with no fees",paragraph:"The world is getting smaller and we\u2019re becoming more mobile. So why should you be forced to only receive money in a single \u2026"},{img:"image-restaurant.jpg",author:"By Wilson Hutton",title:"Treat yourself without worrying about money",paragraph:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you \u2026"},{img:"image-plane.jpg",author:"By Wilson Hutton",title:"Take your Easybank card wherever you go",paragraph:"We want you to enjoy your travels. This is why we don\u2019t charge any fees on purchases while you\u2019re abroad. We\u2019ll even show you \u2026"},{img:"image-confetti.jpg",author:"By Claire Robinson",title:"Our invite-only Beta accounts are now live!",paragraph:"After a lot of hard work by the whole team, we\u2019re excited to launch our closed beta. It\u2019s easy to request an invite through the site ..."}]},On=[{img:"icon-facebook.svg",alt:"facebook"},{img:"icon-youtube.svg",alt:"youtube"},{img:"icon-twitter.svg",alt:"twitter"},{img:"icon-pinterest.svg",alt:"pinterest"},{img:"icon-instagram.svg",alt:"instagram"}],yn=j.a.header(w||(w=Object(h.a)(["\n    background-color: ",";\n    @media only screen and (max-width: 768px) {\n        height: 93vh;\n    }\n"])),b.veryLightGray),wn=j.a.div(v||(v=Object(h.a)(["\n    /* background-color: inherit; */\n    display: flex;\n    justify-content: space-between;\n    width: 95%;\n    /* height: 1200px; */\n    padding: 20px 0;\n    height: auto;\n    min-height: 578px;\n    margin-right: 0;\n    padding-bottom: 0;\n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        height: 100%;\n        justify-content: flex-start;\n    }\n"]))),vn=j.a.div(k||(k=Object(h.a)(["\n    width: 30%;\n    place-self: center;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 30px;\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        padding: 20px 20px;\n        height: 50%;\n    }\n"]))),kn=j.a.h1(B||(B=Object(h.a)(["\n    font-weight: 400;\n    color: ",";\n    font-size: 2.3rem;\n"])),p.darkBlue),Bn=j.a.p(z||(z=Object(h.a)(["\n    color: ",";\n    line-height: 1.5em;\n    letter-spacing: 0.1px;\n    text-align: inherit;\n"])),b.grayishBlue),zn=j.a.div(C||(C=Object(h.a)(['\n    position: relative;\n    background-image: url("./assets/images/bg-intro-desktop.svg");\n    background-size: cover;\n    background-position-x: 50px;\n    background-position-y: 60%;\n    background-repeat: no-repeat;\n    width: 60%;\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        order: -1;\n        background-image: url("./assets/images/bg-intro-mobile.svg");\n        background-position: center;\n        height: 50%;\n    }\n']))),Cn=j.a.img(L||(L=Object(h.a)(["\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    max-width: 630px;\n    z-index: 9;\n    @media only screen and (max-width: 768px) {\n        position: relative;\n        max-width: 460px;\n        display: block;\n        margin: auto;\n        object-fit: cover;\n        top: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n    }\n"]))),Ln=function(){return Object(x.jsx)(yn,{children:Object(x.jsxs)(wn,{className:"container",children:[Object(x.jsxs)(vn,{children:[Object(x.jsx)(kn,{children:jn}),Object(x.jsx)(Bn,{children:pn}),Object(x.jsx)(m,{title:bn})]}),Object(x.jsx)(zn,{children:Object(x.jsx)(Cn,{className:"img-fluid",src:"./assets/images/image-mockups.png"})})]})})},Gn=j.a.main(G||(G=Object(h.a)(["\n    background-color: ",";\n    padding: 50px 0;\n    padding-top: 80px;\n"])),b.lightGrayishBlue),Rn=j.a.div(R||(R=Object(h.a)(["\n    @media only screen and (max-width: 768px) {\n        text-align: center;\n    }\n"]))),En=j.a.div(E||(E=Object(h.a)(["\n    max-width: 590px;\n\n    @media only screen and (max-width: 768px) {\n        margin: 0 auto;\n    }\n"]))),Sn=j.a.h2(S||(S=Object(h.a)(["\n    color: ",";\n    font-weight: 400;\n    font-size: 2rem;\n    margin: 20px 0;\n    @media only screen and (max-width: 768px) {\n        width: 70%;\n        margin: 20px auto;\n    }\n"])),p.darkBlue),Tn=j.a.p(T||(T=Object(h.a)(["\n    color: ",";\n    line-height: 1.5rem;\n"])),b.grayishBlue),Wn=j.a.div(W||(W=Object(h.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1.5em;\n"]))),_n=j.a.div(_||(_=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2em;\n    height: 350px;\n    @media only screen and (max-width: 768px) {\n        align-items: center;\n    }\n"]))),An=j.a.img(A||(A=Object(h.a)(["\n    width: 80px;\n"]))),Hn=j.a.h3(H||(H=Object(h.a)(["\n    font-weight: 400;\n"]))),Nn=j.a.p(N||(N=Object(h.a)(["\n    color: ",";\n"])),b.grayishBlue),In=function(){return Object(x.jsx)(Gn,{children:Object(x.jsxs)(Rn,{className:"container",children:[Object(x.jsxs)(En,{children:[Object(x.jsx)(Sn,{children:xn}),Object(x.jsx)(Tn,{children:un})]}),Object(x.jsx)(Wn,{children:mn.map((function(n,e){return Object(x.jsxs)(_n,{children:[Object(x.jsx)(An,{src:"./assets/images/".concat(n.img)}),Object(x.jsx)(Hn,{children:n.title}),Object(x.jsx)(Nn,{children:n.paragraph})]},e)}))})]})})},Mn=j.a.div(I||(I=Object(h.a)(["\n    background-color: ",";\n    padding: 80px 0;\n"])),b.veryLightGray),Vn=j.a.div(M||(M=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n"]))),qn=j.a.h2(V||(V=Object(h.a)(["\n    font-size: 2rem;\n    font-weight: 400;\n    margin-bottom: 16px;\n"]))),Pn=j.a.div(q||(q=Object(h.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 30px;\n"]))),Dn=j.a.div(P||(P=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    border-radius: 8px;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover > div > h2 {\n        /* color: "," */\n        color: #7db2a0;\n    }\n"])),b.white,p.limeGreen),Fn=j.a.figure(D||(D=Object(h.a)(["\n    width: 100%;\n    height: 200px;\n"]))),Jn=j.a.img(F||(F=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]))),Xn=j.a.div(J||(J=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 2em 1.5em;\n    padding-right: 2em;\n"]))),Yn=j.a.p(X||(X=Object(h.a)(["\n    color: ",";\n"])),b.grayishBlue),Kn=j.a.h2(Y||(Y=Object(h.a)(["\n    font-weight: 400;\n"]))),Qn=j.a.p(K||(K=Object(h.a)(["\n    color: ",";\n"])),b.grayishBlue),Un=function(){return Object(x.jsx)(Mn,{children:Object(x.jsxs)(Vn,{className:"container",children:[Object(x.jsx)(qn,{children:fn.title}),Object(x.jsx)(Pn,{children:fn.cardText.map((function(n,e){return Object(x.jsxs)(Dn,{children:[Object(x.jsx)(Fn,{children:Object(x.jsx)(Jn,{src:"./assets/images/".concat(n.img)})}),Object(x.jsxs)(Xn,{children:[Object(x.jsx)(Yn,{children:n.author}),Object(x.jsx)(Kn,{children:n.title}),Object(x.jsx)(Qn,{children:n.paragraph})]})]},e)}))})]})})},Zn=function(){return Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"139",height:"20",children:[Object(x.jsx)("defs",{children:Object(x.jsxs)("linearGradient",{id:"a",x1:"72.195%",x2:"17.503%",y1:"0%",y2:"100%",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"#33D35E"}),Object(x.jsx)("stop",{offset:"100%",stopColor:"#2AB6D9"})]})}),Object(x.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(x.jsx)("path",{fill:"#ffffff",fillRule:"nonzero",d:"M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"}),Object(x.jsxs)("g",{fill:"url(#a)",children:[Object(x.jsx)("path",{d:"M10.802 0L0 19.704h5.986L16.789 0z"}),Object(x.jsx)("path",{opacity:".5",d:"M18.171 0L7.368 19.704h5.986L24.157 0z"}),Object(x.jsx)("path",{opacity:".15",d:"M25.539 0L14.737 19.704h5.986L31.525 0z"})]})]})]})},$n=j.a.footer(Q||(Q=Object(h.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 30px 0;\n    padding-bottom: 15px; ;\n"])),p.darkBlue,b.white),ne=j.a.div(U||(U=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),ee=j.a.div(Z||(Z=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 55%;\n\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        flex-direction: column;\n        align-items: center;\n    }\n"]))),te=j.a.div($||($=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 45px;\n"]))),ie=j.a.div(nn||(nn=Object(h.a)([""]))),ae=j.a.div(en||(en=Object(h.a)([""]))),re=j.a.img(tn||(tn=Object(h.a)(["\n    cursor: pointer;\n    margin: 5px 6px;\n"]))),ce=j.a.div(an||(an=Object(h.a)(["\n    & > ul {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 92%;\n        padding-top: 5px;\n        @media only screen and (max-width: 768px) {\n            align-items: center;\n        }\n    }\n\n    & > ul > li {\n        list-style: none;\n        color: ",";\n        @media only screen and (max-width: 768px) {\n            align-items: center;\n            margin: 10px;\n        }\n    }\n\n    & > ul > li:hover {\n        color: ",";\n    }\n\n    & > ul > li > a {\n        color: inherit;\n        text-decoration: none;\n        font-weight: 300;\n        font-size: 14px;\n        opacity: 0.9;\n    }\n"])),b.lightGrayishBlue,p.limeGreen),oe=j.a.div(rn||(rn=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-between;\n    color: ",";\n    font-weight: 300;\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        align-items: center;\n        margin: 20px 0;\n        gap: 30px;\n    }\n"])),b.grayishBlue),le=j.a.p(cn||(cn=Object(h.a)([""]))),se=function(){return Object(x.jsx)($n,{children:Object(x.jsxs)(ne,{className:" container ",children:[Object(x.jsxs)(ee,{children:[Object(x.jsxs)(te,{children:[Object(x.jsx)(ie,{children:Object(x.jsx)(Zn,{})}),Object(x.jsx)(ae,{children:On.map((function(n,e){return Object(x.jsx)(re,{src:"./assets/images/".concat(n.img),alt:n.alt},e)}))})]}),Object(x.jsx)(ce,{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"About us"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Contact"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Blog"})})]})}),Object(x.jsx)(ce,{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Careers"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Support"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"Privacy Policy"})})]})})]}),Object(x.jsxs)(oe,{children:[Object(x.jsx)(m,{title:"Request Invite"}),Object(x.jsx)(le,{children:"\xa9 Easybank. All Rights Reserved"})]})]})})},de=j.a.div(on||(on=Object(h.a)(["\n    /* max-width: 1200px; */\n    /* border: 1px solid black; */\n    /* margin: 0 auto; */\n    overflow: hidden;\n"]))),he=function(){return Object(x.jsxs)(de,{children:[Object(x.jsx)(gn,{}),Object(x.jsx)(Ln,{}),Object(x.jsx)(In,{}),Object(x.jsx)(Un,{}),Object(x.jsx)(se,{})]})},ge=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(he,{})})};d.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(ge,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2cf19f53.chunk.js.map