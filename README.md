# 🛒 ShopKart — E-Commerce Frontend

A modern, responsive e-commerce shopping website built with **React JS**, **Vite**, and **Tailwind CSS**.
Developed as a **College End Semester CIA-3 Project**.

---

## 🚀 Live Features

| Feature | Status |
|---|---|
| Home Page with Hero Banner | ✅ |
| Product Listing with Grid Layout | ✅ |
| Search Products (live filter) | ✅ |
| Category Filter | ✅ |
| Product Details Page | ✅ |
| Add to Cart | ✅ |
| Remove from Cart | ✅ |
| Increase / Decrease Quantity | ✅ |
| Cart Total Calculation | ✅ |
| Cart persists on page refresh | ✅ |
| Empty Cart Message | ✅ |
| Related Products | ✅ |
| Loading Skeleton UI | ✅ |
| Responsive Design (Mobile + Desktop) | ✅ |
| Category links from Home & Footer | ✅ |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React JS (v19) | UI Library |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| React Router DOM v7 | Page navigation |
| Context API | Global cart state |
| localStorage | Cart data persistence |

---

## 📁 Folder Structure

```
shopkart/
├── public/
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx    # Top navigation bar
│   │   ├── Footer.jsx    # Bottom footer
│   │   ├── ProductCard.jsx   # Product card UI
│   │   └── CartItem.jsx  # Single cart item row
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state (Context API)
│   ├── data/
│   │   └── products.js   # Local dummy product data (12 products)
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Products.jsx      # Product listing page
│   │   ├── ProductDetails.jsx # Single product page
│   │   └── Cart.jsx          # Shopping cart page
│   ├── App.jsx           # Root component with Router setup
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind import + global styles
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation & Run

```bash
# 1. Navigate to project folder
cd shopkart

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at:
# http://localhost:5173
```

### Build for Production

```bash
npm run build
```

---

## 🗺️ Page Routes

| URL | Page |
|---|---|
| `/` | Home Page |
| `/products` | All Products |
| `/products?category=Electronics` | Filtered by Category |
| `/product/:id` | Product Details (e.g. `/product/1`) |
| `/cart` | Shopping Cart |

---

## 🧠 How Key Features Work

### 1. Add to Cart
- User clicks "Add to Cart" on any `ProductCard` or `ProductDetails`
- This calls `addToCart(product)` from `CartContext`
- If product already in cart → quantity increases by 1
- If new product → added with `quantity: 1`
- Cart state updates instantly across all components

### 2. localStorage Persistence
- Every time `cartItems` state changes, a `useEffect` saves it to `localStorage`
- When the app loads, `useState` initializer reads from `localStorage`
- This means cart survives page refresh or tab close

### 3. React Router DOM
- `BrowserRouter` wraps the entire app in `App.jsx`
- `<Routes>` and `<Route>` define which page shows at which URL
- `<Link>` and `useNavigate()` navigate without page reload (SPA behavior)
- `useParams()` extracts dynamic segments like `:id` from URL

### 4. Context API (Cart State)
- `CartContext` is created with `createContext()`
- `CartProvider` wraps the whole app and holds cart state
- Any component calls `useCart()` to access cart data without prop drilling
- No Redux needed — Context API is perfect for small-to-medium apps

### 5. Search & Filter
- `useState` stores search text and active category
- Products are filtered using JavaScript `.filter()` array method
- Both conditions (search + category) must match using `&&`
- URL query param (`?category=X`) allows deep linking to categories

---

## 🎨 Design Highlights

- **Color Scheme**: Indigo/Purple primary, clean white cards
- **Typography**: System font stack — fast and clean
- **Hover Effects**: Scale transform + shadow elevation
- **Loading UI**: CSS `animate-pulse` skeleton cards
- **Responsive Grid**: 1 col → 2 col → 4 col via Tailwind breakpoints
- **Sticky Navbar**: `sticky top-0 z-50` keeps nav visible while scrolling

---

## 👨‍💻 Developer

Made with ❤️ by Dev Sharma using React + Tailwind CSS
College CIA-3 End Semester Project
