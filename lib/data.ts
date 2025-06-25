import { 
    Achievement, 
    Testimonial, 
    Program, 
    Coach, 
    ContactInfo, 
    FAQ, 
    Statistic 
  } from './types';
  
  // Coach Information
  export const coachData: Coach = {
    name: "Sarah Mitchell",
    title: "Elite Performance Coach & Former Olympian",
    bio: "With over 20 years of competitive swimming experience and 15 years of coaching excellence, Sarah Mitchell has established herself as one of the premier swimming coaches in the nation. A former Olympic finalist and multiple-time national champion, Sarah brings unparalleled expertise and passion to every training session.",
    philosophy: "I believe every swimmer has untapped potential waiting to be discovered. My coaching philosophy centers on building not just faster swimmers, but confident, resilient athletes who excel both in and out of the pool. Through personalized training programs, cutting-edge techniques, and unwavering support, I help my athletes achieve their dreams while developing life skills that extend far beyond competition.",
    experience: "20+ years competitive swimming, 15+ years coaching, Former Olympic Team Member",
    certifications: [
      "USA Swimming Certified Coach - Level 4",
      "American Swimming Coaches Association (ASCA) - Level 5",
      "SafeSport Certified",
      "CPR/AED Certified",
      "Strength & Conditioning Specialist (CSCS)",
      "Sports Psychology Certification"
    ],
    achievements: [
      "Coached 15 Olympic Trials Qualifiers",
      "Developed 50+ National Champions",
      "Coach of the Year - Regional Championships 2023",
      "200+ State Championship Medals",
      "Former Olympic Finalist (2008, 2012)",
      "3x National Champion (Individual)",
      "World Championship Team Member"
    ],
    specialties: [
      "Stroke Technique Optimization",
      "Race Strategy Development", 
      "Mental Performance Training",
      "Injury Prevention & Recovery",
      "Nutrition & Performance Planning",
      "Video Analysis & Biomechanics"
    ],
    languages: ["English", "Spanish"]
  };
  
  // Sample Achievements Data
  export const achievementsData: Achievement[] = [
    {
      id: "ach-001",
      studentName: "Emma Chen",
      event: "100m Freestyle",
      medal: "Gold",
      competition: "National Championships",
      year: 2024,
      category: "National",
      time: "52.34",
      description: "New national record in the 16-18 age group, breaking a 12-year-old record",
      personalBest: true,
      recordType: "National"
    },
    {
      id: "ach-002", 
      studentName: "Marcus Johnson",
      event: "200m Butterfly",
      medal: "Silver",
      competition: "Olympic Trials",
      year: 2024,
      category: "International",
      time: "1:56.78",
      description: "Qualified for Olympic team consideration with a stunning performance",
      personalBest: true,
      recordType: "Personal"
    },
    {
      id: "ach-003",
      studentName: "Sofia Rodriguez",
      event: "50m Backstroke", 
      medal: "Gold",
      competition: "State Championships",
      year: 2024,
      category: "Local",
      time: "27.89",
      description: "Dominated state competition with a 2-second margin of victory",
      personalBest: true,
      recordType: "Regional"
    },
    {
      id: "ach-004",
      studentName: "Alex Thompson",
      event: "400m Individual Medley",
      medal: "Bronze",
      competition: "World Championships",
      year: 2023,
      category: "International", 
      time: "4:12.45",
      description: "First world championship medal, breakthrough performance on world stage",
      personalBest: true,
      recordType: "Personal"
    },
    {
      id: "ach-005",
      studentName: "Maya Patel",
      event: "100m Breaststroke",
      medal: "Gold",
      competition: "Junior Nationals",
      year: 2024,
      category: "National",
      time: "1:07.23", 
      description: "Youngest winner in event history at age 14",
      personalBest: true,
      recordType: "Club"
    },
    {
      id: "ach-006",
      studentName: "Jake Williams",
      event: "200m Freestyle",
      medal: "Silver",
      competition: "Regional Championships", 
      year: 2024,
      category: "Local",
      time: "1:48.56",
      description: "Breakthrough performance leading to national team selection",
      personalBest: true,
      recordType: "Personal"
    },
    {
      id: "ach-007",
      studentName: "Lily Zhang",
      event: "100m Butterfly",
      medal: "Gold",
      competition: "National Championships",
      year: 2023,
      category: "National",
      time: "58.91",
      description: "Emotional victory after recovering from shoulder injury",
      personalBest: true,
      recordType: "Personal"
    },
    {
      id: "ach-008",
      studentName: "Ryan O'Connor", 
      event: "1500m Freestyle",
      medal: "Bronze",
      competition: "International Open",
      year: 2024,
      category: "International",
      time: "15:23.67",
      description: "Exceptional endurance performance in debut international competition",
      personalBest: true,
      recordType: "Personal"
    }
  ];
  
  // Sample Testimonials Data
  export const testimonialsData: Testimonial[] = [
    {
      id: "test-001",
      parentName: "Jennifer Chen",
      studentName: "Emma Chen", 
      quote: "Sarah transformed Emma from a recreational swimmer into a national champion. Her dedication, expertise, and genuine care for each athlete is extraordinary. Emma not only improved her times dramatically but gained confidence that extends into every area of her life.",
      rating: 5,
      date: "2024-03-15",
      relationship: "Parent",
      featured: true,
      achievements: ["National Champion", "Record Holder"]
    },
    {
      id: "test-002",
      parentName: "Michael Johnson",
      studentName: "Marcus Johnson",
      quote: "Working with Sarah has been life-changing for Marcus. Her scientific approach to training combined with her ability to motivate and inspire has taken his swimming to levels we never thought possible. The Olympic Trials qualification speaks for itself.",
      rating: 5,
      date: "2024-02-28",
      relationship: "Parent", 
      featured: true,
      achievements: ["Olympic Trials Qualifier"]
    },
    {
      id: "test-003",
      parentName: "Maria Rodriguez",
      studentName: "Sofia Rodriguez",
      quote: "Sofia loves training with Sarah! The positive environment and personalized attention have made such a difference. Sarah doesn't just coach swimming - she mentors young athletes and helps them become better people.",
      rating: 5,
      date: "2024-01-20",
      relationship: "Parent",
      featured: false,
      achievements: ["State Champion"]
    },
    {
      id: "test-004",
      parentName: "Alex Thompson",
      studentName: "Alex Thompson",
      quote: "Sarah's coaching changed my entire perspective on swimming and competition. Her mental training techniques and race strategy development helped me achieve my world championship medal. I'm grateful for her guidance both in and out of the pool.",
      rating: 5,
      date: "2023-12-10",
      relationship: "Former Student",
      featured: true,
      achievements: ["World Championship Medalist"]
    },
    {
      id: "test-005",
      parentName: "Dr. Rajesh Patel",
      studentName: "Maya Patel",
      quote: "Sarah's ability to work with young athletes is remarkable. Maya has flourished under her coaching, developing not just as a swimmer but as a confident young woman. The individual attention and care Sarah provides is unmatched.",
      rating: 5,
      date: "2024-02-05",
      relationship: "Parent",
      featured: false,
      achievements: ["Junior National Champion"]
    }
  ];
  
  // Sample Programs Data
  export const programsData: Program[] = [
    {
      id: "prog-001",
      name: "Elite Performance Program",
      description: "Intensive training for competitive swimmers targeting national and international competitions",
      longDescription: "Our most advanced program designed for swimmers with national-level aspirations. Includes technical refinement, race strategy, mental preparation, and strength conditioning. Limited to 8 athletes for maximum individual attention.",
      ageGroup: "14-18 years",
      level: "Elite",
      features: [
        "Personalized training plans",
        "Video analysis sessions", 
        "Mental performance coaching",
        "Nutrition guidance",
        "Race strategy development",
        "Strength & conditioning"
      ],
      price: "$450/month",
      duration: "Year-round",
      schedule: "Mon/Wed/Fri 5:30-7:00 AM, Tue/Thu 4:00-5:30 PM",
      maxStudents: 8,
      prerequisites: ["State-level qualifying times", "Minimum 2 years competitive experience"],
      goals: [
        "National championship qualification",
        "Technique optimization", 
        "Mental toughness development",
        "College recruitment preparation"
      ],
      featured: true
    },
    {
      id: "prog-002",
      name: "Competitive Development",
      description: "Advanced training for swimmers competing at regional and state levels",
      longDescription: "Perfect for swimmers looking to take their competitive swimming to the next level. Focus on technique refinement, race preparation, and consistent improvement across all strokes.",
      ageGroup: "12-17 years",
      level: "Advanced",
      features: [
        "Stroke technique coaching",
        "Race preparation", 
        "Goal setting workshops",
        "Parent education sessions",
        "Competition strategy",
        "Team building activities"
      ],
      price: "$280/month",
      duration: "Year-round",
      schedule: "Mon/Wed/Fri 4:00-5:30 PM",
      maxStudents: 12,
      prerequisites: ["Club-level qualifying times"],
      goals: [
        "Regional championship qualification",
        "Stroke technique improvement",
        "Race strategy development", 
        "Consistent time drops"
      ],
      featured: true
    },
    {
      id: "prog-003",
      name: "Stroke Technique Mastery",
      description: "Focused program for swimmers looking to perfect their technique across all four strokes",
      longDescription: "Intensive technical training program that breaks down each stroke into component parts. Perfect for swimmers who want to build a solid foundation or refine existing technique.",
      ageGroup: "10-16 years",
      level: "Intermediate",
      features: [
        "Detailed stroke analysis",
        "Drill progressions",
        "Individual feedback",
        "Underwater video review",
        "Technique workshops",
        "Progress tracking"
      ],
      price: "$200/month",
      duration: "12 weeks",
      schedule: "Tue/Thu 3:30-4:30 PM",
      maxStudents: 10,
      prerequisites: ["Basic swimming proficiency"],
      goals: [
        "Master all four strokes",
        "Improve efficiency",
        "Build proper habits",
        "Increase speed through technique"
      ],
      featured: false
    },
    {
      id: "prog-004",
      name: "Young Champions Program",
      description: "Introduction to competitive swimming for young athletes",
      longDescription: "Fun, engaging program that introduces young swimmers to competitive swimming fundamentals while building confidence and love for the sport.",
      ageGroup: "8-12 years",
      level: "Beginner",
      features: [
        "Fun-based learning",
        "Basic stroke instruction",
        "Water safety emphasis",
        "Goal achievement rewards",
        "Parent involvement opportunities",
        "Swim meet preparation"
      ],
      price: "$150/month",
      duration: "Ongoing",
      schedule: "Tue/Thu 3:00-4:00 PM, Sat 9:00-10:00 AM",
      maxStudents: 15,
      prerequisites: ["Ability to swim 25 yards"],
      goals: [
        "Develop stroke fundamentals",
        "Build water confidence",
        "Introduction to competition",
        "Foster love of swimming"
      ],
      featured: false
    }
  ];
  
  // Sample FAQ Data
  export const faqData: FAQ[] = [
    {
      id: "faq-001",
      question: "What age groups do you coach?",
      answer: "I work with swimmers from age 8 through college level (18+). Programs are specifically designed for different age groups and skill levels to ensure optimal development and safety.",
      category: "General",
      featured: true
    },
    {
      id: "faq-002", 
      question: "What are the requirements to join the Elite Performance Program?",
      answer: "The Elite Program requires state-level qualifying times and minimum 2 years competitive experience. We also conduct an assessment to ensure the program is the right fit for the athlete's goals and commitment level.",
      category: "Programs",
      featured: true
    },
    {
      id: "faq-003",
      question: "Do you provide nutrition guidance?",
      answer: "Yes! Nutrition is a crucial component of athletic performance. I provide general nutrition education and can connect families with certified sports nutritionists for more detailed meal planning.",
      category: "Programs",
      featured: false
    },
    {
      id: "faq-004",
      question: "How do you handle scheduling conflicts?",
      answer: "I understand that young athletes have busy schedules. We work together to find solutions, including makeup sessions when possible and modified training plans during peak academic periods.",
      category: "Schedule",
      featured: false
    },
    {
      id: "faq-005",
      question: "What happens if my child wants to quit?",
      answer: "My goal is to foster a lifelong love of swimming. If a swimmer is struggling with motivation, we'll work together to address concerns and find ways to reignite their passion for the sport.",
      category: "General",
      featured: true
    }
  ];
  

