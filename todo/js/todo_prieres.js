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
 
function add() {
	var lera = new Date().getHours();
	var dakika =  new Date().getMinutes();
	
    var task = document.getElementById('task').value;
	var taskEtDate = task + '<small><i>&emsp;( à '+lera+'h '+dakika+'mn ) </i></small>';
	
    var todos = get_todos();
	if (task === '') { 
	    alert("Vous n'avez rien écrit!"); 
	}else{  
		todos.push(taskEtDate);
		localStorage.setItem('todo', JSON.stringify(todos)); 
		show();
	}    
    document.getElementById("task").value = ""; // Rafraichissement du champs de saisie( sinon la dernière valeur entrée reste là et oblige l'utilisateur à l'effacer à la main)
   
   return false;
}




 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
   // return false;
}

/** Gestion kadhoi
 *  Problème: Le résultat de La fonction n'est pas fichée
 *  La fonction continue de s'executer en temps réel:La resultat change en fonction de l'heure 
 *  Piste de solution: un rturn false(dit au moteur javascript de s'arrêter de bosser )
 */

function kadwoi(){
	/**
	 * RAPPEL
	 * || si un des deux est vrai
	 * && si les deux sont  vrais
	 *
	 * REMARQUE :  ce serait mieux d'utiliser un switch case 
	 *
	 */
	
	var H = new Date().getHours(); //var M =  new Date().getMinutes();
	
	// Subh:( 7h à 8h30)
    if(!((H > 6) && (H <= 8))) { document.getElementsByClassName("tester")[0].style.backgroundColor = "#f44336"; } // test en temps réél: ?
	// Dhuhr:( 13h à 15h14)
	if(!((H >= 13) && (H <= 15)) ){ document.getElementsByClassName("tester")[1].style.backgroundColor = "#f44336"; } // test en temps réél: ?
	// Asr:( 15h14 à 17h30)
	if(!(( H >= 15) && ( H <= 17))) { document.getElementsByClassName("tester")[2].style.backgroundColor = "#f44336"; } // test en temps réél: ?
	// Mahrib:( 17h30 à 19h)
	if(!(( H >= 17) && ( H <= 19))) { document.getElementsByClassName("tester")[3].style.backgroundColor = "#f44336"; }// test en temps réél: ?
	// Icha:( 19h à 7h)
	if( (H > 7) && (H < 19) ) { document.getElementsByClassName("tester")[4].style.backgroundColor = "#f44336"; } // test en temps réél: OK
	//document.write(H+"teeeeeeeeeeeest");
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

