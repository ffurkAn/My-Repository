
var currentId = 1;
var lectures = [];
var users = [["furkan", "furkan123", "instructor"],
             ["alacamer", "falaca", "student"]];

var file = [{"firstName":"John", "lastName":"Doe"}, 
            {"firstName":"Anna", "lastName":"Smith"}, 
            {"firstName":"Peter", "lastName":"Jones"}];

var userType = "";

window.onload=function() {
  var submitbtn = document.getElementById("submitButton");
  submitbtn.onclick = addLecture;
  
  var backbtn =  document.getElementById("backButton");
  backbtn.onclick = getListPage;
  
  var backbtn2 =  document.getElementById("backButton2");
  backbtn2.onclick = getListPage;
  
  var loginbtn =  document.getElementById("loginButton");
  loginbtn.onclick = login;
  
  var finishbtn =  document.getElementById("finishButton");
  finishbtn.onclick = finish;
  
  var cancelbtn1 =  document.getElementById("cancelSignUp");
  cancelbtn1.onclick = cancelSignUp;
  
  var cancelbtn2 =  document.getElementById("cancelSignIn");
  cancelbtn2.onclick = cancelSignUp;
  
  var att =  document.getElementById("attendance");
  att.onclick = getAttendance;
  
  var succ =  document.getElementById("success");
  succ.onclick = getSuccess;
}   

function download(){
	
	   alert("Download Successful");
}

function upload(obj){
	
	 alert(obj + " - Upload Successful");
}

function signIn(){
	
	document.getElementById('signIn').style.display = 'block';
}

function signUp(){
	
	document.getElementById('signUp').style.display = 'block';
}



function login(){
	
	var textInput = document.getElementById("username2");  //getting text input
	var username = textInput.value;   //getting value of text input element
	
	var textInput = document.getElementById("password2");  //getting text input
	var password = textInput.value;   //getting value of text input element
	
	for(i = 0; i < users.length; i++){
		
		if(users[i][0] == username && users[i][1] == password){
			
			alert("Successfully Logged In!");
			
			document.getElementById('signIn').style.display = 'none';
			document.getElementById('signUp').style.display = 'none';
			document.getElementById('mainPage').style.display = 'block';
			
			userType = users[i][2];
		}
	}
}


function finish(){
	
	var textInput = document.getElementById("username1");  //getting text input
	var username = textInput.value;   //getting value of text input element
	
	var textInput = document.getElementById("password1");  //getting text input
	var password = textInput.value;   //getting value of text input element
	
	var row = [];
	
	row.push(username);
	row.push(password);
	row.push("student");
	users.push(row);
	
	alert("Registration Completed!");
	
	document.getElementById('signIn').style.display = 'none';
	document.getElementById('signUp').style.display = 'none';
	document.getElementById('mainPage').style.display = 'none';
	
	
}

function cancelSignUp(){
	
	document.getElementById('signIn').style.display = 'none';
	document.getElementById('signUp').style.display = 'none';
}

function cancelSignUp(){
	
	document.getElementById('signIn').style.display = 'none';
	document.getElementById('signUp').style.display = 'none';
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
	document.getElementById('reportButtons').style.display ='none';
	
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
	
	
}



