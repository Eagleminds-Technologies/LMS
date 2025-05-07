import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import Framer Motion properly using ES modules
import { motion } from 'framer-motion';

import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Layers, 
  Users, 
  BookOpen,
  Code,
  Shield,
  MessageCircle,
  Play,
  Star
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Import mock data
import { getHeroData, getFeaturesData, getTestimonialsData } from '../../api/main_page.mock';

// Animation variants - simplified to avoid errors
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Home = () => {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState([
    { value: '15K+', label: 'Active Students' },
    { value: '95%', label: 'Completion Rate' },
    { value: '250+', label: 'Institutions' },
    { value: '10M+', label: 'Learning Hours' }
  ]);

  // Feature icons mapping
  const featureIcons = {
    analytics: <BarChart3 className="w-6 h-6" />,
    courses: <BookOpen className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    modules: <Layers className="w-6 h-6" />,
    api: <Code className="w-6 h-6" />,
    security: <Shield className="w-6 h-6" />
  };

  useEffect(() => {
    try {
      // Load mock data with error handling
      const heroData = getHeroData();
      const featuresData = getFeaturesData();
      const testimonialsData = getTestimonialsData();
      
      setHeroData(heroData);
      setFeaturesData(featuresData || []); // Ensure we always have an array
      setTestimonials(testimonialsData || []); // Ensure we always have an array
    } catch (error) {
      console.error("Error loading mock data:", error);
      // Set fallback data
      setHeroData({
        title: "Transform Your Educational Experience",
        subtitle: "Our comprehensive LMS platform helps institutions deliver quality education through advanced learning technologies.",
        cta: "Get Started",
        secondaryCta: "Learn More",
        ctaLink: "/register",
        secondaryCtaLink: "/features"
      });
      
      // Set fallback features data
      setFeaturesData([
        {
          id: 1,
          title: "Course Management",
          description: "Create and manage courses with ease, assign instructors, and set schedules.",
          icon: "courses"
        },
        {
          id: 2,
          title: "Student Analytics",
          description: "Track student progress, attendance, and performance with advanced analytics.",
          icon: "analytics"
        },
        {
          id: 3,
          title: "User Management",
          description: "Easily manage students, instructors, and administrative staff all in one place.",
          icon: "users"
        }
      ]);
      
      // Set fallback testimonials data
      setTestimonials([
        {
          id: 1,
          quote: "This LMS platform transformed how we deliver education to our students.",
          author: "Dr. Jane Smith",
          position: "Director, Tech University"
        }
      ]);
    }
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonials.length > 0) {
        setActiveTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (!heroData) {
    return <div className="h-64 flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Simplified Gradient Background */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent to-blue-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div 
          className="container mx-auto px-4 pt-10 relative z-20"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
              <div>
                <span className="inline-block py-1 px-3 mb-5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                  The Future of Learning • {new Date().getFullYear()}
                </span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
              >
                {heroData.title}
              </h1>
              
              <p 
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                {heroData.subtitle}
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link to="/register">
                  <Button size="lg" className="px-8 font-medium text-base shadow-lg shadow-blue-100 group">
                    {heroData.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="px-8 font-medium text-base">
                    {heroData.secondaryCta}
                  </Button>
                </Link>
              </div>
              
              {/* Social Proof */}
              <div 
                className="text-left"
              >
                <p className="text-sm font-medium text-gray-500 mb-3">TRUSTED BY LEADING INSTITUTIONS</p>
                <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                  {['Harvard', 'Stanford', 'MIT', 'Oxford', 'Cambridge'].map((uni, i) => (
                    <span key={i} className="text-gray-400 font-semibold text-base">{uni}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className="lg:w-1/2 mt-16 lg:mt-0"
            >
              <div className="relative">
                {/* Main Hero Image */}
                <div className="relative z-10 rounded-xl shadow-2xl shadow-blue-100 overflow-hidden border border-gray-200">
                  <img 
                    src="https://placehold.co/600x400/e2e8f0/64748b?text=LMS+Dashboard" 
                    alt="LMS Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-12 bg-white rounded-lg shadow-xl p-4 z-20 transform rotate-3 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Course Completed</p>
                      <p className="text-xs text-gray-500">Advanced Machine Learning</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-4 z-20 transform -rotate-2 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">15,000+ Students</p>
                      <p className="text-xs text-gray-500">Joined this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div 
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              POWERFUL PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need for Modern Learning
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of tools empowers institutions to create, manage, 
              and deliver exceptional educational experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, i) => (
              <div 
                key={feature.id || i}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {featureIcons[feature.icon] || <Layers className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link 
                  to={feature.link || "#"} 
                  className="inline-flex items-center text-blue-600 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              SEE IT IN ACTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our LMS Platform Works
            </h2>
            <p className="text-lg text-gray-600">
              Watch our short demo to see how our platform can transform your educational institution.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
            <img 
              src="https://placehold.co/1200x675/e2e8f0/64748b?text=Platform+Demo"
              alt="LMS Platform Demo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Discover how our platform has helped institutions around the world.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
            <div className="lg:w-1/2">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12 h-full">
                {testimonials.length > 0 && (
                  <div>
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-2xl font-medium mb-8">
                      "{testimonials[activeTestimonial]?.quote || "This LMS platform transformed how we deliver education to our students."}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeTestimonial]?.author || "User")}&background=random`}
                          alt="Testimonial"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonials[activeTestimonial]?.author || "Anonymous User"}</p>
                        <p className="text-gray-600 text-sm">{testimonials[activeTestimonial]?.position || "Happy Customer"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Increased Student Engagement",
                    description: "Our interactive learning tools have helped institutions increase student engagement by 45%.",
                    icon: <Users className="w-5 h-5" />
                  },
                  {
                    title: "Streamlined Administration",
                    description: "Administrators save an average of 15 hours per week with our automated workflows.",
                    icon: <BarChart3 className="w-5 h-5" />
                  },
                  {
                    title: "Enhanced Learning Outcomes",
                    description: "Course completion rates increased by 32% after implementing our platform.",
                    icon: <CheckCircle className="w-5 h-5" />
                  },
                  {
                    title: "Responsive Support",
                    description: "Our dedicated support team ensures a smooth experience for all users.",
                    icon: <MessageCircle className="w-5 h-5" />
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial navigation dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plans For Every Institution
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan to meet your educational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "₹9,999",
                period: "/semi-annual",
                description: "Perfect for small institutions just getting started",
                features: ["Up to 500 students", "10 courses", "Basic analytics", "Email support", "Basic customization"],
                popular: false,
                cta: "Get Started"
              },
              {
                name: "Standard",
                price: "₹14,999",
                period: "/semi-annual",
                description: "Ideal for growing educational institutions",
                features: ["Up to 2,000 students", "Unlimited courses", "Advanced analytics", "Priority support", "Custom branding", "API access"],
                popular: true,
                cta: "Get Started"
              },
              {
                name: "Premium",
                price: "₹24,999",
                period: "/annual",
                description: "For large institutions with advanced needs",
                features: ["Unlimited students", "Unlimited courses", "Enterprise analytics", "24/7 dedicated support", "White labeling", "API access", "Custom integrations"],
                popular: false,
                cta: "Contact Sales"
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-blue-600 relative scale-105 bg-white shadow-xl' : 'border border-gray-200 bg-white shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 absolute top-0 right-0 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-3">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full justify-center ${plan.popular ? '' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-xl mb-10 text-white/80">
              Join thousands of institutions already using our platform to deliver exceptional learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="px-8 bg-white hover:bg-gray-100 text-blue-600 border-white">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;