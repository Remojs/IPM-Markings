# MarineTape Pro - Technical Documentation

## Project Overview

MarineTape Pro is a professional website for a marine pipe identification company that offers specialized tape products for ships, offshore platforms, and marine facilities. The application is built using React and Vite, featuring a component-based architecture with CSS Modules for styling.

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 7
- **Routing**: React Router v6
- **Styling**: CSS Modules (no external UI libraries)
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Language Support**: Multilingual (English, Spanish)
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── assets/           # Static resources (images, icons)
├── components/       # Reusable UI components
│   ├── Contact/      # Contact form and information
│   ├── Footer/       # Site footer
│   ├── Hero/         # Hero section
│   ├── HowItWorks/   # Process explanation section
│   ├── Navbar/       # Navigation bar
│   ├── ProductDetail/# Product detail view styling
│   ├── Products/     # Products grid component
│   ├── Regulations/  # Compliance section
│   └── WhyUs/        # Company benefits section
├── data/             # JSON data files
│   └── products.json # Product information
├── layout/           # Layout components
│   └── Layout.jsx    # Main layout wrapper
└── routes/           # Route components
    ├── Home.jsx      # Home page
    ├── Products.jsx  # Products listing page
    └── ProductDetail.jsx # Product detail page
```

## Component Architecture

The application follows a modular component architecture with:

1. **Container Components**: Handle data fetching, state management, and pass data to presentational components
2. **Presentational Components**: Focus on UI rendering with props received from containers
3. **Layout Components**: Define the structure of the application

### Key Components

- `Layout`: Main wrapper that includes the Navbar and Footer
- `Navbar`: Responsive navigation bar with language switcher
- `Hero`: Main landing section with call-to-action buttons
- `Products`: Grid display of product items
- `ProductDetail`: Detailed view of individual products
- `Contact`: Contact form with input validation
- `Footer`: Site footer with links and copyright information

## CSS Architecture

The project uses CSS Modules for component-specific styling, which provides:

- **Scoped Styles**: Prevents style leakage between components
- **Naming Consistency**: Follows BEM-like methodology for class naming
- **Responsive Design**: Mobile-first approach with media queries
- **Theming**: Consistent color and spacing variables

### Example CSS Module:

```css
/* Navbar.module.css */
.navbarContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 50;
  transition: all 0.3s ease;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scrolled {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Routing System

React Router v6 is used for navigation:

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  </Routes>
</Router>
```

## Internationalization

The application supports multiple languages through a context-based solution:

1. Language state is maintained at the Layout level
2. Language context is passed down to child components
3. Each component has translations object with language keys
4. UI updates automatically when language changes

## State Management

- **Component State**: Managed with useState hook for component-specific state
- **Cross-Component State**: Shared via React Context API (language settings)
- **URL Parameters**: Used for accessing product details

## Development Setup

### Prerequisites

- Node.js >= 16.x
- npm >= 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Remojs/IPM-Markings.git

# Navigate to project directory
cd IPM-Markings/page

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## Build and Deployment

### Production Build

```bash
npm run build
```

This generates optimized assets in the `dist/` directory.

### Deployment Considerations

- Set up proper cache headers for static assets
- Configure your server for SPA routing (redirect 404s to index.html)
- Consider using a CDN for serving static assets

## Performance Optimizations

- Component code splitting with React.lazy and Suspense
- Image optimization for faster loading
- CSS Modules for reducing CSS bundle size
- Vite's efficient HMR for faster development

## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Future Enhancements

- TypeScript integration for type safety
- Unit and integration testing with Jest and React Testing Library
- Server-side rendering for improved SEO
- State management with Redux for more complex state needs
- Performance monitoring and analytics integration

---

## License

Copyright © 2023 IPM Markings. All rights reserved.
