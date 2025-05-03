# 📘 Groups Exam LMS — Full-Featured SaaS Learning Management System

Groups Exam is a modern SaaS-based Learning Management System designed for educational institutes to manage content, live classes, assessments, referrals, and student engagement. Built with Laravel + Inertia.js + React.js, it includes SEO support for blogs, multi-role access, revenue tracking, and AI-powered promotions.

---

## 🚀 Tech Stack

| Layer          | Technology                            |
|----------------|----------------------------------------|
| Frontend       | Laravel + Inertia.js + React.js (SPA) |
| SEO Pages      | Laravel Blade (Blog, Landing Pages)    |
| Backend        | Laravel 10+                            |
| UI             | Tailwind CSS + shadcn/ui               |
| Database       | MySQL or PostgreSQL                    |
| Auth           | Laravel Sanctum (Token + 1 Device Only)|
| Mobile App     | Optional React Native (via API)        |
| Hosting        | Vercel (Frontend), Forge/DigitalOcean |
| Media Storage  | Amazon S3                              |

---

## 👥 Roles & Permissions

1. **Super Admin**: Manages global settings, revenue share, referrals
2. **Institute Admin**: Manages courses, branches, trainers, students
3. **Trainer/Tutor**: Uploads content, schedules classes, earns commission
4. **Student**: Accesses learning content, takes exams, earns certificates

---

## 📦 Features & Modules

### 📚 Content Management
- Course → Lessons → Videos, Quizzes, PDFs
- Multilingual content (Tamil, Telugu, Kannada, etc.)
- 3-Step Approval: Creator → Verifier → Approver
- Bulk upload via Excel/Word
- Lock next content until previous is completed
- Reuse uploaded videos across courses

### 📄 Previous Year Question Bank
- Categorized by Exam → Subject → Lesson
- Excel Import (Serial, Question, Options, Answer, Explanation)
- Heatmap analytics to show frequency of repeated questions
- Mark questions as Free/Paid
- Global search by keyword or exam

### 📈 Assessments & Exams
- Quiz (10 MCQs), Aptitude Tests (with < 5 min videos)
- Submit & view solutions, OMR-style PDF export
- Live Zoom Exam with poll voting and leaderboard
- Countdown timer, result & rank board

### 📺 Live Classes & Webinars
- Zoom API Integration with watermark overlay (Institute name + contact)
- YouTube Live for webinars + E-Certificate after participation
- Alerts via Email, WhatsApp, and SMS
- Time-limited access for free users (e.g., 2 hours)

### 🛒 E-Commerce & Cart
- Sell paid/free videos, PDFs, e-books, and physical books
- Bundle multiple courses for purchase
- Dynamic top-bar category filtering (e.g., TNPSC, UPSC)

### 🧾 Subscriptions & Revenue
- Plan durations: 15 days, 1M, 3M, 6M, 1Y, 3Y
- Admin-trainer revenue sharing per plan
- Auto-generated invoice sent via Email/WhatsApp

### 👥 Referral System
- Admin creates codes → Trainers distribute
- Discount for student + commission for trainer
- Validity periods: 1M, 3M, 6M, 1Y
- Real-time notifications
- Dashboard analytics for Admin and Trainer

### 📢 Marketing & Promotions
- AI-generated promotion codes with expiry/date limits
- Display welcome promo popup on app launch
- WhatsApp and Email campaign manager
- Fixed or time-limited discounts per campaign

### 🆓 Guest Access Control
- Limit total watch time for free users (e.g., 2 hours for live class)
- Enforce login after time exhausted

### 🔐 Security
- One-device login (1 Mobile + 1 Desktop)
- Mandatory Email + Mobile verification for students
- GDPR/CCPA-compliant encryption

### 📣 Community & Blog
- Student/trainer can write blogs (admin approval required)
- Newsroom section for announcements
- Student-submitted quizzes (approval required)

### 🎓 Certificates & Admission
- Auto-generate course completion certificates
- Custom templates per institute
- Branch-wise admission with payment
- Admin-managed banners and marquee ads

### 📤 Smart TV Casting
- Cast videos or files to smart TV or external display via Web API

### 📊 Dashboards & Analytics
- Admin/Trainer Dashboards: commissions, referrals, revenue
- Student Dashboard: progress, certificates, test ranks
- Institute reports: enrollments, attendance, plan usage

---

## ✅ Testing & Deployment

- ✅ Unit Testing for APIs and components
- ✅ Integration + UAT coverage for major workflows
- ✅ Git-based version control with deployment scripts
- ✅ Auto-deploy support for staging and production pipelines

---

## 📂 Output Structure

- Laravel + Inertia + React SPA layout
- REST API for mobile/React Native access
- Blade-based SEO pages for blogs and content marketing
- RBAC Middleware for role control
- Seeders for roles, plans, referral codes, and dummy courses

---

## 🔗 License

This project is proprietary and maintained by [Eagleminds Technologies Private Limited](https://eagleminds.in). All rights reserved.
