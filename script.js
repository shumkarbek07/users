const GET_USERS_LIST_API = 'https://dummyjson.com/users';

const usersList = document.querySelector('.users-list');
usersList.classList.add('users-list');

async function getUsersList() {
  const response = await fetch(GET_USERS_LIST_API);
  const { users } = await response.json();
  users.forEach((user) => userCard(user));
}

getUsersList();

function userCard(user) {
  const { firstName, lastName, email, image } = user;

  const userCard = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('h3');
  const emailElement = document.createElement('p');
  userCard.classList.add('user-card');
  img.src = image;
  img.width = 80;
  img.height = 80;
  img.style.borderRadius = '50%';
  name.textContent = `${firstName} ${lastName}`;
  emailElement.textContent = email;
  userCard.appendChild(img);
  userCard.appendChild(name);
  userCard.appendChild(emailElement);

  const learnMoreButton = document.createElement('button');
  const link = document.createElement('a');
  learnMoreButton.addEventListener('click', () => handleClick(user.id));
  learnMoreButton.textContent = 'Learn More';
  link.appendChild(learnMoreButton);

  userCard.appendChild(link);
  usersList.appendChild(userCard);
}

function handleClick(id) {
  localStorage.setItem('userID', id);
}