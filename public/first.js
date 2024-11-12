const firebaseConfig = {
  apiKey: "AIzaSyDHEv5B-EOHBemRvpxZGDaPn4CkVSYiuzU",
  authDomain: "quiz-app-a44c5.firebaseapp.com",
  databaseURL: "https://quiz-app-a44c5-default-rtdb.firebaseio.com",
  projectId: "quiz-app-a44c5",
  storageBucket: "quiz-app-a44c5.firebasestorage.app",
  messagingSenderId: "171934735383",
  appId: "1:171934735383:web:0b02362002afa1b96a9052"
};

const app = firebase.initializeApp(firebaseConfig);
var questionsHTML = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];


  var questionElement=document.getElementById('ques');
  var opt1=document.getElementById('opt1');
  var opt2=document.getElementById('opt2');
  var opt3=document.getElementById('opt3');
  var index=0;
  var nextButton=document.getElementById('btn');
  var options=document.getElementsByClassName('options');
  var score=0;
  
  function nextQuestion(){
    // gettin the user selected value
    for(var i=0;i<options.length;i++){
        if(options[i].checked){
            var userSelectedInput = options[i].value;
            // console.log(userSelectedInput);
            var getOptions=questionsHTML[index-1][`option${userSelectedInput}`];
            // console.log(getOptions);
            var correctAnswer=questionsHTML[index-1]['corrAnswer'];

            if(getOptions===correctAnswer){
                score++;
            }
        }
    }

    // removing the check by default
    for (var i=0;i<options.length;i++){
        options[i].checked=false;
    }
    // disabling the button again for next button
    nextButton.disabled=true;

    // ending the quiz
    if(index>questionsHTML.length-1){
        // console.log(score);
        var percentage=(score/questionsHTML.length)*100;
        if (percentage>=80){
        Swal.fire({
            title: "Good job!",
            text: `You scored ${percentage}%`,
            icon: "success"
          });
        }
        else if(percentage>=60){
            Swal.fire({
                title: "Good efforts!",
                text: `You scored ${percentage}%`,
                icon: "success"
              });
            }
        else if(percentage>=50){
            Swal.fire({
                title: "Average!",
                text: `You scored ${percentage}%`,
                icon: "success"
              });
            }
        else if(percentage<50){
            Swal.fire({
                title: "You need to Improve!",
                text: `You scored ${percentage}%`,
                icon: "error"
              });
            }
    }
    else{
    questionElement.innerText=questionsHTML[index].question;
    opt1.innerText=questionsHTML[index].option1;
    opt2.innerText=questionsHTML[index].option2;
    opt3.innerText=questionsHTML[index].option3;
    index++;
    }
    // if else error handling
  }
  

  function clicked(){
    nextButton.disabled= false;
    // to remove check from options by default
  }




  function saveData(){
    try{
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;

        console.log(name , email , password);
        var obj={
            userName:name,
            userEmail:email,
            userPassword:password
        }
        // to save data in DB use push method
        firebase.database().ref('users').push(obj);
    }
    catch(error){
        console.log(error);
    }
  }

  
  // function deleteData(){
    // firebase.database().ref('/users/-OB-461p1lq0yktgPq5O').remove();
    // firebase.database().ref('user').remove();}

  // function getDataFromDatabase(){
  //   firebase.database().ref('users').on('child_added',
  //   function(data)
  //   {console.log(data.val())})
  // }
  // getDataFromDatabase();

