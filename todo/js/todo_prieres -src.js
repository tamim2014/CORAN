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


 
function show() {

    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="fait">' + todos[i] + '<button class="remove tester " id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
	

	
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
	

}

document.getElementById('add').addEventListener('click', add); // un écouteur sur le bouton add

show();