function listLectures(){	
	if (userType == "instructor") {
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
				var td5 = document.createElement('td');
				var td6 = document.createElement('td');
				var td7 = document.createElement('td');
				var td8 = document.createElement('td');
				
				var ad = document.createElement('a');
				// var currentId = "ders"+(i+1);
				
				var newExam = document.createElement('a');
				
				ad.setAttribute("id",lectures[i][0]);
				currentId++;
				ad.href        = "#";
				ad.textContent = "delete";
				
				ad.onclick = function() { 
					
					deleteLecture(this);
				}
				
				newExam.href        = "#";
				newExam.textContent = "New exam";
				newExam.onclick = function() {				
					createExam();
				}
				
				var adown = document.createElement('a');
				// var currentId = "ders"+(i+1);
				
				//adown.setAttribute("id",lectures[i][0]);
				currentId++;
				var blob = new Blob([file], {type: "application/text"});
				var url  = URL.createObjectURL(blob);
				
				adown.href        = "#";
				adown.textContent = "download docs";
				adown.download = "download.txt"; 
				
			
				
				var aup = document.createElement('a');
				// var currentId = "ders"+(i+1);
				
				//adown.setAttribute("id",lectures[i][0]);
				currentId++;
				aup.href        = "#";
				aup.textContent = "upload doc(s)";
				
				aup.onclick = function() { 
					
					upload("fileObj");
				}
				
				var a = document.createElement('a');
				// var currentId = "ders"+(i+1);
				
				//a.setAttribute("id",lectures[i][0]);
				currentId++;
				a.href        = "#";
				a.textContent = "report";
				
				a.onclick = function() { 
					
					getReport();
				}
				
				

				var text1 = document.createTextNode(lectures[i][0]);
				var text2 = document.createTextNode(lectures[i][1]);
				var text3 = document.createTextNode(lectures[i][2]);
				//var text4 = document.createTextNode('delete');

				td1.appendChild(text1);
				td2.appendChild(text2);
				td3.appendChild(text3);
				td4.appendChild(ad);
				td5.appendChild(a);
				td6.appendChild(adown);
				td7.appendChild(aup);
				td8.appendChild(newExam);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td6);
				tr.appendChild(td7);
				tr.appendChild(td5);
				tr.appendChild(td8);
				tr.appendChild(td4);
				
				table.appendChild(tr);
				
				
			}
			
			document.getElementById('listingAndDeletingSection').style.display ='block';
			document.getElementById('addLectureBtn').style.display ='block';
			
		}else{
			
			document.getElementById('addLectureBtn').style.display ='block';
			document.getElementById('lecturesNotFound').style.display ='block';
			
		}
	} else {
		listStudentLectures();
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

function getReport(){
	
	document.getElementById('addingSection').style.display ='none';
	document.getElementById('lecturesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	//document.getElementById('firstPageSection').style.display ='none';
	document.getElementById('addLectureBtn').style.display ='none';
	document.getElementById('reportButtons').style.display ='block';
		
}

function getAttendance() {
	
	document.getElementById('attendanceIMG').style.display ='block';
	document.getElementById('successIMG').style.display ='none';
}

function getSuccess() {
	
	document.getElementById('successIMG').style.display ='block';
	document.getElementById('attendanceIMG').style.display ='none';
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

function listStudentLectures() {
	document.getElementById('lecture-container').style.display = 'block';
}

function listExams() {
	document.getElementById('calendar-container').style.display = 'block';
}

function showExam() {
	document.getElementById('calendar-container').style.display = 'none';
	document.getElementById('exam-container').style.display = 'block';
}
		
function saveAnswers() {
	document.getElementById('exam-container').style.display = 'none';
	document.getElementById('message-box').innerHTML = "Your answers are successfully saved";
}
		
function createExam() {
	document.getElementById('addingSection').style.display ='none';
	document.getElementById('lecturesNotFound').style.display ='none';
	document.getElementById('listingAndDeletingSection').style.display ='none';
	document.getElementById('addLectureBtn').style.display ='none';
	document.getElementById('create-exam-container').style.display = 'none';
	document.getElementById('question-container').style.display = 'block';
}

function addQuestion() {
	var question = document.getElementById('question').value;
	var choice1 = document.getElementById('choice-1').value;
	var choice2 = document.getElementById('choice-2').value;
	var choice3 = document.getElementById('choice-3').value;
	var choice4 = document.getElementById('choice-4').value;
	
	var exam = document.getElementById('exam-questions-container');
	exam.innerHTML = exam.innerHTML + '<br/><br/>' +
		'<b>' + question + '</b><br/>A) ' +
		choice1 + '<br/>B) ' +
		choice2 + '<br/>C) ' +
		choice3 + '<br/>D) ' +
		choice4;
	
	document.getElementById('question').value = "";
	document.getElementById('choice-1').value = "";
	document.getElementById('choice-2').value = "";
	document.getElementById('choice-3').value = "";
	document.getElementById('choice-4').value = "";
}

function saveExam() {
	document.getElementById('create-exam-container').style.display = 'none';
	document.getElementById('question-container').style.display = 'none';
	document.getElementById('message-box').innerHTML = "Your exam is successfully saved";
}

function enroll() {
	var key = document.getElementById('txt-enroll').value
	if (key != "") {
		document.getElementById('message-box').innerHTML = "";
		document.getElementById('lecture-details').style.display = 'block';
		document.getElementById('enrollment').style.display = 'none';
	} else {
		alert("Please, enter a valid enrollment key");
	}
}

function enrollLecture(lectureId) {
	document.getElementById('message-box').innerHTML = "";
	document.getElementById('lecture-container').style.display = 'none';
	document.getElementById('enrollment').style.display = 'block';
}
