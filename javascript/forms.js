//inputEvent & change event
//.stopPropagation
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweet = document.querySelectorAll('input')[1];
  // console.log(usernameInput.value, tweet.value);
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
})

const addTweet = (userName, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(userName);
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`);
  tweetsContainer.append(newTweet);
}