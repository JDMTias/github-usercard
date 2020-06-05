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

function userCard (userInfo) {

  function element(element) {
    return document.createElement(element)
  };

  const container = element('div')
  const avatar = element('img')
  const contData = element('div')
  const titleName = element('h2')
  const userName = element('p')
  const location = element('p');
  const profile = element('p');
  const userPage = element('a');
  const apostles = element('p');
  const influencer = element('p');
  const biography = element('p');

  function birthChild(parent, child) {
  return parent.appendChild(child);
  }

  birthChild(container, avatar);
  birthChild(container, contData);
  birthChild(contData, titleName);
  birthChild(contData, userName);
  birthChild(contData, location);
  birthChild(contData, profile);
  birthChild(profile, userPage);
  birthChild(contData, apostles);
  birthChild(contData, influencer);
  birthChild(contData, biography);


  function addContent(location, content){
    return location.textContent = userInfo.content
  }
 
  avatar.src = userInfo.avatar_url;
  titleName.textContent = userInfo.name;
  userName.textContent = userInfo.login;
  location.textContent = userInfo.location;
  profile.textContent = 'Profile:';
  userPage.href = userInfo.html_url;
  userPage.textContent = userInfo.html_url;
  apostles.textContent = `Followers: ${userInfo.followers}`;
  influencer.textContent = `Following: ${userInfo.following}`;
  biography.textContent = 'Bio:';
  biography.textContent = userInfo.bio;

  function addClass(location, name){
    return location.classList.add(name)
  }

  addClass(container, 'card');
  addClass(contData, 'card-info');
  addClass(titleName, 'name');
  addClass(userName, 'username');
  
  return container;

}

/*
  STEP 4: Pass the data receive from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function githubData(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response)
      const data = response.data
      console.log(data)
        const user = userCard(data)
        document.querySelector(".cards").appendChild(user)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      console.log('done')
    })
}
githubData('JDMTias');

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

     followersArray.forEach((follower) => { 
      githubData(follower)
    })