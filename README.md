# Course Website Landing Page

A modern, responsive landing page for an online course platform built with Next.js, TypeScript, and Tailwind CSS.

> Design by Resky Fernanda from Figma Community.

---

## Features

- **Responsive Design** — Mobile-first approach with seamless scaling across all devices
- **Interactive Components** — Working carousel with modulo-based navigation logic
- **Modern Tech Stack** — Next.js 14, TypeScript, Tailwind CSS
- **Optimized Performance** — Next.js Image optimization and efficient rendering
- **Accessible** — Semantic HTML and ARIA labels throughout

---

## Tech Stack

| Layer     | Technology       |
|-----------|-----------------|
| Framework | Next.js 14       |
| Language  | TypeScript       |
| Styling   | Tailwind CSS     |
| Icons     | React Icons      |
| Fonts     | Plus Jakarta Sans |

---

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About Us page
│   ├── courses/page.tsx         # Courses page
│   ├── faq/page.tsx             # FAQ page
│   ├── join/page.tsx            # Join Now page
│   ├── plans/page.tsx           # Plans page
│   └── layout.tsx               # Root layout
├── components/
│   ├── Navbar.tsx               # Navigation with mobile menu
│   ├── HeroSection.tsx          # Hero banner
│   ├── Collaboration.tsx        # Partner logos
│   ├── Commitment.tsx           # Mission section
│   ├── Courses.tsx              # Course grid
│   ├── Course.tsx               # Individual course card
│   ├── Testimonials.tsx         # Testimonial section
│   ├── TestimonialsCard.tsx     # Carousel component
│   ├── TestimonialHeading.tsx   # Testimonial header
│   ├── CTA.tsx                  # Call-to-action section
│   └── Footer.tsx               # Footer with links
├── data/
│   ├── courseData.ts            # Course information
│   └── testimonialData.ts       # Testimonial content
└── public/
    └── [images and assets]
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route      | Description                  |
|------------|------------------------------|
| `/`        | Main landing page            |
| `/about`   | Company mission and values   |
| `/courses` | Full course catalog          |
| `/faq`     | Frequently asked questions   |
| `/blog`    | Articles and updates         |
| `/join`    | Registration page            |
| `/plans`   | Pricing and plans            |

---

## Design System

### Colors

| Token      | Value     |
|------------|-----------|
| Primary    | `#1B1AFF` |
| Dark       | `#1C1C1C` |
| Background | `#F5F8FE` |
| Text       | `#1C1C1C` |

### Typography

- **Font Family:** Plus Jakarta Sans
- **Headings:** Bold (700)
- **Body:** Regular (400)

### Spacing

- **Mobile:** `py-12 px-6`
- **Desktop:** `py-16 px-8`
- **Max Width:** `max-w-6xl`

---

## Key Implementation Notes

### Carousel Navigation

The testimonial carousel uses modulo arithmetic for seamless circular navigation, eliminating the need for conditional edge-case handling:

```typescript
// Next button
setCurrent(prev => (prev + 1) % testimonials.length);

// Previous button
setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
```

### Responsive Design Pattern

Mobile-first approach using Tailwind breakpoints:

```typescript
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
// Mobile: 20px → Small: 24px → Medium: 30px → Large: 36px
```

### State Management

Clean separation of concerns with React hooks:

- `useState` — carousel index tracking
- `useRef` — click-outside detection
- `useEffect` — event listener cleanup

---

## Component Highlights

### Navbar
- Responsive hamburger menu
- Click-outside detection with refs
- Smooth transitions

### Carousel
- Circular navigation
- Clickable progress dots
- Keyboard accessible

### Course Grid
- Data-driven with mapping
- Responsive 1–3 column layout
- Hover effects

---

## Performance

- Next.js `Image` component for optimization
- Server-side rendering
- Code splitting
- Minimal JavaScript bundle

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## Acknowledgments

- Design by Resky Fernanda
- Built as a learning project for responsive web development
- Inspired by modern course platforms

---

## Contact

[@yasminhillis](https://github.com/yasminhillis) · Built with ❤️ using Next.js and Tailwind CSS
