/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ruve K. Mopon",
  title: "Hi all, I'm Ruve",
  subTitle: emoji(
    "A WordPress Developer and Virtual Assistant 🚀 with hands-on experience designing, building, and customizing WordPress websites for clients across a range of industries using PHP, ACF Pro, custom themes, and custom post types."
  ),
  resumeLink: "./resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ruvemopon123",
  gmail: "mopon.ruve01@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WORDPRESS DEVELOPER BUILDING RESPONSIVE, CLIENT-FRIENDLY WEBSITES",
  skills: [
    emoji(
      "⚡ Build and customize WordPress sites from Figma designs using custom themes, ACF Pro, and Gravity Forms"
    ),
    emoji(
      "⚡ Improve site speed, SEO, and mobile responsiveness across client websites"
    ),
    emoji(
      "⚡ Explore Webflow and n8n workflow automation, supported by AI-assisted development tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "acf-pro",
      fontAwesomeClassname: "fas fa-puzzle-piece"
    },
    {
      skillName: "gravity-forms",
      fontAwesomeClassname: "fas fa-wpforms"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "webflow",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "n8n",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "seo",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AMA Computer Colleges",
      subHeader: "BS in Information Technology",
      duration: "2022 – 2023",
      desc: "Studied information technology with a focus on web development."
    },
    {
      schoolName: "Cordillera Regional Science High School",
      subHeader: "STEM Graduate, with Honors",
      duration: "2016 – 2022",
      desc: "Graduated from the Science, Technology, Engineering, and Mathematics (STEM) strand with honors."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "WordPress Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend (HTML / CSS / JS)",
      progressPercentage: "80%"
    },
    {
      Stack: "PHP",
      progressPercentage: "70%"
    },
    {
      Stack: "Webflow",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "WordPress Developer",
      company: "Thomas Digital Web Design",
      companylogo: require("./assets/images/wordpressLogo.svg"),
      date: "2024",
      desc: "Converted Figma designs into fully functional WordPress websites using a custom company theme, ACF Pro, and Gravity Forms.",
      descBullets: [
        "Performed quality assurance edits to align completed sites with client design specifications and requests",
        "Improved SEO performance and page load speed across client sites",
        "Optimized websites for full mobile responsiveness",
        "Diagnosed and resolved development issues, bugs, and broken pages",
        "Consistently achieved PageSpeed scores of at least 60 (mobile) and 80 (desktop) across delivered sites"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Profile Section
const profile = {
  display: true, // Set false to fall back to the plain Contact section
  name: "Ruve K. Mopon",
  bio: "WordPress Developer and Virtual Assistant building responsive, client-friendly websites with PHP, ACF Pro, and custom themes.",
  location: "La Trinidad, Philippines",
  avatarUrl: require("./assets/images/profile.png")
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE CLIENT WEBSITES I HELPED BUILD",
  projects: [
    {
      projectName: "Clearwater Capital Partners",
      projectDesc:
        "Mobile-responsive site built from Figma designs with ACF Pro flexible layouts, Gravity Forms, and Search & Filter Pro for filtering custom post types.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ccpwealth.com"
        }
      ]
    },
    {
      projectName: "Wiskerchen Trucks & Equipment",
      projectDesc:
        "Mobile-responsive WordPress site with ACF Pro flexible layouts, Gravity Forms, and an interactive Swiper JS slider.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wisktrucks.com"
        }
      ]
    },
    {
      projectName: "Artisan Investment Banking",
      projectDesc:
        "Mobile-responsive site with ACF Pro flexible layouts, Gravity Forms, and a custom interactive home landing page.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://artisanib.com"
        }
      ]
    },
    {
      projectName: "Highland Enterprises",
      projectDesc:
        "Mobile-responsive WordPress site with ACF Pro flexible layouts and Gravity Forms for form management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://highlandnm.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 991 9456 396",
  email_address: "mopon.ruve01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  profile,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
