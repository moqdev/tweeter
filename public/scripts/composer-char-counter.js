$(document).ready(function() {
  // --- our code goes here ---
  const $textarea = $("form textarea");


  //   $("#btn").on('click', function() {
//     console.log(this); //The this keyword is a reference to the button
//   });

$("#btn").on('click', () => {
  console.log(this); //The this keyword here refers to something else!
});