
// const firebaseConfig = {
//     apiKey: "AIzaSyDHEv5B-EOHBemRvpxZGDaPn4CkVSYiuzU",
//     authDomain: "quiz-app-a44c5.firebaseapp.com",
//     databaseURL: "https://quiz-app-a44c5-default-rtdb.firebaseio.com",
//     projectId: "quiz-app-a44c5",
//     storageBucket: "quiz-app-a44c5.firebasestorage.app",
//     messagingSenderId: "171934735383",
//     appId: "1:171934735383:web:0b02362002afa1b96a9052"
//   };

//   const app = firebase.initializeApp(firebaseConfig);
// function saveData(){
//     try{
//         var name=document.getElementById('name').value;
//         var email=document.getElementById('email').value;
//         var password=document.getElementById('password').value;

//         console.log(name , email , password);
//         var obj={
//             userName:name,
//             userEmail:email,
//             userPassword:password
//         }
//         // to save data in DB use push method
//         firebase.database().ref('users').push(obj);
//     }
//     catch(error){
//         console.log(error);
//     }
//   }

//   function deleteData(){
//     // firebase.database().ref('/users/-OB-461p1lq0yktgPq5O').remove();
//     firebase.database().ref('user').remove();


//   }

//   function getDataFromDatabase(){
//     firebase.database().ref('users').on('child_added',
//     function(data)
//     {console.log(data.val())})
//   }

//   getDataFromDatabase();