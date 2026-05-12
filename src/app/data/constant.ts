import { Project, Service, Course, Testimonial, BlogPost, Education, Certificate, Achievement, ProcessStep, FaqItem } from "@/app/data/types";
export const skillsData = [
  {
    name: 'HTML',
    image: "/images/skills/html.svg"
  },
  {
    name: 'CSS',
    image: "/images/skills/css.svg"
  },
  {
    name: 'JavaScript',
    image: "/images/skills/javascript.svg"
  },
  {
    name: 'React',
    image: "/images/skills/react.svg"
  },
  {
    name: 'Next.js',
    image: "/images/skills/nextJS.svg"
  },
  {
    name: 'Node.js',
    image: "/images/skills/Nodejs.svg"
  },
  {
    name: 'FastApi',
    image: "/images/skills/fastapi.svg"
  },
  {
    name: 'Bootstrap',
    image: "/images/skills/bootstrap.svg"
  },
  {
    name: 'Tailwind ',
    image: "/images/skills/tailwind.svg"
  },
  {
    name: 'Material UI',
    image: "/images/skills/materialui.svg"
  },
  {
    name: 'Git',
    image: "/images/skills/git.svg"
  },
  {
    name: 'Docker',
    image: "/images/skills/docker.svg"
  },
  {
    name: 'Python',
    image: "/images/skills/python.svg"
  },
  {
    name: 'Markdown',
    image: "/images/skills/markdown.svg"
  },
  {
    name: 'TypeScript',
    image: "/images/skills/typescript.svg"
  },
  {
    name: 'RAG Specialist',
    image: "/images/skills/rag.svg"
  },
  {
    name: 'Agentic AI',
    image: "/images/skills/agent.svg"
  },
  {
    name: 'Artificial Intelligence',
    image: "/images/skills/ai.svg"
  }

];
export const personalData = {
  name: "Arman",
  profile: "/images/myimages/arman.jpg",

}

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Python for AI & Backend Development',
    description: 'Master Python programming with a focus on AI applications, backend development, and automation pipelines.',
    level: 'Advanced',
    image: '/images/courses/python.png',
    url: '#'
  },
  {
    id: 'c2',
    title: 'RAG Systems & Vector Databases',
    description: 'Learn to build Retrieval-Augmented Generation pipelines and integrate vector databases for scalable AI applications.',
    level: 'Advanced',
    image: '/images/courses/rag.png',
    url: '#'
  },
  {
    id: 'c3',
    title: 'Prompt Engineering for AI Agents',
    description: 'Design effective prompts and workflows for AI agents to automate complex tasks and generate high-quality outputs.',
    level: 'Intermediate',
    image: '/images/courses/prompt.png',
    url: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Full-Stack Web Development',
    description: 'Developing responsive and secure web applications with FastAPI, Next.js, Tailwind CSS, and modern frontend frameworks.',
    icon: 'Code2'
  },
  {
    id: 's2',
    title: 'AI Integration',
    description: 'Enhancing legacy systems with LLM capabilities and automated intelligent workflows.',
    icon: 'Cpu'
  },
  {
    id: 's3',
    title: 'AI-Powered Backend Development',
    description: 'Designing and deploying scalable backend APIs and multi-agent AI pipelines for production-ready applications.',
    icon: 'Database'
  },
  {
    id: 's4',
    title: 'AI Agent & Automation Solutions',
    description: 'Building intelligent AI agents, RAG systems, and automated workflows to optimize business and content pipelines.',
    icon: 'Cpu'
  },

];

