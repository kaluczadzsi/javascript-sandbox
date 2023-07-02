const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const priorityInput = document.getElementById('priority-input').value;

  if (item === '' || priorityInput === '0') {
    alert('Please fill in all fields');
    return;
  }
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);

  //   const item = formData.get('item');
  //   const priority = formData.get('priority');

  const entries = formData.entries();
  console.log(entries);

  for (let entry of entries) {
    console.log(entry);
  }

  //   console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);
