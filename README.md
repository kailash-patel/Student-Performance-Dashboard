## 📌 Project Overview
This project analyzes synthetic student performance data using Machine Learning and visualizes insights through a Next.js dashboard.

### Deliverables
1. **Jupyter Notebook** – Data analysis, ML models (Linear Regression, Random Forest, K-Means Clustering).
2. **Next.js Dashboard** – Interactive visualization + tables.
3. **GitHub Repository** – Complete codebase with notebooks and dashboard.
4. **Deployed Dashboard** – (Vercel link here after deployment).
5. **README** – Setup instructions + key findings.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/kailash-patel/Student-Performance-Dashboard.git
cd Student-Performance-Dashboard
\`\`\`

### 2️⃣ Backend (Jupyter Notebook / ML Analysis)
\`\`\`bash
cd \"Analysis and ML\"
pip install -r requirements.txt
jupyter notebook
\`\`\`

### 3️⃣ Frontend (Next.js Dashboard)
\`\`\`bash
cd Student_Dashboard
npm install
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Key Findings

### 🔹 Machine Learning Models
- **Linear Regression**
  - R² Score: **0.8862**
  - Mean Squared Error: **25.4685**

- **Random Forest Regressor**
  - R² Score: **0.8615**
  - Mean Squared Error: **30.9881**

✅ Linear Regression performed slightly better than Random Forest for this dataset.

### 🔹 K-Means Clustering (Learning Personas)
- **Cluster 0**: Moderate comprehension & attention, higher engagement time.
- **Cluster 1**: Strong attention but low focus, low engagement time.
- **Cluster 2**: High focus, good retention, strong assessment scores.

These clusters can help in **personalized learning recommendations**.

---

## 📸 Dashboard Preview
![Dashboard 1](./assests/dashboard1%20(1).png)
![Dashboard 2](./assests/dashboard2%20(2).png)


---

## 🚀 Deployment
Deployed the Next.js dashboard using Vercel:
\`\`\`To View
\`\`\`
[Click Here.](https://student-performance-dashboard-kailash-patels-projects.vercel.app/)

---

## 📂 Project Structure
\`\`\`
Igebra_Student_Dashboard/
│── Analysis and ML/        # Jupyter notebooks + ML
│── Student_Dashboard/      # Next.js app
│── requirements.txt        # ML dependencies
│── requirements_dashboard.txt # Next.js dependencies
│── README.md
\`\`\`

---

## 👨‍💻 Author
**Kailash Patel**

" > README.md