export const PROJECTS: Project[] = [

  {
    id: '0',
    title: 'SnuggleFable — Agentic AI Video Generator',
    description: 'Multi-agent AI system that turns story prompts into automated YouTube Shorts.',
    image: '/images/projects/ai_video_gen.png',
    tags: ['AI', 'Automation', 'Video'],
    techStack: ['Python', 'FastAPI', 'OpenAI Agents SDK', 'Next.js', 'MoviePy'],
    liveUrl: 'https://snugglefable.vercel.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'AI'
  },
  {
    id: '1',
    title: 'Real-Time AI Interview Simulator',
    description: 'Conduct live AI-powered interviews with adaptive questions, performance analytics, and instant PDF/Markdown report generation.',
    image: '/images/projects/ai_live_interviewer.jpg', // make sure you have a corresponding image
    tags: ['AI', 'Interview', 'Analytics'],
    techStack: ['Next.js', 'FastAPI', 'Python', 'Docker'],
    liveUrl: 'https://ailiveinterviewer.vercel.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'AI'
  }, {
    id: '3',
    title: 'ArmanStore — AI E-Commerce Platform',
    description: 'AI-powered e-commerce platform with chatbot, RAG search, and visual product matching.',
    image: '/images/projects/newshoesstore.jpg',
    tags: ['E-Commerce', 'AI', 'RAG'],
    techStack: ['Python', 'FastAPI', 'Next.js', 'Docker', 'Pinecone', 'CLIP'],
    liveUrl: 'https://armanstore.vercel.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'AI'
  }, {
    id: '2',
    title: 'StyleMatch — AI Hairstyle Checker',
    description: 'Enables users to virtually preview hairstyles and see how they would look after a haircut using AI.',
    image: '/images/projects/stylematch.png',
    tags: ['AI', 'Recommendation'],
    techStack: ['Next.js', 'FastAPI', 'Docker', 'AI'],
    liveUrl: 'https://armanstylematch.vercel.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'AI'
  },


  {
    id: '4',
    title: 'AI PhotoCraft — AI Photo Editor',
    description: 'AI-driven photo editing app for image enhancement and creative transformations.',
    image: '/images/projects/aiphotocraft.png',
    tags: ['AI', 'Image Processing'],
    techStack: ['Next.js', 'Prompt Engineering', 'Gemini Model'],
    liveUrl: 'https://aiphotocraft.vercel.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'AI'
  },
  // {
  //   id: '4',
  //   title: 'Modern E-Commerce Frontend',
  //   description: 'Responsive e-commerce frontend built with modern UI and performance best practices.',
  //   image: '/images/projects/ecommerece.png',
  //   tags: ['Frontend', 'E-Commerce'],
  //   techStack: ['Next.js', 'shadcn/ui', 'CSS'],
  //   liveUrl: 'https://my-shopping-website-assignment.vercel.app/',
  //   githubUrl: 'https://github.com/arman229',
  //   category: 'Web'
  // },
  {
    id: '5',
    title: 'Weather Web Application',
    description: 'Real-time weather application with a clean and responsive user interface.',
    image: '/images/projects/weather.png',
    tags: ['Web', 'API'],
    techStack: ['React', 'Material UI', 'CSS'],
    liveUrl: 'https://weatherinfo24.netlify.app/',
    githubUrl: 'https://github.com/arman229',
    category: 'Web'
  },


];
export const PROCESS_STEPS: ProcessStep[] = [
  { id: '1', title: 'Strategy', description: 'Defining the roadmap, user personas, and technical objectives.', icon: 'Search' },
  { id: '2', title: 'Design', description: 'Creating visual prototypes and structural blueprints.', icon: 'Layout' },
  { id: '3', title: 'Development', description: 'Writing clean, efficient, and scalable production-ready code.', icon: 'Code2' },
  { id: '4', title: 'Optimization', description: 'Refining performance, accessibility, and user experience.', icon: 'Zap' },
  { id: '5', title: 'Launch', description: 'Deploying the final solution with robust CI/CD pipelines.', icon: 'Rocket' }
];



export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    title: 'Meta Front-End Developer',
    issuer: 'coursera/Meta',
    date: 'Apr 2023',
    url: 'https://www.coursera.org/account/accomplishments/specialization/WGYV6H7JU6R2',
  }
  , {
    id: 'cert2',
    title: 'Generative AI for Everyone',
    issuer: 'Deeplearning.AI',
    date: 'Nov 2023',
    url: 'https://www.coursera.org/account/accomplishments/records/GRPF5MR6PLE2',
  }, {
    id: 'cert3',
    title: 'Problem Solving Using Computational  ',
    issuer: 'Coursera',
    date: 'Aug 2023',
    url: 'https://www.coursera.org/account/accomplishments/records/7N7ZTGRCFA76',
  }, {
    id: 'cert4',
    title: ' Prompt Engineering for  Web Developers',
    issuer: 'Scrimba',
    date: 'Nov 2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/FXH6EBMF4L97',
  }, {
    id: 'cert5',
    title: 'Mathematics for Machine Learning  ',
    issuer: 'Imperial College London',
    date: 'May 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/F7Y7T8LGNX2W',
  },
  {
    id: 'cert6',
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan',
    date: 'Nov 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/TQWYPCLNPGDC',
  }
  , {
    id: 'cert7',
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'Nov 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/XMGSLIF057F4'
  },

  {
    id: 'cert8',
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    date: 'Dec 2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/W2J9ECV1QNBS'
  },
  {
    id: 'cert9',
    title: 'Agentic AI Professional Developer',
    issuer: 'PIAIC',
    date: 'Jan 2026',
    url: 'https://www.piaic.org/'
  },

];





