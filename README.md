# Voting App – DevOps Pipeline Tutorial

This is a simple fullstack web application built with Node.js/Express.js. It's designed to help students understand and implement a basic DevOps pipeline using **GitHub Actions** for Continuous Integration (CI) and manual deployment to **Render**.

---

## 📁 Project Structure

```bash
test-devops-voting/
├── index.js
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── ci.yml
```

---

## Step 1 – Setup Project Locally

```bash
git clone https://github.com/alfhisa/test-devops-voting.git
cd test-devops-voting
npm install
npm start
```

> You should see the app when accessing `http://localhost:3000`  
> If the port is already in use, change it in `index.js` or terminate the existing process.

---

## Step 2 – Setup GitHub Actions for CI

Click `Actions` then click `set up a workflow yourself`
Create a file at `.github/workflows/ci.yml` with the following content:

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repo
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: echo "No tests available"
```

Every push to the `main` branch will trigger the pipeline on GitHub Actions.

---

## Step 3 – Manual Deployment to Render

1. Go to [https://render.com](https://render.com)
2. Click **New Web Service**
3. Connect your GitHub repo (`test-devops-voting`)
4. Select the `main` branch and configure:

   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** `Node`

5. Click **Create Web Service**

Render will automatically redeploy your app when new changes are pushed to `main`.

---

## Step 4 – CI/CD Flow Check

1. Commit & push changes to `main`
2. Visit GitHub → **Actions** tab → ensure CI pipeline passes
3. Check your app live on Render

---

## 🎯 Final Notes

This tutorial is created by [@alfhisa](https://github.com/alfhisa) for educational use in DevOps and Software Engineering courses.
