import { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Heart,
  ShoppingCart,
  Shield,
  Leaf,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Package,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

// Product Data
const products = [
  {
    id: 1,
    name: 'Natural Glow Serum',
    category: 'Skincare',
    color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700',
    gradient: 'from-blue-400 to-blue-600',
    shortDescription: 'Radiant skin with natural botanicals',
    fullDescription: 'Our signature Natural Glow Serum combines powerful antioxidants with natural botanicals to deliver visible results. Formulated with vitamin C, hyaluronic acid, and plant extracts for ultimate skin rejuvenation.',
    price: '$49.99',
    rating: 4.8,
    reviews: 234,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop'
    ],
    benefits: [
      'Reduces fine lines and wrinkles',
      'Brightens skin tone',
      'Deeply hydrates',
      'Suitable for all skin types'
    ],
    ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Green Tea Extract', 'Aloe Vera'],
    precautions: [
      'For external use only',
      'Avoid direct contact with eyes',
      'Discontinue use if irritation occurs',
      'Store in a cool, dry place'
    ],
    usage: 'Apply 2-3 drops to clean face morning and evening. Gently massage until fully absorbed.'
  },
  {
    id: 2,
    name: 'Hydra Fresh Cream',
    category: 'Moisturizer',
    color: 'bg-gradient-to-br from-teal-400 via-cyan-500 to-cyan-600',
    gradient: 'from-teal-400 to-cyan-600',
    shortDescription: 'Deep hydration for 24 hours',
    fullDescription: 'Experience long-lasting moisture with our Hydra Fresh Cream. This lightweight formula penetrates deep into skin layers, providing intense hydration without feeling greasy.',
    price: '$39.99',
    rating: 4.9,
    reviews: 189,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop'
    ],
    benefits: [
      '24-hour hydration',
      'Non-greasy formula',
      'Strengthens skin barrier',
      'Dermatologist tested'
    ],
    ingredients: ['Ceramides', 'Peptides', 'Niacinamide', 'Shea Butter'],
    precautions: [
      'Patch test before first use',
      'Keep away from children',
      'Avoid if allergic to ingredients',
      'Use within 12 months of opening'
    ],
    usage: 'Apply to face and neck after cleansing. Use morning and night for best results.'
  },
  {
    id: 3,
    name: 'Rose Radiance Oil',
    category: 'Treatment',
    color: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
    gradient: 'from-pink-400 to-pink-600',
    shortDescription: 'Luxurious facial oil for glow',
    fullDescription: 'Indulge in the luxurious Rose Radiance Oil, crafted with pure rosehip and essential oils. This nourishing blend rejuvenates tired skin and restores natural radiance.',
    price: '$59.99',
    rating: 4.7,
    reviews: 312,
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop'
    ],
    benefits: [
      'Anti-aging properties',
      'Improves skin elasticity',
      'Fades dark spots',
      'Natural aromatherapy'
    ],
    ingredients: ['Rosehip Oil', 'Jojoba Oil', 'Vitamin E', 'Rose Essential Oil'],
    precautions: [
      'Perform patch test first',
      'Not for acne-prone skin',
      'Keep away from heat',
      'Consult dermatologist if pregnant'
    ],
    usage: 'Apply 3-4 drops to damp skin after cleansing. Massage gently in upward motions.'
  },
  {
    id: 4,
    name: 'Green Tea Cleanser',
    category: 'Cleanser',
    color: 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600',
    gradient: 'from-emerald-400 to-teal-600',
    shortDescription: 'Gentle purifying formula',
    fullDescription: 'Our Green Tea Cleanser gently removes impurities while delivering powerful antioxidants. Leaves skin feeling refreshed, balanced, and ready for the day.',
    price: '$29.99',
    rating: 5.0,
    reviews: 456,
    images: [
      'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop'
    ],
    benefits: [
      'Deep cleansing action',
      'Reduces inflammation',
      'Balances oil production',
      'pH balanced formula'
    ],
    ingredients: ['Green Tea Extract', 'Salicylic Acid', 'Glycerin', 'Chamomile'],
    precautions: [
      'Rinse thoroughly after use',
      'Avoid contact with eyes',
      'Use twice daily maximum',
      'May cause dryness in sensitive skin'
    ],
    usage: 'Wet face, apply cleanser, massage in circular motions for 30 seconds, rinse thoroughly.'
  },
  {
    id: 5,
    name: 'Purple Dreams Night Cream',
    category: 'Night Care',
    color: 'bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700',
    gradient: 'from-indigo-400 to-purple-600',
    shortDescription: 'Overnight skin renewal',
    fullDescription: 'Wake up to transformed skin with Purple Dreams Night Cream. This intensive overnight treatment works while you sleep to repair, renew, and rejuvenate.',
    price: '$54.99',
    rating: 4.6,
    reviews: 198,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
    ],
    benefits: [
      'Repairs skin overnight',
      'Boosts collagen production',
      'Reduces pore appearance',
      'Luxurious texture'
    ],
    ingredients: ['Retinol', 'Peptide Complex', 'Lavender Oil', 'Collagen'],
    precautions: [
      'Use sunscreen during day',
      'Start with small amount',
      'Not for sensitive skin',
      'Avoid use during pregnancy'
    ],
    usage: 'Apply generously to clean face before bed. Allow to absorb fully. Use 3-4 times per week.'
  },
  {
    id: 6,
    name: 'Eco Pure Toner',
    category: 'Toner',
    color: 'bg-gradient-to-br from-green-500 via-teal-600 to-teal-700',
    gradient: 'from-green-400 to-teal-600',
    shortDescription: 'Balancing botanical mist',
    fullDescription: 'Refresh and balance your skin with Eco Pure Toner. This alcohol-free formula preps skin for better absorption of serums and moisturizers.',
    price: '$24.99',
    rating: 4.8,
    reviews: 267,
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop'
    ],
    benefits: [
      'Balances pH levels',
      'Tightens pores',
      'Alcohol-free formula',
      'Refreshes instantly'
    ],
    ingredients: ['Witch Hazel', 'Rose Water', 'Cucumber Extract', 'Aloe Vera'],
    precautions: [
      'Shake well before use',
      'Store upright',
      'Close cap tightly after use',
      'Test on small area first'
    ],
    usage: 'Spray on cotton pad or directly on face after cleansing. Pat gently to absorb.'
  }
];

