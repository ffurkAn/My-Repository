
var currentId = 1;
var lectures = [];

window.onload=function() {
  var submitbtn = document.getElementById("submitButton");
  submitbtn.onclick = addLecture;
  
  var backbtn =  document.getElementById("backButton");
  backbtn.onclick = getListPage;
}   

function getAddLecturePage(){
	
	document.getElementById('addingSection').style.display ='block';
	document.getElementById('lecturesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	//document.getElementById('firstPageSection').style.display ='none';
	document.getElementById('addLectureBtn').style.display ='none';
}

function getListPage(){
	
	document.getElementById('addingSection').style.display ='none';
	document.getElementById('lecturesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	listLectures();
}

function addLecture() {
	
	var rowValue = [];
	

	var textInput = document.getElementById("lectureCode");  //getting text input
	var lectureCode = textInput.value;   //getting value of text input element
	
	rowValue.push(lectureCode);
	
	var textInput = document.getElementById("lectureName");  //getting text input
	var lectureName = textInput.value;   //getting value of text input element
	
	rowValue.push(lectureName);
	
	var textInput = document.getElementById("lectureCredit");  //getting text input
	var lectureCredit = textInput.value;   //getting value of text input element
	
	rowValue.push(lectureCredit);
	
	
	lectures.push(rowValue);
	
	alert("Lecture added successfully!\n Name:"+lectureName+"\nCredit:"+lectureCredit+"\nCode"+lectureCode);
	
	/*
	var ul = document.getElementById("ul");  //getting element <ul> to add element to
	var li = document.createElement("li");  //creating li element to add
	li.setAttribute("style", "width:300px;");
	li.appendChild(document.createTextNode(text));    //inserting text into newly created <li> element
	
	
	var a = document.createElement('a');
	//var currentId = "ders"+(i+1);
	
	a.setAttribute("id", "ders"+currentId)
	a.href        = "#";
	a.textContent = "delete";
	a.setAttribute("style", "float:right;")
	
	a.onclick = function() { 
		
		deletelecture(this);
	}
	
	li.appendChild(a);
	ul.appendChild(li);
	*/
}



function listLectures(){
	document.getElementById('lecturesDiv').style.display = 'block';
	clearTable();
	if(lectures.length > 0){
		
		for(i = 0 ; i< lectures.length ; i++){

			var table = document.getElementById("lectures");
			
			var tr = document.createElement('tr');   

		    var td1 = document.createElement('td');
		    var td2 = document.createElement('td');
		    var td3 = document.createElement('td');
		    var td4 = document.createElement('td');
		    
		    var a = document.createElement('a');
			// var currentId = "ders"+(i+1);
			
			a.setAttribute("id",lectures[i][0]);
			currentId++;
			a.href        = "#";
			a.textContent = "delete";
			
			a.onclick = function() { 
				
				deleteLecture(this);
			}
			

		    var text1 = document.createTextNode(lectures[i][0]);
		    var text2 = document.createTextNode(lectures[i][1]);
		    var text3 = document.createTextNode(lectures[i][2]);
		    //var text4 = document.createTextNode('delete');

		    td1.appendChild(text1);
		    td2.appendChild(text2);
		    td3.appendChild(text3);
		    td4.appendChild(a);
		    
		    tr.appendChild(td1);
		    tr.appendChild(td2);
		    tr.appendChild(td3);
		    tr.appendChild(td4);

		    table.appendChild(tr);
		    
		    
		}
		
		document.getElementById('listingAndDeletingSection').style.display ='block';
	    document.getElementById('addLectureBtn').style.display ='block';
	    
	}else{
		
		document.getElementById('addLectureBtn').style.display ='block';
		document.getElementById('lecturesNotFound').style.display ='block';
		
	}
}
	
function clearTable(){
	
	var elmtTable = document.getElementById('lectures');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>0; x--) {
	   elmtTable.removeChild(tableRows[x]);
	}
}

function deleteLecture(a){
	
	var td = a.parentNode.parentNode.childNodes[1].innerText;
	a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode);
	
	for(i = 0; i < lectures.length; i++){
		
		if(lectures[i][1] == td){
			
			lectures.splice(i, 1);
			alert("Lecture deleted successfully!");
			
			if(lectures.length == 0){
				 document.getElementById('listingAndDeletingSection').style.display ='none';
				 document.getElementById('lecturesNotFound').style.display ='block';
			}
			
		}
	}
}


