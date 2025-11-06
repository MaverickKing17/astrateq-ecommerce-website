import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Check, ChevronRight, Shield, Zap, TrendingUp, Users, Battery, Truck } from 'lucide-react';

const AstrateqEcommerce = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'ASTRA-AI Driver Coach',
      category: 'Driver Coach',
      price: 299.99,
      image: '🎯',
      tagline: 'Personalized AI Driving Intelligence',
      description: 'Transform your driving with AI that learns your unique patterns and provides real-time coaching to reduce accident risk by up to 40%.',
      features: [
        'Real-time personalized feedback',
        'Pattern recognition AI',
        '40% accident risk reduction',
        'Silent background monitoring'
      ],
      specs: {
        accuracy: '94%',
        updateFrequency: 'Real-time',
        compatibility: 'Universal OBD-II',
        warranty: 'Lifetime'
      },
      audience: 'Individual Drivers',
      usps: 'The only AI driving coach that learns your unique driving patterns and provides personalized, real-time feedback to reduce accident risk by up to 40%.'
    },
    {
      id: 2,
      name: 'ASTRA-PREDICT Maintenance AI',
      category: 'Predictive Maintenance',
      price: 349.99,
      image: '🔧',
      tagline: 'Know Before, Not After',
      description: 'Forecast vehicle maintenance needs 3-6 weeks in advance with industry-leading 94% accuracy, preventing breakdowns and saving thousands in emergency repairs.',
      features: [
        '3-6 weeks advance forecasting',
        '94% prediction accuracy',
        'Comprehensive diagnostics',
        'Cost optimization insights'
      ],
      specs: {
        accuracy: '94%',
        forecastWindow: '3-6 weeks',
        compatibility: 'All vehicles 2008+',
        warranty: 'Lifetime'
      },
      audience: 'Individual Drivers / Fleet Managers',
      usps: 'Forecast vehicle maintenance needs 3-6 weeks in advance with 94% accuracy, preventing breakdowns and saving thousands in emergency repairs.'
    },
    {
      id: 3,
      name: 'ASTRA-GUARD Emergency AI',
      category: 'Emergency AI',
      price: 399.99,
      image: '🚨',
      tagline: 'Instant Intelligent Response',
      description: 'Automatic accident detection with instant emergency service alerts and critical data transmission to first responders when every second counts.',
      features: [
        'Automatic accident detection',
        'Emergency service alerts',
        'First responder data sharing',
        '24/7 monitoring'
      ],
      specs: {
        responseTime: '< 3 seconds',
        coverage: 'North America',
        compatibility: 'Universal',
        warranty: 'Lifetime'
      },
      audience: 'Individual Drivers / Family Safety',
      usps: 'Instant intelligent response during critical moments—automatically detecting accidents, alerting emergency services, and providing crucial data to first responders.'
    },
    {
      id: 4,
      name: 'ASTRA-EV Pro Enhancement Suite',
      category: 'EV Suite',
      price: 449.99,
      image: '⚡',
      tagline: 'Maximize Your EV Potential',
      description: 'Specialized AI monitoring for electric vehicles that maximizes battery life, optimizes charging schedules, and provides accurate range predictions you can trust.',
      features: [
        'Battery health optimization',
        'Smart charging schedules',
        'Accurate range prediction',
        'Performance analytics'
      ],
      specs: {
        accuracy: '96% range prediction',
        batteryOptimization: 'Up to 15% longer life',
        compatibility: 'All major EVs',
        warranty: 'Lifetime'
      },
      audience: 'EV Owners',
      usps: 'Specialized AI monitoring for electric vehicles, maximizing battery life, optimizing charging schedules, and providing accurate range predictions you can trust.'
    },
    {
      id: 5,
      name: 'ASTRA-INSIGHT Fleet Intelligence',
      category: 'Fleet',
      price: 599.99,
      image: '🚛',
      tagline: 'Enterprise-Grade Fleet Optimization',
      description: 'Reduce liability, optimize maintenance schedules, and improve operational efficiency with predictive AI that forecasts vehicle failures weeks in advance.',
      features: [
        'Fleet-wide analytics dashboard',
        'Liability risk reduction',
        'Operational cost optimization',
        'Scalable to 500+ vehicles'
      ],
      specs: {
        accuracy: '94%',
        fleetSize: '10-500+ vehicles',
        roi: 'Average 32% cost reduction',
        warranty: 'Enterprise SLA'
      },
      audience: 'Commercial Fleet Managers',
      usps: 'Enterprise-grade AI safety and efficiency for fleets of any size, reducing liability exposure while optimizing operational costs through predictive maintenance.'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1D23] via-[#2D3338] to-[#1A1D23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
              Drive with Absolute Confidence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
              Experience industry-leading AI that predicts vehicle failures before they happen, helping you avoid accidents and stay confidently on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-[#00C896] hover:bg-[#00b386] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                style={{ letterSpacing: '0.05em' }}
              >
                SHOP NOW
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-[#00D9FF] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#00D9FF] hover:border-white transition-all"
              >
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 bg-[#2D3338] rounded-lg">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">94%</div>
              <div className="text-gray-300">Failure Prediction Accuracy</div>
            </div>
            <div className="text-center p-6 bg-[#2D3338] rounded-lg">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">40%</div>
              <div className="text-gray-300">Accident Risk Reduction</div>
            </div>
            <div className="text-center p-6 bg-[#2D3338] rounded-lg">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">3-6</div>
              <div className="text-gray-300">Weeks Advance Warning</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Check className="text-[#00C896] mx-auto mb-2" size={32} />
              <p className="font-semibold text-[#1A1D23]">24/7 Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Messaging Pillars */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1D23]">Intelligent AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced algorithms analyze thousands of data points to provide real-time driver coaching and vehicle health monitoring.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1D23]">Predictive Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Using cutting-edge machine learning, we forecast maintenance needs weeks in advance, saving you time and costly repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1D23]">Proactive Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Move beyond reactive safety. Our systems intervene before problems arise, giving you a new 'sixth sense' on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1A1D23]">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Explore our AI-powered automotive safety solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-[#1A1D23] text-white p-12 text-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1D23]">{product.name}</h3>
                  <p className="text-[#00D9FF] text-sm font-semibold mb-3">{product.tagline}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#1A1D23]">${product.price}</span>
                    <button 
                      onClick={() => {
                        setCurrentPage('product-' + product.id);
                      }}
                      className="bg-[#00D9FF] hover:bg-[#0099CC] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-[#1A1D23] hover:bg-[#2D3338] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
            >
              View All Products <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1D23]">Trusted by Thousands</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFB020] fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "The ASTRA-PREDICT system saved me over $3,000 in emergency repairs. It alerted me about a potential transmission issue three weeks before it would have failed. Absolutely worth every penny."
              </p>
              <p className="font-semibold text-[#1A1D23]">— Michael T., California</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFB020] fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "As a fleet manager, ASTRA-INSIGHT has reduced our maintenance costs by 32% and virtually eliminated unexpected breakdowns. The ROI was clear within the first quarter."
              </p>
              <p className="font-semibold text-[#1A1D23]">— Sarah K., Fleet Manager</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Check className="text-[#00C896] mx-auto mb-2" size={32} />
              <p className="font-semibold text-[#1A1D23]">Certified Safety-First AI</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Check className="text-[#00C896] mx-auto mb-2" size={32} />
              <p className="font-semibold text-[#1A1D23]">60-Day Money Back</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Check className="text-[#00C896] mx-auto mb-2" size={32} />
              <p className="font-semibold text-[#1A1D23]">Lifetime Warranty</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Check className="text-[#00C896] mx-auto mb-2" size={32} />
              <p className="font-semibold text-[#1A1D23]">24/7 Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProductsPage = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-[#1A1D23]">All Products</h1>
        <p className="text-xl text-gray-600 mb-12">Discover our complete range of AI-powered automotive safety solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#1A1D23] text-white p-12 text-center text-6xl">
                {product.image}
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-[#00D9FF] mb-2 uppercase tracking-wider">{product.category}</div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1D23]">{product.name}</h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">{product.tagline}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <Check className="text-[#00C896] flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-[#1A1D23]">${product.price}</span>
                  <button 
                    onClick={() => setCurrentPage('product-' + product.id)}
                    className="bg-[#00D9FF] hover:bg-[#0099CC] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductDetailPage = ({ productId }) => {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Product Not Found</h1>
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-[#00D9FF] hover:text-[#0099CC] underline"
          >
            Go back to the Products page
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-[#00D9FF] hover:text-[#0099CC] mb-8 inline-flex items-center gap-2"
          >
            ← Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-12 flex items-center justify-center">
              <div className="text-9xl">{product.image}</div>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#00D9FF] mb-2 uppercase tracking-wider">{product.category}</div>
              <h1 className="text-4xl font-bold mb-4 text-[#1A1D23]">{product.name}</h1>
              <p className="text-2xl text-gray-600 mb-6 italic">{product.tagline}</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="text-4xl font-bold text-[#1A1D23] mb-2">${product.price}</div>
                <div className="text-sm text-gray-600 mb-4">One-time purchase • Lifetime warranty included</div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#00C896] hover:bg-[#00b386] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 uppercase tracking-wide"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-[#00C896]" size={20} />
                  <span>60-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-[#00C896]" size={20} />
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-[#1A1D23]">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="text-[#00C896] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-[#1A1D23]">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-gray-600 uppercase tracking-wider mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-lg font-semibold text-[#1A1D23]">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* USP Section */}
          <div className="bg-gradient-to-br from-[#1A1D23] to-[#2D3338] rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Why Choose {product.name}?</h2>
            <p className="text-xl leading-relaxed text-gray-300">{product.usps}</p>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1D23] to-[#2D3338] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Redefining Automotive Safety</h1>
          <p className="text-2xl text-gray-300 leading-relaxed">
            To create a future where every journey is proactively protected, intelligent, and completely secure through the power of advanced AI.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-[#1A1D23]">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the industry standard for AI-enabled vehicular protection that transforms uncertainty into absolute confidence. We envision a world where every driver has access to predictive intelligence that makes roads safer for everyone.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-[#1A1D23]">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To engineer and deliver cutting-edge, AI-powered automotive solutions that provide unparalleled precision, predictive capabilities, and proactive safety features, empowering drivers with a 'sixth sense' for the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1D23]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">AI-driven solutions form the foundation of everything we create.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Precision</h3>
              <p className="text-gray-600 leading-relaxed">Accurate, reliable, and timely insights you can depend on.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Trust</h3>
              <p className="text-gray-600 leading-relaxed">Consistent, proven safety that builds confidence over time.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Proactive Safety</h3>
              <p className="text-gray-600 leading-relaxed">Prevention over reaction, foresight over response.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">Continuously advancing automotive AI capabilities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1D23]">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">Putting control and understanding in drivers' hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1A1D23]">The Astrateq Difference</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Unlike reactive dash cams or restrictive OEM systems, Astrateq provides aftermarket flexibility with enterprise-grade AI, delivering predictive insights in a premium consumer experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Traditional Dash Cams</div>
                <div className="text-red-500 font-bold">Reactive</div>
              </div>
              <p className="text-sm text-gray-600">Post-incident recording only</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">OEM Safety Systems</div>
                <div className="text-red-500 font-bold">Limited</div>
              </div>
              <p className="text-sm text-gray-600">Built-in restrictions</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Generic Telematics</div>
                <div className="text-red-500 font-bold">Complex</div>
              </div>
              <p className="text-sm text-gray-600">Enterprise-only, subscription lock-in</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00D9FF] p-6 rounded-lg mb-4">
                <div className="text-sm font-semibold text-white mb-2">Astrateq Gadgets</div>
                <div className="text-white font-bold">Proactive</div>
              </div>
              <p className="text-sm text-gray-800 font-semibold">Predictive AI + Universal compatibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1D23]">Our Journey Forward</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-[#00D9FF] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2025
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#1A1D23]">Foundation</h3>
                <p className="text-gray-600">Establishing premium positioning in aftermarket AI safety, building trust through proven accuracy and transparency.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#00D9FF] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2026
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#1A1D23]">Expansion</h3>
                <p className="text-gray-600">AI insurance partnerships, B2B enterprise portal, international markets, and advanced subscription features.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#00D9FF] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2028+
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-[#1A1D23]">Ecosystem</h3>
                <p className="text-gray-600">Open API platform, OEM partnerships, vehicle-to-vehicle AI communication, and autonomous vehicle preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      inquiry: 'product',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! Our team will respond within 2 hours.');
      setFormData({ name: '', email: '', inquiry: 'product', message: '' });
    };

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-[#1A1D23]">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">We're here to help. Our expert support team responds within 2 hours.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#1A1D23]">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                  >
                    <option value="product">Product Information</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00C896] hover:bg-[#00b386] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 uppercase tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#1A1D23]">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Email</div>
                    <a href="mailto:support@astrateqgadgets.com" className="text-lg text-[#00D9FF] hover:text-[#0099CC]">
                      support@astrateqgadgets.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Phone</div>
                    <a href="tel:1-800-ASTRATEQ" className="text-lg text-[#00D9FF] hover:text-[#0099CC]">
                      1-800-ASTRATEQ
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Support Hours</div>
                    <p className="text-lg text-gray-700">24/7 AI Chat Support</p>
                    <p className="text-sm text-gray-600">Live agents: Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1A1D23] to-[#2D3338] rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our AI-powered support assistant is available 24/7 to answer your questions about installation, features, and troubleshooting.
                </p>
                <button className="bg-[#00D9FF] hover:bg-[#0099CC] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Launch Chat Support
                </button>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1A1D23]">Installation Support</h3>
                <p className="text-gray-600 mb-4">Get help setting up your Astrateq device with our comprehensive resources:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Video installation guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Downloadable PDF manuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Live installation assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-[#1A1D23] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#00D9FF] rounded-full flex items-center justify-center font-bold text-xl">
              A
            </div>
            <span className="font-bold text-lg hidden md:block">Astrateq Gadgets</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className="hover:text-[#00D9FF] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('products')}
              className="hover:text-[#00D9FF] transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="hover:text-[#00D9FF] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:text-[#00D9FF] transition-colors"
            >
              Contact
            </button>
            <button className="relative hover:text-[#00D9FF] transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00C896] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="text-left hover:text-[#00D9FF] transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }}
                className="text-left hover:text-[#00D9FF] transition-colors py-2"
              >
                Products
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                className="text-left hover:text-[#00D9FF] transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="text-left hover:text-[#00D9FF] transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-[#1A1D23] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00D9FF] rounded-full flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="font-bold text-lg">Astrateq Gadgets</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining automotive safety through advanced AI technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('product-1')} className="text-gray-400 hover:text-[#00D9FF]">Driver Coach</button></li>
              <li><button onClick={() => setCurrentPage('product-2')} className="text-gray-400 hover:text-[#00D9FF]">Predictive Maintenance</button></li>
              <li><button onClick={() => setCurrentPage('product-3')} className="text-gray-400 hover:text-[#00D9FF]">Emergency AI</button></li>
              <li><button onClick={() => setCurrentPage('product-4')} className="text-gray-400 hover:text-[#00D9FF]">EV Suite</button></li>
              <li><button onClick={() => setCurrentPage('product-5')} className="text-gray-400 hover:text-[#00D9FF]">Fleet Solutions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-[#00D9FF]">About Us</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-[#00D9FF]">Contact</button></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Installation Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Warranty Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF]">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Astrateq Gadgets. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00D9FF]">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF]">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF]">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  // Main App Render
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage.startsWith('product-') && (
        <ProductDetailPage productId={parseInt(currentPage.split('-')[1])} />
      )}
      
      <Footer />
    </div>
  );
};

export default AstrateqEcommerce;
