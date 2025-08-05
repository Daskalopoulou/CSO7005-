
# 🛍️ Product Catalogue App (MERN Stack)

A full-stack web application for managing an online product catalogue with admin functionality. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this app enables users to view products and admins to add, edit, or delete them through a secure dashboard.

---

## 🚀 Features

### 👤 Authentication
- Mock login system using `AuthContext`
- Role-based access (admin vs regular user)
- Admin-only pages are protected using `ProtectedRoute`

### 🛒 Product Management
- View all products
- Add new products (admin only)
- Edit or delete existing products (admin only)
- Product info includes name, image, price, category, availability, and description

### 🧭 Navigation
- Home page
- Product listing
- Admin dashboard
- Dynamic navigation links based on login and role
- Redirects users to homepage after login

---

## 📂 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.js
│   │   └── ProtectedRoute.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── AddProduct.js
│   │   ├── AdminDashboard.js
│   │   ├── AdminProducts.js
│   │   ├── EditProduct.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── ViewProducts.js
│   ├── api.js
│   ├── App.js
│   └── index.js
```

---

## 🛠️ Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React                |
| State Mgmt   | React Context API    |
| Routing      | React Router v6      |
| Backend      | Express.js, Node.js  |
| Database     | MongoDB (via Compass)|
| Styling      | Inline styles / CSS  |

---

## 🧪 Login Credentials

Use these mock credentials to test:

| Role   | Username | Password |
|--------|----------|----------|
| Admin  | `admin`  | `password` |
| User   | `user`   | `password` |

> We can modify or replace this with real authentication logic later.

---

## 🔐 Access Control

| Action              | Role Required |
|---------------------|----------------|
| View Products       | Any user       |
| Add/Edit/Delete     | Admin only     |
| View Admin Dashboard| Admin only     |

---

## 🧭 Routes Overview

| Path                       | Access        | Description                     |
|----------------------------|---------------|---------------------------------|
| `/`                        | Public        | Home page                       |
| `/login`                   | Public        | Login page                      |
| `/products`                | Public        | View all products               |
| `/admin`                   | Admin only    | Admin dashboard                 |
| `/admin/products`          | Admin only    | Admin product manager           |
| `/admin/products/add`      | Admin only    | Add a new product               |
| `/admin/products/edit/:id`| Admin only    | Edit a specific product         |

---

## ▶️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Daskalopoulou/CSO7005-.git
cd CSO7005
```

### 2. Install Dependencies (Frontend)
```bash
cd frontend
npm install
```

### 3. Start the React App
```bash
npm start
```

> ⚠️ If you’re using a separate backend:
- Create a `backend/` folder
- Add your Express server & MongoDB connection
- Connect to MongoDB using Compass or Atlas

---

## ✅ Future Improvements

- Integrate real user authentication with JWT
- Upload product images with Cloudinary
- Add pagination and search filters
- Improve UI with a design framework (e.g., Tailwind, Bootstrap)
- Deploy frontend (Vercel) + backend (Render/Heroku)

---

## 📸 Screenshots

### 🔐 Login Page
![Login Screenshot](pictures\login.png)

### 🧭 Admin Dashboard
![Admin Screenshot](pictures\Admin.png)



## 💡 Author

**Ersi**  
CS07005 Web Technologies  
Student No: `12345678`  

---

## 📬 Feedback / Questions?

Feel free to reach out via [GitHub Issues](https://github.com/Daskalopoulou/CSO7005-.git) or fork the repo and submit a PR!
