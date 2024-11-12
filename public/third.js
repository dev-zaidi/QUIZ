var questionsJS = [
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
            var getOptions=questionsJS[index-1][`option${userSelectedInput}`];
            // console.log(getOptions);
            var correctAnswer=questionsJS[index-1]['corrAnswer'];

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
    if(index>questionsJS.length-1){
        // console.log(score);
        var percentage=(score/questionsJS.length)*100;
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
    questionElement.innerText=questionsJS[index].question;
    opt1.innerText=questionsJS[index].option1;
    opt2.innerText=questionsJS[index].option2;
    opt3.innerText=questionsJS[index].option3;
    index++;
    }
    // if else error handling
  }

  function clicked(){
    nextButton.disabled= false;
    // to remove check from options by default
  }


