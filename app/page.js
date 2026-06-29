"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const products = [
    {
      name: "Mango Pickle",
      desc: "Traditional spicy aam achar",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
    {
      name: "Lemon Pickle",
      desc: "Tangy homemade nimbu achar",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    },
    {
      name: "Chilli Pickle",
      desc: "Hot pahadi mirch achar",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-yellow-50">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
  <Image
  src="/images/logo.png"
  alt="Pahadi Pickle Logo"
  width={90}
  height={90}
  className="rounded-full object-contain"
  priority
/>

  <h1 className="text-3xl font-extrabold text-green-700">
  PAHADI PICKLE
</h1>
</div>
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <a
  href="#products"
  className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
>
  Order Now
</a>
        </div>
      </nav>

  {/* Hero Section */}
<section
  id="home"
  data-aos="fade-up"
  className="py-24 bg-gradient-to-r from-yellow-50 via-white to-green-50"
>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Side */}
    <div>
      <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
        🌿 Authentic Homemade Pickles
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight">
        Taste the
        <span className="text-orange-500"> Himalayas </span>
        in Every Bite
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Experience the rich flavours of traditional Himachali pickles,
        handmade with pure mustard oil, fresh ingredients, and recipes
        passed down through generations.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="#products"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          🛒 Shop Now
        </a>

        <a
          href="#about"
          className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Learn More
        </a>
      </div>

      <div className="flex gap-10 mt-10">
        <div>
          <h3 className="text-3xl font-bold text-green-700">100%</h3>
          <p className="text-gray-500">Homemade</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700">3+</h3>
          <p className="text-gray-500">Pickle Varieties</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700">H.P.</h3>
          <p className="text-gray-500">Delivery Only</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div data-aos="zoom-in">
      <Image
        src="/images/hero.png"
        alt="Pahadi Pickle"
        width={700}
        height={700}
        priority
        className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
      />
    </div>

  </div>
</section>

{/* Products */}
<section
  id="products"
  data-aos="fade-up"
  className="py-24 bg-gradient-to-b from-white to-green-50"
>
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-700">
      Our Best Sellers
    </h2>

    <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
      Handmade using traditional Himachali recipes and premium ingredients.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Mango */}
      <div
        data-aos="zoom-in"
        className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
      >
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          ⭐ Best Seller
        </span>

        <Image
          src="/images/mango.png"
          alt="Mango Pickle"
          width={500}
          height={500}
          className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold text-green-700">
            Mango Pickle
          </h3>

          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500 ml-2">(120 Reviews)</span>
          </div>

          <p className="text-orange-500 text-2xl font-bold mt-3">
            ₹299
            <span className="text-sm text-gray-500"> / 500g</span>
          </p>

          <p className="text-gray-600 mt-4">
            Traditional Himachali raw mango pickle made with pure mustard oil and authentic spices.
          </p>

          <a
            href="https://wa.me/918580744070?text=Hi! I want to order Mango Pickle (500g)."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>

    
    
{/* Lemon */}
<div
  data-aos="zoom-in"
  className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
>
  <Image
    src="/images/lemon.png"
    alt="Lemon Pickle"
    width={500}
    height={500}
    className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold text-green-700">
      Lemon Pickle
    </h3>

    <div className="flex items-center mt-2">
      <span className="text-yellow-500">★★★★★</span>
      <span className="text-sm text-gray-500 ml-2">(95 Reviews)</span>
    </div>

    <p className="text-orange-500 text-2xl font-bold mt-3">
      ₹249
      <span className="text-sm text-gray-500"> / 500g</span>
    </p>

    <p className="text-gray-600 mt-4">
      Fresh lemons blended with traditional Himachali spices for a tangy, homemade flavour.
    </p>

    <a
      href="https://wa.me/918580744070?text=Hi! I want to order Lemon Pickle (500g)."
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
    >
      Buy Now
    </a>
  </div>
</div>
{/* Chilli */}
<div
  data-aos="zoom-in"
  className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
>
  <Image
    src="/images/chilli.png"
    alt="Chilli Pickle"
    width={500}
    height={500}
    className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold text-green-700">
      Chilli Pickle
    </h3>

    <div className="flex items-center mt-2">
      <span className="text-yellow-500">★★★★★</span>
      <span className="text-sm text-gray-500 ml-2">(88 Reviews)</span>
    </div>

    <p className="text-orange-500 text-2xl font-bold mt-3">
      ₹279
      <span className="text-sm text-gray-500"> / 500g</span>
    </p>

    <p className="text-gray-600 mt-4">
      Spicy homemade green chilli pickle prepared using authentic Himachali recipes and pure mustard oil.
    </p>

    <a
      href="https://wa.me/918580744070?text=Hi! I want to order Chilli Pickle (500g)."
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
    >
      Buy Now
    </a>
  </div>
