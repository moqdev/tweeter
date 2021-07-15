$(document).ready(function() {
  // --- our code goes here ---
  const $textarea = $("form textarea");
  
  $textarea.on("input", function(event) {
    const count = $(this).val().length;
    const $counter = $(this).next().find(".counter");
    $counter.text(140 - count);
    // console.log(counter.text);
    if (count > 140) {
      $counter.css("color", "red");
    }
  });
});
//   $("#btn").on('click', function() {
//     console.log(this); //The this keyword is a reference to the button
//   });

// $("#btn").on('click', () => {
//   console.log(this); //The this keyword here refers to something else!
// });