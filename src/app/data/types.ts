
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    category: 'Web' | 'Mobile' | 'AI' | 'Design';
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Course {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    image: string;
    url: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    date: string;
    image: string;
  }
  
  export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    description: string;
  }
  
  export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    url: string;
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
  }
  
export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
  }
  
  export interface FaqItem {
    question: string;
    answer: string;
  }
  
  export interface ProcessStep {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  