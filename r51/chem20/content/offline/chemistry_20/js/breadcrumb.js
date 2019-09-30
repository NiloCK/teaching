/*****
Dynamic Javascript Breadcrumb Navigation 
*****/
var crumbsep = " > ";
var precrumb = "<span class=\"crumb\">";
var postcrumb = "</span>";
var sectionsep = "/";
var rootpath = "/BIOLOGY20"; // Use "/" for root of domain.
var rootname = "Biology 20";
var ucfirst = 1; // if set to 1, makes "directory" default to "Directory"
var divID = "breadcrumb";//the div id where the breadcrumbs are displayed
//
function updateBreadcrumbs() {
	var showpage = document.title; // this contains what to show as the current page in the crumb. Set to "" to show nothing
	var objurl = new Object;
	objurl['topics'] = 'All Topics';
	
	// Grab the page's url and break it up into directory pieces
	// remove the mainFrame reference if the _parent window is the locatin
	var pageurl = (new String(mainFrame.document.location));
	var protocol = pageurl.substring(0, pageurl.indexOf("//") + 2);
	pageurl = pageurl.replace(protocol, ""); // remove protocol from pageurl
	var rooturl = pageurl.substring(0, pageurl.indexOf(rootpath) + rootpath.length); // find rooturl
	if (rooturl.charAt(rooturl.length - 1) == "/") //remove trailing slash
	{
		rooturl = rooturl.substring(0, rooturl.length - 1);
	}
	pageurl = pageurl.replace(rooturl, ""); // remove rooturl from pageurl
	if (pageurl.charAt(0) == '/') // remove beginning slash
	{
	  pageurl = pageurl.substring(1, pageurl.length);
	}
	
	var page_ar = pageurl.split(sectionsep);
	var currenturl = protocol + rooturl;
	var allbread = precrumb + "<a href=\"" + currenturl +"/index.html" + "\">" + rootname + "</a>" + postcrumb; // start with root
	
	for (i=0; i < page_ar.length-1; i++)
	{
	  var displayname = "";
	  currenturl += "/" + page_ar[i];
	  if (objurl[page_ar[i]])
	  {
		displayname = objurl[page_ar[i]];
	  }
	  else
	  {
		if (ucfirst == 1)
		{
		  displayname = page_ar[i].charAt(0).toUpperCase() + page_ar[i].substring(1);
		  //currenturl += "/introduction.html";
		}
		else
		{
		  displayname = page_ar[i];
		}
	  }
	  allbread += crumbsep + precrumb + "<a href=\"" + currenturl +"/introduction.html"+ "\" target='mainFrame' onClick='clickMe()'>" + displayname + "</a>" + postcrumb;
	}
	
	if (showpage != "")
	{
	  allbread += crumbsep + showpage;
	}
	document.getElementById(divID).innerHTML = "<img src=..//"images/1x1_inv.gif/" alt=\"invisibleimage\"  align=\"right\" hspace=\"0\" vspace=\"0\"><br>" + allbread;
	//document.write(allbread);
}
function clickMe(){
	//myUnit = mainFrame.myUnit;
	//document.getElementById('leftFrame').contentWindow.changeSelection(myUnit);
}
