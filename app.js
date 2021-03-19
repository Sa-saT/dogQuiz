
// 実は、これに変換する
 const Vue = require('https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js');
 const axios = require('https://unpkg.com/axios/dist/axios.min.js');
//  import Vue from 'vue'
//  import axios from 'axios'
let url ='https://script.google.com/macros/s/AKfycbyJMpTFY3TtzksiA55STjkx5dp4m3MCRWdQC8bocTgMDLFR98ht/exec';

// let Quiz = [];
// let QuizAns = [];
// let quizIndex = 0;
// let score = 0;

//  export default new Vue({
//     el: '#app',
//     data: {
//         message    : '',
//         memberList : []
//     },
//     methods: {
//         getMemberList: function() {
//             axios.get(
//                 'https://script.google.com/macros/s/AKfycbyJMpTFY3TtzksiA55STjkx5dp4m3MCRWdQC8bocTgMDLFR98ht/exec')
//             .then(response => this.memberList = response.data)
//             .catch(error => this.message = error)
//         }
//     },
// });

// axios.get(url)
// .then(function (response) {
//     // handle success

//   console.log(response);
// })
// .catch(function (error) {
//     // handle error
//   console.log(error);
// })
// async function QuizJ(){
//     try{
//         let res = await axios.get(url)
//         let max  = Object.keys(res).length
//         const keyList = Object.keys(res)
//         for(let i = 0; i < 5; i++){
//             let x = Math.floor( Math.random() * max);
//             axios.then(res => {
//                 Quiz = JSON.parse(JSON.stringify('${keyList[x]}'))
//             })
//         };
//     }catch(err){
//         console.log('get1 or get2 error');
//         return;
//     }
//     console.log(max);
//     console.log(Quiz);
// }

// for(key in Quiz)
// {
//     QuizAns[i] = Quiz[i].AnsA;
//     QuizAns[i] = Quiz[i].AnsB.push;
//     QuizAns[i] = Quiz[i].AnsC.push;
//     QuizAns[i] = Quiz[i].AnsD.push;
// };
// console.log(QuizAns);
// const $button = document.getElementsByTagName("button");

// const setupQuiz = () =>
// {
//     document.getElementById("js-Question").textContent = Quiz[quizIndex].Qui;
    
//     for(let i = 0; i < $button.length; i++)
//     {
//         $button[i].textContent = QuizAns[i];
//     }
// };
// //setupQuiz();Math.floor( Math.random() * QuizAns.length)

// const clickHandler = (e) =>
// {
//     if(Quiz[quizIndex].AnsA === e.target.textContent)
//     {
//         window.alert("正解");
//         score++;
//     }
//     else
//     {
//         window.alert("不正解");
//     }

//     quizIndex++;

//     if(quizIndex < Quiz.length)
//     {
//         setupQuiz(quizIndex);
//     }
//     else
//     {
//         window.alert("お　わ　り " + score + "問正解です");
//         location.href = 'top.html';
//     }
// };

// const handlerIndex = () =>
// {
//     for(let i = 0; i < $button.length; i++)
//     {
//         $button[i].addEventListener("click", (e) => 
//         {
//             clickHandler(e);
//         });
//     }
// };

// handlerIndex();