</div>   {/* End Chilli Card */}

</div>   {/* End Products Grid */}

</div>   {/* End Container */}

</section>   {/* End Products Section */}
{/* Call To Action */}
<section data-aos="fade-up" className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
  <div className="max-w-5xl mx-auto text-center px-8">

    <h2 className="text-5xl font-bold mb-6">
      Bring Home the Taste of Himachal
    </h2>

    <p className="text-xl text-green-100 mb-10">
      Order your favourite homemade pickles today and enjoy authentic
      Himachali flavours made with love and tradition.
    </p>

    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20I%20want%20to%20order%20Pahadi%20Pickle."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-400 text-green-900 font-bold px-10 py-4 rounded-full hover:bg-yellow-300 transition duration-300 shadow-xl"
    >
      🛒 Order on WhatsApp
    </a>

  </div>
</section>

     {/* Why Choose Us */}
<section className="py-20 bg-green-50">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
      Why Choose Pahadi Pickle?
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Taste the authenticity of the Himalayas in every jar.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">🌿</div>
        <h3 className="text-xl font-bold text-green-700 mb-3">
          100% Natural
        </h3>
        <p className="text-gray-600">
          No preservatives, artificial colours or chemicals.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">🏔️</div>
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Himalayan Ingredients
        </h3>
        <p className="text-gray-600">
          Fresh ingredients sourced directly from Himalayan farms.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">👩‍🍳</div>
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Homemade Recipe
        </h3>
        <p className="text-gray-600">
          Traditional family recipes prepared with love and care.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-4">🚚</div>
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Fast Delivery
        </h3>
        <p className="text-gray-600">
          Fresh pickles delivered safely across Himachal Pradesh.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-green-700 text-white py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

    <div>
      <h2 className="text-5xl font-bold">500+</h2>
      <p>Happy Customers</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">100%</h2>
      <p>Homemade</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">3+</h2>
      <p>Traditional Pickles</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">H.P.</h2>
      <p>Delivery Across Himachal Pradesh</p>
    </div>

  </div>
