document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Initialization
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get saved theme or default to dark
    const getSavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return 'dark';
    };

    const translations = {
        en: {
            pageTitle: 'Skills | Sidh Kataria',
            home: { pageTitle: 'Sidh Kataria | Portfolio' },
            about: { pageTitle: 'About | Sidh Kataria' },
            skills: { pageTitle: 'Skills | Sidh Kataria' },
            projects: { pageTitle: 'Projects | Sidh Kataria' },
            contact: { pageTitle: 'Contact | Sidh Kataria' },
            nav: {
                home: 'Home',
                about: 'About',
                resume: 'Resume',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact'
            },
            home: {
                heroGreeting: "Hi, I'm",
                heroSubtitle: 'Frontend Developer & DSA Enthusiast',
                heroDescription: 'B.Tech IT student at GGSIPU. Building modern web applications and solving real-world problems through clean code and efficient algorithms.',
                viewProjects: 'View Projects 🚀',
                myResume: 'My Resume 📄'
            },
            github: {
                placeholder: 'GitHub username',
                openRepos: 'Open GitHub repos',
                refresh: 'Refresh',
                close: 'Close',
                yourRepos: 'Your Repos',
                contributed: 'Contributed',
                title: 'GitHub'
            },
            about: {
                heading: 'About Me',
                subtitle: 'Get to know my background, aspirations, and interests',
                heroIntro: 'Hey, I\'m Sidh Kataria 👋',
                introLine1: 'I am currently pursuing a B.Tech in Information Technology at GGSIPU (2nd Year). I am deeply passionate about Web Development and Data Structures & Algorithms. I thrive on translating abstract ideas into functional, clean, and interactive digital products.',
                introLine2: 'My journey in tech is driven by curiosity and a desire to build solutions that have real social impact, particularly in healthcare and mentorship. I love participating in hackathons, collaborating on web3 projects, and continuously learning new technologies to hone my skills.',
                introLine3: 'When I am not coding or solving DSA problems, you can find me leading PR and marketing activities, sharing design thoughts, or mentoring peers in college groups.',
                highlight1: 'Year B.Tech IT',
                highlight2: 'Projects Built',
                highlight3: 'Hackathon Runner-up',
                highlight4: 'PR & Marketing Head',
                visualTitle: 'Student & Dev',
                visualSubtitle: 'GGSIPU'
            },
            contact: {
                heading: 'Get in Touch',
                subtitle: 'Have a project idea, question, or just want to say hello? Drop me a message!',
                emailLabel: 'Email Me',
                linkedinLabel: 'LinkedIn',
                githubLabel: 'GitHub',
                nameLabel: 'Your Name',
                emailField: 'Email Address',
                messageLabel: 'Message',
                namePlaceholder: 'John Doe',
                emailPlaceholder: 'john@example.com',
                messagePlaceholder: "Hi Sidh, I'd love to connect with you regarding...",
                sendMessage: 'Send Message ✉️'
            },
            projects: {
                heading: 'My Projects',
                subtitle: 'A collection of web applications, Web3 prototypes, and backend systems I have developed',
                healthxTitle: 'HealthX',
                healthxDesc: 'Built a responsive healthcare dashboard that facilitates secure patient record management, digital doctor appointments, and medical profile tracking. Features an emergency QR-based health access system for first responders.',
                decentraLanceTitle: 'DecentraLance',
                decentraLanceDesc: 'Developed a decentralized freelancing marketplace leveraging Web3 smart contracts for secure, direct client-to-freelancer collaboration with escrow protections.',
                azadYatriTitle: 'Azad Yatri',
                azadYatriDesc: 'Designed a travel booking and discovery web application focused on Indian destinations, with interactive trip planning and seamless itinerary management.',
                railwayTitle: 'Railway Management System',
                railwayDesc: 'Engineered a robust terminal/GUI-based railway database application with transactional ticket reservations, cancellations, and schedule management.',
                mentorshipTitle: 'Mentorship & NGO Platform',
                mentorshipDesc: 'Co-created a mentorship portal for students and NGOs, offering career guidance, session scheduling, progress tracking, and micro-donations.',
                viewCode: 'View Code 💻',
                dsaTitle: 'Live LeetCode DSA Stats',
                dsaDesc: 'Showcasing problem solving progress on LeetCode',
                usernamePlaceholder: 'LeetCode Username',
                fetchStats: 'Fetch Stats 📊',
                loading: 'Fetching live stats...',
                errorMessage: '⚠️ Failed to fetch live data. Showing cached progress. Click Fetch to retry.',
                solvedLabel: 'Solved',
                rankLoading: 'Rank: Loading...',
                easyProblems: 'Easy Problems',
                mediumProblems: 'Medium Problems',
                hardProblems: 'Hard Problems',
                acceptanceRate: 'Acceptance Rate',
                totalSubmissions: 'Total Submissions'
            },
            skills: {
                title: 'My Skills',
                subtitle: 'Technical languages, tools, and concepts I use to bring ideas to life',
                intro: 'Crafting elegant web experiences with responsive UI, polished performance, and clean code.'
            },
            category: {
                languages: 'Languages',
                libraries: 'Libraries & Frameworks',
                tools: 'Databases & Tools',
                concepts: 'Core Concepts',
                codeExamples: 'Code Examples',
                proficiency: 'Skill Proficiency'
            },
            leetcode: {
                title: 'Live LeetCode DSA Stats',
                description: 'Showcasing problem solving progress on LeetCode',
                usernamePlaceholder: 'LeetCode Username',
                solvedLabel: 'Solved',
                loading: 'Fetching live stats...',
                errorMessage: '⚠️ Failed to fetch live data. Showing cached progress. Click Fetch to retry.',
                rankLoading: 'Rank: Loading...',
                easyProblems: 'Easy Problems',
                mediumProblems: 'Medium Problems',
                hardProblems: 'Hard Problems',
                acceptanceRate: 'Acceptance Rate',
                totalSubmissions: 'Total Submissions'
            },
            button: {
                fetchStats: 'Fetch Stats 📊'
            },
            footer: {
                text: '© 2026 Sidh Kataria. All Rights Reserved.'
            }
            ,
            resume: {
                pageTitle: 'Resume | Sidh Kataria',
                heading: 'My Resume',
                subtitle: 'A summary of my education, experience, achievements, and leadership roles',
                objectiveTitle: 'Objective',
                objectiveText: 'Motivated B.Tech Information Technology student with strong foundations in Data Structures & Algorithms and Frontend Development.',
                educationHeading: 'Education & Experience',
                educationDegree: 'B.Tech in Information Technology',
                educationSubtitle: 'GGSIPU — 2nd Year Student',
                educationDesc: 'Focused on Data Structures, Object-Oriented Programming (Java), and Relational Database Systems. Maintaining strong academic standing while building hands-on development skills.',
                internshipTitle: 'Web3 Developer Intern',
                internshipSubtitle: 'Tezos India',
                internshipDesc: 'Gained hands-on experience in decentralized technologies. Collaborated on developing Web3 interfaces, writing smart contracts, and implementing frontend-blockchain integrations.',
                achievementHeading: 'Achievements & Leadership',
                hackathonTitle: 'Hackathon Runner-up',
                hackathonSubtitle: 'Delhi University Hackathon',
                hackathonDesc: 'Built an emergency response healthcare dashboard prototype in under 36 hours. Designed the patient access flow and emergency QR codes under intense deadlines, securing 2nd place.',
                marketingTitle: 'PR & Marketing Head',
                marketingSubtitle: 'Discussion Masters',
                marketingDesc: 'Managed outreach campaigns, public relations, and promotional strategies for debates and events. Directed visual branding and successfully increased event participation by 30%.',
                activeMemberTitle: 'Active Member',
                activeMemberSubtitle: 'E-Cell & AML Department',
                activeMemberDesc: 'Organized entrepreneurship workshops and machine learning seminars. Supported peer mentorship programs and helped coordinate inter-college tech fests.',
                coreStrengths: 'Core Strengths',
                strengthCommunication: '🗣️ Communication',
                strengthLeadership: '👥 Team Leadership',
                strengthLearner: '🚀 Quick Learner',
                strengthProblemSolving: '🧠 Problem Solving',
                strengthTimeManagement: '⏰ Time Management',
                download: 'Download Resume ⬇️',
                openPdf: 'Open PDF'
            }
        },
        hi: {
            pageTitle: 'कौशल | सिद्ध कटारिया',
            home: { pageTitle: 'सिद्ध कटारिया | पोर्टफोलियो' },
            about: { pageTitle: 'मेरे बारे में | सिद्ध कटारिया' },
            skills: { pageTitle: 'कौशल | सिद्ध कटारिया' },
            projects: { pageTitle: 'प्रोजेक्ट | सिद्ध कटारिया' },
            contact: { pageTitle: 'संपर्क | सिद्ध कटारिया' },
            nav: {
                home: 'होम',
                about: 'मेरे बारे में',
                resume: 'रेज़्यूमे',
                skills: 'कौशल',
                projects: 'प्रोजेक्ट',
                contact: 'संपर्क'
            },
            home: {
                heroGreeting: 'नमस्ते, मैं',
                heroSubtitle: 'फ्रंटएंड डेवलपर और DSA उत्साही',
                heroDescription: 'GGSIPU में B.Tech IT छात्र। आधुनिक वेब एप्लिकेशन बनाना और साफ़ कोड तथा कुशल एल्गोरिदम के साथ वास्तविक दुनिया की समस्याओं को हल करना।',
                viewProjects: 'प्रोजेक्ट देखें 🚀',
                myResume: 'मेरा रिज़्यूमे 📄'
            },
            github: {
                placeholder: 'GitHub उपयोगकर्ता नाम',
                openRepos: 'GitHub रिपोज़ खोलें',
                refresh: 'रिफ्रेश',
                close: 'बंद करें',
                yourRepos: 'आपके रिपोज़',
                contributed: 'योगदान किया',
                title: 'GitHub'
            },
            about: {
                heading: 'मेरे बारे में',
                subtitle: 'मेरी पृष्ठभूमि, आकांक्षाओं, और रुचियों को जानें',
                heroIntro: 'नमस्ते, मैं सिद्ध कटारिया 👋',
                heroIntro: 'नमस्ते, मैं सिद्ध कटारिया 👋',
                introLine1: 'मैं वर्तमान में GGSIPU में B.Tech सूचना प्रौद्योगिकी कर रहा हूं (2रे वर्ष)। मुझे वेब विकास और डेटा संरचनाओं एवं एल्गोरिदम में गहरी रुचि है। मैं अमूर्त विचारों को कार्यात्मक, साफ़ और इंटरैक्टिव डिजिटल उत्पादों में बदलने का आनंद लेता हूं।',
                introLine2: 'टेक में मेरी यात्रा जिज्ञासा और वास्तविक सामाजिक प्रभाव वाले समाधान बनाने की इच्छा से प्रेरित है, विशेष रूप से हेल्थकेयर और मेंटरशिप में। मैं हैकथॉन में भाग लेना, Web3 प्रोजेक्ट पर सहयोग करना, और नई तकनीकों को सीखते रहना पसंद करता हूं।',
                introLine3: 'जब मैं कोडिंग या DSA समस्याओं को हल नहीं कर रहा होता हूं, तो आप मुझे PR और मार्केटिंग गतिविधियों का नेतृत्व करते, डिज़ाइन विचार साझा करते या कॉलेज समूहों में साथियों को मार्गदर्शन करते हुए पाएंगे।',
                highlight1: 'B.Tech IT का वर्ष',
                highlight2: 'बनाए गए प्रोजेक्ट',
                highlight3: 'हैकथॉन रनर-अप',
                highlight4: 'PR और मार्केटिंग हेड',
                visualTitle: 'छात्र और डेव',
                visualSubtitle: 'GGSIPU'
            },
            contact: {
                heading: 'संपर्क करें',
                subtitle: 'कोई प्रोजेक्ट आईडिया, प्रश्न, या सिर्फ नमस्ते कहना है? मुझे एक संदेश भेजें!',
                emailLabel: 'मुझें ईमेल करें',
                linkedinLabel: 'LinkedIn',
                githubLabel: 'GitHub',
                nameLabel: 'आपका नाम',
                emailField: 'ईमेल पता',
                messageLabel: 'संदेश',
                namePlaceholder: 'John Doe',
                emailPlaceholder: 'john@example.com',
                messagePlaceholder: 'हाय सिद्ध, मुझे आपसे जुड़ना अच्छा लगेगा...',
                sendMessage: 'संदेश भेजें ✉️'
            },
            projects: {
                heading: 'मेरे प्रोजेक्ट',
                subtitle: 'मेरी विकसित वेब एप्लिकेशन, Web3 प्रोटोटाइप, और बैकएंड सिस्टम का संग्रह',
                healthxTitle: 'HealthX',
                healthxDesc: 'एक उत्तरदायी स्वास्थ्य देखभाल डैशबोर्ड बनाया जो सुरक्षित रोगी रिकॉर्ड प्रबंधन, डिजिटल डॉक्टर अपॉइंटमेंट और मेडिकल प्रोफाइल ट्रैकिंग की सुविधा देता है। इसमें आपातकालीन QR-आधारित एक्सेस सिस्टम भी है।',
                decentraLanceTitle: 'DecentraLance',
                decentraLanceDesc: 'Web3 स्मार्ट कॉन्ट्रैक्ट का उपयोग करते हुए एक विकेंद्रीकृत फ्रीलांसिंग मार्केटप्लेस विकसित किया जिससे सुरक्षित, सीधे क्लाइंट-टू-फ्रीलांसर सहयोग और एस्क्रो रक्षा मिलती है।',
                azadYatriTitle: 'आज़ाद यात्री',
                azadYatriDesc: 'भारतीय गंतव्यों पर केंद्रित एक यात्रा बुकिंग और डिस्कवरी वेब एप्लिकेशन बनाया, जिसमें इंटरैक्टिव ट्रिप प्लानिंग और सहज यात्रा कार्यक्रम प्रबंधन है।',
                railwayTitle: 'रेलवे मैनेजमेंट सिस्टम',
                railwayDesc: 'एक मजबूत टर्मिनल/GUI-आधारित रेलवे डेटाबेस ऐप्लिकेशन इंजीनियर किया जिसमें टिकट आरक्षण, रद्दीकरण और कार्यक्रम प्रबंधन शामिल हैं।',
                mentorshipTitle: 'मेंटरशिप और NGO प्लेटफ़ॉर्म',
                mentorshipDesc: 'अवशिष्ट छात्रों और NGOs के लिए एक मेंटरशिप पोर्टल सह-निर्मित किया, जिसमें करियर मार्गदर्शन, सेशन शेड्यूलिंग, प्रगति ट्रैकिंग और माइक्रो-डोनेशन शामिल हैं।',
                viewCode: 'कोड देखें 💻',
                dsaTitle: 'Live LeetCode DSA Stats',
                dsaDesc: 'LeetCode पर समस्या समाधान प्रगति दिखा रहा है',
                usernamePlaceholder: 'LeetCode उपयोगकर्ता नाम',
                fetchStats: 'आँकड़े प्राप्त करें 📊',
                loading: 'लाइव आँकड़े लाए जा रहे हैं...',
                errorMessage: '⚠️ लाइव डेटा प्राप्त करने में विफल। कैश्ड प्रगति दिखा रहे हैं। पुनः प्रयास करने के लिए Fetch पर क्लिक करें।',
                solvedLabel: 'समाधान किया',
                rankLoading: 'रैंक: लोड हो रहा है...',
                easyProblems: 'आसान समस्याएँ',
                mediumProblems: 'मध्यम समस्याएँ',
                hardProblems: 'कठिन समस्याएँ',
                acceptanceRate: 'स्वीकृति दर',
                totalSubmissions: 'कुल सबमिशन'
            },
            skills: {
                title: 'मेरे कौशल',
                subtitle: 'तकनीकी भाषाएँ, उपकरण और अवधारणाएँ जिनका उपयोग मैं विचारों को जीवन में लाने के लिए करता हूँ',
                intro: 'उत्तरदायी UI, साफ़ कोड और तेज़ प्रदर्शन के साथ आधुनिक वेब अनुभव तैयार करना।'
            },
            category: {
                languages: 'भाषाएँ',
                libraries: 'लाइब्रेरी और फ़्रेमवर्क',
                tools: 'डेटाबेस और उपकरण',
                concepts: 'मुख्य अवधारणाएँ',
                codeExamples: 'कोड उदाहरण',
                proficiency: 'कौशल प्रगति'
            },
            leetcode: {
                title: 'Live LeetCode DSA आँकड़े',
                description: 'LeetCode पर समस्या समाधान प्रगति दिखा रहा है',
                usernamePlaceholder: 'LeetCode उपयोगकर्ता नाम',
                solvedLabel: 'समाधान किया',
                loading: 'लाइव आँकड़े लाए जा रहे हैं...',
                errorMessage: '⚠️ लाइव डेटा प्राप्त करने में विफल। कैश्ड प्रगति दिखा रहे हैं। पुनः प्रयास करने के लिए Fetch पर क्लिक करें।',
                rankLoading: 'रैंक: लोड हो रहा है...',
                easyProblems: 'आसान समस्याएँ',
                mediumProblems: 'मध्यम समस्याएँ',
                hardProblems: 'कठिन समस्याएँ',
                acceptanceRate: 'स्वीकृति दर',
                totalSubmissions: 'कुल सबमिशन'
            },
            button: {
                fetchStats: 'आँकड़े प्राप्त करें 📊'
            },
            footer: {
                text: '© 2026 सिद्ध कटारिया। सर्वाधिकार सुरक्षित।'
            }
            ,
            resume: {
                pageTitle: 'रेज़्यूमे | सिद्ध कटारिया',
                heading: 'मेरा रिज़्यूमे',
                subtitle: 'मेरी शिक्षा, अनुभव, उपलब्धियाँ और नेतृत्व भूमिकाओं का सार',
                objectiveTitle: 'लक्ष्य',
                objectiveText: 'डेटा स्ट्रक्चर और एल्गोरिदम तथा फ्रंटेंड डेवलपमेंट में मजबूत नींव रखने वाला प्रेरित B.Tech सूचना प्रौद्योगिकी छात्र।',
                educationHeading: 'शिक्षा और अनुभव',
                educationDegree: 'B.Tech सूचना प्रौद्योगिकी',
                educationSubtitle: 'GGSIPU — 2रा वर्ष का छात्र',
                educationDesc: 'डेटा स्ट्रक्चर, ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (Java), और रिलेशनल डेटाबेस सिस्टम पर ध्यान केंद्रित। व्यावहारिक विकास कौशल बनाते हुए मजबूत अकादमिक प्रदर्शन बनाए रखा।',
                internshipTitle: 'Web3 डेवलपर इंटर्न',
                internshipSubtitle: 'Tezos India',
                internshipDesc: 'विकेंद्रीकृत तकनीकों में व्यावहारिक अनुभव प्राप्त किया। Web3 इंटरफेस विकसित करने, स्मार्ट कॉन्ट्रैक्ट लिखने, और फ्रंटएंड-ब्लॉकचेन एकीकरण लागू करने पर सहयोग किया।',
                achievementHeading: 'उपलब्धियाँ और नेतृत्व',
                hackathonTitle: 'हैकथॉन रनर-अप',
                hackathonSubtitle: 'दिल्ली यूनिवर्सिटी हैकथॉन',
                hackathonDesc: '36 घंटे के भीतर एक इमरजेंसी रिस्पांस हेल्थकेयर डैशबोर्ड प्रोटोटाइप बनाया। तीव्र समय सीमा के तहत मरीज एक्सेस फ्लो और QR कोड डिजाइन किए, और 2रा स्थान प्राप्त किया।',
                marketingTitle: 'PR और मार्केटिंग हेड',
                marketingSubtitle: 'Discussion Masters',
                marketingDesc: 'डिबेट और इवेंट्स के लिए आउटरीच कैंपेन, पब्लिक रिलेशन और प्रचार रणनीतियों का प्रबंधन किया। विज़ुअल ब्रांडिंग निर्देशित की और इवेंट भागीदारी में 30% वृद्धि की।',
                activeMemberTitle: 'सक्रिय सदस्य',
                activeMemberSubtitle: 'E-Cell और AML डिपार्टमेंट',
                activeMemberDesc: 'उद्यमिता वर्कशॉप और मशीन लर्निंग सेमिनार आयोजित किए। सहकर्मी मेंटरशिप कार्यक्रमों का समर्थन किया और इंटर-कॉलेज टेक फेस्ट का समन्वय किया।',
                coreStrengths: 'मुख्य ताकतें',
                strengthCommunication: '🗣️ संचार',
                strengthLeadership: '👥 टीम नेतृत्व',
                strengthLearner: '🚀 तेज सीखने वाला',
                strengthProblemSolving: '🧠 समस्या समाधान',
                strengthTimeManagement: '⏰ समय प्रबंधन',
                educationHeading: 'शिक्षा और अनुभव',
                educationDegree: 'B.Tech सूचना प्रौद्योगिकी',
                educationSubtitle: 'GGSIPU — 2रा वर्ष का छात्र',
                educationDesc: 'डेटा स्ट्रक्चर, ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (Java), और रिलेशनल डेटाबेस सिस्टम पर ध्यान केंद्रित। व्यावहारिक विकास कौशल बनाते हुए मजबूत अकादमिक प्रदर्शन बनाए रखा।',
                internshipTitle: 'Web3 डेवलपर इंटर्न',
                internshipSubtitle: 'Tezos India',
                internshipDesc: 'विकेंद्रीकृत तकनीकों में व्यावहारिक अनुभव प्राप्त किया। Web3 इंटरफेस विकसित करने, स्मार्ट कॉन्ट्रैक्ट लिखने, और फ्रंटएंड-ब्लॉकचेन एकीकरण लागू करने पर सहयोग किया।',
                achievementHeading: 'उपलब्धियाँ और नेतृत्व',
                hackathonTitle: 'हैकथॉन रनर-अप',
                hackathonSubtitle: 'दिल्ली यूनिवर्सिटी हैकथॉन',
                hackathonDesc: '36 घंटे के भीतर एक इमरजेंसी रिस्पांस हेल्थकेयर डैशबोर्ड प्रोटोटाइप बनाया। तीव्र समय सीमा के तहत मरीज एक्सेस फ्लो और QR कोड डिजाइन किए, और 2रा स्थान प्राप्त किया।',
                marketingTitle: 'PR और मार्केटिंग हेड',
                marketingSubtitle: 'Discussion Masters',
                marketingDesc: 'डिबेट और इवेंट्स के लिए आउटरीच कैंपेन, पब्लिक रिलेशन और प्रचार रणनीतियों का प्रबंधन किया। विज़ुअल ब्रांडिंग निर्देशित की और इवेंट भागीदारी में 30% वृद्धि की।',
                activeMemberTitle: 'सक्रिय सदस्य',
                activeMemberSubtitle: 'E-Cell और AML डिपार्टमेंट',
                activeMemberDesc: 'उद्यमिता वर्कशॉप और मशीन लर्निंग सेमिनार आयोजित किए। सहकर्मी मेंटरशिप कार्यक्रमों का समर्थन किया और इंटर-कॉलेज टेक फेस्ट का समन्वय किया।',
                coreStrengths: 'मुख्य ताकतें',
                strengthCommunication: '🗣️ संचार',
                strengthLeadership: '👥 टीम नेतृत्व',
                strengthLearner: '🚀 तेज सीखने वाला',
                strengthProblemSolving: '🧠 समस्या समाधान',
                strengthTimeManagement: '⏰ समय प्रबंधन',
                download: 'रेज़्यूमे डाउनलोड करें ⬇️',
                openPdf: 'PDF खोलें'
            }
        }
    };

    const getSavedLanguage = () => localStorage.getItem('language') || 'en';

    const translatePage = (lang) => {
        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach((node) => {
            const key = node.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            keys.forEach((part) => {
                if (value && value[part] !== undefined) {
                    value = value[part];
                }
            });
            if (typeof value === 'string') {
                node.textContent = value;
            }
        });

        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach((node) => {
            const key = node.getAttribute('data-i18n-placeholder');
            const keys = key.split('.');
            let value = translations[lang];
            keys.forEach((part) => {
                if (value && value[part] !== undefined) {
                    value = value[part];
                }
            });
            if (typeof value === 'string') {
                node.setAttribute('placeholder', value);
            }
        });

        document.documentElement.setAttribute('lang', lang);
        // Determine page-specific title if available via data-page on body
        const pageKey = document.body.getAttribute('data-page');
        if (pageKey && translations[lang][pageKey] && translations[lang][pageKey].pageTitle) {
            document.title = translations[lang][pageKey].pageTitle;
        } else if (translations[lang].pageTitle) {
            document.title = translations[lang].pageTitle;
        }
    };

    const languageSelect = document.getElementById('language-select');
    const currentLanguage = getSavedLanguage();

    const animateLanguageSwitch = (lang) => {
        const performTranslation = () => translatePage(lang);
        if (window.gsap && typeof window.gsap.timeline === 'function') {
            window.gsap.timeline()
                .to(document.documentElement, { duration: 0.18, autoAlpha: 0, y: 12, ease: 'power1.in' })
                .call(performTranslation)
                .to(document.documentElement, { duration: 0.35, autoAlpha: 1, y: 0, ease: 'power3.out' });
        } else {
            performTranslation();
        }
    };

    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            localStorage.setItem('language', selectedLang);
            if (window.gsap) {
                animateLanguageSwitch(selectedLang);
            } else {
                translatePage(selectedLang);
            }
        });
    }

    // Apply theme
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    };

    // Update toggle button icon
    const updateToggleIcon = (theme) => {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '☀️'; // Sun icon for switching to light mode
            themeToggleBtn.title = 'Switch to light mode';
        } else {
            themeToggleBtn.innerHTML = '🌙'; // Moon icon for switching to dark mode
            themeToggleBtn.title = 'Switch to dark mode';
        }
    };

    // Initialize Theme
    const currentTheme = getSavedTheme();
    applyTheme(currentTheme);
    translatePage(currentLanguage);

    // Toggle Theme Click Event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // Monitor system preference changes
    systemPrefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Mobile Navigation Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Animate hamburger menu lines
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Use GSAP for a smoother entrance when available
                    if (window.gsap && typeof window.gsap.fromTo === 'function') {
                        try {
                            window.gsap.fromTo(entry.target, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, ease: 'power3.out' });
                        } catch (e) {
                            entry.target.classList.add('active');
                        }
                    } else {
                        entry.target.classList.add('active');
                    }
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback if IntersectionObserver is not supported
        revealElements.forEach(el => el.classList.add('active'));
    }

    // Lazy-load GSAP for enhanced animations (CDN). Non-blocking.
    (function loadGSAP(){
        if (window.gsap) return Promise.resolve(window.gsap);
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
            s.async = true;
            s.onload = () => {
                // Optionally load ScrollTrigger or other plugins in future
                resolve(window.gsap);
            };
            s.onerror = () => reject(new Error('Failed to load GSAP'));
            document.head.appendChild(s);
        }).then(gsap => {
            // If some reveal elements were already active via CSS, animate them subtly
            try {
                const remaining = document.querySelectorAll('.reveal:not(.active)');
                if (remaining.length) {
                    gsap.fromTo(remaining, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', stagger: 0.06 });
                }
            } catch (e) {
                // ignore
            }
            return gsap;
        }).catch(() => {
            // silent fallback
        });
    })();

    // Active Link Highlighting based on current path
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navAnchors = document.querySelectorAll('nav ul li a');
    
    navAnchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === currentPath) {
            anchor.classList.add('active');
        } else {
            anchor.classList.remove('active');
        }
    });

    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Basic animation feedback
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending... ✉️';
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Message Sent! Thank you! 🎉';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // LeetCode Stats Integration
    const leetcodeBtn = document.getElementById('fetch-leetcode-btn');
    if (leetcodeBtn) {
        const usernameInput = document.getElementById('leetcode-username');
        const loadingEl = document.getElementById('leetcode-loading');
        const errorEl = document.getElementById('leetcode-error');
        const displayEl = document.getElementById('leetcode-stats-display');
        
        const solvedTotalEl = document.getElementById('leetcode-solved-total');
        const solvedEasyEl = document.getElementById('leetcode-solved-easy');
        const solvedMediumEl = document.getElementById('leetcode-solved-medium');
        const solvedHardEl = document.getElementById('leetcode-solved-hard');
        
        const barEasy = document.getElementById('leetcode-bar-easy');
        const barMedium = document.getElementById('leetcode-bar-medium');
        const barHard = document.getElementById('leetcode-bar-hard');
        const progressRing = document.getElementById('leetcode-progress-ring');
        
        const userDisplay = document.getElementById('leetcode-user-display');
        const userRank = document.getElementById('leetcode-user-rank');
        const leetcodeLink = document.getElementById('leetcode-profile-link');
        const acceptanceEl = document.getElementById('leetcode-acceptance');
        const submissionsEl = document.getElementById('leetcode-submissions');

        // Circular progress parameters (dasharray is 377: 2 * PI * r = 2 * 3.14159 * 60 = 377)
        const RING_CIRCUMFERENCE = 377;

        // Fallback Mock Data in case API fails
        const getFallbackData = (username) => {
            const fallback = {
                username: username,
                ranking: 245671,
                acceptanceRate: '58.4%',
                totalSolved: 218,
                easySolved: 94,
                mediumSolved: 112,
                hardSolved: 12,
                totalQuestions: 3200,
                totalEasy: 800,
                totalMedium: 1600,
                totalHard: 800,
                totalSubmissions: 456
            };
            return fallback;
        };

        const updateUI = (data) => {
            userDisplay.textContent = `@${data.username}`;
            if (leetcodeLink) {
                leetcodeLink.href = `https://leetcode.com/u/${data.username}/`;
            }
            userRank.textContent = `Rank: ${data.ranking.toLocaleString()}`;
            
            // solved counts
            solvedTotalEl.textContent = data.totalSolved;
            solvedEasyEl.textContent = `${data.easySolved} / ${data.totalEasy || 800}`;
            solvedMediumEl.textContent = `${data.mediumSolved} / ${data.totalMedium || 1600}`;
            solvedHardEl.textContent = `${data.hardSolved} / ${data.totalHard || 800}`;
            
            // Acceptance rate and submissions
            acceptanceEl.textContent = data.acceptanceRate.toString().endsWith('%') ? data.acceptanceRate : `${data.acceptanceRate}%`;
            submissionsEl.textContent = (data.totalSubmissions || (data.totalSolved * 2)).toLocaleString();

            // Calculate percentages for progress bars
            const easyPct = Math.min(100, ((data.easySolved / (data.totalEasy || 800)) * 100));
            const mediumPct = Math.min(100, ((data.mediumSolved / (data.totalMedium || 1600)) * 100));
            const hardPct = Math.min(100, ((data.hardSolved / (data.totalHard || 800)) * 100));

            // Animate progress bars
            setTimeout(() => {
                barEasy.style.width = `${easyPct}%`;
                barMedium.style.width = `${mediumPct}%`;
                barHard.style.width = `${hardPct}%`;

                // Animate circular ring (matched to total solved over total questions)
                const totalQuestions = data.totalQuestions || 3200;
                const overallPct = Math.min(100, (data.totalSolved / totalQuestions) * 100);
                const offset = RING_CIRCUMFERENCE - (overallPct / 100) * RING_CIRCUMFERENCE;
                progressRing.style.strokeDashoffset = offset;
            }, 100);
        };

        const fetchLeetCodeStats = async (username) => {
            loadingEl.style.display = 'block';
            errorEl.style.display = 'none';
            displayEl.style.display = 'none';

            try {
                // Try Endpoint 1: Vercel serverless function (faisalshohag)
                const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
                if (!response.ok) throw new Error('First API failed');
                
                const data = await response.json();
                
                // Format response to standard structure
                const formattedData = {
                    username: username,
                    ranking: data.ranking || 'N/A',
                    acceptanceRate: data.acceptanceRate || 'N/A',
                    totalSolved: data.totalSolved || 0,
                    easySolved: data.easySolved || 0,
                    mediumSolved: data.mediumSolved || 0,
                    hardSolved: data.hardSolved || 0,
                    totalQuestions: data.totalQuestions || 3200,
                    totalEasy: data.totalEasy || 800,
                    totalMedium: data.totalMedium || 1600,
                    totalHard: data.totalHard || 800,
                    totalSubmissions: data.totalSubmissions || 0
                };
                
                updateUI(formattedData);
                displayEl.style.display = 'block';
            } catch (err) {
                console.warn('First API failed or timed out, trying fallback Render API...', err);
                
                try {
                    // Try Endpoint 2: Render hosted alfa-leetcode-api
                    const solvedRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
                    const profileRes = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
                    
                    if (!solvedRes.ok) throw new Error('Second API failed');
                    
                    const solvedData = await solvedRes.json();
                    const profileData = profileRes.ok ? await profileRes.json() : {};
                    
                    const formattedData = {
                        username: username,
                        ranking: profileData.ranking || 'N/A',
                        acceptanceRate: profileData.acceptanceRate || 'N/A',
                        totalSolved: solvedData.solvedProblem || 0,
                        easySolved: solvedData.easySolved || 0,
                        mediumSolved: solvedData.mediumSolved || 0,
                        hardSolved: solvedData.hardSolved || 0,
                        totalQuestions: (solvedData.easySolved + solvedData.mediumSolved + solvedData.hardSolved) * 3 || 3200,
                        totalEasy: 800,
                        totalMedium: 1600,
                        totalHard: 800,
                        totalSubmissions: solvedData.totalSubmissionNum ? solvedData.totalSubmissionNum[0].submissions : 0
                    };
                    
                    updateUI(formattedData);
                    displayEl.style.display = 'block';
                } catch (err2) {
                    console.error('All APIs failed. Loading cached mock data for display.', err2);
                    errorEl.style.display = 'block';
                    
                    // Gracefully load mock fallback data so user has a perfect visual experience
                    const fallbackData = getFallbackData(username);
                    updateUI(fallbackData);
                    displayEl.style.display = 'block';
                }
            } finally {
                loadingEl.style.display = 'none';
            }
        };

        // Event listener for button click
        leetcodeBtn.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            if (username) {
                fetchLeetCodeStats(username);
            }
        });

        // Trigger fetch on load
        const defaultUser = usernameInput.value.trim() || 'sidhkataria222';
        fetchLeetCodeStats(defaultUser);
    }

    // GitHub Repos Panel
    const githubToggle = document.getElementById('github-toggle');
    const githubPanel = document.getElementById('github-panel');
    const githubInput = document.getElementById('github-username');
    const githubOwnList = document.getElementById('github-own-list');
    const githubContribList = document.getElementById('github-contrib-list');
    const githubUserDisplay = document.getElementById('github-user-display');
    const githubError = document.getElementById('github-error');
    const githubRefresh = document.getElementById('github-refresh');
    const githubClose = document.getElementById('github-close');

    const getSavedGithub = () => localStorage.getItem('github_user') || '';
    if (githubInput) githubInput.value = getSavedGithub();

    const openGithubPanel = () => {
        if (!githubPanel) return;
        githubPanel.style.display = 'block';
        githubPanel.setAttribute('aria-hidden', 'false');
        const user = (githubInput && githubInput.value.trim()) || getSavedGithub();
        if (user) loadGitHub(user);
    };

    const closeGithubPanel = () => {
        if (!githubPanel) return;
        githubPanel.style.display = 'none';
        githubPanel.setAttribute('aria-hidden', 'true');
    };

    if (githubToggle) githubToggle.addEventListener('click', () => {
        if (!githubPanel) return;
        if (githubPanel.style.display === 'block') closeGithubPanel(); else openGithubPanel();
    });

    if (githubClose) githubClose.addEventListener('click', closeGithubPanel);
    if (githubRefresh) githubRefresh.addEventListener('click', () => {
        const user = githubInput && githubInput.value.trim();
        if (user) loadGitHub(user);
    });

    if (githubInput) {
        githubInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const user = githubInput.value.trim();
                if (user) {
                    localStorage.setItem('github_user', user);
                    loadGitHub(user);
                    openGithubPanel();
                }
            }
        });
    }

    async function loadGitHub(username) {
        if (!username) {
            if (githubError) { githubError.textContent = 'Enter a GitHub username'; githubError.style.display = 'block'; }
            return;
        }
        if (githubError) githubError.style.display = 'none';
        if (githubUserDisplay) githubUserDisplay.textContent = username;
        if (githubOwnList) githubOwnList.innerHTML = '';
        if (githubContribList) githubContribList.innerHTML = '';

        let reposList = [];
        try {
            const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
            if (!res.ok) throw new Error('Failed to fetch repos');
            reposList = await res.json();
            if (Array.isArray(reposList) && githubOwnList) {
                // sort by stars then updated
                reposList.sort((a,b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)));
                reposList.forEach(r => {
                    const li = document.createElement('li');
                    li.className = 'repo-item';
                    li.innerHTML = `<a class="repo-link" href="${r.html_url}" target="_blank" rel="noopener noreferrer">${r.name}</a><span class="repo-meta">⭐ ${r.stargazers_count} · ${r.forks_count} ✦</span>`;
                    githubOwnList.appendChild(li);
                });
            }
        } catch (err) {
            if (githubError) { githubError.textContent = 'Failed to load user repositories.'; githubError.style.display = 'block'; }
        }

        // Fetch recent events to derive contributed repos
        try {
            const evRes = await fetch(`https://api.github.com/users/${username}/events/public`);
            if (!evRes.ok) throw new Error('Failed events');
            const events = await evRes.json();
            const contribMap = new Map();
            events.forEach(ev => {
                if (ev && ev.repo && ev.repo.name) {
                    const full = ev.repo.name; // owner/repo
                    if (!reposList.find(r => r.full_name === full)) {
                        contribMap.set(full, { name: full.split('/')[1], full, url: `https://github.com/${full}` });
                    }
                }
            });
            const contribs = Array.from(contribMap.values()).slice(0, 30);
            contribs.forEach(r => {
                const li = document.createElement('li');
                li.className = 'repo-item';
                li.innerHTML = `<a class="repo-link" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.full.replace('/', ' / ')}</a><span class="repo-meta">contributed</span>`;
                githubContribList.appendChild(li);
            });
        } catch (err) {
            // ignore silently
        }
    }

    // Resume download button: try to fetch `resume.pdf` then trigger download; fallback to print
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            const url = 'resume.pdf';
            const toast = (msg, type = 'success') => showToast(msg, type);
            try {
                const resp = await fetch(url, { cache: 'no-cache' });
                if (resp.ok) {
                    const blob = await resp.blob();
                    const blobUrl = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = blobUrl;
                    a.download = 'Sidh_Kataria_Resume.pdf';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    toast('Download started', 'success');
                    // Revoke after a short delay to ensure download starts
                    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
                } else {
                    toast('PDF not found — opening print dialog', 'warn');
                    window.print();
                }
            } catch (err) {
                toast('Network error — opening print dialog', 'warn');
                window.print();
            }
        });
    }

    // Toast helper (re-usable)
    function showToast(message, type = 'success', duration = 3500) {
        const container = document.getElementById('toast');
        if (!container) return;
        container.textContent = message;
        container.classList.remove('success', 'warn');
        container.classList.add('show');
        if (type === 'warn') container.classList.add('warn'); else container.classList.add('success');
        clearTimeout(container._toastTimer);
        container._toastTimer = setTimeout(() => {
            container.classList.remove('show', 'success', 'warn');
        }, duration);
    }
});