import $ from 'jquery';
import PromoteButton from './PromoteButton';
import ManagerPicker from './ManagerPicker';

const render = (containerId, users, onSelect, onPromoteDemote) => {
  const container = $(containerId);
  let panels = users.map((user) => {
    let panel = $(`<div class="panel panel-default">
    <div class="panel-heading">${user.name}</div>`)

    let panelBody = $(`<div class="panel-body"></div>`);

    panelBody.append(PromoteButton(user, onPromoteDemote));
    panelBody.append(ManagerPicker(users, user, onSelect))

    panel.append(panelBody);

    return panel;
  });
  container.html(panels);
};


export default render;