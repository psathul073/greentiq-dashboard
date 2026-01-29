# Greentiq – Full Stack Developer Trainee Assignment

This project is a dashboard application developed as part of the technical assignment for the **Full Stack Developer Trainee** position at **Greentiq Innovations Pvt. Ltd.**

The application demonstrates frontend UI development using **Next.js with TypeScript** and basic backend integration using **Node.js and PostgreSQL**.

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- pg (connection pooling)

---

## 📌 Features Implemented

- Company details view
- Tab-based UI (Company, Sales, others as placeholders)
- Sales listing with pagination
- Add new sale using modal
- Conditional stage percentage handling
- Clean and readable UI (desktop-first)
- API integration with backend

---

## 📊 Sales Module Logic

- **Stage** is stored as a string (e.g., Proposal, Sold, Lost)
- **Stage percentage** is optional and used only for Proposal stage
- UI displays:
  - `Proposal (60%)`
  - `Sold`, `Lost`, `Stalled` (without percentage)

---

## 📱 Responsiveness

The application is designed **desktop-first**, with basic responsive handling for smaller screens (scrollable tables, stacked layouts).

---

## 🚀 How to Run 

```bash
# Frontend
npm install
npm run dev

# Backend
npm install
npm run dev
