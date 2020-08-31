//Variables And Functions For Additional Use With The Game!!!
var browserClientPlatform = navigator.platform;
var OS = window.navigator.userAgent;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = false || !!document.documentMode;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isBlink = (isChrome || isOpera) && !!window.CSS;
var isJRE = navigator.javaEnabled();
var language = navigator.language;
var isOnline = navigator.onLine;


//Playing Audio Function!!!
function playAudio(url)
{
	var audio = new Audio(url);
	audio.play();
}



//Toggle Fullscreen Function!!!
function toggleFullscreen()
	{
	var screen = document.documentElement;
	if (screen.requestFullscreen) 
	{
    screen.requestFullscreen();
    } 
    if (screen.mozRequestFullScreen) 
    { 
    /* Firefox */
    screen.mozRequestFullScreen();
    } 
    if (screen.webkitRequestFullscreen) 
    { 
    /* Chrome, Safari and Opera */
    screen.webkitRequestFullscreen();
    } 
    if(screen.msRequestFullscreen) 
    {
	/* IE/Edge */
    screen.msRequestFullscreen();
    }
	}
	
	
	//function Exit Fullscreen!!!
	function exitFullscreen()
	{
	if(document.exitFullscreen)
	{
	document.exitFullscreen();
	}
	/* Firefox */
	if(document.mozCancelFullScreen)
	{
	document.mozCancelFullScreen();
	}
	/* Chrome, Safari and Opera */
	if(document.webkitExitFullscreen)
	{
	document.webkitExitFullscreen();
	}
	/* IE/Edge */
	if(document.msExitFullscreen)
	{
	document.msExitFullscreen();
	}
	}