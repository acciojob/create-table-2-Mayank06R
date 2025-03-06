function createTable() {
  // Get the number of rows and columns from the user
  const rn = parseInt(prompt("Input number of rows"), 10);
  const cn = parseInt(prompt("Input number of columns"), 10);

  // Validate the inputs
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing rows in the table
  table.innerHTML = "";

  // Create the table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
