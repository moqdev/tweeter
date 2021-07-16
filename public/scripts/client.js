/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
];

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
};