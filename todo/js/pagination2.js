/************************ 1.PAGINATION ****************************
 *
 * Date:15.01.2021
 * Remarques 
 * La pagination est dans la page source( indexToDO.html )
 * Mais elle contrôle d'autres pages cibles: 
 *        douantFrequents.html(page1),
 *        frequence2.html(page2),
 *        frequence3.html(page3).
 * D'où la necessité d'automatisé la classe " .active "
 * Pour ce faire, ce script pagination2.js s'en charge
 *
 * NOTA BENE:
 *
 * Le script de pagination s'appelle en fin de page(juste avant le </body> de indexToDo.html
 *
 ************************ 2. CHARGEMENT DES PAGES ****************************
 * handiAJAX(perso script)
 * Réutilisation de mon script de master1
 * C'est l'équivalent de la technologie AJAX
 * On appelle juste la mthd replaceWith() dans un script jQuery
 * 
 * NOTA BENE:
 *
 * Peu importe l'endroit de la page (indexToDo.html) où on
 * appelle le script de chargement; il marche tjrs  MASHA ALLAH
 *
 */
 
 // 2. CHARGEMENT DES PAGES
    $(document).ready(function(){
	      $("#activeUn").click(function(){
			$('#cible').replaceWith(' <object id="cible" class="onglet1-1-resume" style="width:90%;"  data="douanFrequents.html" ></object>');
          });
		  $("#activeDeux").click(function(){
			$('#cible').replaceWith(' <object id="cible" class="onglet1-1-resume" style="width:90%;"  data="frequence2.html" ></object>');
          });
		  $("#activeTrois").click(function(){
			$('#cible').replaceWith(' <object id="cible" class="onglet1-1-resume" style="width:90%;"  data="frequence3.html" ></object>');
          });
	 });
	 
// 1. PAGINATION ( add active class de façon dynamique(perso script) ): s'appelle en fin de page

	    var boutonUn = document.getElementById("activeUn");
		var boutonDeux = document.getElementById("activeDeux");
		var boutonTrois = document.getElementById("activeTrois");
		var boutonQuatre = document.getElementById("activeQuatre");
		var boutonCinq = document.getElementById("activeCinq");

		function activeUn() {
		   boutonUn .classList.add("active");
		   boutonDeux.classList.remove("active");
		   boutonTrois.classList.remove("active");
		   boutonQuatre.classList.remove("active");
		   boutonCinq.classList.remove("active");
		}
		function activeDeux() {
		   boutonUn .classList.remove("active");
		   boutonDeux.classList.add("active");
		   boutonTrois.classList.remove("active");
		   boutonQuatre.classList.remove("active");
		   boutonCinq.classList.remove("active");
		}
		function activeTrois() {
		   boutonUn .classList.remove("active");
		   boutonDeux.classList.remove("active");
		   boutonTrois.classList.add("active");
		   boutonQuatre.classList.remove("active");
		   boutonCinq.classList.remove("active");
		}
 
 
 
 