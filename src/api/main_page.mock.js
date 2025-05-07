// Mock data for landing page components
// This will simulate API responses until the real backend is integrated

// Hero section data
export const getHeroData = () => {
  return {
    title: "Transform Your Learning Experience",
    subtitle: "An all-in-one platform for educational institutions to manage courses, students, and content delivery",
    cta: "Get Started",
    ctaLink: "/register",
    secondaryCta: "Learn More",
    secondaryCtaLink: "/about",
    image: "/hero-image.jpg"
  };
};

// Features section
export const getFeaturesData = () => {
  return [
    {
      id: 1,
      title: "Comprehensive Course Management",
      description: "Create, organize, and deliver engaging courses with ease.",
      icon: "BookOpen"
    },
    {
      id: 2,
      title: "Student Progress Tracking",
      description: "Monitor student performance with detailed analytics and insights.",
      icon: "BarChart"
    },
    {
      id: 3,
      title: "Interactive Learning Tools",
      description: "Engage students with quizzes, assignments, and discussion forums.",
      icon: "PenTool"
    },
    {
      id: 4,
      title: "Mobile-friendly Experience",
      description: "Access learning content from anywhere, on any device.",
      icon: "Smartphone"
    }
  ];
};

// Pricing plans
export const getPricingData = () => {
  return [
    {
      id: 'basic',
      name: 'Starter',
      price: '₹999',
      billing: '/month',
      features: [
        'Up to 100 students',
        '5 instructor accounts',
        'Basic analytics',
        'Email support',
        '5GB storage'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '₹2,499',
      billing: '/month',
      features: [
        'Up to 500 students',
        '20 instructor accounts',
        'Advanced analytics',
        'Priority email support',
        '25GB storage',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      billing: '',
      features: [
        'Unlimited students',
        'Unlimited instructors',
        'Custom reporting',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom integrations',
        'White labeling'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];
};

// Testimonials
export const getTestimonialsData = () => {
  return [
    {
      id: 1,
      quote: "This platform has transformed how we deliver education to our students. The interface is intuitive and the features are comprehensive.",
      author: "Dr. Priya Sharma",
      position: "Principal, Delhi Public School",
      avatar: "/testimonials/avatar-1.jpg"
    },
    {
      id: 2,
      quote: "The analytics provided by this LMS have given us unprecedented insights into student learning patterns, allowing us to improve our teaching methods.",
      author: "Rajesh Kumar",
      position: "Director of Education, Bright Future Academy",
      avatar: "/testimonials/avatar-2.jpg"
    },
    {
      id: 3,
      quote: "Setting up and managing courses is so straightforward. Our faculty was able to transition to online learning with minimal training.",
      author: "Anita Desai",
      position: "Head of Technology, Mumbai Educational Institute",
      avatar: "/testimonials/avatar-3.jpg"
    }
  ];
};

// FAQ section
export const getFaqData = () => {
  return [
    {
      question: "How do I get started with the LMS?",
      answer: "You can sign up for a free trial through our website. Once registered, you'll have access to a demo environment where you can explore the features. Our onboarding team will guide you through the setup process."
    },
    {
      question: "Can I migrate content from our existing LMS?",
      answer: "Yes, we offer migration services to help you transfer content from most popular LMS platforms. Our team will work with you to ensure a smooth transition with minimal disruption."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, with priority support and dedicated account managers for higher-tier plans. Our comprehensive knowledge base and video tutorials are available to all users."
    },
    {
      question: "Is the platform SCORM compliant?",
      answer: "Yes, our LMS supports SCORM 1.2 and 2004, allowing you to import and use standardized e-learning content from various authoring tools."
    },
    {
      question: "How secure is my institute's data?",
      answer: "We take security seriously. Your data is encrypted both in transit and at rest. We perform regular security audits and comply with industry standards for data protection."
    }
  ];
};