// Product Card Component with Image Carousel
const ProductCard = ({ product, onLearnMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`group relative ${product.color} rounded-3xl p-6 shadow-xl transition-all duration-700 cursor-pointer overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
        <div className={`absolute bottom-4 left-4 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
      </div>

      {/* Shine Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-4 right-4 z-20 bg-white/30 backdrop-blur-md p-2.5 rounded-full transition-all duration-300 hover:scale-110 border-2 ${
          isFavorite ? 'border-red-300 bg-white/50' : 'border-white/40'
        }`}
      >
        <Heart
          size={20}
          className={`transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
        />
      </button>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs font-bold text-gray-700">{product.category}</span>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-6 bg-white rounded-2xl overflow-hidden h-64 shadow-lg">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />

        {/* Image Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
            <p className="text-white/90 text-sm">{product.shortDescription}</p>
          </div>
          <div className="text-2xl font-bold text-white">{product.price}</div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(product.rating) ? 'fill-yellow-300 text-yellow-300' : 'fill-white/30 text-white/30'}`}
              />
            ))}
          </div>
          <span className="text-white/90 text-sm">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => onLearnMore(product)}
            className="flex-1 bg-white text-gray-800 font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Learn More</span>
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/30">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Detail Modal
const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  if (!isOpen || !product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-90"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Left Side - Image Carousel */}
          <div className={`relative ${product.color} p-8 flex items-center justify-center overflow-hidden`}>
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Image Carousel */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-[500px] object-contain rounded-2xl shadow-2xl"
              />

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={24} className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={24} className="text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="bg-white overflow-y-auto p-8 max-h-[90vh]">
            {/* Product Header */}
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                {product.category}
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-lg">{product.fullDescription}</p>
              
              {/* Rating and Price */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-800">{product.price}</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              {['details', 'benefits', 'ingredients', 'precautions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'details' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Package className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">How to Use</h4>
                        <p className="text-gray-600">{product.usage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="space-y-3 animate-fadeIn">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-green-50 rounded-xl p-4 transition-all duration-300 hover:bg-green-100"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-3">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-3 transition-all duration-300 hover:shadow-md"
                      >
                        <Leaf className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium text-sm">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'precautions' && (
                <div className="space-y-3 animate-fadeIn">
                  {product.precautions.map((precaution, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 transition-all duration-300 hover:bg-orange-100"
                    >
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{precaution}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Add to Cart</span>
              </button>
              <button className="bg-gray-100 text-gray-700 font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200 flex items-center justify-center gap-2">
                <Heart size={20} />
              </button>
            </div>

            {/* Features */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Tested</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <Leaf className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Natural</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-xl">
                <Award className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Product Component
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="text-blue-600 animate-spin-slow" size={24} />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Premium Products</span>
            <Sparkles className="text-green-600 animate-spin-slow animation-delay-500" size={24} />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 animate-gradient bg-300%">
            Our Product
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of premium skincare products designed to bring out your natural beauty
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Award className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="text-xs text-gray-600">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <TrendingUp className="text-green-600" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-xs text-gray-600">Natural</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onLearnMore={handleLearnMore} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Need Help Choosing?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our skincare experts are here to help you find the perfect products for your skin type
              </p>
              <button className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 group">
                <span>Get Expert Advice</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 60px) scale(1.05); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; animation-fill-mode: both; }
        .animate-blob { animation: blob 8s infinite; }
        .animate-gradient { animation: gradient 4s ease infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .bg-300\\% { background-size: 300%; }
      `}</style>
    </div>
  );
};

export default Product;