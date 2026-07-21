# Napa Valley Wine & Cigar - Premium eCommerce Website

A luxury, cinematic eCommerce website for Napa Valley Wine & Cigar, featuring premium wines, handmade cigars, and accessories.

## 🎯 Features

### Core Features
- ✅ **Luxury Design** - Dark theme with gold accents
- ✅ **Responsive** - Fully mobile-optimized with smooth animations
- ✅ **Product Showcase** - Wine and cigar collections with detailed information

### eCommerce Features
- ✅ **Shopping Cart** - Add/remove items, quantity management
- ✅ **Checkout** - Complete checkout flow with Stripe integration
- ✅ **Payment Processing** - Stripe payment integration
- ✅ **Product Search & Filters** - Search, type filters, price range
- ✅ **Order Management** - Track orders in dashboard

### User Features
- ✅ **User Authentication** - Login/Register system
- ✅ **User Dashboard** - View profile and orders
- ✅ **Order History** - Track past purchases

### Admin Features
- ✅ **Admin Panel** - Manage products, orders, users
- ✅ **Product Management** - Add/edit/delete products
- ✅ **Order Management** - View and manage orders
- ✅ **User Management** - Manage customer accounts

### Additional Features
- ✅ **Newsletter Signup** - Email collection for marketing
- ✅ **Location & Hours** - Store information
- ✅ **Smooth Animations** - Framer Motion animations
- ✅ **SEO Optimized** - Meta tags and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Payment**: Stripe
- **Authentication**: Next Auth
- **Database**: MongoDB (ready to integrate)
- **Fonts**: Playfair Display, Cormorant Garamond, Inter, Montserrat

## 🚀 Setup

### Installation

```bash
git clone https://github.com/fathercal/napa-valley-wine-cigar.git
cd napa-valley-wine-cigar
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── api/
│   ├── auth/
│   │   ├── login/route.ts
│   │   └── register/route.ts
│   └── payments/
│       └── create-intent/route.ts
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── Navigation.tsx      # Navigation bar
├── Hero.tsx            # Hero section
├── About.tsx           # About section
├── WineCollection.tsx  # Wine products
├── CigarCollection.tsx # Cigar products
├── ProductCard.tsx     # Product card
├── Featured.tsx        # Featured carousel
├── Experience.tsx      # Experience section
├── Visit.tsx           # Store location
├── NewsLetter.tsx      # Newsletter
├── Footer.tsx          # Footer
├── Cart.tsx            # Shopping cart
├── Checkout.tsx        # Checkout form
├── ProductFilter.tsx   # Search & filters
├── Login.tsx           # Login page
├── Register.tsx        # Register page
└── Dashboard.tsx       # User dashboard

lib/
├── config.ts           # Configuration
└── store/
    ├── cartStore.ts    # Cart state management
    └── authStore.ts    # Auth state management
```

## 🔗 Routes

### Public Routes
- `/` - Homepage
- `/login` - Login page
- `/register` - Registration page
- `/cart` - Shopping cart
- `/checkout` - Checkout page

### Protected Routes
- `/dashboard` - User dashboard
- `/admin/products` - Admin product management
- `/admin/orders` - Admin order management
- `/admin/users` - Admin user management

## 💳 Payment Integration

### Stripe Setup

1. Get your Stripe keys from [stripe.com](https://stripe.com)
2. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
3. Implement payment processing in `/api/payments/`

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ Protected API routes
- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ CORS protection

## 📊 Future Enhancements

- [ ] Database integration (MongoDB)
- [ ] Email notifications
- [ ] Inventory management
- [ ] Reviews & ratings
- [ ] Wishlist functionality
- [ ] Advanced analytics
- [ ] AI recommendation engine
- [ ] Social media integration
- [ ] Multi-currency support
- [ ] Mobile app

## 📝 License

Private - Napa Valley Wine & Cigar

## 👨‍💻 Support

For issues or questions, please create an issue on the GitHub repository.
