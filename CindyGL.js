(function(){
'use strict';var aa={addc:"vec2 addc(vec2 a,vec2 b){\nreturn a+b;\n}\n",arccosc:"vec2 arccosc(vec2 a){\nvec2 t2=multc(a,negc(a));\nvec2 tmp=sqrtc(addc(vec2(1.0,0.0),t2));\nvec2 tmp1=addc(multc(a,vec2(0.0,1.0)),tmp);\nvec2 erg=addc(multc(logc(tmp1),vec2(0.0,1.0)),vec2(pi*0.5,0.0));\nreturn erg;\n}\n",arcsinc:"vec2 arcsinc(vec2 a){\nvec2 t2=multc(a,negc(a));\nvec2 tmp=sqrtc(addc(vec2(1.0,0.0),t2));\nvec2 tmp1=addc(multc(a,vec2(0.0,1.0)),tmp);\nvec2 erg=multc(logc(tmp1),vec2(0.0,-1.0));\nreturn erg;\n}\n",
arctanc:"vec2 arctanc(vec2 a){\nvec2 t1=logc(addc(multc(a,vec2(0.0,-1.0)),vec2(1.0,0.0)));\nvec2 t2=logc(addc(multc(a,vec2(0.0,1.0)),vec2(1.0,0.0)));\nvec2 erg=multc(subc(t1,t2),vec2(0.0,0.5));\nreturn erg;\n}\n",blue:"vec3 blue(float f)\n{\nreturn vec3(0.,0.,clamp(f,0.,1.));\n}\n",cimag:"float imagc(vec2 a){\nreturn a.y;\n}\n",conjugate:"vec2 conjugate(vec2 a){\nreturn vec2(a.x, -a.y);\n}\n",copytexture_f:"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D sampler;\nvarying vec2 cgl_pixel;\n\nvoid main(void){\ngl_FragColor=texture2D(sampler,cgl_pixel);\n}\n",
copytexture_v:"attribute vec3 aPos;\nattribute vec2 aTexCoord;\nvarying vec2 cgl_pixel;\n\nvoid main(void){\ngl_Position=vec4(aPos,1.);\ncgl_pixel=aTexCoord;\n}\n",cosc:"vec2 cosc(vec2 a){\n\nfloat n=exp(a.y);\nfloat imag1=n*sin(-a.x);\nfloat real1=n*cos(-a.x);\nn=exp(-a.y);\nfloat imag2=n*sin(a.x);\nfloat real2=n*cos(a.x);\nfloat i= (imag1+imag2) /2.0;\nfloat r= (real1+real2) /2.0;\n\nreturn vec2(r,i);\n}\n",creal:"float realc(vec2 a){\nreturn a.x;\n}\n",dehomogenize:"vec2 dehomogenize(vec3 z){\nreturn vec2(z.x,z.y)/z.z;\n}\n",
divc:"vec2 divc(vec2 a,vec2 b){\nreturn 1./(b.x*b.x+b.y*b.y)*multc(a,vec2(b.x,-b.y));\n}\n",expc:"vec2 expc(vec2 a){\nfloat n=exp(a.x);\nfloat r=n*cos(a.y);\nfloat i=n*sin(a.y);\nreturn vec2(r,i);\n}\n",float2color:"vec4 float2color(float f)\n{\nreturn vec4(f,f,f,1.);\n}\n",gray:"vec3 gray(float f)\n{\nf=clamp(f,0.,1.);\nreturn vec3(f,f,f);\n}\n",green:"vec3 green(float f)\n{\nreturn vec3(0.,clamp(f,0.,1.),0.);\n}\n",hsv2rgb:"vec3 hsv2rgb(vec3 c)\n{\nvec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);\nvec3 p=abs(fract(c.xxx+K.xyz) *6.0-K.www);\nreturn c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);\n}\n",
hue:"vec3 hue(float a){\nreturn hsv2rgb(vec3(a,1.,1.));\n}\n",imagc:"float imagc(vec2 a){\nreturn a.y;\n}\n",invc:"vec2 invc(vec2 a){\nfloat n=a.x*a.x+a.y*a.y;\nreturn vec2(a.x/n,-a.y/n);\n}\n",logc:"vec2 logc(vec2 a){\nfloat re=a.x;\nfloat im=a.y;\nfloat s=sqrt(re*re+im*im);\nfloat i=im;\nfloat imag=atan(im,re);\nif(i<0.0){\nimag+= (2.0*pi);\n}\nif(i==0.0&&re<0.0){\nimag=pi;\n}\nif(imag>pi){\nimag-= (2.0*pi);\n};\nfloat real=log(s);\n\nreturn vec2(real,imag);\n}\n",logr:"vec2 logr(float a){\nif(a>=0.)return vec2(log(a),0);\nelse return vec2(log(-a),pi);\n}\n",
mat2complex:"mat4 mat2complex(mat2 a)\n{\nreturn mat4(\nvec4(a[0][0],0,a[0][1],0),\nvec4(0,a[0][0],0,a[0][1]),\nvec4(a[1][0],0,a[1][1],0),\nvec4(0,a[1][0],0,a[1][1])\n);\n}\n",multc:"vec2 multc(vec2 a,vec2 b){\nreturn vec2(a.x*b.x-a.y*b.y+0.0000000000000001,a.y*b.x+a.x*b.y);\n}\n",negc:"vec2 negc(vec2 a){\nreturn vec2(-a.x,-a.y);\n}\n",powc:"vec2 powc(vec2 a,vec2 b){\nreturn expc(multc(logc(a),b));\n}\n",powi:"float powi(float a,int b){\nreturn pow(a,float(b));\n}\n",random:"uniform float rnd_;\n\nfloat last_rnd= .1231;\nfloat random(){\nfloat a=mod(rnd_*plain_pixel.x*32.23,1.21);\nfloat b=mod(last_rnd*plain_pixel.y*54.21,1.32);\nlast_rnd=mod(a+b+12232.2213*(1.+rnd_)*dot(plain_pixel,plain_pixel)+a+sin(b)+b*sin(dot(plain_pixel,vec2(232.121+rnd_,2232.11))+last_rnd*121.11)*129.12+rnd_,1.);\nreturn last_rnd;\n\n\n}\n",
realc:"float realc(vec2 a){\nreturn a.x;\n}\n",red:"vec3 red(float f)\n{\nreturn vec3(clamp(f,0.,1.),0.,0.);\n}\n",rgb2hsv:"vec3 rgb2hsv(vec3 c)\n{\nvec4 K=vec4(0.0, -1.0/3.0,2.0/3.0, -1.0);\nvec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));\nvec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));\n\nfloat d=q.x-min(q.w,q.y);\nfloat e=1.0e-10;\nreturn vec3(abs(q.z+ (q.w-q.y) / (6.0*d+e)),d/ (q.x+e),q.x);\n}\n",sinc:"\n\nvec2 sinc(vec2 a){\n\nfloat n=exp(a.y);\nfloat imag1=n*sin(-a.x);\nfloat real1=n*cos(-a.x);\nn=exp(-a.y);\nfloat imag2=n*sin(a.x);\nfloat real2=n*cos(a.x);\nfloat r= -(imag1-imag2) /2.0;\nfloat i= (real1-real2) /2.0;\n\nreturn vec2(r,i);\n}\n",
sqrtc:"vec2 sqrtc(vec2 a){\nreturn expc(multc(logc(a),vec2(0.5,0.0)));\n}\n",sqrtf:"vec2 sqrtf(float a){\nif(a>=0.)return vec2(sqrt(a),0.);\nelse return vec2(0.,sqrt(-a));\n}\n",standardFragmentHeader:"#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define pi 3.141592653589793\n\nvarying vec2 cgl_pixel;\nvarying vec2 plain_pixel;\n",subc:"vec2 subc(vec2 a,vec2 b){\nreturn a-b;\n}\n",tanc:"vec2 tanc(vec2 a){\nvec2 s=sinc(a);\nvec2 c=cosc(a);\nreturn divc(s,c);\n}\n",vec2complex:"vec4 vec2complex(vec2 a)\n{\nreturn vec4(a.x,0.,a.y,0);\n}\n",
vshader:"attribute vec3 aPos;\nattribute vec2 aTexCoord;\nvarying vec2 cgl_pixel;\nvarying vec2 plain_pixel;\nuniform mat3 transformMatrix;\nvoid main(void){\ngl_Position=vec4(aPos,1.);\nplain_pixel=aTexCoord;\nvec3 r=transformMatrix*vec3(plain_pixel,1);\ncgl_pixel=r.xy/r.z;\n}\n"};var ba=!1,h,l,ca={},n,q={},r={},da=!1,ea,u=!1,fa=1,v={},w=[],x=[];
function ga(){function a(d){h.removeEventListener("webglcontextcreationerror",a,!1);d.statusMessage&&(b=d.statusMessage)}if(!ba){h=document.createElement("canvas");h.id="glcanvas";h.style.display="none";document.body.appendChild(h);var b="Unknown";h.addEventListener("webglcontextcreationerror",a,!1);(l=h.getContext("webgl"))||(l=h.getContext("experimental-webgl"));if(!l)throw new ha("Could not obtain a WebGL context.\nReason: "+b);h.removeEventListener("webglcontextcreationerror",a,!1);u=l.getExtension("OES_texture_float")&&
l.getExtension("OES_texture_float_linear");u||(console.error("Your browser does not suppert OES_texture_float, trying OES_texture_half_float..."),(da=(ea=l.getExtension("OES_texture_half_float"))&&l.getExtension("OES_texture_half_float_linear"))||console.error("Your browser does not suppert OES_texture_half_float, will use 8-bit textures."));ba=!0}};function ia(a){var b;if(null==a||"object"!=typeof a)return a;if(a instanceof Array){b=[];for(var d=0,e=a.length;d<e;d++)b[d]=ia(a[d]);return b}if(a instanceof Object){b={};for(d in a)a.hasOwnProperty(d)&&(0<="oper impl args ctype stack name modifs arglist value real imag key obj body".split(" ").indexOf(d)?b[d]=ia(a[d]):console.log("Did not copy "+d));return b}}function ja(a){return"number"===typeof a}
function ka(a,b){if(a===b)return!0;if(ja(a)||ja(b))return a===b;for(var d in a)if(a.hasOwnProperty(d)&&(!b.hasOwnProperty(d)||!ka(a[d],b[d])))return!1;for(var e in b)if(b.hasOwnProperty(e)&&!a.hasOwnProperty(e))return!1;return!0}function la(a){return-1===a.indexOf("$")?a:a.substr(0,a.indexOf("$"))}
function ma(a){if("boolean"===a.ctype)return y;if("number"===a.ctype)return a=a.value,1E-10>Math.abs(a.imag)?(a.real|0)===a.real?z:A:B;if("list"===a.ctype){var b=a.value;if(0<b.length){for(var d=ma(b[0]),e=1;e<b.length;e++)d=na(d,ma(b[e]));if(C(d,A)){if(2==b.length)return D;if(3==b.length)return E;if(4==b.length)return G}if(C(d,B)&&2==b.length)return H;if(d===D&&2==b.length)return I;if(d===H&&2==b.length)return J;if(d===E&&3==b.length)return oa;if(d===G&&4==b.length)return pa}}else if("string"===
a.ctype)return K;console.error("Cannot guess type of "+JSON.stringify(a));return n}var qa=0;function ra(){qa++;return"_helper"+qa};function sa(a){var b;b=void 0===b?null:b;return"list"!==a.ctype?(console.log("argument is not a list"),b):a.value}function ta(a){var b;b=void 0===b?[.5,.5,.5]:b;if("number"===a.ctype){var d=ua(a);if(!isNaN(d))return[d,d,d]}a=sa(a);return null===a?b:3!=a.length?(console.log("Not an RGB color vector"),b):a.map(function(a){return ua(a)})}
function va(a){var b;b=void 0===b?Number.NaN:b;if("number"!==a.ctype)return console.log("argument is not a number"),b;b=a.value;a=b.real;b=b.imag;0!==b&&console.log("complex number is not real");b=Math.round(a);b!==a&&console.log("number is not an integer");return b}function ua(a){var b;b=void 0===b?Number.NaN:b;b=void 0===b?Number.NaN:b;"number"!==a.ctype?console.log("argument is not a number"):(a=a.value,b=a.real,0!==a.imag&&console.log("complex number is not real"));a=b;return 0>a?0:1<a?1:a};function wa(a){for(var b=1;b<a;)b<<=1;return b}function xa(a){return u?new Float32Array(a):da?new Uint16Array(a):new Uint8Array(a)}
function ya(a){this.canvas=a;this.o=a.width;this.p=a.height;this.w=wa(this.o);this.A=wa(this.p);this.s=0;for(var b=[],d=0;d<this.w;d++)for(var e=0;e<this.A;e++)b.push(0,0,0,255);b=xa(b);this.u=[];this.C=[];a.drawTo=this.I.bind(this);a.cdyUpdate=this.N.bind(this);for(a=0;2>a;a++)this.u[a]=l.createTexture(),l.bindTexture(l.TEXTURE_2D,this.u[a]),l.pixelStorei(l.UNPACK_ALIGNMENT,1),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,this.w,this.A,0,l.RGBA,u?l.FLOAT:da?ea.HALF_FLOAT_OES:l.UNSIGNED_BYTE,b),l.texParameteri(l.TEXTURE_2D,
l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),this.C[a]=l.createFramebuffer(),l.bindFramebuffer(l.FRAMEBUFFER,this.C[a]),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,this.u[a],0);this.i=new za(l,aa.copytexture_v,aa.copytexture_f);l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer());a=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]);b=l.getAttribLocation(this.i.handle,"aPos");l.enableVertexAttribArray(b);d=l.getAttribLocation(this.i.handle,
"aTexCoord");l.enableVertexAttribArray(d);var e=new Float32Array([0,0,1,0,0,1,1,1]),c=a.byteLength;l.bufferData(l.ARRAY_BUFFER,c+e.byteLength,l.STATIC_DRAW);l.bufferSubData(l.ARRAY_BUFFER,0,a);l.bufferSubData(l.ARRAY_BUFFER,c,e);l.vertexAttribPointer(b,3,l.FLOAT,!1,0,0);l.vertexAttribPointer(d,2,l.FLOAT,!1,0,c)}ya.prototype.bindTexture=function(){l.bindTexture(l.TEXTURE_2D,this.u[this.s])};ya.prototype.bindFramebuffer=function(){l.bindFramebuffer(l.FRAMEBUFFER,this.C[this.s^1]);this.s^=1};
ya.prototype.N=function(){var a=this.canvas.getContext("2d");a.clearRect(0,0,this.o,this.p);this.I(a,0,0)};ya.prototype.I=function(a,b,d){h.width=this.o;h.height=this.p;l.viewport(0,0,this.w,this.A);l.useProgram(this.i.handle);l.activeTexture(l.TEXTURE0);l.bindTexture(l.TEXTURE_2D,this.u[this.s]);this.i.l.sampler(0);l.bindFramebuffer(l.FRAMEBUFFER,null);l.drawArrays(l.TRIANGLE_STRIP,0,4);l.flush();a.drawImage(h,0,0,this.o,this.p,b,d,this.o,this.p)};
var Aa=function(){var a=new Float32Array(1),b=new Int32Array(a.buffer);return function(d){a[0]=d;d=b[0];var e=d>>16&32768,c=(d&2147483647)+4096;if(1199570944<=c)return 1199570944<=(d&2147483647)?2139095040>c?e|31744:e|31744|(d&8388607)>>13:e|31743;if(947912704<=c)return e|c-939524096>>13;if(855638016>c)return e;c=(d&2147483647)>>23;return e|(d&8388607|8388608)+(8388608>>>c-102)>>126-c}}();function Ba(a){return 255*a};function ha(a){this.message=a}ha.prototype.toString=function(){return this.message};
function za(a,b,d){this.handle=a.createProgram();this.createShader(a,a.VERTEX_SHADER,b);this.createShader(a,a.FRAGMENT_SHADER,d);this.link(a);b=void 0;var e=this.handle,c,f=void 0,g,p={},k,m,t;g=void 0;var F;d=a.getProgramParameter(e,a.ACTIVE_UNIFORMS);for(b=0;b<d;++b)if(c=a.getActiveUniform(e,b),null!==c&&(f=c.name.replace(/\]/g,""))){for(k=p;null!==(g=/[.\[]/.exec(f));)m=f.substr(0,g.index),k=k.hasOwnProperty(m)?k[m]:"."===g[0]?k[m]={}:k[m]=[],f=f.substr(g.index+1);if(1<c.size){g=c.size;F=Array(g);
for(m=0;m<g;++m)t=c.name+"["+m+"]",t=Ca(this,a,t,c),F[m]=t;k[f]=F}else t=Ca(this,a,c.name,c),k[f]=t}this.l=p}za.prototype.createShader=function(a,b,d){b=a.createShader(b);a.shaderSource(b,d);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw console.warn(d.split("\n")),new ha("Error compiling shader:\n"+a.getShaderInfoLog(b));a.attachShader(this.handle,b);return b};
za.prototype.link=function(a){var b=this.handle;a.linkProgram(b);if(!a.getProgramParameter(b,a.LINK_STATUS))throw new ha("Error linking shader:\n"+a.getProgramInfoLog(b));a.validateProgram(b);if(!a.getProgramParameter(b,a.VALIDATE_STATUS))throw new ha("Error validating shader:\n"+a.getProgramInfoLog(b));};
function Ca(a,b,d,e){a=b.getUniformLocation(a.handle,d);switch(e.type){case b.FLOAT:return b.uniform1f.bind(b,a);case b.FLOAT_VEC2:return b.uniform2fv.bind(b,a);case b.FLOAT_VEC3:return b.uniform3fv.bind(b,a);case b.FLOAT_VEC4:return b.uniform4fv.bind(b,a);case b.BOOL:case b.INT:case b.SAMPLER_2D:case b.SAMPLER_CUBE:return b.uniform1i.bind(b,a);case b.BOOL_VEC2:case b.INT_VEC2:return b.uniform2iv.bind(b,a);case b.BOOL_VEC3:case b.INT_VEC3:return b.uniform3iv.bind(b,a);case b.BOOL_VEC4:case b.INT_VEC4:return b.uniform4iv.bind(b,
a);case b.FLOAT_MAT2:return b.uniformMatrix2fv.bind(b,a,!1);case b.FLOAT_MAT3:return b.uniformMatrix3fv.bind(b,a,!1);case b.FLOAT_MAT4:return b.uniformMatrix4fv.bind(b,a,!1);default:throw new ha("Unknown data type for uniform "+d);}};function Da(a,b){this.r=a;var d=Ea(new Fa(a),b);this.B=d.j;this.v=d.v;this.O=aa.standardFragmentHeader+d.code;this.R=aa.vshader;this.i=new za(l,this.R,this.O);l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer());var d=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e=l.getAttribLocation(this.i.handle,"aPos");l.enableVertexAttribArray(e);var c=l.getAttribLocation(this.i.handle,"aTexCoord");l.enableVertexAttribArray(c);var f=new Float32Array([0,0,1,0,0,1,1,1]),g=d.byteLength;l.bufferData(l.ARRAY_BUFFER,g+
f.byteLength,l.STATIC_DRAW);l.bufferSubData(l.ARRAY_BUFFER,0,d);l.bufferSubData(l.ARRAY_BUFFER,g,f);l.vertexAttribPointer(e,3,l.FLOAT,!1,0,0);l.vertexAttribPointer(c,2,l.FLOAT,!1,0,g)};createCindy.registerPlugin(1,"CindyGL",function(a){function b(b,e,c,f,g,p){if(!b.P||b.M<fa)b.P=!0,b.M=fa,b.Q=new Da(a,b);b=b.Q;var k=g/f,m=e.x+-(c.y-e.y)*k,k=e.y+(c.x-e.x)*k;h.width=f;h.height=g;l.viewport(0,0,f,g);l.useProgram(b.i.handle);e=[c.x-e.x,m-e.x,e.x,c.y-e.y,k-e.y,e.y,0,0,1];b.i.l.hasOwnProperty("transformMatrix")&&b.i.l.transformMatrix([e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]]);for(var t in b.B)if(e=b.r.evaluateAndVal(b.B[t].n),g=b.B[t].type,c=b.i.l[t],void 0!==c)switch(g){case B:c([e.value.real,
e.value.imag]);break;case y:e.value?c(1):c(0);break;case z:case A:c([e.value.real]);break;case D:case E:case G:f=0;g===D&&(f=2);g===E&&(f=3);g===G&&(f=4);g=[];for(m=0;m<f;m++)g.push(e.value[m].value.real);c(g);break;case I:case oa:case pa:f=0;g===I&&(f=2);g===oa&&(f=3);g===pa&&(f=4);g=[];for(m=0;m<f;m++)for(k=0;k<f;k++)g.push(e.value[k].value[m].value.real);c(g);break;case H:c([e.value[0].value.real,e.value[0].value.imag,e.value[1].value.real,e.value[1].value.imag]);break;case J:f=Array(16);for(g=
0;2>g;g++)for(m=0;2>m;m++)k=e.value[g].value[m].value,f[8*m+2*g]=k.real,f[4*(2*m+1)+2*g+1]=k.real,f[4*(2*m+1)+2*g]=-k.imag,f[8*m+2*g+1]=k.imag;c(f);break;default:console.error("Don't know how to set uniform"+t+", which has the type "+L(g)+", to "+e)}b.i.l.hasOwnProperty("rnd_")&&b.i.l.rnd_(Math.random());for(t=0;t<b.v.length;t++)l.activeTexture(l.TEXTURE0+t),e=b.v[t],c=ca[e],c.bindTexture(),b.i.l["_sampler_"+e](t),b.i.l["_ratio_"+e](c.o/c.p),b.i.l["_cropfact_"+e]([c.o/c.w,c.p/c.A]);p?p.bindFramebuffer():
l.bindFramebuffer(l.FRAMEBUFFER,null);l.drawArrays(l.TRIANGLE_STRIP,0,4);l.flush()}n=a.nada;a.defineFunction("compile",1,function(b){b=Ea(new Fa(a),b[0]);console.log(b);return{ctype:"string",value:b}});a.defineFunction("forcerecompile",0,function(){fa++;return n});a.defineFunction("colorplot",1,function(d){function e(a,b){var d=a-k.tx,c=b+k.ty;return{x:(d*k.d-c*k.b)/k.det,y:-(-d*k.c+c*k.a)/k.det}}ga();d=d[0];var c=a.instance.canvas.clientWidth,f=a.instance.canvas.clientHeight,g=a.instance.canvas.width,
p=a.instance.canvas.height,k=a.getInitialMatrix();b(d,e(0,f),e(c,f),g,p,null);a.instance.canvas.getContext("2d").drawImage(h,0,0,g,p,0,0,c,f);return n});a.defineFunction("colorplot",4,function(d){ga();var e=a.extractPoint(a.evaluateAndVal(d[0])),c=a.extractPoint(a.evaluateAndVal(d[1])),f=a.evaluateAndVal(d[2]);d=d[3];if(!e.ok||!c.ok||"string"!==f.ctype)return n;var g=a.getImage(f.value,!0);if("undefined"===typeof g||null===g)return n;var p=g.width,k=g.height;ca.hasOwnProperty(f.value)||(ca[f.value]=
new ya(g));b(d,e,c,p,k,ca[f.value]);return n});a.defineFunction("setpixel",4,function(b){var e;var c=a.evaluateAndVal(b[0]),f;f=void 0===f?null:f;"string"===c.ctype?e=c.value:(console.log("argument is not a string"),e=f);c=va(a.evaluateAndVal(b[1]));f=va(a.evaluateAndVal(b[2]));b=ta(a.evaluateAndVal(b[3]));if(isFinite(c)&&isFinite(f)&&e&&ca.hasOwnProperty(e)&&b){e=ca[e];e.bindTexture();console.log(u?1:da?65535:255);b=[b[0],b[1],b[2],1];!u&&da?b=b.map(Aa):u||da||(b=b.map(Ba));l.texSubImage2D(l.TEXTURE_2D,
0,c,f,1,1,l.RGBA,u?l.FLOAT:da?ea.HALF_FLOAT_OES:l.UNSIGNED_BYTE,xa(b));e=e.canvas.getContext("2d");var g=e.createImageData(1,1);g.data.d=b;e.putImageData(g,c,f)}return n})});function C(a,b){return a===b?!0:ja(a)&&ja(b)?void 0===w[a]?!1:1073741824>w[a][b]:!1}var M=0;function na(a,b){var d=void 0;if(C(b,a))return a;if(C(a,b)||!ja(a))return b;if(!ja(b))return a;for(var e=0;e<M;e++)C(a,e)&&C(b,e)&&(void 0===d?d=e:C(e,d)&&(d=e));return d}function Ga(a){return{index:a,type:"template"}}var N={};
function Ha(a,b){for(var d in N[a]){for(var e=N[a][d],c=b.length===e.e.length,f={},g=0;g<b.length&&c;g++)"template"===e.e[g].type?(void 0===f[e.e[g].index]&&(f[e.e[g].index]=[]),f[e.e[g].index].push(b[g])):c&=C(b[g],e.e[g]);if(c){var p={},k;for(k in f){p[k]=f[k][0];for(var m in f[k])p[k]=na(p[k],f[k][m]),void 0===p[k]&&(c=!1)}if(c){d={e:[]};for(g=0;g<b.length&&c;g++)d.e[g]="template"===e.e[g].type?p[e.e[g].index]:e.e[g];d.f="template"===e.f.type?p[e.f.index]:e.f;return d}}}return n};var y=1,z=2,A=3,B=4,D=6,E=7,G=8,I=11,oa=12,pa=13,K=14,H=16,J=17,Ia={S:y,W:z,V:A,T:B,ga:5,ca:D,ea:E,fa:G,color:9,aa:10,X:I,Z:oa,$:pa,ba:K,U:15,da:H,Y:J};Object.freeze(Ia);function L(a){return"bool int float complex voidt float[2] float[3] float[4] color point float[2,2] float[3,3] float[4,4] string 2D-Coordinate complex[2] complex[2,2]".split(" ")[a-1]}v[y]=[z];v[z]=[A];v[A]=[B,9];v[E]=[9,10];v[G]=[9];v[10]=[15];v[D]=[15,H];v[B]=[15];v[I]=[J];
var Ja={e:[y],f:y},Ka={e:[y,y],f:y},La={e:[z],f:z},O={e:[z,z],f:z},Ma={e:[],f:A},P={e:[A],f:A},Q={e:[A,A],f:A},R={e:[B],f:B},S={e:[B,B],f:B},Na={e:[D,D],f:D},Oa={e:[E,E],f:E},Pa={e:[G,G],f:G},Qa={e:[A],f:B},T={e:[B],f:A},Ra={e:[D],f:A},Sa={e:[E],f:A},Ta={e:[G],f:A},Ua={e:[D,D],f:A},Va={e:[E,E],f:A},Wa={e:[G,G],f:A},Xa={e:[z,z],f:y},Ya={e:[A,A],f:y},U=Ga(1),Za=Ga(2),$a=Ga(3);N.sqrt=[Qa,R];N.abs=[P,T,Ra,Sa,Ta];N.exp=[P,R];N.log=[Qa,R];N.sin=[P,R];N.cos=[P,R];N.tan=[P,R];N.arccos=[Qa,R];
N.arcsin=[Qa,R];N.arctan=[P,R];N.arctan2=[Q,S,{e:[{type:"list",length:2,F:A}],f:A},{e:[{type:"list",length:2,F:B}],f:B}];N.add=[O,Q,S,Na,Oa,Pa];N.sub=[O,Q,S,Na,Oa,Pa,{e:[5,z],f:z},{e:[5,A],f:A},{e:[5,B],f:B},{e:[5,D],f:D},{e:[5,E],f:E},{e:[5,G],f:G}];N.mult=[O,Q,S,{e:[I,D],f:D},{e:[J,H],f:H},{e:[oa,E],f:E},{e:[pa,G],f:G}];var ab=[B,D,E,G];ab.forEach(function(a){N.mult.push({e:[A,a],f:a});N.mult.push({e:[a,A],f:a})});N.mult.push(Ua);N.mult.push(Va);N.mult.push(Wa);N.div=[Q,S];
ab.forEach(function(a){N.div.push({e:[a,A],f:a})});N.pow=[{e:[A,z],f:A},{e:[B,B],f:B}];N.re=[T];N.conjugate=[R];N.im=[T];N.round=[{e:[A],f:z},{e:[B],f:B}];N.floor=[{e:[A],f:z},{e:[B],f:B}];N.ceil=[{e:[A],f:z},{e:[B],f:B}];N.mod=[O,Q,S];N.random=[Ma,P,R];N.randominteger=[La];N.randomint=[La];N.seedrandom=[{e:[A],f:5}];N.random=[{e:[],f:A}];N.randombool=[{e:[],f:y}];N.randomnormal=[{e:[],f:A}];N._=[{e:[D,z],f:A},{e:[E,z],f:A},{e:[G,z],f:A},{e:[H,z],f:B}];N["^"]=N.pow;N["*"]=N.mult;N["/"]=N.div;
N["+"]=N.add;N["-"]=N.sub;[">","<",">=","<=","=="].forEach(function(a){return N[a]=[Xa,Ya]});N["&"]=[Ka];N["%"]=[Ka];N["="]=[{e:[U,Za],f:Za}];N[";"]=[{e:[U,5],f:U},{e:[U,Za],f:Za},{e:[U],f:U}];N.not=[Ja];N.and=[Ka];N.or=[Ka];N.xor=[Ka];"red green blue gray grey hue".split(" ").forEach(function(a){return N[a]=[{e:[A],f:E}]});N["if"]=[{e:[y,U,U],f:U},{e:[y,U,Za],f:5},{e:[y,U],f:5}];N.repeat=[{e:[z,U],f:U}];
N.apply=[{e:[{type:"list",length:U,F:Za},{type:"expression",e:Za,f:$a}],f:{type:"list",length:U,F:$a}}];N.min=[O,Q];N.max=[O,Q];N.complex=[{e:[D],f:B}];N.re=[T];N.im=[T];N.genList=[{e:[A,A],f:D},{e:[A,A,A],f:E},{e:[A,A,A,A],f:G},{e:[B,B],f:H}];N.imagergb=[{e:[15,15,K,15],f:E}];N.imagergba=[{e:[15,15,K,15],f:G}];Object.freeze(N);for(var bb in Ia)var cb=Ia[bb]+1,db=M,M=db>cb?db:cb;
for(var w=Array(M),x=Array(M),eb=0;eb<M;eb++){w[eb]=Array(M);x[eb]=Array(M);for(var fb=0;fb<M;fb++)w[eb][fb]=1073741824,x[eb][fb]=-1;w[eb][eb]=0}for(var gb=0;gb<M;gb++)for(var hb in v[gb]){var ib=v[gb][hb];w[gb][ib]=1;x[gb][ib]=ib}for(var jb=0;jb<M;jb++)for(var kb=0;kb<M;kb++)for(var lb=0;lb<M;lb++)w[kb][jb]+w[jb][lb]<w[kb][lb]&&(w[kb][lb]=w[kb][jb]+w[jb][lb],x[kb][lb]=x[kb][jb]);Object.freeze(v);Object.freeze(w);Object.freeze(x);var V={};function mb(a,b){if(!b.K.hasOwnProperty(a)){b.K[a]=!0;for(var d in V[a])mb(V[a][d],b);b.L.push(aa[a])}}function W(a){return function(b,d){mb(a,d);return X(a)(b)}};function Fa(a){this.q={};this.m={};this.g={};this.j={};this.K={};this.L=[];this.J={};this.H=[];this.G=!1;this.k={};this.r=a;this.t={}}function nb(a,b,d,e){if(!C(d,e))return console.error(L(d)+" is no subtype of "+L(e)+" (trying to cast the term "+b+")"),b;if(d===e)return b;var c=x[d][e];return Y.hasOwnProperty(d)&&Y[d].hasOwnProperty(c)?nb(a,Y[d][c](b,a),c,e):(console.error("CindyGL: No type-inclusion function for "+L(d)+" to "+L(c)+" found. \n Using identity"),nb(a,b,c,e))}
function ob(a,b,d){if(b.isuniform)return a.j[b.uvariable].type;if("variable"===b.ctype){b=b.name;if("#"===b)return D;if(a.g.hasOwnProperty(d)&&a.g[d].hasOwnProperty(b))return a.g[d][b];if(a.g.hasOwnProperty("")&&a.g[""].hasOwnProperty(b))return a.g[""][b]}else if("function"===b.ctype&&a.k.hasOwnProperty(b.oper)){if(a.g.hasOwnProperty("")&&a.g[""].hasOwnProperty(b.oper))return a.g[""][b.oper]}else{if("number"===b.ctype)return 0!==b.value.imag?B:(b.value.real|0)===b.value.real?z:A;if("void"===b.ctype)return 5;
if("field"===b.ctype)return A;if("string"===b.ctype)return K;var e=Array(b.args.length),c;for(c in b.args)e[c]=pb(a,b.args[c],d);a=Ha(la(b.oper),e);return void 0===a||a===n?n:a.f}return n}function pb(a,b,d){a.G&&b.hasOwnProperty("computedType")||(b.computedType=ob(a,b,d));return b.computedType}
function qb(a,b){function d(a,b){e.hasOwnProperty(b)||(e[b]=[]);c.hasOwnProperty(b)||(c[b]={});for(var k in a.args)d(a.args[k],b);if("="===a.oper){var m=a.args[0].name;k=b;-1===e[b].indexOf(m)&&(k="",-1===e[k].indexOf(m)&&(e[k].push(m),c[k][m]=[]));c[k][m].push({n:a.args[1],D:b})}else if(void 0!==a.oper&&"regional"===la(a.oper))for(m=0;m<a.args.length;m++)"variable"===a.args[m].ctype&&(k=a.args[m].name,-1===e[b].indexOf(k)&&(e[b].push(k),c[b][k]=[]));else if("function"===a.ctype&&f.hasOwnProperty(a.oper)){k=
a.oper;e.hasOwnProperty(k)||(e[k]=[]);c.hasOwnProperty(k)||(c[k]={});for(m in f[k].arglist){var t=f[k].arglist[m].name;e[k].push(t);c[k].hasOwnProperty(t)||(c[k][t]=[]);c[k][t].push({n:a.args[m],D:b})}d(f[k].body,k);-1===e[""].indexOf(k)&&(e[""].push(k),c[""][k]=[{n:f[k].body,D:k}])}}var e={},c={},f=a.k;d(b,"");a.q=e;a.m=c}
function sb(a,b){function d(a,b){if(a.hasOwnProperty("dependsOnPixel")&&!0===a.dependsOnPixel)return!0;if("variable"===a.ctype){var e=a.name;return c.hasOwnProperty(b)&&c[b][e]||-1===f[b].indexOf(e)&&c.hasOwnProperty("")&&c[""][e]?a.dependsOnPixel=!0:a.dependsOnPixel=!1}for(e in a.args)if(d(a.args[e],b))return a.dependsOnPixel=!0;return"function"===a.ctype&&"random"===la(a.oper)||"function"===a.ctype&&g.hasOwnProperty(a.oper)&&(e=a.oper,c.hasOwnProperty(e)||(c[e]={}),d(g[e].body,e))?a.dependsOnPixel=
!0:"field"===a.ctype?a.dependsOnPixel=d(a.obj,b):!1}function e(a,b){if(d(a,b)){for(var c in a.args)e(a.args[c],b);"field"===a.ctype&&e(a.obj,b);"function"===a.ctype&&g.hasOwnProperty(a.oper)&&(c=a.oper,m.hasOwnProperty(c)||(m[c]=!0,e(g[c].body,c)))}else"number"!==a.ctype&&"string"!==a.ctype&&"void"!==a.ctype&&(c=ra(),a.isuniform=!0,a.uvariable=c,t[c]={n:a,type:n})}var c={"":{"#":!0}},f=a.q,g=a.k,p;for(p in a.m)for(var k in a.m[p])c.hasOwnProperty(p)||(c[p]={}),c[p][k]=!0;d(b,"");var m={"":!0},t={};
e(b,"");a.j=t;console.log(a.j)}function tb(a,b){if("function"===b.ctype&&!a.k.hasOwnProperty(b.oper)&&null!==a.r.getMyfunction(b.oper)){var d=b.oper;a.k[d]=ia(a.r.getMyfunction(d));tb(a,a.k[d].body)}for(var e in b.args)tb(a,b.args[e])}
Fa.prototype.compile=function(a,b,d){var e=this;if(a.isuniform){a=a.uvariable;var c=this.j[a].type;return d?{code:"",h:a,type:c}:{code:""}}if(";"===a.oper){for(var c={type:5,h:""},f="",g=a.args.length-1,p=g;0<=p;p--)"void"===a.args[p].ctype&&g--;for(p=0;p<=g;p++)c=this.compile(a.args[p],b,d&&p===g),f+=c.code;return d?{code:f,h:c.h,type:c.type}:{code:f}}if("="===a.oper)return c=this.compile(a.args[1],b,!0),f=a.args[0].name,a=f+" = "+nb(this,c.h,c.type,pb(this,a.args[0],b)),d?{code:c.code,h:a,type:this.g[b][f]}:
{code:c.code+a+";\n"};if("repeat$2"===a.oper){if("number"!==a.args[0].ctype)return console.error("repeat possible only for fixed constant number in GLSL"),n;c=ra();f=a.args[0].value.real|0;a=this.compile(a.args[1],b,d);p=g="";d&&(p=ra(),g+=q[a.type]+" "+p+";");g=g+("for(int "+c+"=0; "+c+" < "+f+"; "+c+"++) {\n")+a.code;d&&(g+=p+" = "+a.h+";\n");g+="}\n";return d?{code:g,h:p,type:a.type}:{code:g}}if("repeat$3"===a.oper)console.error("TODO");else{if("if$2"===a.oper||"if$3"===a.oper){var p=this.compile(a.args[0],
b,!0),k=this.compile(a.args[1],b,d),f=c="",g=pb(this,a,b);d&&(f=ra(),c+=q[g]+" "+f+";");c+=p.code;c+="if("+p.h+") {\n";c+=k.code;d&&(c+=f+" = "+nb(this,k.h,k.type,g)+";\n");"if$3"===a.oper&&(a=this.compile(a.args[2],b,d),c=c+"} else {\n"+a.code,d&&(c+=f+" = "+nb(this,a.h,a.type,g)+";\n"));c+="}\n";return d?{code:c,h:f,type:g}:{code:c}}if("function"===a.ctype||"infix"===a.ctype){var m=a.oper;a=a.args.map(function(a){return e.compile(a,b,!0)});f=void 0;g=a.map(function(a){return a.type});k=p=void 0;
if(this.k.hasOwnProperty(m)){f=ub(this,m);p=Array(a.length);for(k=0;k<a.length;k++)p[k]=this.g[m][this.k[m].arglist[k].name];k=this.g[""][m]}else{var m=la(m),t=Ha(m,g);if(t===n)return console.error("Could not find a signature for "+m+"("+g.map(L).join(", ")+").\nReturning empty code"),d?{h:"",type:5,code:""}:{code:""};var p=t.e,k=t.f,f=n,F;for(F in r[m])if(ka(r[m][F][0],t)){f=r[m][F][1];break}f===n&&(console.error("There is no webgl-implementation for "+m+"("+t.e.map(L).join(", ")+").\ndefualt: Try glsl-function with same name"),
f=function(a){return m+"("+a.join(", ")+")"})}F="";t=Array(a.length);for(c in a)F+=a[c].code,t[c]=nb(this,a[c].h,g[c],p[c]);a=f(t,this);return d?{h:a,type:k,code:F}:{code:F+a+";\n"}}if("number"===a.ctype)return c=pb(this,a,b),f=void 0,c===z?f=a.value.real|0:c===A?f=a.value.real:c===B&&(f="vec2( "+a.value.real+", "+a.value.imag+")"),d?{h:f,type:c,code:""}:{code:c+";\n"};if("string"===a.ctype)return c=K,a=a.value,d?{h:a,type:c,code:""}:{code:c+";\n"};if("variable"===a.ctype)return c=pb(this,a,b),a=
a.name,"#"===a&&(a="cgl_pixel"),d?{h:a,type:c,code:""}:{code:a+";\n"};if("void"===a.ctype)return d?{h:"",type:5,code:""}:{code:""};if("field"===a.ctype)return c=pb(this,a,b),f=e.compile(a.obj,b,!0).h,f+="."+a.key,d?{h:f,type:c,code:""}:{code:f+";\n"}}console.error("dont know how to this.compile "+JSON.stringify(a))};function ub(a,b){vb(a,b,a.k[b].arglist.length);return X(b)}
function vb(a,b,d){if(!a.J.hasOwnProperty(b)){a.J[b]=!0;for(var e=a.k[b],c=Array(d),f=0;f<d;f++)c[f]=e.arglist[f].name;d=5===q[a.g[""][b]];var f=q[a.g[""][b]]+" "+la(b)+"("+c.map(function(c){return q[a.g[b][c]]+" "+c}).join(", ")+"){\n",g;for(g in a.q[b]){var p=!0,k=a.q[b][g],m;for(m in c)p&=k!==c[m];p&&(f+=q[a.g[b][k]]+" "+k+";\n")}e=a.compile(e.body,b,!d);f+=e.code;d||(f+="return "+nb(a,e.h,e.type,a.g[""][b])+";\n");a.H.push(f+"}\n")}}
function Ea(a,b){var d=b=ia(b);a.G=!1;tb(a,d);qb(a,d);sb(a,d);for(var e in a.j)a.j[e].type=A,d=a.r.evaluateAndVal(a.j[e].n),a.j[e].type=ma(d),console.log("guessed type "+L(a.j[e].type)+" for "+JSON.stringify(a.j[e].n.name)+" because it has value "+JSON.stringify(d.value));for(e=!0;e;){e=!1;for(var c in a.m)for(var f in a.m[c])for(var g in a.m[c][f]){var d=pb(a,a.m[c][f][g].n,a.m[c][f][g].D),p=n;a.g.hasOwnProperty(c)&&a.g[c].hasOwnProperty(f)&&(p=a.g[c][f]);var k=p;d!==n&&(k=p===n?d:C(d,p)?p:na(p,
d),k!==n&&k!==p&&(a.g.hasOwnProperty(c)||(a.g[c]={}),a.g[c][f]=k,console.log("variable "+f+" in scope "+c+" got type "+L(k)+" (oltype/othertype is "+L(p)+"/"+L(d)+")"),e=!0))}}a.G=!0;c=a.compile(b,"",!0);f=nb(a,c.h,c.type,9);C(c.type,9)||console.error("expression does not generate a color");var m;g=[];for(m in a.j)g.push("uniform "+q[a.j[m].type]+" "+m+";");m=g.join("\n");g="";for(var t in a.t)g+=a.t[t]+"\n";m=m+g+a.L.join("\n");for(var F in a.q[""])t=a.q[""][F],a.k.hasOwnProperty(t)||(m+=q[a.g[""][t]]+
" "+t+";\n");m+=a.H.join("\n");m+="void main(void) {\n"+c.code+"gl_FragColor = "+f+";\n}\n";console.log(m);F=[];for(var rb in a.t)F.push(rb);return{code:m,j:a.j,v:F}};function wb(a,b){var d=a[2];b.t.hasOwnProperty(d)||(b.t[d]=["uniform sampler2D _sampler_",d,";uniform float _ratio_",d,";uniform vec2 _cropfact_",d,";vec4 _imagergba_",d,"(vec2 A, vec2 B, vec2 p) {p -= A; B -= A;float b = dot(B,B);p = vec2(dot(p,B),_ratio_",d,"*dot(p,vec2(-B.y,B.x)))/b;if(0. <= p.x && p.x <= 1. && 0. <= p.y && p.y <= 1.)return texture2D(_sampler_",d,", p*_cropfact_",d,");else return vec4(0.);}vec3 _imagergb_",d,"(vec2 A, vec2 B, vec2 p) {return _imagergba_",d,"(A, B, p).rgb;}"].join(""));
return["_imagergba_",d,"(",a[0],",",a[1],",",a[3],")"].join("")};q[y]="bool";q[z]="int";q[A]="float";q[B]="vec2";q[5]="void";q[D]="vec2";q[E]="vec3";q[G]="vec4";q[I]="mat2";q[oa]="mat3";q[pa]="mat4";q[9]="vec4";q[10]="vec3";q[15]="vec2";q[H]="vec4";q[J]="mat4";Object.freeze(q);function X(a){return function(b){return la(a)+"("+b+")"}}function Z(a){return function(b){return"("+b.join(a)+")"}}function xb(a){return a}var Y={},yb;for(yb in Ia)Y[Ia[yb]]={};Y[y][z]=X("int");Y[z][A]=X("float");Y[A][B]=function(a){return"vec2("+a+", 0.)"};Y[A][9]=W("float2color");
Y[9][E]=function(a){return"("+a+").rgb"};Y[9][G]=xb;Y[D][10]=function(a){return"vec3("+a+",1.0)"};Y[E][9]=function(a){return"vec4("+a+",1.0)"};Y[E][10]=xb;Y[G][9]=xb;Y[10][D]=W("dehomogenize");Y[10][E]=xb;Y[10][15]=W("dehomogenize");Y[D][15]=xb;Y[B][15]=xb;Y[D][H]=W("vec2complex");Y[I][J]=W("mat2complex");Object.freeze(Y);r.sqrt=[[Qa,W("sqrtf")],[R,W("sqrtc")]];r.abs=[[P,X("abs")],[T,X("length")],[Ra,X("length")],[Sa,X("length")],[Ta,X("length")]];r.sin=[[P,X("sin")],[R,W("sinc")]];
r.cos=[[P,X("cos")],[R,W("cosc")]];r.tan=[[P,X("tan")],[R,W("tanc")]];r.exp=[[P,X("exp")],[R,W("expc")]];r.arctan=[[P,X("atan")],[R,W("arctanc")]];r.log=[[Qa,W("logr")],[R,W("logc")]];r.add=[];r.sub=[];[O,Q,S,Na,Oa,Pa].forEach(function(a){r.add.push([a,Z("+")]);r.sub.push([a,Z("-")])});function zb(a){return"-("+a[1]+")"}[z,A,B,D,E,G].forEach(function(a){r.sub.push([{e:[5,a],f:a},zb])});function Ab(a){return isFinite(a[1])?"("+a[0]+")["+(a[1]-1)+"]":"("+a[0]+")["+a[1]+"-1]"}
r._=[[{e:[D,z],f:A},Ab],[{e:[E,z],f:A},Ab],[{e:[G,z],f:A},Ab],[{e:[H,z],f:B},function(a){if(1===a[1])return"("+a[0]+").xy";if(2===a[1])return"("+a[0]+").zw";console.error("access of components of complex[2] only works for indeces that were hardcoded in CindyJS");return"ERROR: SEE CONSOLE (index was "+a[1]+") \n"}]];r["+"]=r.add;r["-"]=r.sub;
r.mult=[[O,Z("*")],[Q,Z("*")],[S,W("multc")],[{e:[I,D],f:D},Z("*")],[{e:[J,H],f:H},Z("*")],[{e:[oa,E],f:E},Z("*")],[{e:[pa,G],f:G},Z("*")],[Ua,X("dot")],[Va,X("dot")],[Wa,X("dot")]];ab.forEach(function(a){r.mult.push([{e:[A,a],f:a},Z("*")]);r.mult.push([{e:[a,A],f:a},Z("*")])});r["*"]=r.mult;r.div=[[Q,Z("/")],[S,W("divc")]];ab.forEach(function(a){r.div.push([{e:[a,A],f:a},Z("/")])});r["/"]=r.div;r.re=[[T,W("realc")]];r.im=[[T,W("imagc")]];r.floor=[[{e:[A],f:z},function(a){return"int(floor("+a+"))"}]];
r.round=[[{e:[A],f:z},function(a){return"int(floor("+a+"+.5))"}]];r.ceil=[[{e:[A],f:z},function(a){return"int(ceil("+a+"))"}]];r.mod=[[O,Z("%")],[Q,X("mod")]];r.random=[[Ma,W("random")]];r.arctan2=[[Q,X("atan")],[S,W("arctanc")]];["red","green","blue","gray","hue"].forEach(function(a){return r[a]=[[{e:[A],f:E},W(a)]]});r.grey=r.gray;r.min=[[O,X("min")],[Q,X("min")]];r.max=[[O,X("max")],[Q,X("max")]];r.complex=[[{e:[D],f:B},xb]];
r.pow=[[{e:[A,z],f:A},function(a){return"pow("+a[0]+", float("+a[1]+"))"}],[{e:[B,B],f:B},W("powc")]];r["^"]=r.pow;r.re=[[T,function(a){return"("+a+").x"}]];r.conjugate=[[R,W("conjugate")]];r.im=[[T,function(a){return"("+a+").y"}]];r.genList=[[{e:[A,A],f:D},X("vec2")],[{e:[A,A,A],f:E},X("vec3")],[{e:[A,A,A,A],f:G},X("vec4")],[{e:[B,B],f:H},X("vec4")]];r["&"]=[[Ka,Z("&&")]];r["%"]=[[Ka,Z("||")]];[">","<",">=","<=","=="].forEach(function(a){return r[a]=[[Xa,Z(a)],[Ya,Z(a)]]});
r.imagergb=[[{e:[15,15,K,15],f:E},function(a,b){var d=a[2];wb(a,b);return["_imagergb_",d,"(",a[0],",",a[1],",",a[3],")"].join("")}]];r.imagergba=[[{e:[15,15,K,15],f:G},wb]];Object.freeze(r);V.divc=["multc"];V.powc=["expc","multc","logc"];V.sqrtc=["expc","multc","logc"];V.arccosc=["multc","negc","sqrtc","addc","logc"];V.arcsinc=["multc","negc","sqrtc","addc","logc"];V.tanc=["sinc","cosc","divc"];V.arctanc=["logc","addc","multc","subc"];V.hue=["hsv2rgb"];Object.freeze(V);
})();//# sourceMappingURL=CindyGL.js.map


