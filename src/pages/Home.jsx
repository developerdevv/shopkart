import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const stats = [
  { number: "12K+", label: "Products Listed" },
  { number: "50K+", label: "Happy Customers" },
  { number: "4.8", label: "Avg. Rating" },
  { number: "100%", label: "Secure Payments" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    text: "ShopKart is my go-to for everything. Delivery is super fast and quality is always top-notch. Couldn't be happier!",
    rating: 5,
    initials: "PS",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Rahul Verma",
    role: "Verified Buyer",
    text: "Amazing experience from browsing to checkout. Found exactly what I needed at unbeatable prices.",
    rating: 5,
    initials: "RV",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Ananya Patel",
    role: "Fashion Enthusiast",
    text: "The variety of categories is impressive. Website is so smooth to use and the cart experience is seamless.",
    rating: 4,
    initials: "AP",
    color: "bg-purple-100 text-purple-700",
  },
];

const categories = [
  { name: "Electronics", icon: "⚡" },
  { name: "Men", icon: "👔" },
  { name: "Women", icon: "👗" },
  { name: "Footwear", icon: "👟" },
  { name: "Accessories", icon: "👜" },
];

function Home() {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 4);

  const trendingProducts = products.slice(4, 8);

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "text-amber-400" : "text-gray-200"}>
        ★
      </span>
    ));

  return (
    <div className="bg-white">

      <section className="relative overflow-hidden bg-white">

        <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[90vh] gap-10 py-16 lg:py-0">

            <div className="z-10">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                New arrivals every week
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Style That
                <br />
                <span className="text-gray-300">Speaks</span>
                <br />
                For Itself.
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Discover curated collections across fashion, electronics, and lifestyle.
                Premium quality. Honest prices. Always.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/products")}
                  className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-200"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => navigate("/products?category=Electronics")}
                  className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-gray-900 hover:text-gray-900 active:scale-95 transition-all duration-200"
                >
                  View Electronics
                </button>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <div>
                  <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>50K+</p>
                  <p className="text-xs text-gray-400">Happy Customers</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>12K+</p>
                  <p className="text-xs text-gray-400">Products</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>4.8★</p>
                  <p className="text-xs text-gray-400">Rating</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden h-[620px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80"
                  alt="Shopping lifestyle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -left-6 top-16 bg-white rounded-2xl shadow-xl p-4 w-44 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Today's Deal</p>
                <p className="font-bold text-gray-900 text-sm">Up to 30% Off</p>
                <p className="text-xs text-emerald-500 font-medium mt-1">Electronics →</p>
              </div>

              <div className="absolute -right-4 bottom-20 bg-white rounded-2xl shadow-xl p-4 w-40 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <p className="text-xs text-gray-500">Free Shipping</p>
                </div>
                <p className="text-xs text-gray-800 font-medium">On orders above ₹999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-800">

            {[
              {
                icon: "🚚",
                title: "Free Delivery",
                desc: "Free shipping on all orders above ₹999. Fast & tracked.",
              },
              {
                icon: "🔒",
                title: "Secure Checkout",
                desc: "256-bit SSL encryption. Your payment info is always safe.",
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                desc: "7-day no-questions-asked return policy on all products.",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-center gap-5 px-8 py-8">
                <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <h3
                    className="text-white font-semibold mb-1 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
                Explore
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Shop by Category
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => navigate(`/products?category=${cat.name}`)}
                className="group flex flex-col items-center gap-3 p-6 border border-gray-100 rounded-2xl hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
                Handpicked
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Featured Products
              </h2>
            </div>
            <button
              onClick={() => navigate("/products")}
              className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
                What's Hot
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Trending Now
              </h2>
            </div>
            <button
              onClick={() => navigate("/products")}
              className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              See all trends →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl md:text-5xl font-black text-gray-900 mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-3">
              Customer Love
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex mb-4">{renderStars(t.rating)}</div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-gray-900 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
              Stay in the loop
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get Exclusive Deals
              <br />
              in Your Inbox
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Subscribe for early access to sales, new arrivals, and members-only discounts.
              No spam. Unsubscribe anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-800 text-white placeholder-gray-600 px-5 py-3.5 rounded-full border border-gray-700 focus:outline-none focus:border-gray-500 text-sm transition-colors"
              />
              <button className="bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
