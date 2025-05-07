import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Import mock data
import { getHeroData, getFeaturesData, getTestimonialsData } from '../../api/main_page.mock';

const Home = () => {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Load mock data
    setHeroData(getHeroData());
    setFeaturesData(getFeaturesData());
    setTestimonials(getTestimonialsData());
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {heroData.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={heroData.ctaLink}
                  className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 inline-flex items-center justify-center"
                >
                  {heroData.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={heroData.secondaryCtaLink}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  {heroData.secondaryCta}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img
                src="/hero-illustration.svg"
                alt="LMS Platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="hidden lg:block absolute top-0 right-0 -mt-16 -mr-16">
          <div className="w-64 h-64 bg-primary/10 rounded-full"></div>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-1/4 -mb-12">
          <div className="w-48 h-48 bg-secondary/20 rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need to create, manage, and deliver engaging learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature) => (
              <div 
                key={feature.id}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {/* This is where you'd normally render the icon dynamically */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="none"/>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by educational institutions across the country.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              {testimonials.length > 0 && (
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
                      <path d="M18.3333 26.6667H8.33334C7.00725 26.6667 5.73548 26.1399 4.7978 25.2022C3.86012 24.2645 3.33334 22.9928 3.33334 21.6667V11.6667C3.33334 10.3406 3.86012 9.06885 4.7978 8.13118C5.73548 7.1935 7.00725 6.66671 8.33334 6.66671H11.6667C13.8334 6.66671 15 7.83337 15 10V13.3334C15 15.5 13.8334 16.6667 11.6667 16.6667H10C10 18.8334 11.1667 20 13.3333 20C15.5 20 16.6667 21.1667 16.6667 23.3334C16.6667 25.5 15.5 26.6667 13.3333 26.6667M36.6667 26.6667H26.6667C25.3406 26.6667 24.0688 26.1399 23.1311 25.2022C22.1935 24.2645 21.6667 22.9928 21.6667 21.6667V11.6667C21.6667 10.3406 22.1935 9.06885 23.1311 8.13118C24.0688 7.1935 25.3406 6.66671 26.6667 6.66671H30C32.1667 6.66671 33.3333 7.83337 33.3333 10V13.3334C33.3333 15.5 32.1667 16.6667 30 16.6667H28.3333C28.3333 18.8334 29.5 20 31.6667 20C33.8333 20 35 21.1667 35 23.3334C35 25.5 33.8333 26.6667 31.6667 26.6667" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-xl mb-8">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200">
                      {/* Placeholder for avatar */}
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="font-semibold">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Testimonial navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of institutions already using our platform to deliver exceptional learning experiences.
          </p>
          <a
            href="/register"
            className="px-8 py-4 bg-white text-primary rounded-md font-medium hover:bg-gray-100 inline-flex items-center justify-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;