// Contact Information
export const contactInfo: ContactInfo = {
    email: "coach@aquaticelite.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Pool Lane",
      city: "Swim City",
      state: "SC",
      zipCode: "12345"
    },
    social: {
      instagram: "https://instagram.com/aquaticelite",
      facebook: "https://facebook.com/aquaticelite",
      twitter: "https://twitter.com/aquaticelite",
      youtube: "https://youtube.com/aquaticelite",
      tiktok: "https://tiktok.com/@aquaticelite"
    },
    availabilityHours: {
      weekdays: "8:00 AM - 6:00 PM",
      weekends: "9:00 AM - 3:00 PM"
    },
    mapEmbedUrl: "https://maps.google.com/?q=123+Pool+Lane+Swim+City+SC+12345"
  };
  
  // Sample Statistics Data
  export const statisticsData: Statistic[] = [
    {
      id: "stat-001",
      label: "Olympic Trial Qualifiers",
      value: 15,
      description: "Athletes coached to qualify for Olympic Trials under Sarah"
    },
    {
      id: "stat-002",
      label: "National Champions",
      value: 50,
      description: "Swimmers who have won national-level events"
    },
    {
      id: "stat-003",
      label: "State Medals",
      value: 200,
      description: "Cumulative state-level championship medals"
    },
    {
      id: "stat-004",
      label: "Years Coaching",
      value: 15,
      description: "Years of coaching competitive swimmers"
    },
    {
      id: "stat-005",
      label: "Club Records Broken",
      value: 85,
      description: "Club-level records broken by coached swimmers"
    },
    {
      id: "stat-006",
      label: "Active Swimmers",
      value: 36,
      description: "Currently enrolled and actively training athletes"
    }
  ];


  //   // Contact Information
//   export const contactInfo: ContactInfo = {
//     email: "coach@aquaticelit.com",
//     phone: "+1 (555) 123-4567",
//     address: {
//       street: "123 Pool Lane",
//       city: "Swim City", 
//       state: "SC",
//       zipCode: "12345
