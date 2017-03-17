import $ from 'jquery';

const render = (containerId, users) => {
  const container = $(containerId);
  let lis = users.map((user)=> {
    `<div class="panel-heading">${user.name}</div>`
  });

    container.html(`${category.products.length} Products`);
};

export default render;


/*
<div class="panel panel-default">
  <div class="panel-heading">
    Curly
  </div>
  <div class="panel-body">
    <div class="form-group">
      <button class="btn btn-primary">Promote To Manager</button>
    </div>
    <form-group>
      <label>Managed By</label>
      <select class="form-control">
        <option value="">None</option>
        <option selected="" value="2">Larry</option>
        <option value="1">Moe</option>
      </select>
    </form-group>
  </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading">
      Shep
    </div>
    <div class="panel-body">
      <div class="form-group">
        <button class="btn btn-primary">Promote To Manager</button>
      </div>
      <form-group><label>Managed By</label>
        <select class="form-control">
          <option value="">None</option>
          <option selected="" value="2">Larry</option>
          <option value="1">Moe</option>
        </select>
      </form-group>
    </div>
</div>
*/