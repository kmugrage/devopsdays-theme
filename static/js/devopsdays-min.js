function getMonth(e){"use strict";var t=new Date(e),n=t.getMonth(),r=[];return r[0]="January",r[1]="February",r[2]="March",r[3]="April",r[4]="May",r[5]="June",r[6]="July",r[7]="August",r[8]="September",r[9]="October",r[10]="November",r[11]="December",r[n]}$(function(){$("#accordion").accordion()}),$(function(){$("a.embed").oembed()}),function(){"use strict";var e="008769174023796316711:pj3syggtkz0",t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cse.google.com/cse.js?cx="+e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),function(){"use strict";var e=new Date;$(".left-nav-months").text(function(t,n){getMonth(e)==n&&$(this).addClass("current")})}();