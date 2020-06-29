let rows = document.getElementsByClassName('row');

const toggleVisibility = (row) => {
  const anotherRow =
    row.parentElement.children[0] === row
      ? row.parentElement.children[1]
      : row.parentElement.children[0];
  if (!row.classList.contains('row--hidden')) {
    anotherRow.classList.toggle('row--hidden');
    row.classList.toggle('row--active');
  } else {
    row.classList.toggle('row--hidden');
    anotherRow.classList.toggle('row--active');
  }
};

for (const row of rows) {
  row.addEventListener('click', () => toggleVisibility(row));
}
