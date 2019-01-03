var PostValue='';

function getParameterByName(name, url) {
 if (!url) url = window.location.href;
 name = name.replace(/[\[\]]/g, "\\$&");
 var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),results = regex.exec(url);
 if (!results) return null;
 if (!results[2]) return '';
 return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function ChangeLnk (name, url){
 document.getElementById(name).src = kurl + url;
}

function addAnEventListener(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener(event){
 if(event.origin == kurl){
  PostValue = event.data;
  Event_IFL();
 }
}

function Event_IFL(){
var arp = PostValue.split(";");
if(arp[0] == 'razm'){
 document.getElementById(arp[1]).style.height = parseInt(arp[2])+16;
} else
if(arp[0] == 'link'){
 ChangeLnk (arp[1],arp[2]);
}
else
if(arp[0] == 'refr'){
 window.location = window.location.toString()+arp[2];
}

}

addAnEventListener(window,'message',iFrameListener);
var kurl = "http://213.80.225.152:8080";