export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Product Lead at Vercel',
    content: 'An absolute visionary. Their ability to take complex requirements and turn them into elegant code is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'CEO of PulseAI',
    content: 'The implementation of our AI integration was seamless. We saw a 40% increase in efficiency within months.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Senior Designer',
    content: 'Rarely do you find a developer who truly understands design. A true bridge between engineering and art.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How AI Recommendation Systems Actually Work',
    summary:
      'A simple explanation of how AI recommends content using matrix multiplication and linear algebra concepts.',
    date: 'Mar 12, 2026',
    image: '/images/articles/thambnail.jpg',
    url: 'https://www.linkedin.com/pulse/how-ai-recommendation-systems-actually-work-explained-arman-ashraf-a6nyf/'
  },
  {
    id: 'b2',
    title: 'How AI Separates Mixed Signals',
    summary:
      'Understanding how linear algebra helps AI separate mixed audio signals into original sources.',
    date: 'Mar 15, 2026',
    image: '/images/articles/flowchat.jpg',
    url: 'https://www.linkedin.com/pulse/how-ai-separates-mixed-signals-explained-simple-linear-arman-ashraf-fo1if/'
  }
];
export const EDUCATION: Education[] = [


  {
    id: 'e1',
    degree: 'B.S. in Information Technology',
    institution: 'University of Gujrat',
    period: '2018 – 2023',
    description:
      'Focused on software development, algorithms, databases, and computer systems. Built strong foundations in programming, problem-solving, and full-stack application development using modern technologies.'
  },
  {
    id: 'e2',
    degree: 'Agentic AI Engineer',
    institution: 'Presidential Initiative for Artificial Intelligence & Computing (PIAIC)',
    period: '2023 – 2024',
    description:
      'Trained in AI system design, API development, full-stack applications, and agentic AI automation using modern frameworks.'
  },
  {
    id: 'e3',
    degree: 'AI & Robotics Training',
    institution: 'NAVTTC (Government of Pakistan)',
    period: '2025',
    description:
      'Learned advanced Python programming, software engineering fundamentals, and core concepts of integrating AI with hardware systems.'
  }
];
export const SKILLS = [
  {
    category: 'Backend & APIs',
    items: [
      'Python',
      'FastAPI',
      'Async API Design',
      'SQLModel',
      'PostgreSQL',
      'RESTful APIs'
    ]
  },
  {
    category: 'AI & Intelligent Systems',
    items: [
      'OpenAI Agents SDK',
      'Multi-Agent Pipelines',
      'RAG Systems',
      'Prompt Engineering',
      'NLP',
      'Vector Databases (Pinecone)'
    ]
  },
  {
    category: 'Frontend & Full-Stack',
    items: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript'
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker',
      'Git',
      'API Integration',
      'Production Deployment'
    ]
  }
];
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Silver Medal for Academic Excellence',
    description:
      'Awarded for achieving high academic performance and consistently demonstrating strong analytical and problem-solving abilities.',
    date: '2023'
  },
  {
    id: 'a2',
    title: 'Certificate of Academic Merit',
    description:
      'Recognized for active participation in academic activities, effective presentations, and consistent engagement in coursework and team-based tasks.',
    date: '2023'
  }
];






export const FAQS: FaqItem[] = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Timeline varies by complexity. Small projects take 2-4 weeks, while enterprise solutions can take 3-6 months.'
  },
  {
    question: 'Do you offer maintenance and support?',
    answer: 'Yes, I provide ongoing maintenance and scaling support for all products I develop.'
  }
];
