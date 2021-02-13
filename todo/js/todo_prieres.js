function get_todos() {
    var todos = new Array;
	// localStorage.getItem(): Accéder à des données enregistrées dans l’espace local courant
    var todos_str = localStorage.getItem('todo'); /* todo est la  variable à modifier pour distinguer le script todo_divers.js et le script todo_prieres.js  */
    if (todos_str !== null) {
		// JSON.parse() : construit la valeur JavaScript d'une chaîne de caractères JSON 
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

//Au de-là de 6 entrées: cacher les 2 icones du bas gauche et mettre une couleur neutre sur les tasks
function autreTask(){
		
	var P = document.getElementsByClassName("tester");// ensemble des  prières du jour
	var n = P.length ;
	
    // effacer les 2 icones ( en bas à gauche ) au-delà de 6items
    var ada = document.getElementById('ada');
    var kadhoi = document.getElementById('kadhoi');	
	var txtAda = document.getElementById('txtAda');
	var txtKadhoi = document.getElementById('txtKadhoi');
	if ( n > 5){
	    ada.style.display = "none";
	    kadhoi.style.display = "none";
	    txtAda.style.display = "none";
	    txtKadhoi.style.display = "none";
    }else{
		// sinon les réafficher
	    ada.style.display = "block";
	    kadhoi.style.display = "block";
	    txtAda.style.display = "block";
	    txtKadhoi.style.display = "block";
	}
	var i; for (i = 5; i <= n; i++) {
		document.getElementsByClassName("tester")[i].style.backgroundColor = "#555";
	}
}
 
function add() {
	var lera = new Date().getHours();
	var dakika =  new Date().getMinutes();
	
    var task = document.getElementById('task').value;
	//var taskEtDate = task + '<small><i> <b>Quoi ?</b> ... &nbsp;&nbsp; Rien de saisie ! </i></small>';	
    var todos = get_todos();
	// On fait afficher automatiquement( sans rien saisir)
	var P = document.getElementsByClassName("tester");// ensemble des  prières du jour
	var n = P.length ; //  nombre de prières accomplies
	
	if (task === '' && n === 0 ) { 
	   taskEtDate = 'Subh&emsp; <small><i>&emsp;( Fait &agrave; : '+lera+'h '+dakika+'mn ) </i></small>';
	   //if( taskEtDate.includes("Fait")){document.getElementsByClassName("tester")[0].style.backgroundColor = "black";}
	}
	if (task === '' && n === 1 ) { taskEtDate = 'Dhuhr&nbsp;&nbsp;&nbsp;<small><i>&emsp;( Fait &agrave; : '+lera+'h '+dakika+'mn ) </i></small>';}
	if (task === '' && n === 2 ) { taskEtDate = 'Asr&emsp; &nbsp; <small><i>&emsp;( Fait &agrave; : '+lera+'h '+dakika+'mn ) </i></small>';}
	if (task === '' && n === 3 ) { taskEtDate = 'Mahrib <small><i>&emsp;( Fait &agrave; : '+lera+'h '+dakika+'mn ) </i></small>';}
	if (task === '' && n === 4 ) { taskEtDate = 'Icha &emsp; <small><i>&emsp;( Fait &agrave; :  '+lera+'h '+dakika+'mn ) </i></small>';}
	
	
	/**	 
	 * Gestion des 5 première saisie
	 * Normalement c'est pour les 5 prière obligatoire 
	 * Mais ça gere aussi l'utilisateur un peu dingue( qui saisie n'importe quoi !)
	 *
	 */
	// Cas où l'utilistaur ne saisie rien
	if (task === '' && n < 5 ){
	  todos.push(taskEtDate);
	  localStorage.setItem('todo', JSON.stringify(todos)); 
	  show();		
	}
	// Cas où l'utilistaur saisie lui même 
	if (task != '' && n < 5 ) {
		taskEtDate = task + '<small><i>&emsp;( à '+lera+'h '+dakika+'mn ) </i></small>';
	    todos.push(taskEtDate);
	    localStorage.setItem('todo', JSON.stringify(todos)); 
	    show();
		
	}
	/**	 
	 * Après les 5 prières obligatoires
	 * La saisie automatique s'arrête
	 * Maintenant c'est à l'utilisateur de preciser ce qu'il veut enregistrer
	 *
	 */
	// Si l'utilisateur n'écrit rien un rappel s'impose
	if (task === '' && n > 4 ){
	  taskEtDate = task + '<small><i> <b>Quoi ?</b> ... &nbsp;&nbsp; Rien de saisie ! </i></small>';
	  todos.push(taskEtDate);
	  localStorage.setItem('todo', JSON.stringify(todos)); 
	  show();
		
	}
	// Si l'utilisateur saisie quelque chose
	if (task != '' && n > 4 ) {
	  task = document.getElementById('task').value;
	  todos.push(task);
	  localStorage.setItem('todo', JSON.stringify(todos)); 
	  show();
	}

	// Au de-là de 6 entrées: cacher les 2 icones du bas gauche et mettre une couleur neutre sur les tasks

	if ( n >= 5 ) {	autreTask();  }
	   
    document.getElementById("task").value = ""; // Rafraichissement du champs de saisie( sinon la dernière valeur entrée reste là et oblige l'utilisateur à l'effacer à la main)
   
    return false;
}




 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
	/**
	 * Lors de la suppression; même les item > 5 deviennent rouge
	 * Pour qu'il reste gris voici la solution
	 * ça permet aussi de réafficher les icones (du bas à gauche) si on revient à la liste des 5 prières
	 * l'implementation de cette fonction se trouve en supra(ligne 12)
	 */
	autreTask();
	
   // return false;
}

/** Gestion kadhoi
 *  Problème: Le résultat de La fonction n'est pas fichée
 *  La fonction continue de s'executer en temps réel:La resultat change en fonction de l'heure 
 *  Piste de solution: un return false(dit au moteur javascript de s'arrêter de bosser )
 */

function kadwoi(){

	var PlayButton = document.getElementById('add');
    	
	var Heure = new Date().getHours(); //var M =  new Date().getMinutes();
	var H = parseInt(Heure, 10);
	
	/** HORAIRE DE PRIERE ( à mettre à jour au fil du temps INCHA ALLAH )
	 *
     * Les horaires n'étant pas fixes;
     * changer les valeurs de ce script à la fin de chaque mois
     * si ce n'est à la fin de chaque semaine.
	 *
	 * Ce, en attendant de concevoir ou de recevoir un script qui calcules les heures de prières à Gonesse
	 * Penser à utiliser le site aooficiel du GPS pour ce faire.
	 *
	 * RAPPEL
	 * || si un des deux est vrai
	 * && si les deux sont  vrais
	 *
     */	 
	// Subh(7h à 8h30): if(H > 6 && H <= 8)
	// Subh(6h à 8h30): if(H > 5 && H <= 8)
    if(H > 5 && H <= 8) { document.getElementsByClassName("tester")[0].style.backgroundColor = "#4CAF50"; } // test en temps réél: ?
	// Dhuhr:( 13h à 15h14)
	if(  H > 12 && H < 15 ){ document.getElementsByClassName("tester")[1].style.backgroundColor = "#4CAF50";} // test en temps réél: ? O.K! sur chrome, O.K! sur Brave, K.O!! sur Mozilla
	// Asr:(15h14 à 18H)
	if( H>14 && H<18) { document.getElementsByClassName("tester")[2].style.backgroundColor = "#4CAF50"; } // test en temps réél: ?
	// Mahrib:(18h à 19h)
	if( (H > 17 && H < 19) && PlayButton) { document.getElementsByClassName("tester")[3].style.backgroundColor = "#4CAF50"; }// test en temps réél: ?
	// Icha(19h à 7h): if( (H >= 19 && H <= 23) ||  H < 7 )
    // Icha(19h à 6h): if( (H >= 19 && H <= 23) ||  H < 6 ) 		
	if( (H >= 19 && H <= 23) ||  H < 6 ) { document.getElementsByClassName("tester")[4].style.backgroundColor = "#4CAF50"; } // test en temps réél: OK!
	
	//document.write(H);	
	return false;
}
 
function show() {

    var todos = get_todos();	
    // Bouton remove
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="fait">' + todos[i] + '<button class="remove tester " id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
		
    //Action  remove: Un Listener sur le bouton remove
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
	
	// kadwoi
	kadwoi();
    
}



document.getElementById('add').addEventListener('click', add); // un écouteur sur le bouton add

show();

