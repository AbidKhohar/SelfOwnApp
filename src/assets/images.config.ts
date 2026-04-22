/**
 * Image Assets Configuration
 * Centralized location for all image URLs and asset paths
 */

export const Images = {
  // Logo
  logo: {
    dark: '/assets/logos/logo-dark.svg',
    light: '/assets/logos/logo-light.svg',
  },

  // Hero & Profile Images
  hero: {
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    profileImageFallback: 'https://i.ibb.co/8xgQZpK/profile.png',
  },

  // About Page
  about: {
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    fallback: 'https://i.ibb.co/8xgQZpK/profile.png',
  },

  // Services Page
  services: {
    whyChooseImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
    serviceIcon1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    serviceIcon2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    serviceIcon3: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  },

  // Blog Images
  blog: {
    post1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop',
    post2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
    post3: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop',
    post4: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=350&fit=crop',
    post5: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop',
    post6: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
    defaultBlogImage: 'https://i.ibb.co/3T8ZQkH/about.jpg',
  },

  // Portfolio/Projects Images
  portfolio: {
    project1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    project2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    project3: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
  },

  // Contact Page
  contact: {
    illustration: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    contactImage: 'https://i.ibb.co/8xgQZpK/profile.png',
  },

  // Testimonials
  testimonials: {
    avatar1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    avatar2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    avatar3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },

  // Fallback/Default Images
  fallback: {
    profile: 'https://i.ibb.co/8xgQZpK/profile.png',
    blog: 'https://i.ibb.co/3T8ZQkH/about.jpg',
    general: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
};

// Image alt texts for SEO
export const ImageAlts = {
  profile: 'David Williamson - Freelance React Developer',
  profilePortrait: 'Professional portrait of David Williamson',
  services: 'Web Development and Design Services',
  about: 'About section showcase image',
  blog: 'Blog article featured image',
  portfolio: 'Portfolio project showcase',
  testimonial: 'Client testimonial avatar',
  contact: 'Contact page illustration',
};

// Helper function to get image URL with fallback
export const getImageUrl = (primaryUrl: string, fallbackUrl?: string): string => {
  return primaryUrl || fallbackUrl || Images.fallback.general;
};
