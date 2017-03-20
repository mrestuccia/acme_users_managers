import $ from 'jquery';
import UsersList from './UserList';
import ManagersList from './ManagersList';


const state = {
  users: [],
};


const loadUsers = () => {
  $.get('/api/users')
    .then((users) => {
      state.users = users;
      ManagersList('#managersList', state.users);
      UsersList('#usersList', state.users, onChangeManager, onPromoteDemote);
    })
}


const onChangeManager = (id, managerId) => {
  $.ajax({
    url: `/api/users/${id}?_method=PUT`,
    method: 'PUT',
    data: { managerId: managerId }
  }).then(() => loadUsers());
}


const onPromoteDemote = (id, promote) => {
  console.log('onPromoteDemote');
  $.ajax({
    url: `/api/users/${id}?_method=PUT`,
    method: 'PUT',
    data: { promote: promote }
  }).then(() => loadUsers());
}


loadUsers();