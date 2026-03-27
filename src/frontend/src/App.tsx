import {
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Lang = "en" | "te";

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      plans: "Investment Plans",
      insurance: "Insurance",
      contact: "Contact",
      whatsapp: "WhatsApp Us",
    },
    hero: {
      tag: "Income | Insurance | Career Growth",
      heading1: "ARUN CHARI",
      heading2: "Income Hub",
      sub: "Build your wealth, secure your future, and grow your career with India's most trusted Tata AIA Financial Advisor.",
      role: "Tata AIA Financial Advisor",
      cta1: "WhatsApp Now",
    },
    services: {
      heading: "Key Financial Services",
      sub: "Everything you need to build financial security and a thriving career.",
      cards: [
        {
          icon: "income",
          title: "High Income Opportunity",
          desc: "Unlock unlimited earning potential by joining our growing network of financial advisors and partners.",
        },
        {
          icon: "flexible",
          title: "Flexible Work",
          desc: "Work on your own schedule from anywhere. Balance family, personal goals, and a rewarding career.",
        },
        {
          icon: "trusted",
          title: "Trusted Tata AIA Plans",
          desc: "Backed by Tata AIA. Our plans are certified, transparent, and designed for your financial goals.",
        },
      ],
    },
    plans: {
      heading: "Our Investment Plans",
      sub: "Tata AIA-backed plans designed to protect, grow, and secure your financial future.",
      protection: {
        badge: "Protection Solution",
        name: "Sampoorna Raksha Promise",
        tagline:
          "Comprehensive Life Protection — Regular, Limited, or Single Premium",
        includes: "Includes: Life Promise Plus",
        eligibility_title: "Eligibility",
        eligibility: [
          "Minimum Age: 18+ years",
          "Annual Income: ≥ ₹7 Lakhs (Business)",
          "Annual Income: ≥ ₹6 Lakhs (Salaried)",
        ],
        coverage_title: "Coverage",
        coverage: [
          "Lumpsum Coverage up to ₹100 Crore",
          "Subject to Medical Fitness",
          "Policy Term: Up to Lifetime",
          "Premium Payment: Minimum 4 Years",
        ],
        riders_title: "Additional Riders",
        riders: [
          "Health Rider",
          "Disablement Rider",
          "Partial Disablement Benefit",
          "Death Benefits",
        ],
        premium_types: "Premium Types: Regular / Limited / Single",
        cta: "Get This Plan",
      },
      savings: {
        badge: "Savings Solution",
        name: "Smart Value Income Plan",
        tagline: "Limited Premium · Best for Savings · Yearly Income Returns",
        min_age: "Minimum Age: 1 Year",
        example_title: "Example Returns",
        example: "₹1 Lakh premium/year → ₹40,000/year income",
        policy_title: "Policy Details",
        policy: [
          "Policy Term: Maximum Years",
          "Recommended Premium Payment: 12 Years",
          "Maturity Benefit: Up to ₹60 Lakhs after policy term",
        ],
        riders_title: "Health Buddy Riders",
        riders: [
          "Accidental Total Disablement",
          "Accidental Permanent Disablement",
          "Accidental Death Benefit",
        ],
        cta: "Get This Plan",
      },
      maha_raksha: {
        badge: "Term Insurance",
        name: "Maha Raksha Supreme Select",
        tagline:
          "High Life Cover · Upto 10% Digital Discount · Flexible Payouts",
        eligibility_title: "Eligibility",
        eligibility: [
          "Minimum Age: 18 years",
          "Maximum Age: 65 years",
          "Non-smokers eligible for special rates",
        ],
        coverage_title: "Coverage",
        coverage: [
          "Life cover up to ₹5 Crore+",
          "Policy Term: Up to 85 years of age",
          "Return of Premium option available",
          "Lump sum or monthly income payout",
        ],
        riders_title: "Riders Available",
        riders: [
          "Accidental Death Benefit",
          "Critical Illness Rider",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      fortune_guarantee: {
        badge: "Guaranteed Savings",
        name: "Fortune Guarantee Plus",
        tagline: "Best Seller · Guaranteed Returns · Tax-Free Maturity",
        min_age: "Minimum Age: 30 days",
        example_title: "Key Benefits",
        example: "Guaranteed returns + tax-free maturity benefit",
        policy_title: "Plan Highlights",
        policy: [
          "Guaranteed income from day 1",
          "Lump sum or regular income option",
          "Tax benefits under Sec 80C & 10(10D)",
          "Premium payment: 5 to 12 years",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Rider",
          "Critical Illness Cover",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      smart_pension: {
        badge: "Retirement Plan",
        name: "Smart Pension Secure",
        tagline: "Best Seller · Guaranteed Pension · Lifelong Income",
        eligibility_title: "Eligibility",
        eligibility: [
          "Entry Age: 25 to 75 years",
          "Immediate or deferred annuity options",
          "Single premium or regular premium",
        ],
        coverage_title: "Plan Highlights",
        coverage: [
          "Lifelong guaranteed pension",
          "Joint life annuity option",
          "Return of purchase price on death",
          "Multiple annuity payout frequencies",
        ],
        riders_title: "Options",
        riders: ["Immediate Annuity", "Deferred Annuity", "Joint Life Cover"],
        cta: "Get This Plan",
      },
      profit_health: {
        badge: "Health Plan",
        name: "Pro-Fit Health Plan",
        tagline: "Award Winning · Critical Illness · Wellness Benefits",
        min_age: "Minimum Age: 18 years",
        example_title: "Key Highlights",
        example: "Covers 40+ critical illnesses + hospital cash benefit",
        policy_title: "Plan Benefits",
        policy: [
          "Critical illness cover for 40+ conditions",
          "Hospital cash benefit",
          "Wellness & preventive health rewards",
          "Premium waiver on critical illness diagnosis",
        ],
        riders_title: "Add-ons",
        riders: [
          "Cancer Care Rider",
          "Heart Care Rider",
          "Personal Accident Cover",
        ],
        cta: "Get This Plan",
      },
      shubh_flexi_income: {
        badge: "Savings Solution",
        name: "Tata Shubh Flexi Income Plan",
        tagline:
          "Limited Premium · Flexible Income Payout · Guaranteed Regular Income",
        min_age: "Minimum Age: 18 years",
        example_title: "Key Benefits",
        example: "Guaranteed regular income with flexible payout options",
        policy_title: "Plan Highlights",
        policy: [
          "Limited premium payment term",
          "Flexible income payout options",
          "Guaranteed regular income stream",
          "Tax benefits under Section 80C",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Rider",
          "Waiver of Premium",
          "Critical Illness Cover",
        ],
        cta: "Get This Plan",
      },
      shubh_raksha: {
        badge: "Protection Solution",
        name: "Tata Shubh Raksha",
        tagline: "Pure Term Insurance · Affordable Premiums · High Life Cover",
        eligibility_title: "Eligibility",
        eligibility: [
          "Minimum Age: 18 years",
          "Maximum Age: 65 years",
          "Policy Term: Up to 85 years of age",
        ],
        coverage_title: "Coverage",
        coverage: [
          "High life cover at affordable premiums",
          "Death benefit as lump sum payout",
          "Policy term up to 85 years",
          "Pure protection plan",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Benefit",
          "Critical Illness Rider",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      shubh_shakti: {
        badge: "Protection Solution",
        name: "Tata Shubh Shakti",
        tagline:
          "Women-Centric Life Insurance · Critical Illness · Maternity Benefit",
        eligibility_title: "Eligibility",
        eligibility: [
          "Specially designed for women",
          "Entry Age: 18 to 55 years",
          "Flexible premium payment options",
        ],
        coverage_title: "Coverage",
        coverage: [
          "Critical illness cover",
          "Maternity benefit included",
          "Life protection for the family",
          "Flexible premium options",
        ],
        riders_title: "Riders Available",
        riders: [
          "Maternity Benefit Rider",
          "Critical Illness Rider",
          "Accidental Death Benefit",
        ],
        cta: "Get This Plan",
      },
      shubh_family_protect: {
        badge: "Protection Solution",
        name: "Tata Shubh Family Protect",
        tagline: "Family Floater Life Cover · Comprehensive Family Protection",
        eligibility_title: "Eligibility",
        eligibility: [
          "Entry Age: 18 to 65 years",
          "Covers entire family under one plan",
          "Affordable premium for full family",
        ],
        coverage_title: "Coverage",
        coverage: [
          "Comprehensive protection for entire family",
          "Family floater life cover",
          "Death benefit for nominees",
          "Affordable premium structure",
        ],
        riders_title: "Riders Available",
        riders: [
          "Accidental Death Rider",
          "Critical Illness Rider",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      param_raksha: {
        badge: "Wealth Solution",
        name: "Param Raksha Life",
        tagline: "Whole Life Cover · Guaranteed Returns · Savings + Protection",
        min_age: "Entry Age: 18 to 60 years",
        example_title: "Key Benefits",
        example: "Whole life cover up to age 100 with guaranteed returns",
        policy_title: "Plan Highlights",
        policy: [
          "Whole life cover up to age 100",
          "Guaranteed returns on investment",
          "Savings + protection combination",
          "Bonus additions over policy term",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Rider",
          "Critical Illness Rider",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      life_pr: {
        badge: "Wealth Solution",
        name: "Tata Life PR (Param Raksha)",
        tagline:
          "Comprehensive Life Cover · Investment Component · Regular Income Option",
        min_age: "Entry Age: 18 to 65 years",
        example_title: "Key Benefits",
        example:
          "Comprehensive life cover with investment returns and regular income",
        policy_title: "Plan Highlights",
        policy: [
          "Comprehensive life cover with investment",
          "Regular income option available",
          "Flexible payout structure",
          "Long-term wealth building",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Rider",
          "Critical Illness Cover",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      fortune_pro: {
        badge: "Wealth Solution",
        name: "Tata Life Insurance Fortune Pro",
        tagline:
          "Market-Linked ULIP · Wealth Creation + Life Cover · Flexible Funds",
        min_age: "Entry Age: 18 to 70 years",
        example_title: "Key Benefits",
        example:
          "Market-linked returns with life cover for long-term wealth building",
        policy_title: "Plan Highlights",
        policy: [
          "Market-linked ULIP plan",
          "Wealth creation + life cover",
          "Flexible fund options to choose from",
          "Long-term wealth building potential",
        ],
        riders_title: "Optional Riders",
        riders: [
          "Accidental Death Rider",
          "Critical Illness Rider",
          "Waiver of Premium",
        ],
        cta: "Get This Plan",
      },
      shubh_flexi_pension: {
        badge: "Retirement Plan",
        name: "Tata Shubh Flexi Pension Plan",
        eligibility_title: "Eligibility",
        eligibility: [
          "Entry Age: 30 to 70 years",
          "Flexible premium payment options",
          "Joint life option available",
        ],
        coverage_title: "Plan Highlights",
        coverage: [
          "Flexible premium pension plan",
          "Guaranteed pension from retirement age",
          "Joint life annuity option",
          "Deferred annuity structure",
        ],
        riders_title: "Options",
        riders: [
          "Deferred Annuity",
          "Joint Life Option",
          "Return of Purchase Price",
        ],
        tagline:
          "Flexible Premium Pension · Guaranteed Pension from Retirement · Joint Life Option",
        cta: "Get This Plan",
      },
      smart_annuity: {
        badge: "Retirement Plan",
        name: "Tata Life Insurance Smart Annuity Plan",
        eligibility_title: "Eligibility",
        eligibility: [
          "Entry Age: 30 to 80 years",
          "Immediate annuity plan",
          "Single or joint life option",
        ],
        coverage_title: "Plan Highlights",
        coverage: [
          "Immediate annuity payouts",
          "Multiple payout options: monthly/quarterly/annual",
          "Joint life annuity option",
          "Return of purchase price on death",
        ],
        riders_title: "Payout Options",
        riders: ["Monthly Annuity", "Quarterly Annuity", "Annual Annuity"],
        tagline:
          "Immediate Annuity · Multiple Payout Options · Joint Life Annuity",
        cta: "Get This Plan",
      },
    },
    join: {
      heading: "Join Our Growing Team",
      sub: "Become part of a 500+ member network of financial advisors. No experience needed — we train you.",
      cta: "Apply Now on WhatsApp",
      perks: [
        { icon: "award", label: "Full Training Provided" },
        { icon: "briefcase", label: "Work From Home" },
        { icon: "clock", label: "Flexible Hours" },
        { icon: "trending", label: "Unlimited Earnings" },
      ],
    },
    footer: {
      tagline: "Your trusted partner for income, insurance & career growth.",
      links: ["Home", "About", "Plans", "Insurance", "Contact"],
      contact: "Call: +91 93922 79746",
      email: "Email: arun@charihub.in",
      address: "Hyderabad, Andhra Pradesh, India",
      copy: `© ${new Date().getFullYear()}. Built with love using`,
    },
  },
  te: {
    nav: {
      home: "హోమ్",
      about: "గురించి",
      plans: "పెట్టుబడి ప్లాన్లు",
      insurance: "ఇన్సూరెన్స్",
      contact: "సంప్రదించండి",
      whatsapp: "వాట్సాప్ చేయండి",
    },
    hero: {
      tag: "ఆదాయం | ఇన్సూరెన్స్ | కెరీర్ వృద్ధి",
      heading1: "అరుణ్ చారి",
      heading2: "ఇన్కమ్ హబ్",
      sub: "భారతదేశంలోని అత్యంత విశ్వసనీయ Tata AIA ఆర్థిక సలహాదారుతో మీ సంపదను నిర్మించండి, భవిష్యత్తును సురక్షితం చేసుకోండి.",
      role: "Tata AIA ఆర్థిక సలహాదారు",
      cta1: "వాట్సాప్ చేయండి",
    },
    services: {
      heading: "ముఖ్య ఆర్థిక సేవలు",
      sub: "ఆర్థిక భద్రత మరియు మంచి కెరీర్ నిర్మించడానికి అవసరమైనవన్నీ.",
      cards: [
        {
          icon: "income",
          title: "ఎక్కువ ఆదాయం అవకాశం",
          desc: "మా విస్తరిస్తున్న ఆర్థిక సలహాదారుల నెట్‌వర్క్‌లో చేరడం ద్వారా అపరిమిత సంపాదన అవకాశం తెరవండి.",
        },
        {
          icon: "flexible",
          title: "ఫ్లెక్సిబుల్ పని",
          desc: "ఎక్కడి నుండైనా మీ స్వంత షెడ్యూల్‌లో పని చేయండి. కుటుంబం, వ్యక్తిగత లక్ష్యాలు మరియు మంచి కెరీర్‌ను సమతుల్యం చేసుకోండి.",
        },
        {
          icon: "trusted",
          title: "నమ్మకమైన Tata AIA ప్లాన్లు",
          desc: "Tata AIA చేత మద్దతు పొందారు. మా ప్లాన్లు సర్టిఫైడ్, పారదర్శకంగా మరియు మీ ఆర్థిక లక్ష్యాల కోసం రూపొందించబడ్డాయి.",
        },
      ],
    },
    plans: {
      heading: "మా పెట్టుబడి ప్లాన్లు",
      sub: "మీ ఆర్థిక భవిష్యత్తును రక్షించడానికి Tata AIA ధృవీకరించిన ప్లాన్లు.",
      protection: {
        badge: "రక్షణ పరిష్కారం",
        name: "సంపూర్ణ రక్షా ప్రామిస్",
        tagline: "సమగ్ర జీవిత రక్షణ — రెగ్యులర్, లిమిటెడ్ లేదా సింగిల్ ప్రీమియం",
        includes: "ఇందులో ఉంది: లైఫ్ ప్రామిస్ ప్లస్",
        eligibility_title: "అర్హత",
        eligibility: [
          "కనీస వయసు: 18+ సంవత్సరాలు",
          "వార్షిక ఆదాయం: ≥ ₹7 లక్షలు (వ్యాపారం)",
          "వార్షిక ఆదాయం: ≥ ₹6 లక్షలు (జీతం పొందేవారు)",
        ],
        coverage_title: "కవరేజ్",
        coverage: [
          "మొత్తం కవరేజ్ ₹100 కోట్ల వరకు",
          "వైద్య అర్హతను బట్టి",
          "పాలసీ వ్యవధి: జీవితకాలం వరకు",
          "ప్రీమియం చెల్లింపు: కనీసం 4 సంవత్సరాలు",
        ],
        riders_title: "అదనపు రైడర్లు",
        riders: ["ఆరోగ్య రైడర్", "వికలాంగ రైడర్", "పాక్షిక వికలాంగ ప్రయోజనం", "మృత్యు ప్రయోజనాలు"],
        premium_types: "ప్రీమియం రకాలు: రెగ్యులర్ / లిమిటెడ్ / సింగిల్",
        cta: "ఈ ప్లాన్ పొందండి",
      },
      savings: {
        badge: "పొదుపు పరిష్కారం",
        name: "స్మార్ట్ వ్యాల్యూ ఇన్కమ్ ప్లాన్",
        tagline: "లిమిటెడ్ ప్రీమియం · పొదుపుకు అత్యుత్తమం · వార్షిక ఆదాయ రాబడి",
        min_age: "కనీస వయసు: 1 సంవత్సరం",
        example_title: "ఉదాహరణ రాబడులు",
        example: "₹1 లక్ష ప్రీమియం/సంవత్సరం → ₹40,000/సంవత్సరం ఆదాయం",
        policy_title: "పాలసీ వివరాలు",
        policy: [
          "పాలసీ వ్యవధి: గరిష్ఠ సంవత్సరాలు",
          "సిఫార్సు చేయబడిన ప్రీమియం చెల్లింపు: 12 సంవత్సరాలు",
          "మెచ్యూరిటీ ప్రయోజనం: పాలసీ వ్యవధి తర్వాత ₹60 లక్షల వరకు",
        ],
        riders_title: "హెల్త్ బడ్డీ రైడర్లు",
        riders: ["ప్రమాద మొత్తం వికలాంగత", "ప్రమాద శాశ్వత వికలాంగత", "ప్రమాద మృత్యు ప్రయోజనం"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      maha_raksha: {
        badge: "టర్మ్ ఇన్సూరెన్స్",
        name: "మహా రక్షా సుప్రీమ్ సెలెక్ట్",
        tagline: "అధిక జీవిత కవర్ · 10% డిజిటల్ డిస్కౌంట్ · ఫ్లెక్సిబుల్ చెల్లింపు",
        eligibility_title: "అర్హత",
        eligibility: [
          "కనీస వయసు: 18 సంవత్సరాలు",
          "గరిష్ఠ వయసు: 65 సంవత్సరాలు",
          "ధూమపానం చేయనివారికి ప్రత్యేక రేట్లు",
        ],
        coverage_title: "కవరేజ్",
        coverage: [
          "₹5 కోట్లు+ జీవిత కవర్",
          "పాలసీ వ్యవధి: 85 వయసు వరకు",
          "ప్రీమియం రిటర్న్ ఆప్షన్",
          "మొత్తం లేదా నెలసరి ఆదాయం",
        ],
        riders_title: "రైడర్లు",
        riders: ["ప్రమాద మృత్యు ప్రయోజనం", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      fortune_guarantee: {
        badge: "గ్యారెంటీడ్ పొదుపు",
        name: "ఫార్చ్యూన్ గ్యారెంటీ ప్లస్",
        tagline: "బెస్ట్ సెల్లర్ · గ్యారెంటీడ్ రిటర్న్స్ · పన్ను రహిత మెచ్యూరిటీ",
        min_age: "కనీస వయసు: 30 రోజులు",
        example_title: "ముఖ్య ప్రయోజనాలు",
        example: "గ్యారెంటీడ్ రిటర్న్స్ + పన్ను రహిత మెచ్యూరిటీ ప్రయోజనం",
        policy_title: "ప్లాన్ హైలైట్స్",
        policy: [
          "మొదటి రోజు నుండి గ్యారెంటీడ్ ఆదాయం",
          "మొత్తం లేదా క్రమ ఆదాయ ఆప్షన్",
          "80C & 10(10D) పన్ను ప్రయోజనాలు",
          "ప్రీమియం చెల్లింపు: 5 నుండి 12 సంవత్సరాలు",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు రైడర్", "క్రిటికల్ ఇల్నెస్ కవర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      smart_pension: {
        badge: "రిటైర్మెంట్ ప్లాన్",
        name: "స్మార్ట్ పెన్షన్ సెక్యూర్",
        tagline: "బెస్ట్ సెల్లర్ · గ్యారెంటీడ్ పెన్షన్ · జీవితకాలం ఆదాయం",
        eligibility_title: "అర్హత",
        eligibility: [
          "వయసు: 25 నుండి 75 సంవత్సరాలు",
          "తక్షణ లేదా వాయిదా వడ్డీ ఆప్షన్లు",
          "ఒకే ప్రీమియం లేదా క్రమ ప్రీమియం",
        ],
        coverage_title: "ప్లాన్ హైలైట్స్",
        coverage: [
          "జీవితకాలం గ్యారెంటీడ్ పెన్షన్",
          "జాయింట్ లైఫ్ యాన్యుటీ ఆప్షన్",
          "మరణంపై క్రయ మూల్యం రిటర్న్",
          "బహుళ యాన్యుటీ చెల్లింపు పౌనఃపున్యాలు",
        ],
        riders_title: "ఆప్షన్లు",
        riders: ["తక్షణ యాన్యుటీ", "వాయిదా యాన్యుటీ", "జాయింట్ లైఫ్ కవర్"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      profit_health: {
        badge: "హెల్త్ ప్లాన్",
        name: "ప్రో-ఫిట్ హెల్త్ ప్లాన్",
        tagline: "అవార్డ్ విజేత · క్రిటికల్ ఇల్నెస్ · వెల్నెస్ ప్రయోజనాలు",
        min_age: "కనీస వయసు: 18 సంవత్సరాలు",
        example_title: "ముఖ్య హైలైట్స్",
        example: "40+ క్రిటికల్ ఇల్నెస్ + హాస్పిటల్ క్యాష్ ప్రయోజనం",
        policy_title: "ప్లాన్ ప్రయోజనాలు",
        policy: [
          "40+ పరిస్థితులకు క్రిటికల్ ఇల్నెస్ కవర్",
          "హాస్పిటల్ క్యాష్ ప్రయోజనం",
          "వెల్నెస్ & నివారణ ఆరోగ్య రివార్డులు",
          "క్రిటికల్ ఇల్నెస్ నిర్ధారణపై ప్రీమియం మినహాయింపు",
        ],
        riders_title: "యాడ్-ఆన్లు",
        riders: ["క్యాన్సర్ కేర్ రైడర్", "హార్ట్ కేర్ రైడర్", "వ్యక్తిగత ప్రమాద కవర్"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      shubh_flexi_income: {
        badge: "పొదుపు పరిష్కారం",
        name: "తాతా శుభ్ ఫ్లెక్సి ఇన్కమ్ ప్లాన్",
        tagline: "లిమిటెడ్ ప్రీమియం · ఫ్లెక్సిబుల్ ఆదాయం · గ్యారెంటీడ్ నియమిత ఆదాయం",
        min_age: "కనీస వయసు: 18 సంవత్సరాలు",
        example_title: "ముఖ్య ప్రయోజనాలు",
        example: "ఫ్లెక్సిబుల్ చెల్లింపు ఆప్షన్లతో గ్యారెంటీడ్ నియమిత ఆదాయం",
        policy_title: "ప్లాన్ హైలైట్స్",
        policy: [
          "లిమిటెడ్ ప్రీమియం చెల్లింపు వ్యవధి",
          "ఫ్లెక్సిబుల్ ఆదాయ చెల్లింపు ఆప్షన్లు",
          "గ్యారెంటీడ్ నియమిత ఆదాయ ప్రవాహం",
          "సెక్షన్ 80C కింద పన్ను ప్రయోజనాలు",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు రైడర్", "ప్రీమియం మినహాయింపు", "క్రిటికల్ ఇల్నెస్ కవర్"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      shubh_raksha: {
        badge: "రక్షణ పరిష్కారం",
        name: "తాతా శుభ్ రక్షా",
        tagline: "స్వచ్ఛమైన టర్మ్ ఇన్సూరెన్స్ · తక్కువ ప్రీమియం · అధిక జీవిత కవర్",
        eligibility_title: "అర్హత",
        eligibility: [
          "కనీస వయసు: 18 సంవత్సరాలు",
          "గరిష్ఠ వయసు: 65 సంవత్సరాలు",
          "పాలసీ వ్యవధి: 85 వయసు వరకు",
        ],
        coverage_title: "కవరేజ్",
        coverage: [
          "తక్కువ ప్రీమియంకు అధిక జీవిత కవర్",
          "మొత్తం మొత్తంగా మృత్యు ప్రయోజనం",
          "పాలసీ వ్యవధి 85 వయసు వరకు",
          "స్వచ్ఛమైన రక్షణ ప్లాన్",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు ప్రయోజనం", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      shubh_shakti: {
        badge: "రక్షణ పరిష్కారం",
        name: "తాతా శుభ్ శక్తి",
        tagline: "మహిళల కోసం జీవిత ఇన్సూరెన్స్ · క్రిటికల్ ఇల్నెస్ · ప్రసూతి ప్రయోజనం",
        eligibility_title: "అర్హత",
        eligibility: [
          "మహిళల కోసం ప్రత్యేకంగా రూపొందించబడింది",
          "ప్రవేశ వయసు: 18 నుండి 55 సంవత్సరాలు",
          "ఫ్లెక్సిబుల్ ప్రీమియం చెల్లింపు ఆప్షన్లు",
        ],
        coverage_title: "కవరేజ్",
        coverage: [
          "క్రిటికల్ ఇల్నెస్ కవర్",
          "ప్రసూతి ప్రయోజనం చేర్చబడింది",
          "కుటుంబానికి జీవిత రక్షణ",
          "ఫ్లెక్సిబుల్ ప్రీమియం ఆప్షన్లు",
        ],
        riders_title: "రైడర్లు అందుబాటులో",
        riders: ["ప్రసూతి ప్రయోజన రైడర్", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రమాద మృత్యు ప్రయోజనం"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      shubh_family_protect: {
        badge: "రక్షణ పరిష్కారం",
        name: "తాతా శుభ్ ఫ్యామిలీ ప్రొటెక్ట్",
        tagline: "ఫ్యామిలీ ఫ్లోటర్ జీవిత కవర్ · సమగ్ర కుటుంబ రక్షణ",
        eligibility_title: "అర్హత",
        eligibility: [
          "ప్రవేశ వయసు: 18 నుండి 65 సంవత్సరాలు",
          "ఒకే ప్లాన్‌లో మొత్తం కుటుంబాన్ని కవర్ చేస్తుంది",
          "మొత్తం కుటుంబానికి తక్కువ ప్రీమియం",
        ],
        coverage_title: "కవరేజ్",
        coverage: [
          "మొత్తం కుటుంబానికి సమగ్ర రక్షణ",
          "ఫ్యామిలీ ఫ్లోటర్ జీవిత కవర్",
          "నామినీలకు మృత్యు ప్రయోజనం",
          "తక్కువ ప్రీమియం నిర్మాణం",
        ],
        riders_title: "రైడర్లు అందుబాటులో",
        riders: ["ప్రమాద మృత్యు రైడర్", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      param_raksha: {
        badge: "సంపద పరిష్కారం",
        name: "పరమ్ రక్షా లైఫ్",
        tagline: "జీవితకాల కవర్ · గ్యారెంటీడ్ రిటర్న్స్ · పొదుపు + రక్షణ",
        min_age: "ప్రవేశ వయసు: 18 నుండి 60 సంవత్సరాలు",
        example_title: "ముఖ్య ప్రయోజనాలు",
        example: "100 వయసు వరకు జీవితకాల కవర్ మరియు గ్యారెంటీడ్ రిటర్న్స్",
        policy_title: "ప్లాన్ హైలైట్స్",
        policy: [
          "100 వయసు వరకు జీవితకాల కవర్",
          "పెట్టుబడిపై గ్యారెంటీడ్ రిటర్న్స్",
          "పొదుపు + రక్షణ కలయిక",
          "పాలసీ వ్యవధిలో బోనస్ చేర్పులు",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు రైడర్", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      life_pr: {
        badge: "సంపద పరిష్కారం",
        name: "తాతా లైఫ్ PR (పరమ్ రక్షా)",
        tagline: "సమగ్ర జీవిత కవర్ · పెట్టుబడి భాగం · నియమిత ఆదాయ ఆప్షన్",
        min_age: "ప్రవేశ వయసు: 18 నుండి 65 సంవత్సరాలు",
        example_title: "ముఖ్య ప్రయోజనాలు",
        example: "నియమిత ఆదాయంతో సమగ్ర జీవిత కవర్ మరియు పెట్టుబడి రిటర్న్స్",
        policy_title: "ప్లాన్ హైలైట్స్",
        policy: [
          "పెట్టుబడితో సమగ్ర జీవిత కవర్",
          "నియమిత ఆదాయ ఆప్షన్ అందుబాటులో",
          "ఫ్లెక్సిబుల్ చెల్లింపు నిర్మాణం",
          "దీర్ఘకాలిక సంపద నిర్మాణం",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు రైడర్", "క్రిటికల్ ఇల్నెస్ కవర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      fortune_pro: {
        badge: "సంపద పరిష్కారం",
        name: "తాతా లైఫ్ ఇన్సూరెన్స్ ఫార్చ్యూన్ ప్రో",
        tagline: "మార్కెట్-లింక్డ్ ULIP · సంపద సృష్టి + జీవిత కవర్ · ఫ్లెక్సిబుల్ ఫండ్లు",
        min_age: "ప్రవేశ వయసు: 18 నుండి 70 సంవత్సరాలు",
        example_title: "ముఖ్య ప్రయోజనాలు",
        example: "దీర్ఘకాలిక సంపద నిర్మాణానికి జీవిత కవర్‌తో మార్కెట్-లింక్డ్ రిటర్న్స్",
        policy_title: "ప్లాన్ హైలైట్స్",
        policy: [
          "మార్కెట్-లింక్డ్ ULIP ప్లాన్",
          "సంపద సృష్టి + జీవిత కవర్",
          "ఫ్లెక్సిబుల్ ఫండ్ ఆప్షన్లు",
          "దీర్ఘకాలిక సంపద నిర్మాణ సామర్థ్యం",
        ],
        riders_title: "ఐచ్ఛిక రైడర్లు",
        riders: ["ప్రమాద మృత్యు రైడర్", "క్రిటికల్ ఇల్నెస్ రైడర్", "ప్రీమియం మినహాయింపు"],
        cta: "ఈ ప్లాన్ పొందండి",
      },
      shubh_flexi_pension: {
        badge: "రిటైర్మెంట్ ప్లాన్",
        name: "తాతా శుభ్ ఫ్లెక్సి పెన్షన్ ప్లాన్",
        eligibility_title: "అర్హత",
        eligibility: [
          "ప్రవేశ వయసు: 30 నుండి 70 సంవత్సరాలు",
          "ఫ్లెక్సిబుల్ ప్రీమియం చెల్లింపు ఆప్షన్లు",
          "జాయింట్ లైఫ్ ఆప్షన్ అందుబాటులో",
        ],
        coverage_title: "ప్లాన్ హైలైట్స్",
        coverage: [
          "ఫ్లెక్సిబుల్ ప్రీమియం పెన్షన్ ప్లాన్",
          "రిటైర్మెంట్ వయసు నుండి గ్యారెంటీడ్ పెన్షన్",
          "జాయింట్ లైఫ్ అన్యూటీ ఆప్షన్",
          "డిఫర్డ్ అన్యూటీ నిర్మాణం",
        ],
        riders_title: "ఆప్షన్లు",
        riders: ["డిఫర్డ్ అన్యూటీ", "జాయింట్ లైఫ్ ఆప్షన్", "కొనుగోలు ధర వాపసు"],
        tagline: "ఫ్లెక్సిబుల్ ప్రీమియం పెన్షన్ · రిటైర్మెంట్ నుండి గ్యారెంటీడ్ పెన్షన్ · జాయింట్ లైఫ్",
        cta: "ఈ ప్లాన్ పొందండి",
      },
      smart_annuity: {
        badge: "రిటైర్మెంట్ ప్లాన్",
        name: "తాతా లైఫ్ ఇన్సూరెన్స్ స్మార్ట్ అన్యూటీ ప్లాన్",
        eligibility_title: "అర్హత",
        eligibility: [
          "ప్రవేశ వయసు: 30 నుండి 80 సంవత్సరాలు",
          "తక్షణ అన్యూటీ ప్లాన్",
          "సింగిల్ లేదా జాయింట్ లైఫ్ ఆప్షన్",
        ],
        coverage_title: "ప్లాన్ హైలైట్స్",
        coverage: [
          "తక్షణ అన్యూటీ చెల్లింపులు",
          "బహుళ చెల్లింపు ఆప్షన్లు: నెలసరి/త్రైమాసిక/వార్షిక",
          "జాయింట్ లైఫ్ అన్యూటీ ఆప్షన్",
          "మృత్యువుపై కొనుగోలు ధర వాపసు",
        ],
        riders_title: "చెల్లింపు ఆప్షన్లు",
        riders: ["నెలసరి అన్యూటీ", "త్రైమాసిక అన్యూటీ", "వార్షిక అన్యూటీ"],
        tagline: "తక్షణ అన్యూటీ · బహుళ చెల్లింపు ఆప్షన్లు · జాయింట్ లైఫ్ అన్యూటీ",
        cta: "ఈ ప్లాన్ పొందండి",
      },
    },
    join: {
      heading: "మా పెరుగుతున్న టీమ్‌లో చేరండి",
      sub: "500+ మంది ఆర్థిక సలహాదారుల నెట్‌వర్క్‌లో భాగం అవ్వండి. అనుభవం అవసరం లేదు — మేము మీకు శిక్షణ ఇస్తాం.",
      cta: "వాట్సాప్‌లో అప్లయ్ చేయండి",
      perks: [
        { icon: "award", label: "పూర్తి శిక్షణ అందించబడుతుంది" },
        { icon: "briefcase", label: "ఇంటి నుండి పని" },
        { icon: "clock", label: "ఫ్లెక్సిబుల్ గంటలు" },
        { icon: "trending", label: "అపరిమిత ఆదాయం" },
      ],
    },
    footer: {
      tagline: "ఆదాయం, ఇన్సూరెన్స్ & కెరీర్ వృద్ధికి మీ విశ్వసనీయ భాగస్వామి.",
      links: ["హోమ్", "గురించి", "ప్లాన్లు", "ఇన్సూరెన్స్", "సంప్రదించండి"],
      contact: "కాల్: +91 93922 79746",
      email: "ఇమెయిల్: arun@charihub.in",
      address: "హైదరాబాద్, ఆంధ్రప్రదేశ్, భారతదేశం",
      copy: `© ${new Date().getFullYear()}. ప్రేమతో నిర్మించబడింది`,
    },
  },
};

function ServiceIcon({ type }: { type: string }) {
  const cls = "w-8 h-8";
  if (type === "income") return <TrendingUp className={cls} />;
  if (type === "flexible") return <Clock className={cls} />;
  if (type === "trusted") return <Shield className={cls} />;
  return <Star className={cls} />;
}

function PerkIcon({ type }: { type: string }) {
  const cls = "w-6 h-6";
  if (type === "award") return <Award className={cls} />;
  if (type === "briefcase") return <Briefcase className={cls} />;
  if (type === "clock") return <Clock className={cls} />;
  if (type === "trending") return <TrendingUp className={cls} />;
  return <Star className={cls} />;
}

const SOCIAL_LINKS = [
  {
    id: "facebook",
    href: "https://www.facebook.com/share/1DkUBYWRDR/",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/aruns.income.hub",
    icon: <Instagram className="w-4 h-4" />,
  },
  { id: "youtube", href: "#", icon: <Youtube className="w-4 h-4" /> },
  {
    id: "whatsapp",
    href: "https://wa.me/919392279746?text=Hi%20I%20am%20interested",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

type BadgeVariant =
  | "protection"
  | "savings"
  | "term"
  | "retirement"
  | "health"
  | "wealth";

function badgeClass(variant: BadgeVariant) {
  if (variant === "protection") return "bg-primary/20 text-gold";
  if (variant === "savings") return "bg-accent/20 text-accent";
  if (variant === "term") return "bg-primary/20 text-gold";
  if (variant === "retirement") return "bg-blue-900/40 text-blue-300";
  if (variant === "health") return "bg-green-900/40 text-green-300";
  if (variant === "wealth") return "bg-purple-900/40 text-purple-300";
  return "bg-primary/20 text-gold";
}

interface EligibilityCoveragePlan {
  badge: string;
  name: string;
  tagline: string;
  eligibility_title: string;
  eligibility: string[];
  coverage_title: string;
  coverage: string[];
  riders_title: string;
  riders: string[];
  cta: string;
  includes?: string;
  premium_types?: string;
}

interface ExamplePolicyPlan {
  badge: string;
  name: string;
  tagline: string;
  min_age: string;
  example_title: string;
  example: string;
  policy_title: string;
  policy: string[];
  riders_title: string;
  riders: string[];
  cta: string;
}

function EligibilityCoveragePlanCard({
  plan,
  index,
  badgeVariant,
  whatsappUrl,
}: {
  plan: EligibilityCoveragePlan;
  index: number;
  badgeVariant: BadgeVariant;
  whatsappUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-background rounded-2xl border border-border shadow-navy p-7 flex flex-col"
      data-ocid={`plans.item.${index + 1}`}
    >
      <div className="mb-5">
        <span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${badgeClass(badgeVariant)}`}
        >
          {plan.badge}
        </span>
        <h3 className="font-display font-bold text-2xl text-foreground mb-1">
          {plan.name}
        </h3>
        <p className="text-foreground/50 text-sm">{plan.tagline}</p>
        {plan.includes && (
          <p className="text-accent text-sm font-semibold mt-2">
            {plan.includes}
          </p>
        )}
        {plan.premium_types && (
          <p className="text-foreground/40 text-xs mt-1">
            {plan.premium_types}
          </p>
        )}
      </div>

      <div className="space-y-5 flex-1">
        <div>
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.eligibility_title}
          </div>
          <ul className="space-y-1.5">
            {plan.eligibility.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/75"
              >
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.coverage_title}
          </div>
          <ul className="space-y-1.5">
            {plan.coverage.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/75"
              >
                <Shield className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.riders_title}
          </div>
          <div className="flex flex-wrap gap-2">
            {plan.riders.map((rider) => (
              <span
                key={rider}
                className="text-xs bg-navy-light border border-border text-foreground/70 px-2.5 py-1 rounded-full"
              >
                {rider}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 btn-whatsapp w-full py-3 rounded-xl font-bold mt-6 transition-all hover:scale-[1.02]"
        data-ocid={`plans.item.${index + 1}.button`}
      >
        <MessageCircle className="w-4 h-4" />
        {plan.cta}
      </a>
    </motion.div>
  );
}

function ExamplePolicyPlanCard({
  plan,
  index,
  badgeVariant,
  whatsappUrl,
}: {
  plan: ExamplePolicyPlan;
  index: number;
  badgeVariant: BadgeVariant;
  whatsappUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-background rounded-2xl border border-border shadow-navy p-7 flex flex-col"
      data-ocid={`plans.item.${index + 1}`}
    >
      <div className="mb-5">
        <span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${badgeClass(badgeVariant)}`}
        >
          {plan.badge}
        </span>
        <h3 className="font-display font-bold text-2xl text-foreground mb-1">
          {plan.name}
        </h3>
        <p className="text-foreground/50 text-sm">{plan.tagline}</p>
        <p className="text-foreground/40 text-xs mt-1">{plan.min_age}</p>
      </div>

      <div className="space-y-5 flex-1">
        <div className="bg-navy-light border border-border rounded-xl p-4">
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.example_title}
          </div>
          <p className="text-foreground font-bold text-base">{plan.example}</p>
        </div>

        <div>
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.policy_title}
          </div>
          <ul className="space-y-1.5">
            {plan.policy.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/75"
              >
                <TrendingUp className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold text-gold/70 uppercase tracking-wider mb-2">
            {plan.riders_title}
          </div>
          <div className="flex flex-wrap gap-2">
            {plan.riders.map((rider) => (
              <span
                key={rider}
                className="text-xs bg-navy-light border border-border text-foreground/70 px-2.5 py-1 rounded-full"
              >
                {rider}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 btn-whatsapp w-full py-3 rounded-xl font-bold mt-6 transition-all hover:scale-[1.02]"
        data-ocid={`plans.item.${index + 1}.button`}
      >
        <MessageCircle className="w-4 h-4" />
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappNow =
    "https://wa.me/919392279746?text=Hi%20I%20am%20interested";
  const whatsappJoin = "https://wa.me/919392279746?text=I%20want%20to%20join";
  const userPhoto =
    "/assets/uploads/image-019d2e84-f50e-7559-8596-4bd5c48e6db7-1.png";

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "about", href: "#services" },
    { key: "plans", href: "#plans" },
    { key: "contact", href: "#contact" },
  ];

  const p = t.plans;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ========== STICKY NAV ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-navy"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        data-ocid="nav.panel"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <span className="font-display font-bold text-sm text-gold">
                AC
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm text-gold leading-tight">
                ARUN CHARI
              </div>
              <div className="text-xs text-foreground/60 leading-tight">
                INCOME HUB
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-gold transition-colors font-medium"
                data-ocid={`nav.${link.key}.link`}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                data-ocid="nav.lang_en.toggle"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("te")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "te"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                data-ocid="nav.lang_te.toggle"
              >
                తె
              </button>
            </div>

            <a
              href={whatsappNow}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-whatsapp px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
              data-ocid="nav.whatsapp.button"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.whatsapp}
            </a>

            <button
              type="button"
              className="lg:hidden p-2 text-foreground/70 hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.menu.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/98 border-t border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/80 hover:text-gold py-2 border-b border-border/50 transition-colors"
                    data-ocid={`nav.mobile_${link.key}.link`}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                ))}
                <a
                  href={whatsappNow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-whatsapp px-4 py-2.5 rounded-lg text-sm font-semibold mt-2"
                  data-ocid="nav.mobile_whatsapp.button"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.nav.whatsapp}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========== HERO ========== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.04 250) 0%, oklch(0.18 0.04 260) 100%)",
        }}
      >
        {/* Hero background image */}
        <img
          src="/assets/generated/hero-banner-bg.dim_1200x600.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-gold text-sm font-semibold tracking-wide">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="font-display font-extrabold leading-tight mb-2">
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-gold drop-shadow-lg">
                {t.hero.heading1}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-foreground/80 mt-1">
                {t.hero.heading2}
              </span>
            </h1>

            <p className="text-foreground/50 font-semibold text-sm mb-4 tracking-wide uppercase">
              {t.hero.role}
            </p>

            <p className="text-foreground/70 text-lg max-w-lg leading-relaxed mb-8">
              {t.hero.sub}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappNow}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-whatsapp px-6 py-3 rounded-lg font-bold text-base shadow-lg hover:scale-105 transition-transform"
                data-ocid="hero.whatsapp.button"
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.cta1}
              </a>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
              {[
                {
                  id: "team",
                  value: "500+",
                  label: lang === "en" ? "Team Members" : "టీమ్ సభ్యులు",
                },
                {
                  id: "returns",
                  value: "₹60L+",
                  label: lang === "en" ? "Max Maturity" : "గరిష్ఠ మెచ్యూరిటీ",
                },
                {
                  id: "clients",
                  value: "1000+",
                  label: lang === "en" ? "Happy Clients" : "సంతోష కస్టమర్లు",
                },
              ].map((stat) => (
                <div key={stat.id}>
                  <div className="text-2xl font-display font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/60 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-[460px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-gold">
              <img
                src={userPhoto}
                alt="Arun Chari — Tata AIA Financial Advisor"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur rounded-xl p-3 border border-primary/20">
                <div className="font-display font-bold text-gold text-lg">
                  Arun Chari
                </div>
                <div className="text-xs text-foreground/60">
                  {lang === "en"
                    ? "Tata AIA Financial Advisor"
                    : "Tata AIA ఆర్థిక సలహాదారు"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="bg-white-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-4xl text-on-white mb-3">
              {t.services.heading}
            </h2>
            <p className="text-muted-on-white text-lg max-w-xl mx-auto">
              {t.services.sub}
            </p>
          </motion.div>

          {/* Family consultation illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-primary/20 max-h-72 w-full"
          >
            <img
              src="/assets/generated/family-consultation.dim_800x500.jpg"
              alt="Financial advisor consulting a family"
              className="w-full h-72 object-cover object-center"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6" data-ocid="services.list">
            {t.services.cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-8 shadow-xs text-center group"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-background/5 border border-primary/20 flex items-center justify-center mx-auto mb-5 text-gold group-hover:bg-primary/10 transition-colors">
                  <ServiceIcon type={card.icon} />
                </div>
                <h3 className="font-display font-bold text-xl text-on-white mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-on-white text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INVESTMENT PLANS ========== */}
      <section id="plans" className="py-20 px-4 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-4xl text-gold mb-3">
              {p.heading}
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto">
              {p.sub}
            </p>
          </motion.div>

          {/* Plan section illustration banners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              {
                src: "/assets/generated/insurance-shield.dim_600x600.png",
                alt: "Protection Plans",
                label: lang === "en" ? "Protection" : "రక్షణ",
              },
              {
                src: "/assets/generated/savings-growth.dim_600x600.png",
                alt: "Savings Plans",
                label: lang === "en" ? "Savings" : "పొదుపు",
              },
              {
                src: "/assets/generated/wealth-growth.dim_600x400.jpg",
                alt: "Wealth Solutions",
                label: lang === "en" ? "Wealth" : "సంపద",
              },
              {
                src: "/assets/generated/retirement-plan.dim_600x400.jpg",
                alt: "Retirement Plans",
                label: lang === "en" ? "Retirement" : "పదవీ విరమణ",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-primary/20 shadow-md relative group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-32 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-gold text-xs font-bold tracking-wide">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="plans.list"
          >
            {/* Plan 1 — Protection (Sampoorna Raksha) */}
            <EligibilityCoveragePlanCard
              plan={p.protection}
              index={0}
              badgeVariant="protection"
              whatsappUrl={whatsappNow}
            />

            {/* Plan 2 — Savings (Smart Value Income) */}
            <ExamplePolicyPlanCard
              plan={p.savings}
              index={1}
              badgeVariant="savings"
              whatsappUrl={whatsappNow}
            />

            {/* Plan 3 — Term Insurance (Maha Raksha Supreme) */}
            <EligibilityCoveragePlanCard
              plan={p.maha_raksha}
              index={2}
              badgeVariant="term"
              whatsappUrl={whatsappNow}
            />

            {/* Plan 4 — Guaranteed Savings (Fortune Guarantee Plus) */}
            <ExamplePolicyPlanCard
              plan={p.fortune_guarantee}
              index={3}
              badgeVariant="savings"
              whatsappUrl={whatsappNow}
            />

            {/* Plan 5 — Retirement (Smart Pension Secure) */}
            <EligibilityCoveragePlanCard
              plan={p.smart_pension}
              index={4}
              badgeVariant="retirement"
              whatsappUrl={whatsappNow}
            />

            {/* Plan 6 — Health (Pro-Fit Health Plan) */}
            <ExamplePolicyPlanCard
              plan={p.profit_health}
              index={5}
              badgeVariant="health"
              whatsappUrl={whatsappNow}
            />
          </div>

          {/* ===== Savings Plans ===== */}
          <h3 className="text-2xl font-display font-bold text-gold text-center mt-14 mb-6">
            Savings Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExamplePolicyPlanCard
              plan={p.shubh_flexi_income}
              index={6}
              badgeVariant="savings"
              whatsappUrl={whatsappNow}
            />
          </div>

          {/* ===== Protection Plans ===== */}
          <h3 className="text-2xl font-display font-bold text-gold text-center mt-14 mb-6">
            Protection Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EligibilityCoveragePlanCard
              plan={p.shubh_raksha}
              index={7}
              badgeVariant="protection"
              whatsappUrl={whatsappNow}
            />
            <EligibilityCoveragePlanCard
              plan={p.shubh_shakti}
              index={8}
              badgeVariant="protection"
              whatsappUrl={whatsappNow}
            />
            <EligibilityCoveragePlanCard
              plan={p.shubh_family_protect}
              index={9}
              badgeVariant="protection"
              whatsappUrl={whatsappNow}
            />
          </div>

          {/* ===== Wealth Solutions ===== */}
          <h3 className="text-2xl font-display font-bold text-gold text-center mt-14 mb-6">
            Wealth Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExamplePolicyPlanCard
              plan={p.param_raksha}
              index={10}
              badgeVariant="wealth"
              whatsappUrl={whatsappNow}
            />
            <ExamplePolicyPlanCard
              plan={p.life_pr}
              index={11}
              badgeVariant="wealth"
              whatsappUrl={whatsappNow}
            />
            <ExamplePolicyPlanCard
              plan={p.fortune_pro}
              index={12}
              badgeVariant="wealth"
              whatsappUrl={whatsappNow}
            />
          </div>

          {/* ===== Retirement Solutions ===== */}
          <h3 className="text-2xl font-display font-bold text-gold text-center mt-14 mb-6">
            Retirement Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EligibilityCoveragePlanCard
              plan={p.shubh_flexi_pension}
              index={13}
              badgeVariant="retirement"
              whatsappUrl={whatsappNow}
            />
            <EligibilityCoveragePlanCard
              plan={p.smart_annuity}
              index={14}
              badgeVariant="retirement"
              whatsappUrl={whatsappNow}
            />
          </div>
        </div>
      </section>

      {/* ========== JOIN TEAM ========== */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-gold border border-primary/20"
          >
            <img
              src="/assets/generated/happy-family.dim_800x500.jpg"
              alt="Happy Indian family secured with Tata AIA plans"
              className="w-full h-64 md:h-80 object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl text-gold mb-4">
              {t.join.heading}
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-10">
              {t.join.sub}
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            data-ocid="join.list"
          >
            {t.join.perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-mid rounded-2xl p-6 flex flex-col items-center gap-3 border border-border"
                data-ocid={`join.item.${i + 1}`}
              >
                <div className="text-gold">
                  <PerkIcon type={perk.icon} />
                </div>
                <span className="text-sm font-semibold text-foreground/80 text-center">
                  {perk.label}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href={whatsappJoin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-whatsapp px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            data-ocid="join.whatsapp.button"
          >
            <MessageCircle className="w-6 h-6" />
            {t.join.cta}
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-gold">
                    AC
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-gold">
                    ARUN CHARI
                  </div>
                  <div className="text-xs text-foreground/50">INCOME HUB</div>
                </div>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <div className="font-semibold text-foreground/70 mb-4 text-sm uppercase tracking-wider">
                {lang === "en" ? "Quick Links" : "త్వరిత లింక్‌లు"}
              </div>
              <ul className="space-y-2">
                {[
                  { label: t.nav.home, href: "#home" },
                  { label: t.nav.about, href: "#services" },
                  { label: t.nav.plans, href: "#plans" },
                  { label: t.nav.contact, href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-semibold text-foreground/70 mb-4 text-sm uppercase tracking-wider">
                {lang === "en" ? "Connect" : "సంప్రదించండి"}
              </div>
              <div className="space-y-2 text-sm text-foreground/50 mb-5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  {t.footer.contact}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold" />
                  {t.footer.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  {t.footer.address}
                </div>
              </div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-navy-mid border border-border flex items-center justify-center text-foreground/50 hover:text-gold hover:border-primary/40 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/40">
            <span>
              {t.footer.copy}{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                caffeine.ai
              </a>
            </span>
            <span>+91 93922 79746</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