</section>
{/* FAQ Section */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-8">
    <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="bg-green-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-green-700">
          ❓ Which areas do you deliver to?
        </h3>
        <p className="mt-2 text-gray-600">
          We currently deliver only within Himachal Pradesh.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-green-700">
          ❓ Are your pickles homemade?
        </h3>
        <p className="mt-2 text-gray-600">
          Yes. All our pickles are handmade using traditional Himachali family recipes.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-green-700">
          ❓ Which oil do you use?
        </h3>
        <p className="mt-2 text-gray-600">
          We use pure mustard oil and carefully selected spices for authentic taste.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-green-700">
          ❓ How can I place an order?
        </h3>
        <p className="mt-2 text-gray-600">
          Simply click the WhatsApp button on the website and send us your order.
        </p>
      </div>

    </div>
  </div>
</section>
     {/* Testimonials */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
      What Our Customers Say
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Loved by families across Himachal Pradesh ❤️
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          The mango pickle reminds me of my grandmother's recipe. Fresh, authentic and full of flavour.
        </p>
        <h3 className="mt-6 font-bold text-green-700">Priya Sharma</h3>
        <p className="text-gray-500 text-sm">Shimla</p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          Excellent quality and fast delivery. The lemon pickle tastes amazing with every meal.
        </p>
        <h3 className="mt-6 font-bold text-green-700">Rohit Thakur</h3>
        <p className="text-gray-500 text-sm">Mandi</p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          Best chilli pickle I've ever had. Pure homemade taste and excellent packaging.
        </p>
        <h3 className="mt-6 font-bold text-green-700">Neha Verma</h3>
        <p className="text-gray-500 text-sm">Kangra</p>
      </div>

    </div>

  </div>
</section>
{/* Our Process */}
<section className="py-20 bg-green-50">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
      How We Prepare Our Pickles
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-5xl mb-4">🥭</div>
        <h3 className="text-xl font-bold text-green-700">1. Fresh Ingredients</h3>
        <p className="text-gray-600 mt-3">
          We carefully select fresh fruits and vegetables from Himachal Pradesh.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h3 className="text-xl font-bold text-green-700">2. Traditional Recipe</h3>
        <p className="text-gray-600 mt-3">
          Prepared using traditional family recipes with pure mustard oil.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-5xl mb-4">☀️</div>
        <h3 className="text-xl font-bold text-green-700">3. Natural Process</h3>
        <p className="text-gray-600 mt-3">
          Naturally matured to develop rich flavour and authentic taste.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-5xl mb-4">📦</div>
        <h3 className="text-xl font-bold text-green-700">4. Safe Delivery</h3>
        <p className="text-gray-600 mt-3">
          Packed carefully and delivered across Himachal Pradesh.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Our Promise */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto text-center px-8">

    <h2 className="text-4xl font-bold text-green-700 mb-6">
      Our Promise
    </h2>

    <p className="text-xl text-gray-600 leading-9">
      Every jar of <span className="font-bold text-green-700">Pahadi Pickle</span>
      is handcrafted with care using fresh ingredients, pure mustard oil,
      and traditional Himachali recipes. We never compromise on quality,
      freshness, or taste.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-5xl">🌱</div>
        <h3 className="text-2xl font-bold text-green-700 mt-4">
          No Preservatives
        </h3>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-5xl">🥭</div>
        <h3 className="text-2xl font-bold text-green-700 mt-4">
          Fresh Ingredients
        </h3>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-5xl">❤️</div>
        <h3 className="text-2xl font-bold text-green-700 mt-4">
          Homemade With Love
        </h3>
      </div>

    </div>

  </div>
</section>

      {/* Contact */}
<section id="contact" className="py-20 bg-green-50">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
      Contact Us
    </h2>

    <p className="text-center text-gray-600 mb-12">
      We'd love to hear from you. Place your order or ask us anything!
    </p>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Left */}
      <div>
        <h3 className="text-2xl font-bold text-green-700 mb-6">
          Get in Touch
        </h3>

        <p className="mb-4">📞 +91 8580744070</p>

        <p className="mb-4">📧 pahadipickle@gmail.com</p>

        <p className="mb-4">
          📍 Himachal Pradesh, India
        </p>

        <p className="text-gray-600 mt-6">
          Authentic homemade Himachali pickles made with pure mustard oil and traditional family recipes. Delivery available only in Himachal Pradesh.
          <a
  href="https://wa.me/918580744070?text=Hello%20I%20want%20to%20order%20Pahadi%20Pickle."
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-green-700 text-white text-center py-3 rounded-lg hover:bg-green-800"
>
  Order on WhatsApp
</a>
        </p>
      </div>

      {/* Right */}
      <form className="bg-white p-8 rounded-2xl shadow-lg">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full border rounded-lg p-3 mb-4"
        ></textarea>

        <button
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>

{/* About Us */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

    <div>
      <img
        src="/images/hero.png"
        alt="Pahadi Pickle"
        className="rounded-2xl shadow-xl"
      />
    </div>

    <div>
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        About Pahadi Pickle
      </h2>

      <p className="text-gray-600 leading-8">
        Pahadi Pickle brings the authentic taste of Himachal Pradesh to your
        home. Our pickles are handmade using traditional family recipes,
        premium-quality fruits, pure mustard oil and carefully selected spices.
      </p>

      <p className="text-gray-600 leading-8 mt-5">
        Every jar is prepared with love, maintaining the rich flavours of the
        Himalayas. We believe in freshness, purity and homemade quality without
        compromising on taste.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-green-100 p-5 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-green-700">100%</h3>
          <p>Homemade</p>
        </div>

        <div className="bg-green-100 p-5 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-green-700">3+</h3>
          <p>Pickle Varieties</p>
        </div>
      </div>
    </div>

  </div>
</section>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/918580744070"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 text-3xl"
>
  💬
</a>
<footer className="bg-green-900 text-white py-10 mt-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    <div>
      <h2 className="text-2xl font-bold">PAHADI PICKLE</h2>
      <p className="mt-3 text-green-100">
        Authentic homemade Himachali pickles prepared using traditional
        recipes and pure mustard oil.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Contact</h3>
      <p>📞 +91 85807 44070</p>
      <p>📧 pahadipickle@gmail.com</p>
      <p>📍 Himachal Pradesh, India</p>
      <p className="mt-2 text-green-200">
        Delivery available only in Himachal Pradesh.
      </p>
    </div>

  </div>

  <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
    © 2026 PAHADI PICKLE. All Rights Reserved.
  </div>
</footer>
</main>
  );
}