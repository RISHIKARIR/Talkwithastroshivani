# Build & Run Guide

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
npm run dev
```
The app will start on `http://localhost:5173` (or the next available port)

### 3. Production Build
```bash
npm run build
```
Creates optimized build in the `dist` folder

### 4. Preview Production Build
```bash
npm run preview
```
Preview the production build locally

### 5. Linting
```bash
npm run lint
```
Check code quality and fix issues

## Key Features to Test

### Mobile Navigation
- Click the hamburger menu on mobile devices
- Verify all navigation links work
- Menu should close when a link is clicked

### Booking Form
1. Click "Book" button in navigation or footer
2. Click any "Book Now" button in services section
3. Form should open as a modal
4. Fill in your details
5. Select a service
6. Submit the form
7. Verify success message appears

### Image Loading
- Open DevTools (F12)
- Check Network tab
- Images should load lazily as you scroll down
- Page should load quickly with progressive image loading

### Responsive Design
- Test on mobile, tablet, and desktop
- Services grid should adjust columns
- Navigation should become mobile menu on small screens
- Footer should stack columns on mobile

### Accessibility
- Use Tab key to navigate through all interactive elements
- All buttons and links should be reachable
- Focus states should be clearly visible (red outline)
- Screen readers should read alt text properly

## Optimization Notes

### Performance
- Images are lazy loaded for better performance
- Tailwind CSS is compiled efficiently
- Code splitting helps with bundle size
- Vite provides fast development and build times

### Future Optimizations
- Add image compression/optimization
- Implement caching strategies
- Add service worker for offline support
- Optimize bundle size with code splitting

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
- Clear cache: `rm -rf dist`
- Rebuild: `npm run build`

## Code Quality

### ESLint Rules
The project uses ESLint with React plugins for code quality checks.

### CSS Framework
Using Tailwind CSS v4 with the Vite plugin for optimal performance.

## Git Commands

### See Changes
```bash
git status
git diff
```

### Commit Changes
```bash
git add .
git commit -m "Improvement: enhanced app with booking system and accessibility"
```

## Deployment

### On Vercel/Netlify
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. They automatically detect Vite config
4. Site deploys on every push to main branch

### Environment Variables
If you add backend APIs, create `.env` file:
```
VITE_API_URL=https://your-api.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

**Happy Coding!** 🚀
