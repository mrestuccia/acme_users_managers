import $ from 'jquery';


const render = (containerId, users) => {
  const container = $(containerId);
  users = users.filter((user) => {
    return user.isManager == true;
  })
  let panels = users.map((user) => {
    let employees = user.employee.map((employee) => {
      return employee.name
    }).join(', ')
    return `<div class="panel panel-default">
    <div class="panel-heading">${user.name}</div>
    <div class="panel-body"><em>manages...</em><br/>${employees}</div>
    </div>`
  });
  container.html(panels);
};

module.exports = render;