	/******
     * Scroll contenu
     * Author: Andjib
     * Date: Samedi 07 Mars 2020
     */	 



	window.onscroll = function(){ scrollFunction(); myFunction(); }; /* Attention! i fo pas inverser l'ordre de ces fonction sinon sa marche pas */
	   
       
	
	
	var menu = document.getElementById("menu"); 
			
	var sidbarG = document.getElementById("sidbarG"); 
	var sidbarD = document.getElementById("sidbarD");
	var contenu_ = document.getElementById("contenu_"); 
	var SCGto = document.getElementById("SCGto"); /* stickyCahiergris-s2 */
	var positionInitiale = menu.offsetTop;


	function myFunction() {

	  if (window.pageYOffset > positionInitiale){
		
		menu.classList.add("stickyNavbar");
	  
		sidbarG.classList.add("stickySidbarG");
		sidbarD.classList.add("stickySidbarD");
		contenu_.classList.add("stickyContenu");
		
		SCGto.classList.add("stickyCahiergrisTo"); /* ce stycky ne prend pas !!! */
	  } else {
	  
		menu.classList.remove("stickyNavbar");
	  
		sidbarG.classList.remove("stickySidbarG");
		sidbarD.classList.remove("stickySidbarD");
		contenu_.classList.remove("stickyContenu");
		
        SCGto.classList.remove("stickyCahiergrisTo");		
	  }

	}
	
	     		
	// When the user clicks on div, open the popup
	function commentaire1() {
	  var popup1 = document.getElementById("myPopup1");
	  popup1.classList.toggle("show");
	}
	function commentaire2() {
	  var popup2 = document.getElementById("myPopup2");
	  popup2.classList.toggle("show");
	}
	function commentaire3() {
	  var popup3 = document.getElementById("myPopup3");
	  popup3.classList.toggle("show");
	}
	function commentaire4() {
	  var popup4 = document.getElementById("myPopup4");
	  popup4.classList.toggle("show");
	}
	function commentaire5() {
	  var popup5 = document.getElementById("myPopup5");
	  popup5.classList.toggle("show");
	}
	function commentaire6() {
	  var popup6 = document.getElementById("myPopup6");
	  popup6.classList.toggle("show");
	}
	function commentaire7() {
	  var popup7 = document.getElementById("myPopup7");
	  popup7.classList.toggle("show");
	}
	function commentaire8() {
	  var popup8 = document.getElementById("myPopup8");
	  popup8.classList.toggle("show");
	}
	function commentaire9() {
	  var popup9 = document.getElementById("myPopup9");
	  popup9.classList.toggle("show");
	}
	function commentaire10() {
	  var popup10 = document.getElementById("myPopup10");
	  popup10.classList.toggle("show");
	}
	function commentaire11() {
	  var popup11 = document.getElementById("myPopup11");
	  popup11.classList.toggle("show");
	}
	function commentaire12() {
	  var popup12 = document.getElementById("myPopup12");
	  popup12.classList.toggle("show");
	}
	function commentaire13() {
	  var popup13 = document.getElementById("myPopup13");
	  popup13.classList.toggle("show");
	}
	function commentaire14() {
	  var popup14 = document.getElementById("myPopup14");
	  popup14.classList.toggle("show");
	}
	function commentaire15() {
	  var popup15 = document.getElementById("myPopup15");
	  popup15.classList.toggle("show");
	}
	function commentaire16() {
	  var popup16 = document.getElementById("myPopup16");
	  popup16.classList.toggle("show");
	}
	function commentaire17() {
	  var popup17 = document.getElementById("myPopup17");
	  popup17.classList.toggle("show");
	}
	function commentaire18() {
	  var popup18 = document.getElementById("myPopup18");
	  popup18.classList.toggle("show");
	}
	function commentaire19() {
	  var popup19 = document.getElementById("myPopup19");
	  popup19.classList.toggle("show");
	}
	function commentaire20() {
	  var popup20 = document.getElementById("myPopup20");
	  popup20.classList.toggle("show");
	}
	function commentaire21() {
	  var popup21 = document.getElementById("myPopup21");
	  popup21.classList.toggle("show");
	}
	function commentaire22() {
	  var popup22 = document.getElementById("myPopup22");
	  popup22.classList.toggle("show");
	}
	function commentaire23() {
	  var popup23 = document.getElementById("myPopup23");
	  popup23.classList.toggle("show");
	}
	function commentaire24() {
	  var popup24 = document.getElementById("myPopup24");
	  popup24.classList.toggle("show");
	}
	function commentaire25() {
	  var popup25 = document.getElementById("myPopup25");
	  popup25.classList.toggle("show");
	}
	function commentaire26() {
	  var popup26 = document.getElementById("myPopup26");
	  popup26.classList.toggle("show");
	}
	function commentaire27() {
	  var popup27 = document.getElementById("myPopup27");
	  popup27.classList.toggle("show");
	}
	function commentaire28() {
	  var popup28 = document.getElementById("myPopup28");
	  popup28.classList.toggle("show");
	}
	function commentaire29() {
	  var popup29 = document.getElementById("myPopup29");
	  popup29.classList.toggle("show");
	}
	function commentaire30() {
	  var popup30 = document.getElementById("myPopup30");
	  popup30.classList.toggle("show");
	}
	function commentaire31() {
	  var popup31 = document.getElementById("myPopup31");
	  popup31.classList.toggle("show");
	}
	function commentaire32() {
	  var popup32 = document.getElementById("myPopup32");
	  popup32.classList.toggle("show");
	}
	function commentaire33() {
	  var popup33 = document.getElementById("myPopup33");
	  popup33.classList.toggle("show");
	}
	function commentaire34() {
	  var popup34 = document.getElementById("myPopup34");
	  popup34.classList.toggle("show");
	}
	function commentaire35() {
	  var popup35 = document.getElementById("myPopup35");
	  popup35.classList.toggle("show");
	}
	function commentaire36() {
	  var popup36 = document.getElementById("myPopup36");
	  popup36.classList.toggle("show");
	}
	function commentaire37() {
	  var popup37 = document.getElementById("myPopup37");
	  popup37.classList.toggle("show");
	}
	function commentaire38() {
	  var popup38 = document.getElementById("myPopup38");
	  popup38.classList.toggle("show");
	}
	function commentaire39() {
	  var popup39 = document.getElementById("myPopup39");
	  popup39.classList.toggle("show");
	}
	function commentaire40() {
	  var popup40 = document.getElementById("myPopup40");
	  popup40.classList.toggle("show");
	}
	function commentaire41() {
	  var popup41 = document.getElementById("myPopup41");
	  popup41.classList.toggle("show");
	}
	function commentaire42() {
	  var popup42 = document.getElementById("myPopup42");
	  popup42.classList.toggle("show");
	}
	function commentaire43() {
	  var popup43 = document.getElementById("myPopup43");
	  popup43.classList.toggle("show");
	}
	function commentaire44() {
	  var popup44 = document.getElementById("myPopup44");
	  popup44.classList.toggle("show");
	}
	function commentaire45() {
	  var popup45 = document.getElementById("myPopup45");
	  popup45.classList.toggle("show");
	}
	function commentaire46() {
	  var popup46 = document.getElementById("myPopup46");
	  popup46.classList.toggle("show");
	}
	function commentaire47() {
	  var popup47 = document.getElementById("myPopup47");
	  popup47.classList.toggle("show");
	}
	function commentaire48() {
	  var popup48 = document.getElementById("myPopup48");
	  popup48.classList.toggle("show");
	}
	function commentaire49() {
	  var popup49 = document.getElementById("myPopup49");
	  popup49.classList.toggle("show");
	}
	function commentaire50() {
	  var popup50 = document.getElementById("myPopup50");
	  popup50.classList.toggle("show");
	}
	function commentaire51() {
	  var popup51 = document.getElementById("myPopup51");
	  popup51.classList.toggle("show");
	}
	function commentaire52() {
	  var popup52 = document.getElementById("myPopup52");
	  popup52.classList.toggle("show");
	}
	function commentaire53() {
	  var popup53 = document.getElementById("myPopup53");
	  popup53.classList.toggle("show");
	}
	/** f°54 et f°55 pour s4 **/
	function commentaire54() {
	  var popup54 = document.getElementById("myPopup54");
	  popup54.classList.toggle("show");
	}
	function commentaire55() {
	  var popup55 = document.getElementById("myPopup55");
	  popup55.classList.toggle("show");
	}

    /** f°1001 , f°1002, et f°1003 pour les titres des sourates **/
	
	function commentaire1001() {
	  var popup1001 = document.getElementById("myPopup1001");
	  popup1001.classList.toggle("show");
	}
	function commentaire1002() {
	  var popup1002 = document.getElementById("myPopup1002");
	  popup1002.classList.toggle("show");
	}
    function commentaire1003() {
	  var popup1003 = document.getElementById("myPopup1003");
	  popup1003.classList.toggle("show");
	}
	// button mobil menu
    function openNav() {
	 var x = document.getElementById("dropdown-btn1");
	  if (x.style.display === "block") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }
	  
	  var y = document.getElementById("dropdown-btn2");
	  if (y.style.display === "block") {
		y.style.display = "none";
	  } else {
		y.style.display = "block";
	  }
	  
	  var z = document.getElementById("dropdown-btn3");
	  if (z.style.display === "block") {
		z.style.display = "none";
	  } else {
		z.style.display = "block";
	  }
	  
	  var t = document.getElementById("dropdown-btn4");
	  if (t.style.display === "block") {
		t.style.display = "none";
	  } else {
		t.style.display = "block";
	  }			
    }

/********************************************************************* 
 * 
 * Report de la page top.js
 *
 **********************************************************************/


var mybutton = document.getElementById("myBtn"); //Get the button mySidepane

function scrollFunction() { //window.onscroll = function() {scrollFunction()};
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";	
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() { // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




	