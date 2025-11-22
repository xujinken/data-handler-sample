## 🟢 data-handler-sample — Data Transformation Utility

### 📘 Description

This project shows how to read, process, and export JSON data into CSV files using Node.js. Perfect for demonstrating your data-handling skills.

### 🚀 Features

- JSON → CSV conversion
- File I/O operations
- Clean and minimal logic

### ⚙️ Tech Stack

Node.js, json2csv

### ▶️ Run Locally

```bash
git clone https://github.com/<yourusername>/data-handler-sample.git
cd data-handler-sample
npm install
node convert.js
```

### 📂 Project Structure

```
data-handler-sample/
├─ convert.js
├─ package.json
└─ data/
├─ input.json
└─ output.csv
```

### 🖼️ Before / After View

<table>
  <tr>
    <th>JSON (input.json)</th>
    <th>CSV (output.csv)</th>
  </tr>
  <tr>
    <td>
      <pre><code>[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" },
  { "id": 3, "name": "Carol", "email": "carol@example.com" }
]
</code></pre>
    </td>
    <td>
      <pre><code>"id","name","email"
1,"Alice","alice@example.com"
2,"Bob","bob@example.com"
3,"Carol","carol@example.com"
</code></pre>
    </td>
  </tr>
</table>
