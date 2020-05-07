/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/JDMTias')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Done!
    Skip to STEP 3.
*/ 

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker (obj) {
  
  // addind elements
  const card = document.createElement('div');
  const pic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameTitle = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const userPage = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

// possitioning things where they go.

card.appendChild(pic);
card.appendChild(cardInfo);
cardInfo.appendChild(nameTitle);
cardInfo.appendChild(userName);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
profile.appendChild(userPage);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);

// adding context

pic.src = obj.avatar_url;
name.textContent = obj.name;
userName.textContent = obj.login;
location.textContent = obj.location;
profile.textContent = 'Profile :';
userPage.href =obj.html_url;
userPage.textContent = obj.html_url;
followers.textContent = `Followers: ${obj.followers}`;
following.textContent = `Following: ${obj.following}`;
bio.textContent = 'Bio:';
bio.textContent = obj.bio;

// adding class names

card.classList.add('card');
cardInfo.classList.add('card-info');
nameTitle.classList.add('name');
userName.classList.add('username'); 

return card;
}

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function getGithub(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log("GitHub did a good job")
      const data = response.data
        const user = cardMaker(data)
        document.querySelector(".cards").appendChild(user)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      console.log('done')
    })
}
getGithub('JDMTias');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['meep-morp','garybot', 'KSClopton'];

function findFriends (fiendsArr) {
  for (let i=0; i=friendArr.length; i++){
    getGithub(friendsArr[i]);
  }
}
  
findFriends(followersArr);


