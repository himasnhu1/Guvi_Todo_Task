# 💰 Income Expense Calculator

A simple and responsive **Income Expense Calculator** built using **HTML, CSS, and JavaScript (DOM + LocalStorage)**.
It helps users track their income and expenses, calculate balance, and manage financial entries easily.

---

## 🚀 Features

* ➕ Add Income & Expense entries
* ✏️ Edit existing entries
* 🗑 Delete entries with confirmation
* 💾 Data stored in LocalStorage (persists after refresh)
* 📊 Auto calculation of:

  * Total Income
  * Total Expense
  * Balance
* 🎨 Color-coded UI:

  * Income → Green
  * Expense → Red
* 🔍 Filter entries:

  * All
  * Income
  * Expense
* 📱 Fully Responsive Design (Mobile + Desktop)

---

## 🛠 Tech Stack

* **HTML5** → Structure
* **CSS3** → Styling & Responsive UI
* **JavaScript (DOM Manipulation)** → Logic
* **LocalStorage API** → Data persistence

---

## 📂 Project Structure

```
Income-Expense-Calculator/
│
├── index.html      → Main HTML layout
├── style.css       → UI styling
├── script.js       → App logic
└── README.md       → Documentation
```

---

## ⚙️ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/income-expense-calculator.git
```

2. Open project folder:

```bash
cd income-expense-calculator
```

3. Run the app:

* Open `index.html` in your browser
  **or**
* Use VS Code Live Server

---

## 🧠 How It Works

### 1️⃣ Add Entry

* Enter description
* Enter amount
* Select type (Income / Expense)
* Click **Save**

### 2️⃣ Edit Entry

* Click **Edit**
* Update details
* Save again

### 3️⃣ Delete Entry

* Click **Delete**
* Confirm removal

### 4️⃣ Filter Entries

* View All / Income / Expense separately

---

## 💾 LocalStorage Usage

Entries are saved using:

```javascript
localStorage.setItem("entries", JSON.stringify(entries));
```

So data remains even after page refresh.

---

## 🎨 UI Highlights

* Modern card layout
* Summary dashboard
* Color-coded totals
* Gradient buttons
* Responsive grid

---

## 👨‍💻 Author

**Himanshu Saini**
Full Stack Developer | Frontend Enthusiast

---

## 📜 License

This project is open source and free to use for learning purposes.

---

⭐ If you like this project, don’t forget to star the repo!
