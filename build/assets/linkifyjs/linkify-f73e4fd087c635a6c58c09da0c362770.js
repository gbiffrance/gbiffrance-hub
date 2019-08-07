//# sourceMappingURL=linkify.js.map
(function(){var kb="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(m){return typeof m}:function(m){return m&&"function"===typeof Symbol&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m};(function(m){function v(a,d){var g=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},S=Object.create(a.prototype),n;for(n in g)S[n]=g[n];S.constructor=d;d.prototype=S;return d}function Qa(a){a=a||{};this.defaultProtocol=a.hasOwnProperty("defaultProtocol")?a.defaultProtocol:
q.defaultProtocol;this.events=a.hasOwnProperty("events")?a.events:q.events;this.format=a.hasOwnProperty("format")?a.format:q.format;this.formatHref=a.hasOwnProperty("formatHref")?a.formatHref:q.formatHref;this.nl2br=a.hasOwnProperty("nl2br")?a.nl2br:q.nl2br;this.tagName=a.hasOwnProperty("tagName")?a.tagName:q.tagName;this.target=a.hasOwnProperty("target")?a.target:q.target;this.validate=a.hasOwnProperty("validate")?a.validate:q.validate;this.ignoreTags=[];this.attributes=a.attributes||a.linkAttributes||
q.attributes;this.className=a.hasOwnProperty("className")?a.className:a.linkClass||q.className;a=a.hasOwnProperty("ignoreTags")?a.ignoreTags:q.ignoreTags;for(var d=0;d<a.length;d++)this.ignoreTags.push(a[d].toUpperCase())}function Ra(a){return a}function za(){return function(a){this.j=[];this.T=a||null}}function I(a,d,g,S){for(var n=0,ka=a.length,b=[],c=void 0;n<ka&&(c=d.next(a[n]));)d=c,n++;if(n>=ka)return[];for(;n<ka-1;)c=new la(S),b.push(c),d.on(a[n],c),d=c,n++;c=new la(g);b.push(c);d.on(a[ka-
1],c);return b}function y(){return function(a){a&&(this.v=a)}}function e(a){a=a?{v:a}:{};return v(Aa,y(),a)}function lb(a){return a instanceof h||a instanceof t}var q={defaultProtocol:"http",events:null,format:Ra,formatHref:Ra,nl2br:!1,tagName:"a",target:function(a,d){return"url"===d?"_blank":null},validate:!0,ignoreTags:[],attributes:null,className:"linkified"};Qa.prototype={resolve:function(a){var d=a.toHref(this.defaultProtocol);return{formatted:this.get("format",a.toString(),a),formattedHref:this.get("formatHref",
d,a),tagName:this.get("tagName",d,a),className:this.get("className",d,a),target:this.get("target",d,a),events:this.getObject("events",d,a),attributes:this.getObject("attributes",d,a)}},check:function(a){return this.get("validate",a.toString(),a)},get:function(a,d,g){var b=this[a];if(!b)return b;switch("undefined"===typeof b?"undefined":kb(b)){case "function":return b(d,g.type);case "object":return a=b.hasOwnProperty(g.type)?b[g.type]:q[a],"function"===typeof a?a(d,g.type):a}return b},getObject:function(a,
d,g){a=this[a];return"function"===typeof a?a(d,g.type):a}};var mb=Object.freeze({defaults:q,Options:Qa,contains:function(a,d){for(var g=0;g<a.length;g++)if(a[g]===d)return!0;return!1}}),Ba=za();Ba.prototype={defaultTransition:!1,on:function(a,d){if(a instanceof Array){for(var g=0;g<a.length;g++)this.j.push([a[g],d]);return this}this.j.push([a,d]);return this},next:function(a){for(var d=0;d<this.j.length;d++){var g=this.j[d],b=g[1];if(this.test(a,g[0]))return b}return this.defaultTransition},accepts:function(){return!!this.T},
test:function(a,d){return a===d},emit:function(){return this.T}};var la=v(Ba,za(),{test:function(a,d){return a===d||d instanceof RegExp&&d.test(a)}}),Sa=v(Ba,za(),{jump:function(a){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,g=this.next(new a(""));g===this.defaultTransition?(g=new this.constructor(d),this.on(a,g)):d&&(g.T=d);return g},test:function(a,d){return a instanceof d}}),Aa=y();Aa.prototype={toString:function(){return this.v+""}};var h=e(),J=e("@"),T=e(":"),z=e("."),Ca=
e(),w=e(),Da=e("\n"),u=e(),ma=e("+"),na=e("#"),K=e(),Ea=e("mailto:"),oa=e("?"),x=e("/"),pa=e("_"),qa=e(),t=e(),Ta=e(),U=e("{"),V=e("["),W=e("<"),X=e("("),L=e("}"),M=e("]"),N=e(">"),O=e(")"),ra=e("&"),nb=Object.freeze({Base:Aa,DOMAIN:h,AT:J,COLON:T,DOT:z,PUNCTUATION:Ca,LOCALHOST:w,NL:Da,NUM:u,PLUS:ma,POUND:na,QUERY:oa,PROTOCOL:K,MAILTO:Ea,SLASH:x,UNDERSCORE:pa,SYM:qa,TLD:t,WS:Ta,OPENBRACE:U,OPENBRACKET:V,OPENANGLEBRACKET:W,OPENPAREN:X,CLOSEBRACE:L,CLOSEBRACKET:M,CLOSEANGLEBRACKET:N,CLOSEPAREN:O,AMPERSAND:ra}),
Ua="aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco active actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blanco blockbuster blog bloomberg blue bm bms bmw bn bnl bnpparibas bo boats boehringer bofa bom bond boo book booking boots bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars cartier casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel chase chat cheap chintai chloe christmas chrome chrysler church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dodge dog doha domains dot download drive dtv dubai duck dunlop duns dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epost epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events everbank exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodhands goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda honeywell horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht htc hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is iselect ismaili ist istanbul it itau itv iveco iwc jaguar java jcb jcp je jeep jetzt jewelry jio jlc jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa ladbrokes lamborghini lamer lancaster lancia lancome land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li liaison lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu meo merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile mobily moda moe moi mom monash money monster mopar mormon mortgage moscow moto motorcycles mov movie movistar mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic panerai paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio piaget pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sapo sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space spiegel spot spreadbetting sr srl srt st stada staples star starhub statebank statefarm statoil stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel telecity telefonica temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs uconnect ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vista vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou warman watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbb9fbpob xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q9jyb4c xn--qcka1pmc xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xperia xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zippo zm zone zuerich zw".split(" "),
Fa="0123456789".split(""),sa="0123456789abcdefghijklmnopqrstuvwxyz".split(""),Va=" \f\r\t\x0B\u00a0\u1680\u180e".split(""),p=[],c=function(a){return new la(a)},r=c(),Ga=c(u),P=c(h),Y=c(),Ha=c(Ta);r.on("@",c(J)).on(".",c(z)).on("+",c(ma)).on("#",c(na)).on("?",c(oa)).on("/",c(x)).on("_",c(pa)).on(":",c(T)).on("{",c(U)).on("[",c(V)).on("<",c(W)).on("(",c(X)).on("}",c(L)).on("]",c(M)).on(">",c(N)).on(")",c(O)).on("&",c(ra)).on([",",";","!",'"',"'"],c(Ca));r.on("\n",c(Da)).on(Va,Ha);Ha.on(Va,Ha);for(var Ia=
0;Ia<Ua.length;Ia++){var ob=I(Ua[Ia],r,t,h);p.push.apply(p,ob)}var Wa=I("file",r,h,h),Xa=I("ftp",r,h,h),Ya=I("http",r,h,h),Za=I("mailto",r,h,h);p.push.apply(p,Wa);p.push.apply(p,Xa);p.push.apply(p,Ya);p.push.apply(p,Za);var pb=Wa.pop(),qb=Xa.pop(),rb=Ya.pop(),sb=Za.pop(),ta=c(h),ua=c(K),tb=c(Ea);qb.on("s",ta).on(":",ua);rb.on("s",ta).on(":",ua);p.push(ta);pb.on(":",ua);ta.on(":",ua);sb.on(":",tb);var ub=I("localhost",r,w,h);p.push.apply(p,ub);r.on(Fa,Ga);Ga.on("-",Y).on(Fa,Ga).on(sa,P);P.on("-",Y).on(sa,
P);for(var Ja=0;Ja<p.length;Ja++)p[Ja].on("-",Y).on(sa,P);Y.on("-",Y).on(Fa,P).on(sa,P);r.defaultTransition=c(qa);var $a=function(a){for(var d=a.replace(/[A-Z]/g,function(a){return a.toLowerCase()}),g=a.length,b=[],n=0;n<g;){for(var c=r,e=null,f=0,h=null,k=-1;n<g&&(e=c.next(d[n]));)c=e,c.accepts()?(k=0,h=c):0<=k&&k++,f++,n++;0>k||(n-=k,f-=k,c=h.emit(),b.push(new c(a.substr(n-f,f))))}return b},vb=Object.freeze({State:la,TOKENS:nb,run:$a,start:r}),C=y();C.prototype={type:"token",isLink:!1,toString:function(){for(var a=
[],d=0;d<this.v.length;d++)a.push(this.v[d].toString());return a.join("")},toHref:function(){return this.toString()},toObject:function(){return{type:this.type,value:this.toString(),href:this.toHref(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"http")}}};var ab=v(C,y(),{type:"email",isLink:!0}),Ka=v(C,y(),{type:"email",isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),La=v(C,y(),{type:"text"}),bb=v(C,y(),{type:"nl"}),A=v(C,y(),{type:"url",isLink:!0,toHref:function(){for(var a=
0<arguments.length&&void 0!==arguments[0]?arguments[0]:"http",d=!1,g=!1,b=this.v,c=[],e=0;b[e]instanceof K;)d=!0,c.push(b[e].toString().toLowerCase()),e++;for(;b[e]instanceof x;)g=!0,c.push(b[e].toString()),e++;for(;lb(b[e]);)c.push(b[e].toString().toLowerCase()),e++;for(;e<b.length;e++)c.push(b[e].toString());c=c.join("");d||g||(c=a+"://"+c);return c},hasProtocol:function(){return this.v[0]instanceof K}}),wb=Object.freeze({Base:C,MAILTOEMAIL:ab,EMAIL:Ka,NL:bb,TEXT:La,URL:A}),b=function(a){return new Sa(a)},
va=b(),cb=b(),db=b(),Ma=b(),eb=b(),B=b(),wa=b(),Z=b(A),fb=b(),gb=b(A),f=b(A),aa=b(),ba=b(),ca=b(),da=b(),ea=b(),D=b(A),E=b(A),F=b(A),G=b(A),fa=b(),ga=b(),ha=b(),ia=b(),Q=b(),Na=b(),xa=b(Ka),hb=b(),xb=b(Ka),H=b(ab),Oa=b(),R=b(),ya=b(),ib=b(),yb=b(bb);va.on(Da,yb).on(K,cb).on(Ea,db).on(x,Ma);cb.on(x,Ma);Ma.on(x,eb);va.on(t,B).on(h,B).on(w,Z).on(u,B);eb.on(t,f).on(h,f).on(u,f).on(w,f);B.on(z,wa);Q.on(z,Na);wa.on(t,Z).on(h,B).on(u,B).on(w,B);Na.on(t,xa).on(h,Q).on(u,Q).on(w,Q);Z.on(z,wa);xa.on(z,Na);
Z.on(T,fb).on(x,f);fb.on(u,gb);gb.on(x,f);xa.on(T,hb);hb.on(u,xb);var k=[h,J,w,u,ma,na,K,x,t,pa,qa,ra],l=[T,z,oa,Ca,L,M,N,O,U,V,W,X];f.on(U,ba).on(V,ca).on(W,da).on(X,ea);aa.on(U,ba).on(V,ca).on(W,da).on(X,ea);ba.on(L,f);ca.on(M,f);da.on(N,f);ea.on(O,f);D.on(L,f);E.on(M,f);F.on(N,f);G.on(O,f);fa.on(L,f);ga.on(M,f);ha.on(N,f);ia.on(O,f);ba.on(k,D);ca.on(k,E);da.on(k,F);ea.on(k,G);ba.on(l,fa);ca.on(l,ga);da.on(l,ha);ea.on(l,ia);D.on(k,D);E.on(k,E);F.on(k,F);G.on(k,G);D.on(l,D);E.on(l,E);F.on(l,F);G.on(l,
G);fa.on(k,D);ga.on(k,E);ha.on(k,F);ia.on(k,G);fa.on(l,fa);ga.on(l,ga);ha.on(l,ha);ia.on(l,ia);f.on(k,f);aa.on(k,f);f.on(l,aa);aa.on(l,aa);db.on(t,H).on(h,H).on(u,H).on(w,H);H.on(k,H).on(l,Oa);Oa.on(k,H).on(l,Oa);var ja=[h,u,ma,na,oa,pa,qa,ra,t];B.on(ja,R).on(J,ya);Z.on(ja,R).on(J,ya);wa.on(ja,R);R.on(ja,R).on(J,ya).on(z,ib);ib.on(ja,R);ya.on(t,Q).on(h,Q).on(w,xa);var jb=function(a){for(var d=a.length,b=0,c=[],e=[];b<d;){for(var f=va,h=null,k=null,l=0,p=null,m=-1;b<d&&!(h=f.next(a[b]));)e.push(a[b++]);
for(;b<d&&(k=h||f.next(a[b]));)h=null,f=k,f.accepts()?(m=0,p=f):0<=m&&m++,b++,l++;if(0>m)for(l=b-l;l<b;l++)e.push(a[l]);else 0<e.length&&(c.push(new La(e)),e=[]),b-=m,l-=m,f=p.emit(),c.push(new f(a.slice(b-l,b)))}0<e.length&&c.push(new La(e));return c},zb=Object.freeze({State:Sa,TOKENS:wb,run:jb,start:va});Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});var Pa=function(a){return jb($a(a))};m.find=function(a){for(var b=1<arguments.length&&void 0!==
arguments[1]?arguments[1]:null,c=Pa(a),e=[],f=0;f<c.length;f++){var h=c[f];!h.isLink||b&&h.type!==b||e.push(h.toObject())}return e};m.inherits=v;m.options=mb;m.parser=zb;m.scanner=vb;m.test=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=Pa(a);return 1===c.length&&c[0].isLink&&(!b||c[0].type===b)};m.tokenize=Pa})(self.linkify=self.linkify||{})})();