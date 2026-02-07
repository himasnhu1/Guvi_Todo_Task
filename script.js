let entries = JSON.parse(localStorage.getItem("entries")) || [];
let editIndex = -1;

function saveToLocalStorage() {
  localStorage.setItem("entries", JSON.stringify(entries));
}

function addOrUpdateEntry() {
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!desc || isNaN(amount)) {
    alert("Please enter valid details");
    return;
  }

  const entry = { desc, amount, type };

  if (editIndex === -1) {
    entries.push(entry);
  } else {
    entries[editIndex] = entry;
    editIndex = -1;
  }

  saveToLocalStorage();
  resetForm();
  renderEntries();
}

function renderEntries(filter = "all") {
  const list = document.getElementById("entryList");
  list.innerHTML = "";

  let filtered = entries;
  if (filter !== "all") {
    filtered = entries.filter((e) => e.type === filter);
  }

  filtered.forEach((entry, index) => {
    const li = document.createElement("li");
    li.className = entry.type;

    li.innerHTML = `
<span>${entry.desc} - ₹${entry.amount}</span>
<div class="actions">
<button onclick="editEntry(${index})">Edit</button>
<button onclick="deleteEntry(${index})">Delete</button>
</div>
`;

    list.appendChild(li);
  });

  updateSummary();
}

function updateSummary() {
  const income = entries
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);

  const expense = entries
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + e.amount, 0);

  document.getElementById("totalIncome").innerText = `₹${income}`;
  document.getElementById("totalExpense").innerText = `₹${expense}`;
  document.getElementById("balance").innerText = `₹${income - expense}`;
}

function editEntry(index) {
  const entry = entries[index];
  document.getElementById("desc").value = entry.desc;
  document.getElementById("amount").value = entry.amount;
  document.getElementById("type").value = entry.type;
  editIndex = index;
}

function deleteEntry(index) {
  if (confirm("Delete this entry?")) {
    entries.splice(index, 1);
    saveToLocalStorage();
    renderEntries();
  }
}

function filterEntries() {
  const filter = document.querySelector('input[name="filter"]:checked').value;
  renderEntries(filter);
}

function resetForm() {
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("type").value = "income";
  editIndex = -1;
}

renderEntries();
