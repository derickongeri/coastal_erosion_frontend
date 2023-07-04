(()=>{"use strict";var e={6594:(e,a,r)=>{var t=r(1957),o=r(1947),i=r(499),n=r(9835);function s(e,a,r,t,o,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}var l=r(9302);const d=(0,n.aZ)({name:"App",setup(){const e=(0,l.Z)();e.lang.getLocale(),(0,n.bv)((()=>{console.log(e.lang.getLocale())}))}});var u=r(1639);const c=(0,u.Z)(d,[["render",s]]),m=c;var p=r(3340),h=r(2502);const g=(0,p.h)((()=>{const e=(0,h.WB)();return e}));r(6727);var b=r(8339);const f=[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(77)]).then(r.bind(r,2077)),children:[{path:"",name:"homeDefault",component:()=>Promise.all([r.e(736),r.e(135)]).then(r.bind(r,5135))},{path:"home",name:"home",component:()=>Promise.all([r.e(736),r.e(135)]).then(r.bind(r,5135))},{path:"login",name:"login",component:()=>Promise.all([r.e(736),r.e(64),r.e(13)]).then(r.bind(r,6013))},{path:"register",name:"register",component:()=>Promise.all([r.e(736),r.e(64),r.e(658)]).then(r.bind(r,4658))},{path:"email-confirmation",name:"email-confirmation",component:()=>Promise.all([r.e(736),r.e(667)]).then(r.bind(r,2667))},{path:"confirm-signup",name:"confirm-signup",component:()=>Promise.all([r.e(736),r.e(683)]).then(r.bind(r,8683))},{path:"reset-password",name:"reset-password",component:()=>Promise.all([r.e(736),r.e(64),r.e(975)]).then(r.bind(r,4975))},{path:"reset-password-confirmation",name:"reset-password-confirmation",component:()=>Promise.all([r.e(736),r.e(734)]).then(r.bind(r,734))},{path:"update-password",name:"update-password",component:()=>Promise.all([r.e(736),r.e(64),r.e(499)]).then(r.bind(r,3499))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(677)]).then(r.bind(r,8677)),children:[{path:"me",name:"me",component:()=>Promise.all([r.e(736),r.e(553)]).then(r.bind(r,7553))},{path:"dashboard",name:"dashboard",component:()=>Promise.all([r.e(736),r.e(64),r.e(846)]).then(r.bind(r,7975))},{path:"home",name:"home",component:()=>Promise.all([r.e(736),r.e(135)]).then(r.bind(r,5135))},{path:"login",component:()=>Promise.all([r.e(736),r.e(64),r.e(13)]).then(r.bind(r,6013))}],meta:{requiresAuth:!0}},{path:"/apps",component:()=>Promise.all([r.e(736),r.e(64),r.e(424)]).then(r.bind(r,4424)),children:[{path:"dashboard",name:"dashboard",component:()=>Promise.all([r.e(736),r.e(64),r.e(846)]).then(r.bind(r,7975))}],meta:{requiresAuth:!0}},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],w=f;var y=r(6363);const v=(0,p.BC)((function(){const e=b.r5,a=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("")});return a.beforeEach((e=>{const{isLoggedIn:a}=(0,y.Z)();return"home"===e.name&&!a()||(a()||!e.meta.requiresAuth||Object.keys(e.query).includes("fromEmail")||"dashboard"!==e.name?void 0:{name:"login"})})),a}));async function k(e,a){const r=e(m);r.use(o.Z,a);const t="function"===typeof g?await g({}):g;r.use(t);const n=(0,i.Xl)("function"===typeof v?await v({store:t}):v);return t.use((({store:e})=>{e.router=n})),{app:r,store:t,router:n}}var S=r(6229),A=r(6950),P=r(6827),C=r(1530);const _={config:{notify:{position:"center"}},plugins:{Meta:S.ZP,Loading:A.Z,Notify:P.Z,Dialog:C.Z}},N="";async function M({app:e,router:a,store:r},t){let o=!1;const i=e=>{try{return a.resolve(e).href}catch(r){}return Object(e)===e?null:e},n=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const a=i(e);null!==a&&(window.location.href=a,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===o&&d<t.length;d++)try{await t[d]({app:e,router:a,store:r,ssrContext:null,redirect:n,urlPath:s,publicPath:N})}catch(l){return l&&l.url?void n(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(a),e.mount("#q-app"))}k(t.ri,_).then((e=>{const[a,t]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[a]([Promise.resolve().then(r.bind(r,1433)),Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,3016)),Promise.resolve().then(r.bind(r,3463)),Promise.resolve().then(r.bind(r,1709))]).then((a=>{const r=t(a).filter((e=>"function"===typeof e));M(e,r)}))}))},3016:(e,a,r)=>{r.r(a),r.d(a,{default:()=>n});var t=r(3340),o=r(4787),i=r.n(o);const n=(0,t.xr)((({app:e})=>{e.use(i())}))},1569:(e,a,r)=>{r.r(a),r.d(a,{api:()=>s,axios:()=>i.a,baseURL:()=>n,default:()=>l});var t=r(3340),o=r(9981),i=r.n(o);let n;n="http://78.141.234.158:3000/";const s=i().create({baseURL:n}),l=(0,t.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=s}))},1433:(e,a,r)=>{r.r(a),r.d(a,{default:()=>u});var t=r(3340),o=r(9991);const i={failed:"Action failed",success:"Action was successful",home:"Home",dashboard:"Dashboard",welcome:"Welcome to GreenPulse Dashboard!",welcomeMsg:"Would you like to take a quick, step by step guided tour of how to navigate through the dashboard?",start_tour:"Start tour",skip_tour:"Skip tour",profile:"Profile",logout:"Logout",select_language:"Select Language",settings:"Settings",my_profile:"My Profile",burnt_area_info:"The burned area is calculated from pre and post-fire images to creates burn severity assessment maps. The classification of burn severity follows USGS proposed classification system for burn severity ranges.",benthic_area_summary:"The coastal geomorphological area mapped was <b>{totalBurnedArea}Ha</b>, which corresponds to the sum of all geomorphological classes i.e. Dense coral <b>{veryHighSeverity}Ha</b>, Reef/Back reef <b>{highSeverity}Ha</b>, Sea bed <b>{moderateSeverity}Ha</b> and Sand <b>{lowSeverity}Ha</b>.",firstName:"First Name",lastName:"Last Name",emailAddress:"Email Address",password:"Password",newPassword:"New Password",confirmPassword:"Confirm Password",alreadyHaveAnAccount:"Already have an account?",dontHaveAnAccount:"Don't have an account?",signup:"Signup",login:"Login",registerNewAccount:"Register New Account",resetPassword:"Forgot your password?",passwordReset:"Reset Password",backtologin:"Cancel password reset?",updatePassword:"Reset Password",tagline:"Understanding coastal geomorphology and shoreline changes through Earth Observation",forest:"CoastWatch WebGIS",layers:"Layers",analysis:"Analysis",map:"Map",baseMap:"select base map",maplabels:"Map Labels",maplabelsToggle:"Show Map Labels",feedback:"Feedback",Help:"help",share:"Share",helpmessage:"What would you like to do?",documentation:"Visit Documentation",tour:"Take a tour",drawingTools:"drawing tools",opacity:"Opacity",burnedArea:"Burned Area",fireDates:"fire occurred between <b>{start}Ha</b> and <b>{end}Ha</b>",statistics:"Statistics",layerSettings:"Layer Settings",burnedAreaStats:"Burned Area Statistics",switchtopie:"Switch to pie chart",switchtobar:"Switch to bar chart",downloadImage:"Download Chart Image",downloadCsv:"Download CSV data",burnedAreaAnalysis:"Burned Area Analysis",prefireSelect:"Select Period Before the Fire",postfire:"Select period After the Fire",from:"from",to:"to",submit:"Submit",computing:"Computing Burned Area Statistics",loadingMsg:"This may take a while",wait:"Please wait",note:"Note",burnedAreaNotes:"Burn severity map generated automatically using Normalized Burn Ratio (NBR),using near-infrared (NIR) and shortwave-infrared (SWIR) wavelengths. The post-fire image is subtracted from the pre-fire image to create the delta NBR (dNBR), which can be used to assess burn severity",dataSource:"Data-Source",pre_fire_date:"Pre-fire Date",post_fire_date:"Post-fire Date",severity:"Burned Area Severity",disclaimer:"Disclaimer",the_disclaimer:"The developer of the application from which this map document was generated is not liable for the correctness of outputs or decisions derived as a consequence.",createdby:"created by","Dense Coral":"Dense Coral","Reef/Back reef":"Reef/Back reef","Seabed sediments":"Seabed sediments","Sparse coaral on sand":"Sparse coaral on sand","Deep water":"Deep water","Seagrass bed":"Seagrass bed"},n={failed:"Action failed",success:"Action was successful",home:"Accueil",dashboard:"tableau de bord",welcome:"Bienvenue sur le tableau de bord GreenPulse!",welcomeMsg:"Souhaitez-vous bénéficier d'une visite guidée rapide, étape par étape, de la navigation dans le tableau de bord ?",start_tour:"Démarrer le projet",skip_tour:"Sauter la visite",profile:"Profil",logout:"Déconnexion",select_language:"Choisir la langue",settings:"Paramètres",my_profile:"Mon profil",burnt_area_info:"La zone brûlée est calculée à partir d'images prises avant et après l'incendie afin de créer des cartes d'évaluation de la gravité des brûlures. La classification de la gravité des brûlures suit le système de classification proposé par l'USGS pour les plages de gravité des brûlures.",burnt_area_summary:"La superficie géomorphologique côtière cartographiée était de <b>{totalBurnedArea} ha</b>, ce qui correspond à la somme de toutes les classes géomorphologiques, c'est-à-dire le corail dense de <b>{veryHighSeverity} ha</b>, le récif/le contrefort de récif de <b>{highSeverity} ha</b>, le fond marin de <b>{moderateSeverity} ha</b> et le sable de <b>{lowSeverity} ha</b>.",firstName:"Prénom",lastName:"Nom de famille",emailAddress:"Adresse e-mail",password:"Mot de passe",alreadyHaveAnAccount:"Vous avez déjà un compte?",dontHaveAnAccount:"Vous n'avez pas de compte?",signup:"S'inscrire",login:"Connexion",registerNewAccount:"Créer un nouveau compte",tagline:"Débloquer des informations pour la durabilité grâce à l'observation de la Terre",forest:"Surveillance côtière",agro:"Earth Pulse Agriculture",water:"Earth Pulse Eau",layers:"Couches",analysis:"Analyse",map:"Carte",baseMap:"Sélectionnez la carte de base",maplabels:"Étiquettes de carte",maplabelsToggle:"Afficher les étiquettes de carte",feedback:"Retour d'information",Help:"aide",share:"Partager",helpmessage:"Que voulez-vous faire ?",documentation:"Visitez la documentation",tour:"Faire une visite",drawingTools:"Outils de dessin",opacity:"Opacité",burnedArea:"Zone brûlée",fireDates:"Feu survenu entre <b>{start}Ha</b> et <b>{end}Ha</b>",statistics:"Statistiques",layerSettings:"Paramètres de couche",burnedAreaStats:"Statistiques de la zone brûlée",switchtopie:"Passer au graphique circulaire",switchtobar:"Passer au graphique à barres",downloadImage:"Télécharger l'image du graphique",downloadCsv:"Télécharger les données CSV",burnedAreaAnalysis:"Analyse de la zone brûlée",prefireSelect:"Sélectionnez la période avant l'incendie",postfire:"Sélectionnez la période après l'incendie",from:"de",to:"à",submit:"Envoyer",computing:"Calcul des statistiques de la zone brûlée",loadingMsg:"Cela peut prendre un certain temps",wait:"Veuillez patienter",note:"Remarque",burnedAreaNotes:"Carte de gravité de brûlure générée automatiquement à l'aide du rapport de brûlure normalisé (NBR), utilisant des longueurs d'onde proches infrarouges (NIR) et infrarouges à ondes courtes (SWIR). L'image post-incendie est soustraite de l'image pré-incendie pour créer le delta NBR (dNBR), qui peut être utilisé pour évaluer la gravité de la brûlure",dataSource:"Source de données",pre_fire_date:"Date avant l'incendie",post_fire_date:"Date après l'incendie",severity:"Gravité de la zone brûlée",disclaimer:"Avertissement",the_disclaimer:"Le développeur de l'application à partir de laquelle ce document de carte a été généré n'est pas responsable de la véracité des sorties ou des décisions dérivées en conséquence.",createdby:"créé par","Dense Coral":"Corail dense","Reef/Back reef":"Récif/arrière-récif","Seabed sediments":"Sédiments du fond marin","Sparse coaral on sand":"Corail clairsemé sur du sable","Deep water":"Eau profonde","Seagrass bed":"Herbier marin"},s={failed:"Tendo lilishindwa",success:"Tendo lilifanikiwa",home:"Nyumbani",dashboard:"Dashibodi",welcome:"Karibu kwenye Dashibodi ya GreenPulse!",welcomeMsg:"Ungependa kufanya ziara fupi, hatua kwa hatua, jinsi ya kutumia dashibodi?",start_tour:"Anza ziara",skip_tour:"Ruka ziara",profile:"Profaili",logout:"Kutoka",select_language:"Chagua Lugha",settings:"Mipangilio",my_profile:"Profaili Yangu",burnt_area_info:"Eneo lililochomwa limehesabiwa kutokana na picha kabla na baada ya moto ili kujenga ramani ya tathmini ya ukubwa wa moto. Uainishaji wa ukubwa wa moto unafuata mfumo wa uainishaji uliopendekezwa na USGS kwa safu za ukubwa wa moto.",burnt_area_summary:"Jumla ya eneo lililochomwa ni <b>{totalBurnedArea}Ha</b>, ambalo linafanana na jumla ya vikundi vyote vya kiwango cha moto, yaani kiwango cha moto cha juu sana <b>{veryHighSeverity}Ha</b>, kiwango cha moto cha juu <b>{highSeverity}Ha</b>, kiwango cha moto cha wastani <b>{moderateSeverity}Ha</b> na kiwango cha moto cha chini <b>{lowSeverity}Ha</b>.",firstName:"Jina la Kwanza",lastName:"Jina la Mwisho",emailAddress:"Anwani ya Barua pepe",password:"Nenosiri",alreadyHaveAnAccount:"Tayari una akaunti?",dontHaveAnAccount:"Huna akaunti?",signup:"Jisajili",login:"Ingia",registerNewAccount:"Jisajili akaunti mpya",tagline:"Maarifa kuhusu uendelevu wa dunia kupitia taswira ya ardhi kutoka angani",forest:"Earth Pulse Misitu",agro:"Earth Pulse Kilimo",water:"Earth Pulse Maji",layers:"Tabaka",analysis:"Uchambuzi",map:"Ramani",baseMap:"chagua ramani msingi",maplabels:"Lebo za Ramani",maplabelsToggle:"Onyesha Lebo za Ramani",feedback:"Maoni yako",Help:"Usaidizi",share:"Sambaza",helpmessage:"Ungependa kufanya nini?",documentation:"Tembelea Nyaraka",tour:"Fanya Ziara",drawingTools:"Zana za Kuchora",opacity:"Usowazi",burnedArea:"Majivu ya Misitu",fireDates:"moto umetokea kati ya <b>{start}Ha</b> na <b>{end}Ha</b>",statistics:"Takwimu",layerSettings:"Mipangilio ya Tabaka",burnedAreaStats:"Takwimu za Majivu ya Misitu",switchtopie:"Badilisha kwenye chati ya duara",switchtobar:"Badilisha kwenye chati ya mstari",downloadImage:"Pakua Picha ya Grafu",downloadCsv:"Pakua Data ya CSV",burnedAreaAnalysis:"Uchambuzi wa Majivu ya Misitu",prefireSelect:"Chagua Kipindi Kabla ya Moto",postfire:"Chagua Kipindi Baada ya Moto",from:"kutoka",to:"hadi",submit:"Wasilisha",computing:"Kuhesabu Takwimu za Majivu ya Misitu",loadingMsg:"Hii inaweza kuchukua muda kidogo",wait:"Tafadhali subiri",note:"Maelezo",burnedAreaNotes:"Ramani ya joto la eneo lililoteketezwa imezalishwa moja kwa moja kwa kutumia Uwiano wa Kuteketezwa Kwa Kawaida (NBR), kwa kutumia urefu wa mawimbi ya karibu na-karibu wa infrared (NIR) na shortwave-infrared (SWIR). Picha baada ya moto inaondolewa kutoka kwa picha kabla ya moto ili kuunda delta NBR (dNBR), ambayo inaweza kutumika kuamua kiwango cha uharibifu wa eneo lililoteketezwa.",dataSource:"Chanzo cha data",pre_fire_date:"Tarehe Kabla ya Moto",post_fire_date:"Tarehe Baada ya Moto",severity:"Kiwango cha Uharibifu wa Eneo lililoteketezwa",disclaimer:"Taarifa ya kukanusha dhima",the_disclaimer:"Mwendelezaji wa programu kutoka ambayo hati hii ya ramani ilizalishwa hana jukumu kwa usahihi wa matokeo au maamuzi yaliyotolewa kwa matokeo hayo.",createdby:"imeundwa na"},l={failed:"La acción falló",success:"La acción fue exitosa",home:"Inicio",dashboard:"Panel de control",welcome:"¡Bienvenido al Panel de control de GreenPulse!",welcomeMsg:"¿Le gustaría realizar un recorrido guiado rápido y paso a paso de cómo navegar por el panel de control?",start_tour:"Iniciar recorrido",skip_tour:"Saltar recorrido",profile:"Perfil",logout:"Cerrar sesión",select_language:"Seleccionar idioma",settings:"Configuración",my_profile:"Mi perfil",burnt_area_info:"El área quemada se calcula a partir de imágenes previas y posteriores al fuego para crear mapas de evaluación de la gravedad del fuego. La clasificación de la gravedad del fuego sigue el sistema de clasificación propuesto por USGS para los rangos de gravedad del fuego.",burnt_area_summary:"El área total quemada fue de <b>{totalBurnedArea}Ha</b>, lo que corresponde a la suma de todas las categorías de gravedad del fuego, es decir, la gravedad del fuego muy alta <b>{veryHighSeverity}Ha</b>, la gravedad del fuego alta <b>{highSeverity}Ha</b>, la gravedad del fuego moderada <b>{moderateSeverity}Ha</b> y la gravedad del fuego baja <b>{lowSeverity}Ha</b>.",firstName:"Nombre",lastName:"Apellido",emailAddress:"Correo electrónico",password:"Contraseña",alreadyHaveAnAccount:"¿Ya tienes una cuenta?",dontHaveAnAccount:"¿No tienes una cuenta?",signup:"Registrarse",login:"Iniciar sesión",registerNewAccount:"Registrar nueva cuenta",tagline:"Desbloqueando conocimientos para la sostenibilidad a través de la observación de la Tierra",forest:"Earth Pulse Bosque",agro:"Earth Pulse Agricultura",water:"Earth Pulse Agua",layers:"Capas",analysis:"Análisis",map:"Mapa",baseMap:"seleccionar mapa base",maplabels:"Etiquetas de mapa",maplabelsToggle:"Mostrar etiquetas de mapa",feedback:"Comentarios",Help:"Ayuda",share:"Compartir",helpmessage:"¿Qué te gustaría hacer?",documentation:"Visitar documentación",tour:"Realizar un recorrido",drawingTools:"herramientas de dibujo",opacity:"Opacidad",burnedArea:"Área quemada",fireDates:"El fuego ocurrió entre <b>{start}Ha</b> y <b>{end}Ha</b>",statistics:"Estadísticas",layerSettings:"Configuración de capas",burnedAreaStats:"Estadísticas de área quemada",switchtopie:"Cambiar a gráfico circular",switchtobar:"Cambiar a gráfico de barras",downloadImage:"Descargar imagen del gráfico",downloadCsv:"Descargar datos en CSV",burnedAreaAnalysis:"Análisis de área quemada",prefireSelect:"Seleccionar período anterior al fuego",postfire:"Seleccionar período posterior al fuego",from:"desde",to:"hasta",submit:"Enviar",computing:"Calculando estadísticas de área quemada",loadingMsg:"Esto puede tardar un tiempo",wait:"Por favor espera",note:"Nota",burnedAreaNotes:"Mapa de gravedad de quemaduras generado automáticamente usando la Relación de Quemadura Normalizada (NBR), utilizando longitudes de onda de infrarrojo cercano (NIR) e infrarrojo de onda corta (SWIR). La imagen posterior al incendio se resta de la imagen anterior al incendio para crear el delta NBR (dNBR), que se puede utilizar para evaluar la gravedad de la quemadura.",dataSource:"Fuente de datos",pre_fire_date:"Fecha previa al incendio",post_fire_date:"Fecha posterior al incendio",severity:"Gravedad del área quemada",disclaimer:"Descargo de responsabilidad",the_disclaimer:"El desarrollador de la aplicación a partir de la cual se generó este documento de mapa no es responsable de la corrección de las salidas o decisiones derivadas como consecuencia.",createdby:"creado por"},d={"en-US":i,fr:n,"es-ES":l,sw:s},u=(0,t.xr)((({app:e})=>{const a=(0,o.o)({locale:"en-US",messages:d});e.use(a)}))},1709:(e,a,r)=>{r.r(a),r.d(a,{default:()=>l});var t=r(8985),o=r(6363);const i="http://45.76.143.229:8000",n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjg1NDgwNDAwLAogICAgImV4cCI6IDE4NDMzMzMyMDAKfQ.19wCGwbuo-rBeze_EIKnY3PmdMOzncVcweqM9a1-xAo",s=(0,t.eI)(i,n);function l(){return{supabase:s}}s.auth.onAuthStateChange(((e,a)=>{const{user:r}=(0,o.Z)();r.value=a?.user}))},3463:(e,a,r)=>{r.r(a),r.d(a,{default:()=>n});var t=r(3340),o=r(6001),i=r.n(o);const n=(0,t.xr)((async({app:e})=>{e.use(i())}))},6363:(e,a,r)=>{r.d(a,{Z:()=>n});var t=r(499),o=r(1709);const i=(0,t.iH)(null);function n(){const{supabase:e}=(0,o["default"])(),a=async({email:a,password:r})=>{const{user:t,error:o}=await e.auth.signInWithPassword({email:a,password:r});if(o)throw o;return t},r=async a=>{const{user:r,error:t}=await e.auth.signIn({provider:a});if(t)throw t;return r},t=async()=>{const{error:a}=await e.auth.signOut();if(a)throw a},n=()=>!!i.value,s=async({email:a,password:r,...t})=>{console.log(t);const{user:o,error:i}=await e.auth.signUp({email:a,password:r,options:{data:t,emailRedirectTo:"http://45.76.143.229/dashboard/#/confirm-signup"}});if(i)throw i;return o},l=async a=>{const{user:r,error:t}=await e.auth.update(a);if(t)throw t;return r},d=async a=>{const{user:r,error:t}=await e.auth.resetPasswordForEmail(a,{redirectTo:"http://45.76.143.229/dashboard/#/update-password"});if(t)throw t;return r},u=async a=>{const{user:r,error:t}=await e.auth.updateUser({password:a});if(t)throw t;return r};return{user:i,login:a,loginWithSocialProvider:r,logout:t,isLoggedIn:n,register:s,update:l,sendPasswordRestEmail:d,updateUserPassword:u}}}},a={};function r(t){var o=a[t];if(void 0!==o)return o.exports;var i=a[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(a,t,o,i)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){for(var[t,o,i]=e[u],s=!0,l=0;l<t.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var d=o();void 0!==d&&(a=d)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]}})(),(()=>{r.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(a,{a}),a}})(),(()=>{var e,a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"===typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"===typeof t.then)return t}var i=Object.create(null);r.r(i);var n={};e=e||[null,a({}),a([]),a(a)];for(var s=2&o&&t;"object"==typeof s&&!~e.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>t[e]));return n["default"]=()=>t,r.d(i,n),i}})(),(()=>{r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,t)=>(r.f[t](e,a),a)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{13:"ad0a48d5",64:"ec95c009",77:"cac0c6a1",135:"6ee9f4af",424:"a60b2067",499:"d1a04fee",553:"533d4f8d",658:"b8de3251",667:"d1d63888",677:"3fc9820b",683:"972fe7d8",734:"c9df65a0",846:"39ae733b",862:"4f844b68",975:"36e22992"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{13:"2787164d",77:"cafc0231",135:"b2168d26",424:"b30bc0b2",499:"adb3a336",658:"adb3a336",677:"cafc0231",846:"38b77fe7",975:"fee327f0"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="misland:";r.l=(t,o,i,n)=>{if(e[t])e[t].push(o);else{var s,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==a+i){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",a+i),s.src=t),e[t]=[o];var m=(a,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),a)return a(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,a,r,t,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=r=>{if(i.onerror=i.onload=null,"load"===r.type)t();else{var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=s,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=n,i.href=a,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},a=(e,a)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=r[t],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===a))return o}var n=document.getElementsByTagName("style");for(t=0;t<n.length;t++){o=n[t],i=o.getAttribute("data-href");if(i===e||i===a)return o}},t=t=>new Promise(((o,i)=>{var n=r.miniCssF(t),s=r.p+n;if(a(n,s))return o();e(t,s,null,o,i)})),o={143:0};r.f.miniCss=(e,a)=>{var r={13:1,77:1,135:1,424:1,499:1,658:1,677:1,846:1,975:1};o[e]?a.push(o[e]):0!==o[e]&&r[e]&&a.push(o[e]=t(e).then((()=>{o[e]=0}),(a=>{throw delete o[e],a})))}}})(),(()=>{var e={143:0};r.f.j=(a,t)=>{var o=r.o(e,a)?e[a]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((r,t)=>o=e[a]=[r,t]));t.push(o[2]=i);var n=r.p+r.u(a),s=new Error,l=t=>{if(r.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+a+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}};r.l(n,l,"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,t)=>{var o,i,[n,s,l]=t,d=0;if(n.some((a=>0!==e[a]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(a&&a(t);d<n.length;d++)i=n[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=globalThis["webpackChunkmisland"]=globalThis["webpackChunkmisland"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var t=r.O(void 0,[736],(()=>r(6594)));t=r.O(t)})();