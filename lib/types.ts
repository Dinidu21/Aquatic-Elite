export interface Achievement {
    id: string;
    studentName: string;
    event: string;
    medal: 'Gold' | 'Silver' | 'Bronze';
    competition: string;
    year: number;
    category: 'Local' | 'National' | 'International';
    time?: string;
    imageUrl?: string;
    description?: string;
    personalBest?: boolean;
    recordType?: 'Personal' | 'Club' | 'Regional' | 'National' | 'World';
  }
  
  export interface Testimonial {
    id: string;
    parentName: string;
    studentName: string;
    quote: string;
    rating: number; // 1-5 stars
    date: string;
    imageUrl?: string;
    relationship: 'Parent' | 'Student' | 'Former Student';
    featured?: boolean;
    achievements?: string[];
  }
  
  export interface Program {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    ageGroup: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';
    features: string[];
    price?: string;
    duration: string;
    schedule: string;
    maxStudents?: number;
    prerequisites?: string[];
    goals: string[];
    imageUrl?: string;
    featured?: boolean;
  }
  
  export interface Coach {
    name: string;
    title: string;
    bio: string;
    philosophy: string;
    experience: string;
    certifications: string[];
    achievements: string[];
    imageUrl?: string;
    specialties: string[];
    languages?: string[];
  }
  
  export interface ContactInfo {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    social?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      youtube?: string;
      tiktok?: string;
    };
    availabilityHours?: {
      weekdays?: string;
      weekends?: string;
    };
    mapEmbedUrl?: string;
    poolLocation?: {
      name: string;
      address: string;
      facilities: string[];
    };
  }
  
  export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'General' | 'Programs' | 'Pricing' | 'Schedule' | 'Requirements';
    featured?: boolean;
  }
  
  export interface Statistic {
    id: string;
    label: string;
    value: string | number;
    description?: string;
    icon?: React.ComponentType<any>;
    change?: {
      value: number;
      trend: 'up' | 'down' | 'neutral';
      period: string;
    };
  }
  
  // Additional content-related types
  export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
    category: 'Achievement' | 'Program' | 'News' | 'Event';
    imageUrl?: string;
    tags: string[];
    featured?: boolean;
  }
  
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    type: 'Competition' | 'Training Camp' | 'Workshop' | 'Meeting';
    registrationRequired: boolean;
    maxParticipants?: number;
    price?: string;
    ageGroups?: string[];
  }
  
  export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
  }
  
  export interface PageProps {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    programInterest?: string;
    studentAge?: string;
    experience?: 'Beginner' | 'Intermediate' | 'Advanced';
  }
  
  export interface EnrollmentFormData extends ContactFormData {
    studentName: string;
    studentAge: string;
    parentName: string;
    emergencyContact: string;
    medicalConditions?: string;
    previousExperience: string;
    goals: string[];
    preferredProgram: string;
    preferredSchedule: string[];
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  
  export interface FilterState {
    category: string;
    year?: number;
    medal?: string;
    searchTerm: string;
  }
  
  export interface ModalState {
    isOpen: boolean;
    type?: 'achievement' | 'testimonial' | 'program' | 'contact';
    data?: any;
  }
  
  export interface NavigationItem {
    name: string;
    href: string;
    icon?: React.ComponentType<any>;
    subItems?: NavigationItem[];
    external?: boolean;
  }
  
  export interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  }
  
  export interface Animation {
    duration: number;
    delay?: number;
    easing?: string;
    type?: 'spring' | 'tween';
  }
  
  export interface SearchFilters {
    query?: string;
    category?: string;
    dateRange?: {
      start: string;
      end: string;
    };
    sortBy?: 'date' | 'name' | 'relevance';
    sortOrder?: 'asc' | 'desc';
  }
  
  export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }
  
  export interface MediaItem {
    id: string;
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    alt?: string;
    caption?: string;
    credits?: string;
  }
  
  export interface Gallery {
    id: string;
    title: string;
    description?: string;
    items: MediaItem[];
    category: string;
    featured?: boolean;
  }
  