//Code used from: https://stackoverflow.com/questions/33360298/javascript-taking-string-from-html-input-field-to-process-through-an-acronym-ge

var words = document.getElementById("inputField").value.split(" ");
$('#inputField').addClass('capitalize');
var acronym = "";
for (var i = 0; i < words.length; i += 1) {
    acronym += words[i].charAt(0).toUpperCase();
}
var report = function() {
    document.getElementById("result").innerHTML = acronym;
};
$('#generate').click(function(){
    var myVar = $('#inputField').val();
    var words = myVar.split(" ");
    console.log(words);
    //var showWords = myVar.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1) + "<br>"; //<br> breaks string into different lines
        words.join(''); 
    }

    //words.join(''); //seems to be working on console.log
    //console.log(words.join(' '));
    


    var acronym = words.map(function(word) {
    return word.charAt(0).toUpperCase();
    }).join('');
    console.log(words);
    alert("Acronym generated! See it in \'Acronym Viewer\"");
    $('#inputField').val(''); //resets inputfield after adding in acronym
    //$("#result").html("Acronym generated! See it in \'Acronym Viewer\""); //acronym is variable which should be shown on head/title of div card
    $("#acronymBoxContainer").append("<div class = task-list-boxes>" + "<h2>" + acronym + "</h2>" + "<p>" + words.join(' ') + "</p>" + "</div>"); //this appends new acronyms to div elements 
    //can just add words.join(' ') to the div output which works

    /*
        $('#acronymBoxContainer').empty();
        str.forEach(function(a) {
        $('#acronymBoxContainer').append('&nbsp;<span>' + a.slice(0, 1) + '</span>' + a.slice(1))
    })
    */

    //console.log(showWords);
    


});

/*
let item = document.createElement("div");
  
item.classList.add("task-list-boxes");
item.setAttribute('data-id', task.id);
item.innerHTML = "<h2>" + task.title + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
+ "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
tasklist.appendChild(item);

Can incorporate something like the above for acroynm maker

*/ 