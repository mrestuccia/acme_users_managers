import $ from 'jquery';

const render = (users, user, onSelect) => {

  users = users.filter((_user) => {
    return _user.id !== user.id && _user.isManager === true
  })

  // Create the select object
  let select = $(`<select class="form-control"></select>`)
  select.append($('<option></option>').attr('value', '').text('None'));

  let options = users.map((_user) => {
    let option = $(`<option></option>`)
    option.attr('value', _user.id).text(_user.name)

    if (user.managerId === _user.id) option.attr('selected', 'selected');

    select.append(option);
  });

  let form = $(`<form-group></form-group>`);
  form.append(`<label>Managed By</label>`)

  select.on('change', function (ev) {
    ev.preventDefault();
    onSelect(user.id, this.value);
  });

  return form.append(select);

};

module.exports = render;