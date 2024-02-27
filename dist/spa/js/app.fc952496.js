(()=>{"use strict";var e={6594:(e,a,t)=>{var o=t(1957),r=t(1947),i=t(499),n=t(9835);function s(e,a,t,o,r,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}var l=t(9302);const d=(0,n.aZ)({name:"App",setup(){const e=(0,l.Z)();e.lang.getLocale(),(0,n.bv)((()=>{console.log(e.lang.getLocale())}))}});var u=t(1639);const c=(0,u.Z)(d,[["render",s]]),p=c;var m=t(3340),h=t(2502);const g=(0,m.h)((()=>{const e=(0,h.WB)();return e}));t(6727);var b=t(8339);const f=[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(819)]).then(t.bind(t,819)),children:[{path:"",name:"homeDefault",component:()=>Promise.all([t.e(736),t.e(64),t.e(41)]).then(t.bind(t,3041))},{path:"home",name:"home",component:()=>Promise.all([t.e(736),t.e(64),t.e(41)]).then(t.bind(t,3041))},{path:"login",name:"login",component:()=>Promise.all([t.e(736),t.e(64),t.e(13)]).then(t.bind(t,6013))},{path:"register",name:"register",component:()=>Promise.all([t.e(736),t.e(64),t.e(757)]).then(t.bind(t,5757))},{path:"email-confirmation",name:"email-confirmation",component:()=>Promise.all([t.e(736),t.e(667)]).then(t.bind(t,2667))},{path:"confirm-signup",name:"confirm-signup",component:()=>Promise.all([t.e(736),t.e(729)]).then(t.bind(t,5729))},{path:"reset-password",name:"reset-password",component:()=>Promise.all([t.e(736),t.e(64),t.e(119)]).then(t.bind(t,119))},{path:"reset-password-confirmation",name:"reset-password-confirmation",component:()=>Promise.all([t.e(736),t.e(501)]).then(t.bind(t,5501))},{path:"update-password",name:"update-password",component:()=>Promise.all([t.e(736),t.e(64),t.e(218)]).then(t.bind(t,8218))},{path:"blog_posts",name:"blog_posts",component:()=>Promise.all([t.e(736),t.e(64),t.e(61)]).then(t.bind(t,4119))},{path:"/post/:id",name:"blogpost",component:()=>Promise.all([t.e(736),t.e(64)]).then(t.bind(t,7413)),props:!0}]},{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(681)]).then(t.bind(t,681)),children:[{path:"me",name:"me",component:()=>Promise.all([t.e(736),t.e(553)]).then(t.bind(t,7553))},{path:"dashboard",name:"dashboard",component:()=>Promise.all([t.e(736),t.e(64),t.e(668)]).then(t.bind(t,9548))},{path:"home",name:"home",component:()=>Promise.all([t.e(736),t.e(64),t.e(41)]).then(t.bind(t,3041))},{path:"login",component:()=>Promise.all([t.e(736),t.e(64),t.e(13)]).then(t.bind(t,6013))},{path:"blog_posts",name:"blog_posts",component:()=>Promise.all([t.e(736),t.e(64),t.e(61)]).then(t.bind(t,4119))},{path:"/post/:id",name:"blogpost",component:()=>Promise.all([t.e(736),t.e(64)]).then(t.bind(t,7413))}],meta:{requiresAuth:!0}},{path:"/apps",component:()=>Promise.all([t.e(736),t.e(64),t.e(341)]).then(t.bind(t,1341)),children:[{path:"dashboard",name:"dashboard",component:()=>Promise.all([t.e(736),t.e(64),t.e(668)]).then(t.bind(t,9548))}],meta:{requiresAuth:!0}},{path:"/blog",component:()=>Promise.all([t.e(736),t.e(64),t.e(207)]).then(t.bind(t,8207)),children:[{path:"blog_posts",name:"blog_posts",component:()=>Promise.all([t.e(736),t.e(64),t.e(61)]).then(t.bind(t,4119))},{path:"/post/:id",name:"post",component:()=>Promise.all([t.e(736),t.e(64)]).then(t.bind(t,7413))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],v=f;var w=t(6363);const y=(0,m.BC)((function(){const e=b.r5,a=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return a.beforeEach((e=>{const{isLoggedIn:a}=(0,w.Z)();return"home"===e.name&&!a()||(a()||!e.meta.requiresAuth||Object.keys(e.query).includes("fromEmail")||"dashboard"!==e.name?void 0:{name:"login"})})),a}));async function k(e,a){const t=e(p);t.use(r.Z,a);const o="function"===typeof g?await g({}):g;t.use(o);const n=(0,i.Xl)("function"===typeof y?await y({store:o}):y);return o.use((({store:e})=>{e.router=n})),{app:t,store:o,router:n}}var S=t(6229),A=t(6950),P=t(6827),C=t(1530);const M={config:{notify:{position:"center"}},plugins:{Meta:S.ZP,Loading:A.Z,Notify:P.Z,Dialog:C.Z}},T="";async function _({app:e,router:a,store:t},o){let r=!1;const i=e=>{try{return a.resolve(e).href}catch(t){}return Object(e)===e?null:e},n=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const a=i(e);null!==a&&(window.location.href=a,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===r&&d<o.length;d++)try{await o[d]({app:e,router:a,store:t,ssrContext:null,redirect:n,urlPath:s,publicPath:T})}catch(l){return l&&l.url?void n(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(a),e.mount("#q-app"))}k(o.ri,M).then((e=>{const[a,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[a]([Promise.resolve().then(t.bind(t,1433)),Promise.resolve().then(t.bind(t,1569)),Promise.resolve().then(t.bind(t,3016)),Promise.resolve().then(t.bind(t,3463)),Promise.resolve().then(t.bind(t,1709))]).then((a=>{const t=o(a).filter((e=>"function"===typeof e));_(e,t)}))}))},3016:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var o=t(3340),r=t(4787),i=t.n(r);const n=(0,o.xr)((({app:e})=>{e.use(i())}))},1569:(e,a,t)=>{t.r(a),t.d(a,{api:()=>s,axios:()=>i.a,baseURL:()=>n,default:()=>l});var o=t(3340),r=t(9981),i=t.n(r);let n;n="http://78.141.234.158:3000/";const s=i().create({baseURL:n}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=s}))},1433:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var o=t(3340),r=t(9991);const i={failed:"Action failed",success:"Action was successful",home:"Home",dashboard:"Dashboard",welcome:"Welcome to GreenPulse Dashboard!",welcomeMsg:"Would you like to take a quick, step by step guided tour of how to navigate through the dashboard?",start_tour:"Start tour",skip_tour:"Skip tour",profile:"Profile",logout:"Logout",select_language:"Select Language",settings:"Settings",my_profile:"My Profile",firstName:"First Name",lastName:"Last Name",emailAddress:"Email Address",password:"Password",newPassword:"New Password",confirmPassword:"Confirm Password",alreadyHaveAnAccount:"Already have an account?",dontHaveAnAccount:"Don't have an account?",signup:"Signup",login:"Login",registerNewAccount:"Register New Account",resetPassword:"Forgot your password?",passwordReset:"Reset Password",backtologin:"Cancel password reset?",updatePassword:"Reset Password",tagline:"Understanding coastal geomorphology and shoreline changes through Earth Observation",subtag:"Geospatail data platform for the anlaysis and visualization of coastal geomorphology and shoreline changes",webgis:"CoastWatch WebGIS",productsheader:"Discover Geomorphic and Shoreline Data Products",productstext:"Explore a wealth of invaluable geomorphic and shoreline data products, unlocking insights for informed decision-making and coastal management.",benthickheader:"Benthic Habitat",benthicktext:"Remote sensing of benthic habitat maps revolutionizes marine management, offering a concise view of underwater habitats for informed decisions on conservation and sustainability.",landuseheader:"Coastal Landuse",landusetext:"Employing remotely sensed coastal land use maps transforms coastal zone management. Utilizing advanced satellite or aerial imaging, these maps provide a comprehensive view, guiding decisions for effective planning and sustainable practices in coastal areas.",shorelineheader:"Shoreline Change",shorelinetext:"CoGEOS derives shorelines from various data sources. This information helps identify areas prone to erosion or coastal inundation, allowing decision-makers to prioritize resources and interventions in vulnerable regions.",aboutTitle:"About the Project",aboutText:"The Global Monitoring for Environment and Security (GMES) & Africa Programme is a joint initiative co-financed by the European Commission and the African Union Commission. The objective of the GMES & Africa Programme is to address the growing needs of African countries to access and use Earth Observation (EO) data for the implementation of sustainable development policies across the continent.",moreAboutText:"As part of the objectives of the GMES & Africa project, the Regional Centre for Mapping of Resource and Development (RCMRD), has developed environmental monitoring tools for Coastal Erosion mapping in Comoros, Mauritius, Madagascar, and Seychelles using EO data, innovative techniques, and end-user knowledge. This involved the development of an interactive dashboard that allows the user to interactively explore areas susceptible to coastal change, a QGIS plugin to model shoreline changes, and Mapographics to provide insights and inform policies.",dashboardHeader:"CoGeoS Dashboard for Interactive Maps & Statistics",dashboardText:"Geospatail data platform for the anlaysis and visualization of coastal geomorphology and shoreline changes",pluginHeader:"QGIS Plugin for Automatic Shoreline Extraction",pluginText:"The QGIS plugin allows users to automatically extract shorelines and compute shoreline changes",mapographicsHeader:"CoGeos Mapographics",mapographicsText:"Provides quick information and insights on coastal changes from compiled maps and statistics",collaborationText:"A Collaborative Partnership",keepintouch:"Stay in touch",keepintouchtext:"Get the latest news about RCMRD GMES & Africa activites",layers:"Layers",analysis:"Analysis",map:"Map",baseMap:"select base map",maplabels:"Map Labels",maplabelsToggle:"Show Map Labels",feedback:"Feedback",Help:"help",share:"Share",helpmessage:"What would you like to do?",documentation:"Visit Documentation",tour:"Take a tour",drawingTools:"drawing tools",opacity:"Opacity",burnedArea:"Burned Area",fireDates:"fire occurred between <b>{start}Ha</b> and <b>{end}Ha</b>",statistics:"Statistics",layerSettings:"Layer Settings",burnedAreaStats:"Burned Area Statistics",switchtopie:"Switch to pie chart",switchtobar:"Switch to bar chart",downloadImage:"Download Chart Image",downloadCsv:"Download CSV data","Dense Coral":"Dense Coral","Reef/Back reef":"Reef/Back reef","Seabed sediments":"Seabed sediments","Sparse coaral on sand":"Sparse coaral on sand","Deep water":"Deep water","Seagrass bed":"Seagrass bed"},n={failed:"Action failed",success:"Action was successful",home:"Accueil",dashboard:"tableau de bord",welcome:"Bienvenue sur le tableau de bord GreenPulse!",welcomeMsg:"Souhaitez-vous bénéficier d'une visite guidée rapide, étape par étape, de la navigation dans le tableau de bord ?",start_tour:"Démarrer le projet",skip_tour:"Sauter la visite",profile:"Profil",logout:"Déconnexion",select_language:"Choisir la langue",settings:"Paramètres",my_profile:"Mon profil",burnt_area_info:"La zone brûlée est calculée à partir d'images prises avant et après l'incendie afin de créer des cartes d'évaluation de la gravité des brûlures. La classification de la gravité des brûlures suit le système de classification proposé par l'USGS pour les plages de gravité des brûlures.",burnt_area_summary:"La superficie géomorphologique côtière cartographiée était de <b>{totalBurnedArea} ha</b>, ce qui correspond à la somme de toutes les classes géomorphologiques, c'est-à-dire le corail dense de <b>{veryHighSeverity} ha</b>, le récif/le contrefort de récif de <b>{highSeverity} ha</b>, le fond marin de <b>{moderateSeverity} ha</b> et le sable de <b>{lowSeverity} ha</b>.",firstName:"Prénom",lastName:"Nom de famille",emailAddress:"Adresse e-mail",password:"Mot de passe",alreadyHaveAnAccount:"Vous avez déjà un compte?",dontHaveAnAccount:"Vous n'avez pas de compte?",signup:"S'inscrire",login:"Connexion",registerNewAccount:"Créer un nouveau compte",tagline:"Surveillance de la géomorphologie côtière et de l'évolution du trait de côte",subtag:"Plate-forme de données géospatiales pour l'analyse et la visualisation de la géomorphologie côtière et des modifications du littoral",webgis:"tableau de bord",productsheader:"Découvrez les produits de données géomorphologiques et littorales",productstext:"Explorez une richesse de produits de données géomorphologiques et littorales inestimables, débloquant des informations pour une prise de décision éclairée et une gestion côtière.",benthickheader:"Habitat Benthique",benthicktext:"La télédétection des cartes d'habitats benthiques révolutionne la gestion marine, offrant une vue concise des habitats sous-marins pour des décisions éclairées sur la conservation et la durabilité.",landuseheader:"Utilisation côtière des terres",landusetext:"L'utilisation de cartes d'utilisation côtière télédétectées transforme la gestion de la zone côtière. En utilisant une imagerie satellite ou aérienne avancée, ces cartes offrent une vue d'ensemble, guidant les décisions pour une planification efficace et des pratiques durables dans les zones côtières.",shorelineheader:"Changement du littoral",shorelinetext:"CoGEOS dérive des lignes de rivage à partir de diverses sources de données. Ces informations aident à identifier les zones sujettes à l'érosion ou à l'inondation côtière, permettant aux décideurs de prioriser les ressources et les interventions dans les régions vulnérables.",aboutTitle:"À propos du projet",aboutText:"Le programme Surveillance mondiale pour l'environnement et la sécurité (GMES) et l'Afrique est une initiative conjointe cofinancée par la Commission européenne et la Commission de l'Union africaine. L'objectif du programme GMES & Afrique est de répondre aux besoins croissants des pays africains en matière d'accès et d'utilisation des données d'observation de la Terre (OT) pour la mise en œuvre de politiques de développement durable sur le continent.",moreAboutText:"Dans le cadre des objectifs du projet GMES & Afrique, le Centre régional de cartographie des ressources et du développement (RCMRD) a développé des outils de surveillance environnementale pour la cartographie de l'érosion côtière aux Comores, à Maurice, à Madagascar et aux Seychelles en utilisant des données d'observation de la Terre, des techniques innovantes et les connaissances des utilisateurs finaux. Cela a impliqué le développement d'un tableau de bord interactif qui permet à l'utilisateur d'explorer de manière interactive les zones susceptibles de subir des changements côtiers, un plugin QGIS pour modéliser les changements du littoral, et Mapographics pour fournir des informations et informer les politiques.",dashboardHeader:"Tableau de bord CoGeoS pour les cartes interactives et les statistiques",dashboardText:"Plate-forme de données géospatiales pour l'analyse et la visualisation de la géomorphologie côtière et des changements du littoral",pluginHeader:"QGIS Plugin for Automatic Shoreline Extraction",pluginText:"Le plugin QGIS permet aux utilisateurs d'extraire automatiquement les lignes de rivage et de calculer les changements de ligne de rivage",mapographicsHeader:"CoGeos Mapographics",mapographicsText:"Fournit des informations rapides et des aperçus sur les changements côtiers à partir de cartes et de statistiques compilées",collaborationText:"Un partenariat de collaboration",keepintouch:"Rester en contact",keepintouchtext:"Obtenez les dernières nouvelles sur les activités du RCMRD GMES et de l'Afrique",layers:"Couches",analysis:"Analyse",map:"Carte",baseMap:"Sélectionnez la carte de base",maplabels:"Étiquettes de carte",maplabelsToggle:"Afficher les étiquettes de carte",feedback:"Retour d'information",Help:"aide",share:"Partager",helpmessage:"Que voulez-vous faire ?",documentation:"Visitez la documentation",tour:"Faire une visite",drawingTools:"Outils de dessin",opacity:"Opacité",burnedArea:"Zone brûlée",fireDates:"Feu survenu entre <b>{start}Ha</b> et <b>{end}Ha</b>",statistics:"Statistiques",layerSettings:"Paramètres de couche",burnedAreaStats:"Statistiques de la zone brûlée",switchtopie:"Passer au graphique circulaire",switchtobar:"Passer au graphique à barres",downloadImage:"Télécharger l'image du graphique",downloadCsv:"Télécharger les données CSV",burnedAreaAnalysis:"Analyse de la zone brûlée",prefireSelect:"Sélectionnez la période avant l'incendie",postfire:"Sélectionnez la période après l'incendie",from:"de",to:"à",submit:"Envoyer",computing:"Calcul des statistiques de la zone brûlée",loadingMsg:"Cela peut prendre un certain temps",wait:"Veuillez patienter",note:"Remarque",burnedAreaNotes:"Carte de gravité de brûlure générée automatiquement à l'aide du rapport de brûlure normalisé (NBR), utilisant des longueurs d'onde proches infrarouges (NIR) et infrarouges à ondes courtes (SWIR). L'image post-incendie est soustraite de l'image pré-incendie pour créer le delta NBR (dNBR), qui peut être utilisé pour évaluer la gravité de la brûlure",dataSource:"Source de données",pre_fire_date:"Date avant l'incendie",post_fire_date:"Date après l'incendie",severity:"Gravité de la zone brûlée",disclaimer:"Avertissement",the_disclaimer:"Le développeur de l'application à partir de laquelle ce document de carte a été généré n'est pas responsable de la véracité des sorties ou des décisions dérivées en conséquence.",createdby:"créé par","Dense Coral":"Corail dense","Reef/Back reef":"Récif/arrière-récif","Seabed sediments":"Sédiments du fond marin","Sparse coaral on sand":"Corail clairsemé sur du sable","Deep water":"Eau profonde","Seagrass bed":"Herbier marin"},s={failed:"Tendo lilishindwa",success:"Tendo lilifanikiwa",home:"Nyumbani",dashboard:"Dashibodi",welcome:"Karibu kwenye Dashibodi ya GreenPulse!",welcomeMsg:"Ungependa kufanya ziara fupi, hatua kwa hatua, jinsi ya kutumia dashibodi?",start_tour:"Anza ziara",skip_tour:"Ruka ziara",profile:"Profaili",logout:"Kutoka",select_language:"Chagua Lugha",settings:"Mipangilio",my_profile:"Profaili Yangu",burnt_area_info:"Eneo lililochomwa limehesabiwa kutokana na picha kabla na baada ya moto ili kujenga ramani ya tathmini ya ukubwa wa moto. Uainishaji wa ukubwa wa moto unafuata mfumo wa uainishaji uliopendekezwa na USGS kwa safu za ukubwa wa moto.",burnt_area_summary:"Jumla ya eneo lililochomwa ni <b>{totalBurnedArea}Ha</b>, ambalo linafanana na jumla ya vikundi vyote vya kiwango cha moto, yaani kiwango cha moto cha juu sana <b>{veryHighSeverity}Ha</b>, kiwango cha moto cha juu <b>{highSeverity}Ha</b>, kiwango cha moto cha wastani <b>{moderateSeverity}Ha</b> na kiwango cha moto cha chini <b>{lowSeverity}Ha</b>.",firstName:"Jina la Kwanza",lastName:"Jina la Mwisho",emailAddress:"Anwani ya Barua pepe",password:"Nenosiri",alreadyHaveAnAccount:"Tayari una akaunti?",dontHaveAnAccount:"Huna akaunti?",signup:"Jisajili",login:"Ingia",registerNewAccount:"Jisajili akaunti mpya",tagline:"Maarifa kuhusu uendelevu wa dunia kupitia taswira ya ardhi kutoka angani",forest:"Earth Pulse Misitu",agro:"Earth Pulse Kilimo",water:"Earth Pulse Maji",layers:"Tabaka",analysis:"Uchambuzi",map:"Ramani",baseMap:"chagua ramani msingi",maplabels:"Lebo za Ramani",maplabelsToggle:"Onyesha Lebo za Ramani",feedback:"Maoni yako",Help:"Usaidizi",share:"Sambaza",helpmessage:"Ungependa kufanya nini?",documentation:"Tembelea Nyaraka",tour:"Fanya Ziara",drawingTools:"Zana za Kuchora",opacity:"Usowazi",burnedArea:"Majivu ya Misitu",fireDates:"moto umetokea kati ya <b>{start}Ha</b> na <b>{end}Ha</b>",statistics:"Takwimu",layerSettings:"Mipangilio ya Tabaka",burnedAreaStats:"Takwimu za Majivu ya Misitu",switchtopie:"Badilisha kwenye chati ya duara",switchtobar:"Badilisha kwenye chati ya mstari",downloadImage:"Pakua Picha ya Grafu",downloadCsv:"Pakua Data ya CSV",burnedAreaAnalysis:"Uchambuzi wa Majivu ya Misitu",prefireSelect:"Chagua Kipindi Kabla ya Moto",postfire:"Chagua Kipindi Baada ya Moto",from:"kutoka",to:"hadi",submit:"Wasilisha",computing:"Kuhesabu Takwimu za Majivu ya Misitu",loadingMsg:"Hii inaweza kuchukua muda kidogo",wait:"Tafadhali subiri",note:"Maelezo",burnedAreaNotes:"Ramani ya joto la eneo lililoteketezwa imezalishwa moja kwa moja kwa kutumia Uwiano wa Kuteketezwa Kwa Kawaida (NBR), kwa kutumia urefu wa mawimbi ya karibu na-karibu wa infrared (NIR) na shortwave-infrared (SWIR). Picha baada ya moto inaondolewa kutoka kwa picha kabla ya moto ili kuunda delta NBR (dNBR), ambayo inaweza kutumika kuamua kiwango cha uharibifu wa eneo lililoteketezwa.",dataSource:"Chanzo cha data",pre_fire_date:"Tarehe Kabla ya Moto",post_fire_date:"Tarehe Baada ya Moto",severity:"Kiwango cha Uharibifu wa Eneo lililoteketezwa",disclaimer:"Taarifa ya kukanusha dhima",the_disclaimer:"Mwendelezaji wa programu kutoka ambayo hati hii ya ramani ilizalishwa hana jukumu kwa usahihi wa matokeo au maamuzi yaliyotolewa kwa matokeo hayo.",createdby:"imeundwa na"},l={failed:"La acción falló",success:"La acción fue exitosa",home:"Inicio",dashboard:"Panel de control",welcome:"¡Bienvenido al Panel de control de GreenPulse!",welcomeMsg:"¿Le gustaría realizar un recorrido guiado rápido y paso a paso de cómo navegar por el panel de control?",start_tour:"Iniciar recorrido",skip_tour:"Saltar recorrido",profile:"Perfil",logout:"Cerrar sesión",select_language:"Seleccionar idioma",settings:"Configuración",my_profile:"Mi perfil",burnt_area_info:"El área quemada se calcula a partir de imágenes previas y posteriores al fuego para crear mapas de evaluación de la gravedad del fuego. La clasificación de la gravedad del fuego sigue el sistema de clasificación propuesto por USGS para los rangos de gravedad del fuego.",burnt_area_summary:"El área total quemada fue de <b>{totalBurnedArea}Ha</b>, lo que corresponde a la suma de todas las categorías de gravedad del fuego, es decir, la gravedad del fuego muy alta <b>{veryHighSeverity}Ha</b>, la gravedad del fuego alta <b>{highSeverity}Ha</b>, la gravedad del fuego moderada <b>{moderateSeverity}Ha</b> y la gravedad del fuego baja <b>{lowSeverity}Ha</b>.",firstName:"Nombre",lastName:"Apellido",emailAddress:"Correo electrónico",password:"Contraseña",alreadyHaveAnAccount:"¿Ya tienes una cuenta?",dontHaveAnAccount:"¿No tienes una cuenta?",signup:"Registrarse",login:"Iniciar sesión",registerNewAccount:"Registrar nueva cuenta",tagline:"Desbloqueando conocimientos para la sostenibilidad a través de la observación de la Tierra",forest:"Earth Pulse Bosque",agro:"Earth Pulse Agricultura",water:"Earth Pulse Agua",layers:"Capas",analysis:"Análisis",map:"Mapa",baseMap:"seleccionar mapa base",maplabels:"Etiquetas de mapa",maplabelsToggle:"Mostrar etiquetas de mapa",feedback:"Comentarios",Help:"Ayuda",share:"Compartir",helpmessage:"¿Qué te gustaría hacer?",documentation:"Visitar documentación",tour:"Realizar un recorrido",drawingTools:"herramientas de dibujo",opacity:"Opacidad",burnedArea:"Área quemada",fireDates:"El fuego ocurrió entre <b>{start}Ha</b> y <b>{end}Ha</b>",statistics:"Estadísticas",layerSettings:"Configuración de capas",burnedAreaStats:"Estadísticas de área quemada",switchtopie:"Cambiar a gráfico circular",switchtobar:"Cambiar a gráfico de barras",downloadImage:"Descargar imagen del gráfico",downloadCsv:"Descargar datos en CSV",burnedAreaAnalysis:"Análisis de área quemada",prefireSelect:"Seleccionar período anterior al fuego",postfire:"Seleccionar período posterior al fuego",from:"desde",to:"hasta",submit:"Enviar",computing:"Calculando estadísticas de área quemada",loadingMsg:"Esto puede tardar un tiempo",wait:"Por favor espera",note:"Nota",burnedAreaNotes:"Mapa de gravedad de quemaduras generado automáticamente usando la Relación de Quemadura Normalizada (NBR), utilizando longitudes de onda de infrarrojo cercano (NIR) e infrarrojo de onda corta (SWIR). La imagen posterior al incendio se resta de la imagen anterior al incendio para crear el delta NBR (dNBR), que se puede utilizar para evaluar la gravedad de la quemadura.",dataSource:"Fuente de datos",pre_fire_date:"Fecha previa al incendio",post_fire_date:"Fecha posterior al incendio",severity:"Gravedad del área quemada",disclaimer:"Descargo de responsabilidad",the_disclaimer:"El desarrollador de la aplicación a partir de la cual se generó este documento de mapa no es responsable de la corrección de las salidas o decisiones derivadas como consecuencia.",createdby:"creado por"},d={"en-US":i,fr:n,"es-ES":l,sw:s},u=(0,o.xr)((({app:e})=>{const a=(0,r.o)({locale:"en-US",messages:d});e.use(a)}))},1709:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var o=t(8985),r=t(6363);const i="http://185.92.223.31:8000",n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE",s=(0,o.eI)(i,n);function l(){return{supabase:s}}s.auth.onAuthStateChange(((e,a)=>{const{user:t}=(0,r.Z)();t.value=a?.user}))},3463:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var o=t(3340),r=t(6001),i=t.n(r);const n=(0,o.xr)((async({app:e})=>{e.use(i())}))},6363:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(499),r=t(1709);const i=(0,o.iH)(null);function n(){const{supabase:e}=(0,r["default"])(),a=async({email:a,password:t})=>{const{user:o,error:r}=await e.auth.signInWithPassword({email:a,password:t});if(r)throw r;return o},t=async a=>{const{user:t,error:o}=await e.auth.signIn({provider:a});if(o)throw o;return t},o=async()=>{const{error:a}=await e.auth.signOut();if(a)throw a},n=()=>!!i.value,s=async({email:a,password:t,...o})=>{console.log(o);const{user:r,error:i}=await e.auth.signUp({email:a,password:t,options:{data:o,emailRedirectTo:"http://217.21.122.249"}});if(i)throw i;return r},l=async a=>{const{user:t,error:o}=await e.auth.update(a);if(o)throw o;return t},d=async a=>{const{user:t,error:o}=await e.auth.resetPasswordForEmail(a,{redirectTo:"http://217.21.122.249/#/update-password"});if(o)throw o;return t},u=async a=>{const{user:t,error:o}=await e.auth.updateUser({password:a});if(o)throw o;return t};return{user:i,login:a,loginWithSocialProvider:t,logout:o,isLoggedIn:n,register:s,update:l,sendPasswordRestEmail:d,updateUserPassword:u}}}},a={};function t(o){var r=a[o];if(void 0!==r)return r.exports;var i=a[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,(()=>{var e=[];t.O=(a,o,r,i)=>{if(!o){var n=1/0;for(u=0;u<e.length;u++){for(var[o,r,i]=e[u],s=!0,l=0;l<o.length;l++)(!1&i||n>=i)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var d=r();void 0!==d&&(a=d)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}})(),(()=>{t.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(a,{a}),a}})(),(()=>{var e,a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);t.r(i);var n={};e=e||[null,a({}),a([]),a(a)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>o[e]));return n["default"]=()=>o,t.d(i,n),i}})(),(()=>{t.d=(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,o)=>(t.f[o](e,a),a)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{13:"d61965bb",41:"3a929657",61:"4be9abc8",64:"f6fb8876",119:"52884749",207:"da0a2eae",218:"4556fb3d",341:"6326ad6a",501:"bb13f905",553:"26a994cc",667:"fbb4426f",668:"e000f4f4",681:"71d67439",729:"7bec465b",757:"ce3bcf36",819:"78381aa8",862:"cfcca261"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+"."+{13:"2787164d",41:"a1bfa7fb",61:"bf1a25bc",119:"fee327f0",207:"dca3fc24",218:"adb3a336",341:"d3a3ff25",668:"c905e159",681:"085e5713",757:"adb3a336",819:"cafc0231"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="misland:";t.l=(o,r,i,n)=>{if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==a+i){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",a+i),s.src=o),e[o]=[r];var p=(a,t)=>{s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(t))),a)return a(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,a,t,o,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=t=>{if(i.onerror=i.onload=null,"load"===t.type)o();else{var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=s,i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=n,i.href=a,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},a=(e,a)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===a))return r}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){r=n[o],i=r.getAttribute("data-href");if(i===e||i===a)return r}},o=o=>new Promise(((r,i)=>{var n=t.miniCssF(o),s=t.p+n;if(a(n,s))return r();e(o,s,null,r,i)})),r={143:0};t.f.miniCss=(e,a)=>{var t={13:1,41:1,61:1,119:1,207:1,218:1,341:1,668:1,681:1,757:1,819:1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=o(e).then((()=>{r[e]=0}),(a=>{throw delete r[e],a})))}}})(),(()=>{var e={143:0};t.f.j=(a,o)=>{var r=t.o(e,a)?e[a]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((t,o)=>r=e[a]=[t,o]));o.push(r[2]=i);var n=t.p+t.u(a),s=new Error,l=o=>{if(t.o(e,a)&&(r=e[a],0!==r&&(e[a]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+a+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,r[1](s)}};t.l(n,l,"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,o)=>{var r,i,[n,s,l]=o,d=0;if(n.some((a=>0!==e[a]))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var u=l(t)}for(a&&a(o);d<n.length;d++)i=n[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=globalThis["webpackChunkmisland"]=globalThis["webpackChunkmisland"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(6594)));o=t.O(o)})();