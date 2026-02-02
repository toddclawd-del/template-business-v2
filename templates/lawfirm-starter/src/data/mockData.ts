export interface Attorney {
  id: string;
  name: string;
  slug: string;
  photo: string;
  title: string;
  bio: string;
  education: string[];
  barAdmissions: string[];
  practiceAreas: string[];
  awards: string[];
  email: string;
  phone: string;
  notableCases: string[];
  featured: boolean;
}

export interface PracticeArea {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  commonCases: string[];
  ourApproach: string;
  faqs: { question: string; answer: string }[];
  attorneys: string[];
}

export interface CaseResult {
  id: string;
  title: string;
  description: string;
  amount: string;
  practiceArea: string;
  year: number;
  disclaimer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  caseType: string;
  rating: number;
  location: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

export const attorneys: Attorney[] = [
  {
    id: "1",
    name: "Victoria Reynolds",
    slug: "victoria-reynolds",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    title: "Managing Partner",
    bio: "Victoria Reynolds has dedicated over 25 years to championing the rights of individuals and families across California. As the founding partner of Reynolds & Associates, she has built a reputation for tenacious advocacy and compassionate client service. Her landmark victories in personal injury and medical malpractice cases have set precedents that continue to benefit clients throughout the state. Victoria believes that every client deserves personalized attention and a legal team that fights as hard for their case as they would for their own family.",
    education: [
      "J.D., Harvard Law School, magna cum laude",
      "B.A., Political Science, Stanford University"
    ],
    barAdmissions: [
      "California State Bar",
      "U.S. District Court, Northern District of California",
      "U.S. Court of Appeals, Ninth Circuit"
    ],
    practiceAreas: ["personal-injury", "medical-malpractice", "employment-law"],
    awards: [
      "Super Lawyers Top 100 (2018-2024)",
      "Best Lawyers in America",
      "California Lawyer of the Year 2022",
      "Martindale-Hubbell AV Preeminent Rating"
    ],
    email: "vreynolds@reynoldslaw.com",
    phone: "(555) 123-4567",
    notableCases: [
      "$12.5M verdict for workplace discrimination victim",
      "$8.2M settlement in medical malpractice case",
      "Landmark employment class action affecting 5,000+ workers"
    ],
    featured: true
  },
  {
    id: "2",
    name: "Marcus Chen",
    slug: "marcus-chen",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    title: "Senior Partner, Criminal Defense",
    bio: "Marcus Chen is a former federal prosecutor turned criminal defense attorney with an unparalleled understanding of both sides of the courtroom. Over his 20-year career, Marcus has successfully defended clients in over 500 criminal cases, from white-collar crimes to serious felonies. His strategic approach and commanding courtroom presence have earned him recognition as one of the top criminal defense attorneys in the state. Marcus is passionate about protecting constitutional rights and ensuring every client receives a vigorous defense.",
    education: [
      "J.D., Yale Law School",
      "B.A., Economics, UC Berkeley",
      "Former Assistant U.S. Attorney (2004-2012)"
    ],
    barAdmissions: [
      "California State Bar",
      "New York State Bar",
      "U.S. Supreme Court"
    ],
    practiceAreas: ["criminal-defense", "white-collar-crime", "appeals"],
    awards: [
      "National Trial Lawyers Top 100",
      "NACDL Champion of Justice Award",
      "California Criminal Defense Bar Association Excellence Award",
      "10.0 Avvo Rating"
    ],
    email: "mchen@reynoldslaw.com",
    phone: "(555) 123-4568",
    notableCases: [
      "Acquittal in high-profile securities fraud case",
      "Dismissal of federal conspiracy charges",
      "Successful appeal overturning 15-year wrongful conviction"
    ],
    featured: true
  },
  {
    id: "3",
    name: "Elizabeth Hartwell",
    slug: "elizabeth-hartwell",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    title: "Partner, Family Law",
    bio: "Elizabeth Hartwell brings compassion, discretion, and fierce advocacy to every family law matter she handles. With 15 years of experience navigating complex divorces, custody disputes, and high-net-worth asset divisions, Elizabeth has become the trusted advisor for families facing their most challenging transitions. She is a certified family law specialist and trained mediator who believes in finding solutions that protect her clients\u0027 interests while minimizing conflict when possible. When litigation is necessary, Elizabeth is a formidable courtroom advocate.",
    education: [
      "J.D., UCLA School of Law",
      "M.A., Psychology, Pepperdine University",
      "B.A., Sociology, USC",
      "Certified Family Law Specialist"
    ],
    barAdmissions: [
      "California State Bar",
      "Certified Family Law Specialist, State Bar of California"
    ],
    practiceAreas: ["family-law", "estate-planning"],
    awards: [
      "Best Lawyers: Family Law (2019-2024)",
      "Southern California Super Lawyers",
      "Family Law Section Distinguished Service Award",
      "Top Women Attorneys in California"
    ],
    email: "ehartwell@reynoldslaw.com",
    phone: "(555) 123-4569",
    notableCases: [
      "Complex $50M marital estate division",
      "Successful international child custody case",
      "High-profile entertainment industry divorce"
    ],
    featured: true
  },
  {
    id: "4",
    name: "Robert Blackstone",
    slug: "robert-blackstone",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    title: "Partner, Business Law",
    bio: "Robert Blackstone combines his business acumen with legal expertise to provide strategic counsel to businesses of all sizes. A former entrepreneur himself, Robert understands the challenges business owners face and provides practical, results-oriented legal solutions. He has guided countless startups through formation, growth, and successful exits while protecting established businesses from legal pitfalls. His transactional experience includes mergers and acquisitions worth over $2 billion.",
    education: [
      "J.D., Columbia Law School",
      "M.B.A., Wharton School of Business",
      "B.S., Finance, NYU Stern"
    ],
    barAdmissions: [
      "California State Bar",
      "New York State Bar",
      "Delaware State Bar"
    ],
    practiceAreas: ["business-law", "real-estate-law"],
    awards: [
      "Chambers USA: Leading Lawyer for Business",
      "Best Lawyers: Corporate Law",
      "M&A Advisor of the Year",
      "40 Under 40 (2015)"
    ],
    email: "rblackstone@reynoldslaw.com",
    phone: "(555) 123-4570",
    notableCases: [
      "$500M tech company acquisition",
      "Successful defense of hostile takeover attempt",
      "IPO for major healthcare company"
    ],
    featured: false
  },
  {
    id: "5",
    name: "Maria Gonzalez",
    slug: "maria-gonzalez",
    photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop",
    title: "Partner, Immigration Law",
    bio: "Maria Gonzalez is a passionate immigration attorney who has helped thousands of individuals and families navigate the complex U.S. immigration system. A first-generation American whose parents immigrated from Mexico, Maria brings personal understanding to her practice. She handles all aspects of immigration law, from family-based petitions to complex asylum cases and business immigration. Maria is also a frequent speaker on immigration policy and a volunteer with local immigrant rights organizations.",
    education: [
      "J.D., Georgetown University Law Center",
      "B.A., International Relations, Brown University",
      "Board Certified, Immigration and Nationality Law"
    ],
    barAdmissions: [
      "California State Bar",
      "Board of Immigration Appeals"
    ],
    practiceAreas: ["immigration"],
    awards: [
      "AILA Advocate of the Year",
      "Latino Lawyers Association Excellence Award",
      "Pro Bono Attorney of the Year",
      "Super Lawyers Rising Star to Super Lawyer"
    ],
    email: "mgonzalez@reynoldslaw.com",
    phone: "(555) 123-4571",
    notableCases: [
      "Successful asylum case for political refugee",
      "EB-5 visa for major real estate development",
      "DACA litigation advocacy"
    ],
    featured: false
  },
  {
    id: "6",
    name: "James Wellington III",
    slug: "james-wellington",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    title: "Of Counsel, Estate Planning",
    bio: "James Wellington III has spent over 30 years helping families protect their wealth and legacies. As a third-generation attorney from a family of estate planners, James brings unparalleled expertise in complex estate planning, tax optimization, and wealth transfer strategies. He works with high-net-worth individuals, family offices, and business owners to create comprehensive plans that protect assets and minimize tax burdens across generations. James is also a sought-after speaker on estate planning topics.",
    education: [
      "J.D., University of Chicago Law School",
      "LL.M., Taxation, NYU School of Law",
      "B.A., History, Princeton University"
    ],
    barAdmissions: [
      "California State Bar",
      "Certified Specialist in Estate Planning, Trust & Probate Law"
    ],
    practiceAreas: ["estate-planning", "business-law"],
    awards: [
      "Best Lawyers: Trusts and Estates",
      "WealthManagement.com Top Estate Planning Attorney",
      "California State Bar Estate Planning Section Lifetime Achievement",
      "AV Preeminent Rating 35+ Years"
    ],
    email: "jwellington@reynoldslaw.com",
    phone: "(555) 123-4572",
    notableCases: [
      "$200M family trust restructuring",
      "Dynasty trust spanning four generations",
      "Complex charitable foundation establishment"
    ],
    featured: false
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    name: "Personal Injury",
    slug: "personal-injury",
    icon: "⚖️",
    shortDescription: "Fighting for fair compensation when negligence causes harm.",
    description: "When you or a loved one suffers injuries due to someone else\u0027s negligence, you deserve powerful legal representation that fights for maximum compensation. Our personal injury attorneys have recovered hundreds of millions of dollars for clients injured in auto accidents, slip and falls, product liability cases, and more. We handle your case on a contingency basis—you pay nothing unless we win.",
    commonCases: [
      "Auto, truck, and motorcycle accidents",
      "Slip and fall injuries",
      "Medical malpractice",
      "Product liability",
      "Workplace injuries",
      "Wrongful death claims",
      "Dog bites and animal attacks",
      "Catastrophic injuries"
    ],
    ourApproach: "We begin every case with a thorough investigation to establish liability and document the full extent of your damages. Our team works with medical experts, accident reconstructionists, and economists to build the strongest possible case. While we prepare every case for trial, we also know when a favorable settlement serves our client\u0027s best interests. Either way, we fight relentlessly for the compensation you deserve.",
    faqs: [
      {
        question: "How much is my personal injury case worth?",
        answer: "The value of your case depends on many factors including the severity of your injuries, medical expenses, lost wages, pain and suffering, and the degree of the defendant\u0027s negligence. During your free consultation, we\u0027ll evaluate your case and give you an honest assessment of its potential value."
      },
      {
        question: "How long do I have to file a personal injury lawsuit?",
        answer: "In California, you generally have two years from the date of injury to file a personal injury lawsuit. However, there are exceptions that can shorten or extend this deadline. It\u0027s crucial to consult with an attorney as soon as possible to protect your rights."
      },
      {
        question: "What if I was partially at fault for my accident?",
        answer: "California follows a pure comparative negligence rule, meaning you can still recover damages even if you were partially at fault. Your compensation will be reduced by your percentage of fault. For example, if you were 20% at fault, you can still recover 80% of your damages."
      }
    ],
    attorneys: ["victoria-reynolds"]
  },
  {
    id: "2",
    name: "Family Law",
    slug: "family-law",
    icon: "👨‍👩‍👧‍👦",
    shortDescription: "Compassionate guidance through life\u0027s most personal legal matters.",
    description: "Family law matters require sensitivity, discretion, and skilled advocacy. Whether you\u0027re facing a divorce, custody dispute, or need to protect your family\u0027s interests, our family law attorneys provide the personal attention and legal expertise you need during these challenging times. We understand that your family\u0027s future is at stake, and we treat every case with the care it deserves.",
    commonCases: [
      "Divorce and legal separation",
      "Child custody and visitation",
      "Child and spousal support",
      "Property division",
      "Prenuptial and postnuptial agreements",
      "Domestic violence restraining orders",
      "Paternity actions",
      "Modifications of existing orders"
    ],
    ourApproach: "We believe in resolving family disputes in the way that best serves our clients and their families. Sometimes that means skilled negotiation or mediation to reach an amicable settlement. Other times, it requires aggressive litigation to protect your rights. Our attorneys are experienced in all approaches and will recommend the strategy best suited to your specific situation and goals.",
    faqs: [
      {
        question: "How is property divided in a California divorce?",
        answer: "California is a community property state, meaning assets and debts acquired during marriage are generally divided equally between spouses. However, separate property (owned before marriage or received as gifts/inheritance) typically remains with the original owner. High-value or complex estates often require forensic accountants and valuation experts."
      },
      {
        question: "How is child custody determined?",
        answer: "California courts make custody decisions based on the best interests of the child. Factors include each parent\u0027s relationship with the child, the child\u0027s health and safety, history of abuse or substance use, and the child\u0027s ties to school and community. Courts generally favor arrangements that allow both parents to have frequent and continuing contact."
      },
      {
        question: "Can I modify a custody or support order?",
        answer: "Yes, custody and support orders can be modified when there is a significant change in circumstances. This might include job loss, relocation, changes in the child\u0027s needs, or other material changes. We can help you petition for modification or defend against an unwarranted modification request."
      }
    ],
    attorneys: ["elizabeth-hartwell"]
  },
  {
    id: "3",
    name: "Criminal Defense",
    slug: "criminal-defense",
    icon: "🛡️",
    shortDescription: "Aggressive defense of your rights, freedom, and future.",
    description: "Being accused of a crime is one of the most frightening experiences anyone can face. Your freedom, your reputation, and your future are all on the line. Our criminal defense attorneys are former prosecutors who know how the other side thinks and fights. We use that knowledge to build the strongest possible defense for every client, from first-time offenders facing misdemeanors to those accused of serious felonies.",
    commonCases: [
      "DUI and drunk driving offenses",
      "Drug crimes",
      "Assault and violent crimes",
      "Theft and property crimes",
      "White collar crimes",
      "Sex crimes",
      "Domestic violence",
      "Federal crimes"
    ],
    ourApproach: "From the moment you retain us, we begin building your defense. We investigate the prosecution\u0027s case, challenge weak evidence, file strategic motions, and prepare for trial. We also explore every opportunity for reduced charges, alternative sentencing, or dismissal. Our goal is always the best possible outcome—whether that\u0027s acquittal, reduced charges, or minimized penalties.",
    faqs: [
      {
        question: "Should I talk to the police before hiring a lawyer?",
        answer: "No. You have the constitutional right to remain silent and to have an attorney present during questioning. Politely decline to answer questions and clearly state that you want to speak with a lawyer. Anything you say can and will be used against you, even if you believe you\u0027re helping yourself."
      },
      {
        question: "What\u0027s the difference between a misdemeanor and a felony?",
        answer: "Misdemeanors are less serious offenses punishable by up to one year in county jail. Felonies are more serious crimes that can result in state prison sentences of more than one year. Some offenses in California are \u0027wobblers\u0027 that can be charged as either, depending on the circumstances."
      },
      {
        question: "Can a criminal record be expunged?",
        answer: "In many cases, yes. California allows for expungement of criminal records once you\u0027ve completed your sentence and probation. An expungement dismisses the conviction and can help with employment, housing, and other opportunities. We can evaluate your eligibility and handle the expungement process."
      }
    ],
    attorneys: ["marcus-chen"]
  },
  {
    id: "4",
    name: "Estate Planning",
    slug: "estate-planning",
    icon: "📜",
    shortDescription: "Protecting your legacy and providing for your loved ones.",
    description: "Estate planning is about more than just distributing assets—it\u0027s about protecting your family, minimizing taxes, and ensuring your wishes are honored. Our estate planning attorneys help clients of all wealth levels create comprehensive plans that provide for their loved ones and protect their legacies. From simple wills to complex trust structures, we tailor our approach to your unique situation and goals.",
    commonCases: [
      "Wills and trusts",
      "Powers of attorney",
      "Healthcare directives",
      "Trust administration",
      "Probate proceedings",
      "Estate tax planning",
      "Business succession planning",
      "Charitable giving strategies"
    ],
    ourApproach: "We begin with a comprehensive review of your assets, family situation, and goals. Then we design an estate plan that protects your assets, minimizes taxes, and ensures your wishes are carried out exactly as you intend. We also help clients keep their plans current as laws change and life circumstances evolve.",
    faqs: [
      {
        question: "Do I need a trust or is a will enough?",
        answer: "It depends on your circumstances. A will goes through probate, which is public and can be time-consuming. A living trust avoids probate, provides privacy, and can offer tax benefits. Most clients with significant assets or complex family situations benefit from a trust-based estate plan."
      },
      {
        question: "How often should I update my estate plan?",
        answer: "You should review your estate plan every 3-5 years or whenever you experience a major life event such as marriage, divorce, birth of a child or grandchild, significant change in assets, or move to a new state. Tax law changes may also necessitate updates."
      },
      {
        question: "What happens if I die without an estate plan?",
        answer: "If you die without a will or trust (intestate), state law determines how your assets are distributed—which may not align with your wishes. Your estate will go through probate, and the court will appoint an administrator. Creating an estate plan ensures you control what happens to your assets."
      }
    ],
    attorneys: ["james-wellington", "elizabeth-hartwell"]
  },
  {
    id: "5",
    name: "Business Law",
    slug: "business-law",
    icon: "🏢",
    shortDescription: "Strategic legal counsel for businesses at every stage.",
    description: "In today\u0027s complex business environment, you need a legal partner who understands both law and business. Our business law attorneys serve as trusted advisors to companies ranging from startups to established enterprises. We handle transactions, dispute resolution, regulatory compliance, and everything in between. Our goal is to help your business grow while protecting it from legal risks.",
    commonCases: [
      "Business formation and structure",
      "Contract drafting and negotiation",
      "Mergers and acquisitions",
      "Commercial litigation",
      "Employment law compliance",
      "Intellectual property protection",
      "Partnership disputes",
      "Regulatory compliance"
    ],
    ourApproach: "We take the time to understand your business, industry, and goals. This allows us to provide proactive legal counsel that prevents problems before they arise and positions your business for success. When disputes occur, we pursue resolution strategies that protect your interests while minimizing disruption to your operations.",
    faqs: [
      {
        question: "What business structure should I choose?",
        answer: "The right structure depends on factors including liability protection, tax implications, ownership flexibility, and your growth plans. LLCs offer flexibility and protection for many small businesses, while corporations may be better for companies seeking investors. We\u0027ll help you choose the structure that best fits your needs."
      },
      {
        question: "Do I really need written contracts?",
        answer: "Absolutely. Written contracts clearly define expectations, reduce misunderstandings, and provide legal protection if disputes arise. Oral agreements are difficult to enforce and often lead to costly litigation. Well-drafted contracts are an investment that can save you significant time and money."
      },
      {
        question: "When should I consult a business attorney?",
        answer: "Ideally, before you start your business. An attorney can help you choose the right structure, draft founding documents, and set up proper legal foundations. Beyond that, consult an attorney before signing major contracts, entering partnerships, hiring employees, or facing any legal threat."
      }
    ],
    attorneys: ["robert-blackstone", "james-wellington"]
  },
  {
    id: "6",
    name: "Employment Law",
    slug: "employment-law",
    icon: "💼",
    shortDescription: "Protecting employee rights and resolving workplace disputes.",
    description: "Whether you\u0027ve been wrongfully terminated, discriminated against, harassed, or denied wages you\u0027ve earned, our employment law attorneys are here to fight for your rights. We represent employees in all types of workplace disputes and have recovered millions of dollars for workers whose rights have been violated. We also advise employers on compliance to prevent costly litigation.",
    commonCases: [
      "Wrongful termination",
      "Workplace discrimination",
      "Sexual harassment",
      "Wage and hour violations",
      "Retaliation claims",
      "Family and medical leave disputes",
      "Employment contract disputes",
      "Class action employment litigation"
    ],
    ourApproach: "We thoroughly investigate every employment claim, gathering evidence and building a compelling case for our clients. We understand the power imbalance between employees and employers, and we work to level the playing field. While we always attempt to resolve matters efficiently, we\u0027re prepared to take your case to trial if that\u0027s what it takes to achieve justice.",
    faqs: [
      {
        question: "What qualifies as wrongful termination?",
        answer: "Wrongful termination occurs when an employer fires an employee for illegal reasons, such as discrimination based on protected characteristics, retaliation for whistleblowing or filing complaints, or violating an employment contract. California is an at-will employment state, but there are many exceptions that protect workers."
      },
      {
        question: "What should I do if I\u0027m being harassed at work?",
        answer: "Document every incident with dates, times, witnesses, and details. Report the harassment through your company\u0027s official channels and keep copies of your reports. If the harassment continues or you face retaliation, consult an employment attorney immediately. There are strict deadlines for filing harassment claims."
      },
      {
        question: "Am I entitled to overtime pay?",
        answer: "Most California workers are entitled to overtime pay (1.5x regular rate) for hours worked over 8 in a day or 40 in a week, and double time for hours over 12. However, some employees are exempt based on their job duties and salary. Misclassification of employees as exempt is a common violation."
      }
    ],
    attorneys: ["victoria-reynolds"]
  },
  {
    id: "7",
    name: "Real Estate Law",
    slug: "real-estate-law",
    icon: "🏠",
    shortDescription: "Expert guidance for all real estate transactions and disputes.",
    description: "Real estate transactions involve significant investments and complex legal issues. Our real estate attorneys guide clients through purchases, sales, leases, development projects, and disputes. We represent buyers, sellers, investors, developers, landlords, and tenants in residential and commercial matters. Our goal is to protect your investment and help you achieve your real estate objectives.",
    commonCases: [
      "Residential and commercial purchases/sales",
      "Commercial lease negotiation",
      "Real estate development",
      "Title disputes",
      "Landlord-tenant matters",
      "Construction disputes",
      "Zoning and land use",
      "Real estate litigation"
    ],
    ourApproach: "We provide meticulous attention to detail in every transaction, ensuring contracts protect your interests and identifying potential issues before they become problems. For disputes, we pursue cost-effective resolutions while being fully prepared to litigate when necessary. Our deep knowledge of California real estate law gives our clients a significant advantage.",
    faqs: [
      {
        question: "Do I need a real estate attorney to buy a home?",
        answer: "While not legally required in California, having a real estate attorney review your purchase agreement can protect you from costly mistakes. An attorney can identify problematic terms, ensure proper disclosures, and address title issues. For complex transactions or commercial properties, legal representation is especially valuable."
      },
      {
        question: "What should I do about a boundary dispute with my neighbor?",
        answer: "First, try to resolve the matter amicably through direct communication. If that fails, a survey by a licensed surveyor can establish the actual boundary. Mediation is often effective for neighbor disputes. If necessary, we can pursue legal remedies including quiet title actions or boundary line adjustments."
      },
      {
        question: "What are my rights if my landlord won\u0027t return my security deposit?",
        answer: "California law requires landlords to return security deposits within 21 days of move-out, along with an itemized statement of any deductions. Deductions must be for actual damages beyond normal wear and tear. If your landlord wrongfully withholds your deposit, you may be entitled to the deposit amount plus additional damages."
      }
    ],
    attorneys: ["robert-blackstone"]
  },
  {
    id: "8",
    name: "Immigration Law",
    slug: "immigration",
    icon: "🌎",
    shortDescription: "Navigating the path to your American dream.",
    description: "The U.S. immigration system is complex and constantly changing. Our immigration attorneys help individuals, families, and businesses navigate visas, green cards, citizenship, and everything in between. We also provide strong representation in removal defense and asylum cases. Whether you\u0027re pursuing the American dream or protecting your right to remain, we\u0027re here to guide you every step of the way.",
    commonCases: [
      "Family-based immigration",
      "Employment-based visas (H-1B, L-1, O-1)",
      "Green card applications",
      "Naturalization and citizenship",
      "Asylum and refugee cases",
      "Removal/deportation defense",
      "DACA and TPS",
      "Business immigration"
    ],
    ourApproach: "We understand that immigration matters affect your entire life and future. That\u0027s why we provide personalized attention to every case, keeping you informed throughout the process and responding promptly to your questions. We stay current on all immigration law developments and use our expertise to find the best path forward for each client\u0027s unique situation.",
    faqs: [
      {
        question: "How long does it take to get a green card?",
        answer: "Processing times vary significantly depending on the category and your country of birth. Family-based green cards can take 1-20+ years depending on the relationship and visa availability. Employment-based green cards typically take 1-10 years. We\u0027ll give you realistic expectations based on current processing times."
      },
      {
        question: "Can I work while my immigration case is pending?",
        answer: "It depends on your current status and the type of application. Some visa categories include work authorization. Pending green card applicants can apply for an Employment Authorization Document (EAD). We\u0027ll help you understand your options and maintain legal work authorization throughout your case."
      },
      {
        question: "What should I do if I receive a Notice to Appear in immigration court?",
        answer: "Contact an immigration attorney immediately. A Notice to Appear begins removal proceedings. You have rights in immigration court, including the right to an attorney (at your own expense), the right to present evidence, and potentially the right to apply for relief from removal. Time is critical—don\u0027t face this alone."
      }
    ],
    attorneys: ["maria-gonzalez"]
  }
];

export const caseResults: CaseResult[] = [
  {
    id: "1",
    title: "Trucking Accident Settlement",
    description: "Our client suffered catastrophic injuries when a commercial truck ran a red light. We proved the trucking company had violated federal safety regulations and failed to properly train their driver.",
    amount: "$12,500,000",
    practiceArea: "Personal Injury",
    year: 2024,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "2",
    title: "Medical Malpractice Verdict",
    description: "A surgical error left our client with permanent nerve damage. Through expert testimony and meticulous case preparation, we proved the surgeon deviated from the standard of care.",
    amount: "$8,200,000",
    practiceArea: "Personal Injury",
    year: 2023,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "3",
    title: "Employment Class Action",
    description: "We represented over 5,000 workers in a class action against a major retailer for systematic wage theft and denial of meal and rest breaks.",
    amount: "$45,000,000",
    practiceArea: "Employment Law",
    year: 2023,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "4",
    title: "Criminal Defense - Federal Charges Dismissed",
    description: "Our client, a business executive, faced federal fraud charges that could have resulted in 20 years in prison. We successfully challenged the government\u0027s evidence and secured a complete dismissal.",
    amount: "Charges Dismissed",
    practiceArea: "Criminal Defense",
    year: 2024,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "5",
    title: "High-Net-Worth Divorce",
    description: "We represented a client in a complex divorce involving a $50 million marital estate, multiple businesses, and contentious custody issues. We secured a favorable property division and custody arrangement.",
    amount: "$28,000,000 Settlement",
    practiceArea: "Family Law",
    year: 2023,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "6",
    title: "Wrongful Termination Verdict",
    description: "Our client was fired after reporting safety violations to OSHA. The jury found the employer liable for retaliation and awarded substantial compensatory and punitive damages.",
    amount: "$4,750,000",
    practiceArea: "Employment Law",
    year: 2024,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "7",
    title: "DUI Acquittal",
    description: "Our client, a professional facing career-ending consequences, was charged with DUI. We challenged the traffic stop, field sobriety tests, and breathalyzer results, resulting in a full acquittal.",
    amount: "Not Guilty",
    practiceArea: "Criminal Defense",
    year: 2024,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  },
  {
    id: "8",
    title: "Commercial Real Estate Dispute",
    description: "We represented a developer in a complex dispute over a $30 million commercial property. Through strategic litigation, we protected our client\u0027s investment and secured specific performance.",
    amount: "$30,000,000 Property Secured",
    practiceArea: "Real Estate Law",
    year: 2023,
    disclaimer: "Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael R.",
    quote: "After my accident, I didn\u0027t know where to turn. Victoria and her team handled everything while I focused on recovery. They fought for me every step of the way and got me a settlement that truly changed my life. I can\u0027t recommend them highly enough.",
    caseType: "Personal Injury",
    rating: 5,
    location: "Los Angeles, CA"
  },
  {
    id: "2",
    name: "Jennifer S.",
    quote: "Going through a divorce is never easy, but Elizabeth made the process as smooth as possible. She was compassionate when I needed support and fierce when I needed an advocate. Most importantly, she helped me secure the custody arrangement that was best for my children.",
    caseType: "Family Law",
    rating: 5,
    location: "Beverly Hills, CA"
  },
  {
    id: "3",
    name: "David K.",
    quote: "When I was facing federal charges, I thought my life was over. Marcus Chen gave me hope from our first meeting. His expertise and strategic thinking led to all charges being dismissed. He literally saved my career and my family.",
    caseType: "Criminal Defense",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    id: "4",
    name: "Patricia M.",
    quote: "James helped my family create an estate plan that gives us complete peace of mind. He explained everything clearly, answered all our questions, and created a plan that protects our children and grandchildren. His expertise is unmatched.",
    caseType: "Estate Planning",
    rating: 5,
    location: "Newport Beach, CA"
  },
  {
    id: "5",
    name: "Carlos G.",
    quote: "Maria helped my entire family navigate the immigration process. After years of uncertainty, we\u0027re now all permanent residents thanks to her tireless work. She treated us like family and never gave up, even when things got complicated.",
    caseType: "Immigration",
    rating: 5,
    location: "San Diego, CA"
  },
  {
    id: "6",
    name: "Amanda T.",
    quote: "My employer owed me years of unpaid overtime. Victoria and her team took on my case and won a verdict that sent a message. They didn\u0027t just help me—they helped thousands of other workers who were being exploited.",
    caseType: "Employment Law",
    rating: 5,
    location: "Sacramento, CA"
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    id: "1",
    name: "Downtown Los Angeles",
    address: "633 West Fifth Street, Suite 2800",
    city: "Los Angeles",
    state: "CA",
    zip: "90071",
    phone: "(555) 123-4567",
    email: "la@reynoldslaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com"
  },
  {
    id: "2",
    name: "San Francisco",
    address: "One Embarcadero Center, Suite 1400",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    phone: "(555) 987-6543",
    email: "sf@reynoldslaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com"
  },
  {
    id: "3",
    name: "San Diego",
    address: "501 West Broadway, Suite 1700",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    phone: "(555) 456-7890",
    email: "sd@reynoldslaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com"
  }
];

export const firmInfo = {
  name: "Reynolds & Associates",
  tagline: "Justice. Integrity. Results.",
  founded: 1985,
  description: "For nearly four decades, Reynolds & Associates has been a pillar of legal excellence in California. Founded by Victoria Reynolds\u0027 father, the late Justice Thomas Reynolds, our firm has grown from a small practice into one of the state\u0027s most respected law firms while never losing sight of our founding principles: unwavering dedication to our clients, the highest ethical standards, and relentless pursuit of justice.",
  mission: "To provide exceptional legal representation that makes a meaningful difference in our clients\u0027 lives, while upholding the highest standards of integrity, professionalism, and service to our community.",
  values: [
    {
      title: "Client First",
      description: "Every decision we make is guided by what\u0027s best for our clients. We take the time to understand your unique situation and goals."
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards of legal practice. Our attorneys are leaders in their fields, and we never stop learning."
    },
    {
      title: "Integrity",
      description: "We are honest with our clients, colleagues, and courts. Our reputation is built on trust, and we work every day to earn it."
    },
    {
      title: "Results",
      description: "We measure our success by our clients\u0027 outcomes. We fight tenaciously to achieve the best possible results in every case."
    }
  ],
  communityInvolvement: [
    "Pro bono legal services for low-income families",
    "Annual scholarship for first-generation law students",
    "Board membership on local legal aid organizations",
    "Volunteer attorneys for veterans\u0027 legal clinics",
    "Sponsor of youth mentorship programs"
  ],
  awards: [
    "U.S. News Best Law Firms (2015-2024)",
    "Chambers USA Ranked Firm",
    "Martindale-Hubbell AV Preeminent Firm",
    "California Lawyer Attorneys of the Year (Multiple Recipients)",
    "Best Lawyers \u0027Law Firm of the Year\u0027 - Personal Injury (2023)"
  ]
};
