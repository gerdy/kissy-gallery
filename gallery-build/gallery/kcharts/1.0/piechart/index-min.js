KISSY.add("gallery/kcharts/1.0/piechart/index",function(q,C,D,E){function j(i,c){return i.toFixed(void 0==typeof c?c:2)}function e(i){return parseFloat(i.toFixed(4))}function z(i,c){this.colorseed=0;this.container=q.get(i);this.paper=C(q.get(i));this.labelLayer=this.paper.group();this.cfg=q.mix(F,c);this.percentData=this.sectors=null;this.drawSector()}var n=q.DOM,w=[{DEFAULT:"#FF8F44",HOVER:"#FF8F44"},{DEFAULT:"#4573a7",HOVER:"#5E8BC0"},{DEFAULT:"#aa4644",HOVER:"#C35F5C"},{DEFAULT:"#89a54e",HOVER:"#A2BE67"},
{DEFAULT:"#806a9b",HOVER:"#9982B4"},{DEFAULT:"#3e96ae",HOVER:"#56AFC7"},{DEFAULT:"#d9853f",HOVER:"#F49D56"},{DEFAULT:"#808080",HOVER:"#A2A2A2"},{DEFAULT:"#188AD7",HOVER:"#299BE8"},{DEFAULT:"#90902C",HOVER:"#B7B738"}],F={labelPadding:20};q.extend(z,q.Base,{bindEvent:function(){for(var i=this.sectors,c=this,f=0;f<i.length;f++)(function(b){i[b].on("mouseenter",function(){c.fire("mouseenter",{target:this})},i[b]).on("mouseleave",function(){c.fire("mouseleave",{target:this})},i[b]).on("click",function(){c.fire("click",
{target:this})},i[b])})(f)},onend:function(){this.drawLabel();this.bindEvent();this.fire("afterRender")},sectorFull:function(i,c,f,b,h){var d=Math.PI/180,a=(b+h)/2,r=i+f*Math.cos(-a*d),s=i+f*Math.cos(-b*d),m=i+f*Math.cos(-h*d),t=c+f*Math.sin(-a*d),k=c+f*Math.sin(-b*d),d=c+f*Math.sin(-h*d),i=["M",j(i),c,"L",j(s),j(k),"A",f,f,0,+(180<Math.abs(h-b)),1,j(m),j(d),"z"];b>h?(c=b,b=h):c=h;i.middle={from:c,to:b,angel:a,x:r,y:t};return i},sector:function(i,c,f,b,h,d){var a=Math.PI/180,r=(h+d)/2,s=i+f*Math.cos(-r*
a),m=i+f*Math.cos(-h*a),t=i+f*Math.cos(-d*a),k=i+b*Math.cos(-h*a),l=i+b*Math.cos(-d*a),i=c+f*Math.sin(-r*a),G=c+f*Math.sin(-h*a),o=c+f*Math.sin(-d*a),e=c+b*Math.sin(-h*a),c=c+b*Math.sin(-d*a),f=["M",j(k),j(e),"L",j(m),j(G),"A",f,f,0,+(180<Math.abs(d-h)),1,j(t),j(o),"L",j(l),j(c),"A",b,b,0,+(180<Math.abs(d-h)),0,j(k),j(e)];h>d?(b=h,h=d):b=d;f.middle={from:b,to:h,angel:r,x:s,y:i};return f},drawSector:function(){var i=this.paper,c=this,f=this.cfg,b=f.data,h=0,d=[],a,r,s=f.cx,m=f.cy,j=f.r,k,l;this.percentData=
d;for(var e=0;e<b.length;e++)h+=b[e];for(e=0;e<b.length;e++)d.push(b[e]/h);var o=c.sectors=[],n=d.length,A=f.emptyRadius,h=q.mix({type:"sector"},f.anim),b={sector:function(b){for(var b=b.s,h=f.animater?b*j:j,e,v,g=0;g<n;g++)if(g?(e=v,v=e-360*b*d[g]):(a=90+360*(d[0]/2),r=90-360*(d[0]/2),e=a+b*(90-a),v=e+b*(r-a)),k=A?c.sector(s,m,h,A,e,v):c.sectorFull(s,m,h,e,v),l=k.join(" "),o[g]?o[g].attr("path",l):(e=i.path(l),o[g]=e,e=c.colorseed++%10,o[g].attr({fill:w[e].DEFAULT,stroke:"#fff"})),1===b)o[g].middle=
k.middle},r:function(b,f){for(var f=b.s,h=f*j,e,g,p=0;p<n;p++)if(p?(e=g,g=e-360*d[p]):(a=90+360*(d[0]/2),r=90-360*(d[0]/2),e=a+(90-a),g=e+(r-a)),k=c.sectorFull(s,m,h,e,g),l=k.join(" "),o[p]?o[p].attr("path",l):(e=i.path(l),o[p]=e,e=c.colorseed++%10,o[p].attr({fill:w[e].DEFAULT,stroke:"#fff"})),1===f)o[p].middle=k.middle}}[h.type];f.anim?(h=new D(h),h.on("step",b,this),h.on("end",this.onend,this),h.run()):(b({s:1,t:1}),this.onend())},drawOneSector:function(i,c){var c=i.s,f=this.paper,b=this.cfg,h=
b.r,d=this.percentData,h=b.animater?c*h:h,a,e,j,m=b.cx,b=b.cy,n=d.length,k=[];this.sectors=k;for(var l=0;l<n;l++)if(l?(j=a,a=j-360*c*d[l]):(a=90+360*(d[0]/2),e=90-360*(d[0]/2),j=a+c*(90-a),a=j+c*(e-a)),j=this.sector(m,b,h,60,j,a),e=j.join(" "),k[l]?k[l].attr("path",e):(e=f.path(e),k[l]=e,e=this.colorseed++%10,k[l].attr({fill:w[e].DEFAULT,stroke:"#fff"})),1===c)k[l].middle=j.middle},scaleSector:function(e,c,f,b,h){e.scale(c,f,b,h)},transformSector:function(e,c){if(this.currentTransformedSector!=e){var f,
b;c||(c=10);this.currentTransformedSector&&(b=this.currentTransformedSector.middle.angel*Math.PI/180,f=c*Math.cos(b),b=-c*Math.sin(b),this.currentTransformedSector.translate(-f,-b));b=e.middle.angel*Math.PI/180;f=c*Math.cos(b);b=-c*Math.sin(b);e.translate(f,b);this.currentTransformedSector=e}},getLabelXY:function(i,c,f,b){f=(this.textlabel||(this.textlabel=new E)).getTextSize(f);i=b?i-f.width:i+5;c-=f.height/2;return{x:e(i),y:e(c)}},drawLabel:function(){for(var i=this.labelLayer,c=this.cfg,f=c.cx,
b=c.cy,h=this.sectors,d,a,j=h.length,s=c.labels,m=Math.PI/180,t=Math.cos,k=Math.sin,l=Math.asin,q,o,w,A,z,x=c.r,y=c.r+c.labelPadding,v=c.r+2*c.labelPadding/3,g,p=[],u=[],B=0;B<j;B++)d=h[B],a=d.middle,g={},-90<=a.angel&&90>=a.angel?p.push(g):u.push(g),a=a.angel%360*m,q=e(f+x*t(-a)),o=e(b+x*k(-a)),w=e(f+v*t(-a)),A=e(b+v*k(-a)),z=e(f+y*t(-a)),a=e(b+y*k(-a)),g.i=B,g.x=q,g.y=o,g.x1=w,g.y1=A,g.x2=z,g.y2=a,d.label=g;j=u.length;m=0;Math.round(2*c.r/j);for(h=n.offset(this.container);j>m;)g=u[m],d=g.y2,a=(d-
b)/y,a=1<a?1:-1>a?-1:a,a=Math.PI+l(a),k=e(f+y*t(a)),0<m&&(a=u[m-1],a=a.y3,a-14<d&&(d=a-14)),k-=5,g.x3=k,g.y3=d,x=["M",g.x,g.y,"Q",g.x2,g.y2," ",k,d],a=s[g.i],g.text=a,g=this.getLabelXY(k,d,a,!0),d=n.create('<span class="ks-charts-label"/>'),n.html(d,a),n.css(this.container,"position","relative"),n.css(d,{position:"absolute",left:g.x+"px",top:g.y+"px"}),n.append(d,this.container),i.path(x.join(",")),m++;u=p.length;j=0;Math.round(2*c.r/u);for(c=p.slice(0);u>j;)g=c[j],d=g.y2,0<u&&(a=c[u-1],a.y3+14>d&&
(d=a.y3+14)),a=(d-b)/y,a=1<a?1:-1>a?-1:a,a=l(a),k=e(f+y*t(a)),k+=5,g.x3=k,g.y3=d,x=["M",g.x,g.y,"Q",g.x2,g.y2," ",k,d,"L"],a=s[g.i],g.text=a,g=this.getLabelXY(k,d,a),d=n.create('<span class="ks-charts-label"/>'),n.css(d,{position:"absolute",left:h.left+g.x+"px",top:h.top+g.y+"px"}),n.html(d,a),n.append(d,document.body),i.path(x.join(",")),j++},drawInsideLabel:function(){}});return z},{requires:["../core","../common/ft","../label/piechart-label"]});