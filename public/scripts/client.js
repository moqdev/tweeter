/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

$(document).ready(function() {
  function renderTweets(arr) {
    $(".tweets").empty();
    for (let element of arr) {
      const tweet = createTweetElement(element);
      $(".tweets").prepend(tweet);
    }
  }

  const createTweetElement = (tweetObject) => {
    const tweetTemplate = `<div class='tweet-container'>
  <div class='useravatar'>
    <p><img class='reincarnation' src ='${tweetObject["user"].avatars}'/></p>
    <p class='username'>${tweetObject["user"].name}</p>
    <p class="handle">${tweetObject["user"].handle}</p>
  </div>
   <p class='tweetcontent'>${escape(tweetObject["content"].text)}</p>  
  <hr>
  <div class='date-flags-container'>
    <p class='datecreated'>${timeago.format(tweetObject["created_at"])}</p>
    <div class='flags-container'>
      <p class="like"><i class="fas fa-heart"></i></p>
      <p class='retweet'><i class="fas fa-retweet"></i></p>
      <p class="flag"><i class="fas fa-flag"></i></p>
    </div>
  </div>
</div>`;

    return tweetTemplate;
  };

  let loadTweets = ()=>{
    renderTweets([]);
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
      .done((result) => {
        renderTweets(result);
      })
      .fail((err) => console.log(err));
  };

  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    // first validate for empty/long tweets
    const $tweetBox = $(this).find("#tweet-text");
    const $counter = $(this).find(".counter");
    const emptyMsg = $(this).siblings(".empty-tweet-err");
    const longMsg = $(this).siblings(".long-tweet-err");
    if ($tweetBox.val() === "") {
      $(longMsg).slideUp(10);
      $(emptyMsg).slideDown(200);
    } else if ($tweetBox.val().length > 140) {
      $(emptyMsg).slideUp(10);
      $(longMsg).slideDown(200);
    } else {
      const tweetSerialized = $tweetBox.serialize();
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: tweetSerialized,
      })
        .done((result) => {
          loadTweets();
          $tweetBox.val("");
          $counter.val(140);
          $(emptyMsg).slideUp(100);
          $(longMsg).slideUp(100);
        })
        .fail((err) => console.log(err));
    }
  });

  loadTweets();

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
});