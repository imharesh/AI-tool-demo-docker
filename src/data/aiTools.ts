import { Category, AITool } from '../types';

export const categories: Category[] = [
  {
    name: 'AI Assistants and Chatbots',
    subcategories: ['General Purpose', 'Virtual Assistants', 'Customer Service']
  },
  {
    name: 'Productivity and Organization',
    subcategories: ['Time Management', 'Task Management', 'Knowledge Management', 'Email Management']
  },
  {
    name: 'Content Creation',
    subcategories: ['Writing', 'Video', 'Image', 'Music', 'Voice', 'Social Media']
  },
  {
    name: 'Business Tools',
    subcategories: ['Sales', 'Marketing', 'HR', 'Finance', 'Customer Engagement', 'Email Marketing']
  },
  {
    name: 'Development Tools',
    subcategories: ['App Development', 'Website Building', 'Automation', 'Code Generation']
  },
  {
    name: 'Design',
    subcategories: ['Graphic Design', 'Presentation', 'UI/UX', 'Logo Design']
  },
  {
    name: 'Analytics and Intelligence',
    subcategories: ['Business Intelligence', 'Data Analysis', 'SEO', 'Market Research']
  }
];

export const aiTools: AITool[] = [
  // AI Assistants and Chatbots
  {
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for general inquiries, content creation, and problem-solving',
    category: 'AI Assistants and Chatbots',
    subcategory: 'General Purpose',
    url: 'https://chat.openai.com',
    isFree: true,
    features: ['Natural Language Processing', 'Code Generation', 'Content Creation']
  },
  {
    name: 'Claude',
    description: 'AI assistant specialized in coding, analysis, and complex tasks',
    category: 'AI Assistants and Chatbots',
    subcategory: 'General Purpose',
    url: 'https://claude.ai',
    isFree: false,
    features: ['Code Assistance', 'Data Analysis', 'Research']
  },
  {
    name: 'Gemini',
    description: "Google's multimodal AI model for text, image, and code generation",
    category: 'AI Assistants and Chatbots',
    subcategory: 'General Purpose',
    url: 'https://gemini.google.com',
    isFree: true,
    features: ['Multimodal AI', 'Code Generation', 'Image Analysis']
  },
  {
    name: 'Siri',
    description: "Apple's virtual assistant for iOS and macOS devices",
    category: 'AI Assistants and Chatbots',
    subcategory: 'Virtual Assistants',
    url: 'https://www.apple.com/siri/',
    isFree: true,
    features: ['Voice Commands', 'Device Control', 'Information Retrieval']
  },
  {
    name: 'Google Assistant',
    description: "Google's AI-powered virtual assistant",
    category: 'AI Assistants and Chatbots',
    subcategory: 'Virtual Assistants',
    url: 'https://assistant.google.com',
    isFree: true,
    features: ['Voice Control', 'Smart Home Integration', 'Personal Tasks']
  },
  {
    name: 'Alexa',
    description: "Amazon's virtual assistant for smart home and beyond",
    category: 'AI Assistants and Chatbots',
    subcategory: 'Virtual Assistants',
    url: 'https://alexa.amazon.com',
    isFree: true,
    features: ['Smart Home Control', 'Voice Commands', 'Skills Marketplace']
  },
  
  // Productivity and Organization
  {
    name: 'Reclaim',
    description: 'AI-powered calendar management and time optimization',
    category: 'Productivity and Organization',
    subcategory: 'Time Management',
    url: 'https://reclaim.ai',
    isFree: false,
    features: ['Smart Scheduling', 'Time Blocking', 'Calendar Integration']
  },
  {
    name: 'Clockwise',
    description: 'AI scheduling assistant for maximizing focused work time',
    category: 'Productivity and Organization',
    subcategory: 'Time Management',
    url: 'https://www.getclockwise.com',
    isFree: false,
    features: ['Focus Time Management', 'Meeting Optimization', 'Team Coordination']
  },
  {
    name: 'Motion',
    description: 'AI-powered project and task management platform',
    category: 'Productivity and Organization',
    subcategory: 'Task Management',
    url: 'https://www.usemotion.com',
    isFree: false,
    features: ['Task Automation', 'Smart Scheduling', 'Project Planning']
  },
  {
    name: 'Notion AI',
    description: 'AI-enhanced workspace for notes, docs, and knowledge management',
    category: 'Productivity and Organization',
    subcategory: 'Knowledge Management',
    url: 'https://www.notion.so/product/ai',
    isFree: true,
    features: ['Document Generation', 'Content Organization', 'Team Collaboration']
  },

  // Email Management
  {
    name: 'SaneBox',
    description: 'AI-powered email filtering and organization',
    category: 'Productivity and Organization',
    subcategory: 'Email Management',
    url: 'https://www.sanebox.com',
    isFree: false,
    features: ['Email Filtering', 'Priority Inbox', 'Follow-up Reminders']
  },
  {
    name: 'Superhuman',
    description: 'AI-enhanced email client for faster email processing',
    category: 'Productivity and Organization',
    subcategory: 'Email Management',
    url: 'https://superhuman.com',
    isFree: false,
    features: ['Email Speed', 'Keyboard Shortcuts', 'AI Triage']
  },

  // Content Creation
  {
    name: 'Grammarly',
    description: 'AI writing assistant for grammar and style improvement',
    category: 'Content Creation',
    subcategory: 'Writing',
    url: 'https://www.grammarly.com',
    isFree: true,
    features: ['Grammar Checking', 'Style Suggestions', 'Tone Detection']
  },
  {
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing and content creation',
    category: 'Content Creation',
    subcategory: 'Writing',
    url: 'https://www.copy.ai',
    isFree: false,
    features: ['Marketing Copy', 'Social Media Content', 'Blog Writing']
  },
  {
    name: 'Synthesia',
    description: 'AI video generation platform for creating professional videos',
    category: 'Content Creation',
    subcategory: 'Video',
    url: 'https://www.synthesia.io',
    isFree: false,
    features: ['Avatar Creation', 'Text-to-Video', 'Multiple Languages']
  },
  {
    name: 'Midjourney',
    description: 'Advanced AI image generation tool for creative artwork',
    category: 'Content Creation',
    subcategory: 'Image',
    url: 'https://www.midjourney.com',
    isFree: false,
    features: ['Art Generation', 'Style Customization', 'High Resolution']
  },
  {
    name: 'DALL·E 3',
    description: 'AI system for creating realistic images from text descriptions',
    category: 'Content Creation',
    subcategory: 'Image',
    url: 'https://openai.com/dall-e-3',
    isFree: false,
    features: ['Text-to-Image', 'Image Editing', 'Style Transfer']
  },
  {
    name: 'Runway',
    description: 'AI-powered video editing and generation platform',
    category: 'Content Creation',
    subcategory: 'Video',
    url: 'https://runwayml.com',
    isFree: false,
    features: ['Video Generation', 'Special Effects', 'Motion Graphics']
  },
  {
    name: 'Descript',
    description: 'AI-powered audio and video editing platform',
    category: 'Content Creation',
    subcategory: 'Video',
    url: 'https://www.descript.com',
    isFree: true,
    features: ['Transcription', 'Video Editing', 'Audio Enhancement']
  },
  {
    name: 'Murf',
    description: 'AI voice generation and text-to-speech platform',
    category: 'Content Creation',
    subcategory: 'Voice',
    url: 'https://murf.ai',
    isFree: false,
    features: ['Voice Synthesis', 'Multiple Languages', 'Voice Cloning']
  },
  {
    name: 'Hootsuite',
    description: 'AI-powered social media management platform',
    category: 'Content Creation',
    subcategory: 'Social Media',
    url: 'https://www.hootsuite.com',
    isFree: true,
    features: ['Post Scheduling', 'Analytics', 'Content Calendar']
  },
  {
    name: 'Buffer',
    description: 'Social media management with AI insights',
    category: 'Content Creation',
    subcategory: 'Social Media',
    url: 'https://buffer.com',
    isFree: true,
    features: ['Content Planning', 'Analytics', 'Team Collaboration']
  },
  {
    name: 'Jasper',
    description: 'Advanced AI content writing assistant',
    category: 'Content Creation',
    subcategory: 'Writing',
    url: 'https://www.jasper.ai',
    isFree: false,
    features: ['Content Generation', 'Blog Writing', 'Marketing Copy']
  },
  {
    name: 'Writesonic',
    description: 'AI writing tool for marketing and content',
    category: 'Content Creation',
    subcategory: 'Writing',
    url: 'https://writesonic.com',
    isFree: true,
    features: ['Article Writing', 'Product Descriptions', 'Ad Copy']
  },
  {
    name: 'Soundraw',
    description: 'AI music generation for content creators',
    category: 'Content Creation',
    subcategory: 'Music',
    url: 'https://soundraw.io',
    isFree: false,
    features: ['Music Generation', 'Custom Tracks', 'Royalty Free']
  },
  {
    name: 'Amper Music',
    description: 'AI music composition platform',
    category: 'Content Creation',
    subcategory: 'Music',
    url: 'https://www.ampermusic.com',
    isFree: false,
    features: ['Music Creation', 'Custom Scoring', 'Brand Themes']
  },

  // Business Tools
  {
    name: 'Salesforce Einstein',
    description: 'AI-powered CRM and sales management platform',
    category: 'Business Tools',
    subcategory: 'Sales',
    url: 'https://www.salesforce.com/products/einstein/overview',
    isFree: false,
    features: ['Sales Forecasting', 'Lead Scoring', 'Customer Insights']
  },
  {
    name: 'HubSpot',
    description: 'AI-enhanced marketing and sales platform',
    category: 'Business Tools',
    subcategory: 'Marketing',
    url: 'https://www.hubspot.com',
    isFree: true,
    features: ['Marketing Automation', 'CRM', 'Content Management']
  },
  {
    name: 'Workday',
    description: 'AI-powered HR and workforce management platform',
    category: 'Business Tools',
    subcategory: 'HR',
    url: 'https://www.workday.com',
    isFree: false,
    features: ['HR Management', 'Talent Management', 'Payroll']
  },
  {
    name: 'Zendesk AI',
    description: 'AI-powered customer service and support platform',
    category: 'Business Tools',
    subcategory: 'Customer Engagement',
    url: 'https://www.zendesk.com/platform/ai/',
    isFree: false,
    features: ['Ticket Management', 'Customer Support', 'Analytics']
  },
  {
    name: 'Mailchimp',
    description: 'AI-powered email marketing platform',
    category: 'Business Tools',
    subcategory: 'Email Marketing',
    url: 'https://mailchimp.com',
    isFree: true,
    features: ['Email Automation', 'Campaign Analytics', 'Audience Insights']
  },
  {
    name: 'Constant Contact',
    description: 'Email marketing with AI capabilities',
    category: 'Business Tools',
    subcategory: 'Email Marketing',
    url: 'https://www.constantcontact.com',
    isFree: false,
    features: ['Email Templates', 'Automation', 'List Management']
  },

  // Development Tools
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer for code suggestions and completion',
    category: 'Development Tools',
    subcategory: 'App Development',
    url: 'https://github.com/features/copilot',
    isFree: false,
    features: ['Code Completion', 'Documentation Generation', 'Bug Detection']
  },
  {
    name: 'Wix ADI',
    description: 'AI-powered website builder',
    category: 'Development Tools',
    subcategory: 'Website Building',
    url: 'https://www.wix.com/adi',
    isFree: true,
    features: ['Website Generation', 'Design Customization', 'Mobile Optimization']
  },
  {
    name: 'Zapier',
    description: 'AI-enhanced automation platform for workflow optimization',
    category: 'Development Tools',
    subcategory: 'Automation',
    url: 'https://zapier.com',
    isFree: true,
    features: ['Workflow Automation', 'App Integration', 'Task Scheduling']
  },
  {
    name: 'Amazon CodeWhisperer',
    description: 'AI-powered code suggestion tool',
    category: 'Development Tools',
    subcategory: 'Code Generation',
    url: 'https://aws.amazon.com/codewhisperer',
    isFree: true,
    features: ['Code Completion', 'Security Scanning', 'Multiple Languages']
  },
  {
    name: 'Tabnine',
    description: 'AI code completion assistant',
    category: 'Development Tools',
    subcategory: 'Code Generation',
    url: 'https://www.tabnine.com',
    isFree: true,
    features: ['Code Completion', 'Language Support', 'Team Collaboration']
  },

  // Design Tools
  {
    name: 'Canva Magic Studio',
    description: 'AI-powered graphic design platform',
    category: 'Design',
    subcategory: 'Graphic Design',
    url: 'https://www.canva.com/magic',
    isFree: true,
    features: ['Template Generation', 'Image Enhancement', 'Brand Kit']
  },
  {
    name: 'Gamma',
    description: 'AI presentation creation and design tool',
    category: 'Design',
    subcategory: 'Presentation',
    url: 'https://gamma.app',
    isFree: true,
    features: ['Presentation Generation', 'Design Templates', 'Collaboration']
  },
  {
    name: 'Figma AI',
    description: 'AI-powered design and prototyping platform',
    category: 'Design',
    subcategory: 'UI/UX',
    url: 'https://www.figma.com/ai',
    isFree: true,
    features: ['Design Generation', 'Component Creation', 'Layout Assistance']
  },
  {
    name: 'Looka',
    description: 'AI-powered logo and brand identity design',
    category: 'Design',
    subcategory: 'Logo Design',
    url: 'https://looka.com',
    isFree: false,
    features: ['Logo Generation', 'Brand Kit', 'Business Cards']
  },
  {
    name: 'Brandmark',
    description: 'AI logo design and branding tool',
    category: 'Design',
    subcategory: 'Logo Design',
    url: 'https://brandmark.io',
    isFree: false,
    features: ['Logo AI', 'Color Schemes', 'Brand Guidelines']
  },

  // Analytics and Intelligence
  {
    name: 'Sisense',
    description: 'AI-powered business intelligence and analytics platform',
    category: 'Analytics and Intelligence',
    subcategory: 'Business Intelligence',
    url: 'https://www.sisense.com',
    isFree: false,
    features: ['Data Analysis', 'Visualization', 'Predictive Analytics']
  },
  {
    name: 'SEMrush',
    description: 'AI-enhanced SEO and digital marketing platform',
    category: 'Analytics and Intelligence',
    subcategory: 'SEO',
    url: 'https://www.semrush.com',
    isFree: false,
    features: ['Keyword Research', 'Site Audit', 'Competitor Analysis']
  },
  {
    name: 'Google Analytics 4',
    description: 'AI-powered web analytics platform',
    category: 'Analytics and Intelligence',
    subcategory: 'Data Analysis',
    url: 'https://analytics.google.com',
    isFree: true,
    features: ['Website Analytics', 'User Behavior', 'Conversion Tracking']
  },
  {
    name: 'Crayon',
    description: 'AI-powered competitive intelligence platform',
    category: 'Analytics and Intelligence',
    subcategory: 'Market Research',
    url: 'https://www.crayon.co',
    isFree: false,
    features: ['Competitor Tracking', 'Market Analysis', 'Intel Reports']
  },
  {
    name: 'Similarweb',
    description: 'AI website traffic and market intelligence',
    category: 'Analytics and Intelligence',
    subcategory: 'Market Research',
    url: 'https://www.similarweb.com',
    isFree: true,
    features: ['Traffic Analytics', 'Market Research', 'Competitor Analysis']
  }
];
