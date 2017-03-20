import $ from 'jquery';

const render = (user, onPromoteDemote) => {
  let btn = $(`<button class="btn"></button>`);

  if (user.isManager) {
    btn.addClass(`btn-danger`);
    btn.text(`Demote from Manager`)
  } else {
    btn.addClass(`btn-primary`);
    btn.text(`Promote To Manager`)
  }

  btn.on('click', function () {
    onPromoteDemote(user.id, !user.isManager)
  })

  let formGroup = $(`<div class="form-group"></form>`)
  formGroup.append(btn);

  return formGroup;
}

export default render;