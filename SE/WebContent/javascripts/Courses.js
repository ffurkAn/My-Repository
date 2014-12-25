
var currentId = 1;
var courses = [];

window.onload=function() {
  var submitbtn = document.getElementById("submitButton");
  submitbtn.onclick = addCourse;
  
  var backbtn =  document.getElementById("backButton");
  backbtn.onclick = getListPage;
}   

function getAddCoursePage(){
	
	document.getElementById('addingSection').style.display ='block';
	document.getElementById('coursesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	document.getElementById('firstPageSection').style.display ='none';
	document.getElementById('addCourseBtn').style.display ='none';
	
}

function getListPage(){
	
	document.getElementById('addingSection').style.display ='none';
	document.getElementById('coursesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	document.getElementById('firstPageSection').style.display ='block';
}

function addCourse() {
	
	var rowValue = [];
	

	var textInput = document.getElementById("courseCode");  //getting text input
	var courseCode = textInput.value;   //getting value of text input element
	
	rowValue.push(courseCode);
	
	var textInput = document.getElementById("courseName");  //getting text input
	var courseName = textInput.value;   //getting value of text input element
	
	rowValue.push(courseName);
	
	var textInput = document.getElementById("courseCredit");  //getting text input
	var courseCredit = textInput.value;   //getting value of text input element
	
	rowValue.push(courseCredit);
	
	
	courses.push(rowValue);
	
	alert("Course added successfully!\n Name:"+courseName+"\nCredit:"+courseCredit+"\nCode"+courseCode);
	
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
		
		deleteCourse(this);
	}
	
	li.appendChild(a);
	ul.appendChild(li);
	*/
}



function listCourses(){
	
	
	 
	clearTable();
	if(courses.length > 0){
		
		for(i = 0 ; i< courses.length ; i++){

			var table = document.getElementById("courses");
			
			var tr = document.createElement('tr');   

		    var td1 = document.createElement('td');
		    var td2 = document.createElement('td');
		    var td3 = document.createElement('td');
		    var td4 = document.createElement('td');
		    
		    var a = document.createElement('a');
			// var currentId = "ders"+(i+1);
			
			a.setAttribute("id",courses[i][0]);
			currentId++;
			a.href        = "#";
			a.textContent = "delete";
			//a.setAttribute("style", "float:right;")
			
			a.onclick = function() { 
				
				deleteCourse(this);
			}
			

		    var text1 = document.createTextNode(courses[i][0]);
		    var text2 = document.createTextNode(courses[i][1]);
		    var text3 = document.createTextNode(courses[i][2]);
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
		    
		    document.getElementById('listingAndDeletingSection').style.display ='block';
		    document.getElementById('addCourseBtn').style.display ='block';
		}
	}else{
		
		document.getElementById('addCourseBtn').style.display ='block';
		document.getElementById('coursesNotFound').style.display ='block';
		
	}
}
	
function clearTable(){
	
	var elmtTable = document.getElementById('courses');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>0; x--) {
	   elmtTable.removeChild(tableRows[x]);
	}
}

function deleteCourse(a){
	
	var td = a.parentNode.parentNode.childNodes[1].innerText;
	a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode);
	
	for(i = 0; i < courses.length; i++){
		
		if(courses[i][1] == td){
			
			courses.splice(i, 1);
			alert("Course deleted successfully!");
			
			if(courses.length == 0){
				 document.getElementById('listingAndDeletingSection').style.display ='none';
				 document.getElementById('coursesNotFound').style.display ='block';
			}
			
		}
	}
}


