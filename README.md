# 💧 Water-borne Disease Predictor

<div align="center">

![Project Banner](https://img.shields.io/badge/Health-Government%20Portal-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

**A comprehensive government health portal for reporting health issues and accessing emergency services**

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **Water-borne Disease Predictor** is a modern, user-friendly government health portal designed to streamline health issue reporting and provide quick access to emergency services. Built with Next.js 14 and TypeScript, this application offers a seamless experience for citizens to connect with government health services.

### Why This Project?

- 🚨 **Quick Emergency Access**: Instant access to all major emergency helpline numbers
- 📝 **Easy Reporting**: Simple and intuitive health issue reporting system
- 💬 **WhatsApp Integration**: Direct communication channel via WhatsApp
- 📱 **Responsive Design**: Works flawlessly on all devices
- ♿ **Accessible**: Built with accessibility in mind

---

## ✨ Features

### 🏥 Health Issue Reporting
- Comprehensive form validation
- Multiple issue type categories
- Real-time form error handling
- Success confirmation feedback

### 📞 Emergency Services
- **10+ Emergency Helpline Numbers** including:
  - National Emergency (112)
  - Ambulance (102)
  - Police (100)
  - Disaster Management (108)
  - Women Helpline (181)
  - Child Helpline (1098)
  - Mental Health Support
  - COVID-19 Helpline
  - And more...

### 💬 Communication Channels
- WhatsApp integration for instant messaging
- Direct phone call links
- Email support
- Contact form submission

### 🎨 Modern UI/UX
- Clean and professional design
- Smooth animations and transitions
- Intuitive navigation
- Mobile-first responsive layout

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - Re-usable component collection

### Form Handling
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **next-themes** - Dark mode support
- **class-variance-authority** - Component variants
- **clsx** & **tailwind-merge** - Conditional styling
- **date-fns** - Date manipulation
- **Recharts** - Data visualization

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/venkat-karthik/Water-borne-Disease-predictor.git
   cd Water-borne-Disease-predictor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
Water-borne-Disease-predictor/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   └── ... (50+ components)
│   └── theme-provider.tsx  # Theme context provider
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── ...                 # Static assets
├── styles/
│   └── globals.css         # Additional global styles
├── contact.html            # Static contact page
├── script.js               # Client-side scripts
├── style.css               # Legacy styles
└── package.json            # Dependencies
```

---

## 📸 Screenshots

### Main Dashboard
![Dashboard](https://via.placeholder.com/800x400/000080/ffffff?text=Government+Health+Portal)

### Health Issue Report Form
![Report Form](https://via.placeholder.com/800x400/e7eef3/000080?text=Health+Issue+Report+Form)

### Emergency Helpline Numbers
![Emergency Numbers](https://via.placeholder.com/800x400/fbfdfe/000080?text=Emergency+Helpline+Numbers)

---

## 🎯 Key Components

### Form Validation
```typescript
const validateForm = () => {
  // Email validation
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }
  
  // Phone validation (10 digits)
  if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = 'Phone number must be 10 digits';
  }
  
  return Object.keys(newErrors).length === 0;
};
```

### WhatsApp Integration
```typescript
const handleWhatsAppClick = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello, I need assistance...");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
};
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Venkat Karthik**

- GitHub: [@venkat-karthik](https://github.com/venkat-karthik)
- Project Link: [Water-borne Disease Predictor](https://github.com/venkat-karthik/Water-borne-Disease-predictor)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for better healthcare accessibility

</div>
