/************************ GESTION TEMPS DE PRIERES ****************************
 *
 * ada: prière fait à temps
 * kadhoi: prières faites en retard
 *
 * class .ada et #ada: se trouve dans la page source (indexToDo.html)
 * class .kadhoi et #kadhoi: se trouve dans la page source (indexToDo.html)
 * class .test: se trouve dans la page cible (todoList_prières.html)
 *
 *****************************************************************************/
 
 
 
    /***************** bleme de Persistance ******************
    * Le marque est résolu	
	* il reste sa parsistance car au chargement de la page le marquage  disparait
	* SOLUTION: voir le localStorage.getItem() et JSON.parse() sur mon cours de master1
	*/

	function ada() {
        /***************** Rappel de base ************************
		 * var adaa = document.getElementsByClassName("tester")[2];
		 * adaa.style.background = '#4CAF50';
		 */
		
		
		// On veut cibler la dernière prière ajoutée
		
		var adaa = document.getElementsByClassName("tester");
		var i = adaa.length ; // test: document.write(i); affiche le nbr total
		
		var dernierepriereأداء = document.getElementsByClassName("tester")[i-1]; // la dernière prière ajoutée
		dernierepriereأداء.style.background = '#4CAF50';
					
        return false;
    }
	function kadhoi() {		
		var kadhoi = document.getElementsByClassName("tester");
		var j = kadhoi.length ; 
		
		var dernierepriereقضاء = document.getElementsByClassName("tester")[j-1]; // la dernière prière ajoutée
		dernierepriereقضاء.style.background = '#f44336';
					
        return false;
    }
