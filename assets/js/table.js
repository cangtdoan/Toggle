var button = document.querySelector("button");
var images = document.getElementsByTagName('img');
var count = 1;
var x;
var y;

//show application that is degraded.
$(document).ready(function () {
    $('button').click(function () {
        // $('.logotest').toggle('slow');
        // $('.buttontest').toggle('slow');
        $('#myTable td').each(function() {
        $(this).toggleClass("disappear");	
        if ($('img', this).attr('title') == "Degraded" || $('img', this).attr('title') == "Unavailable"){
        	$(this).toggleClass("disappear");
        	// $(this).toggleClass("show");
        	// console.log("is belong to" + count);
			$(this).closest("td").next().toggleClass('disappear');
        	// $(x).css('background','orange')
        	$(this).closest("td").next().next().toggleClass('disappear');
        }
        count++;
    });
    });
});

// // var images = document.querySelectorAll("img");
// var images = [];

// var table = document.getElementById("myTable");

// var tds = document.getElementsByTagName('td');
// var row;
// var col;
// var count = 0;
// var tit = $(images, this).attr('title');

// // var tds = document.getElementsByTagName('TD'),i;
// // for (i in tds) {
// //   // tds[i].style.display = 'none';
// //   console.log(i.length);
// // }
// // var count = $("td").length;
// // console.log(count);
// // for (i = 0; i < count; i++){
// console.log(images[count].title + "hi");



// // // }

// for (var r = 0; row = table.rows[r]; r++) {
//    //iterate through rows
//    //rows would be accessed using the "row" variable assigned in the for loop
//    for (var c = 0; col = row.cells[c]; c++) {
//    		// if($(images[count], this).attr('title') == "Degraded"){
   		
//    		//console.log("count " + [count]);
//    		count++;

//    		console.log(images[count].attr);
  
//    		// console.log(images[count].title);
   		
//    	}
   		
//      //iterate through columns
//      //columns would be accessed using the "col" variable assigned in the for loop
// }  

   

//ok	
// 		button.addEventListener("click", function(){
// 			$(this).toggleClass("Filter");

// 		});
// var test = $(images[3], this).attr('title');
// console.log(test);


//ok
// $(document).ready(function () {
//     $('button').click(function () {
//         // $('.logotest').toggle('slow');
//         // $('.buttontest').toggle('slow');
//         if (test == "Available"){
//         $(images[2]).toggle('slow');
//     	}
//     });
// });




// $(document).ready(function () {
//     $('.buttontest').click(function () {
//         $(this).parent().find('img.logotest').toggle('slow');
//     });
// });
// $("ul").on("click", "li", (function(){
// 	$(this).toggleClass("completed");
// }));

// //Click on X to delete Todo
// $("ul").on("click", "span", (function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// }));

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li add to ul
// 		$("ul").append("<li><span>X</span> "+ todoText +"</li>")
// 	}
// });