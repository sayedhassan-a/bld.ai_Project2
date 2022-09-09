import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Card from "./components/Card";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import CourseHeader from "./components/CourseHeader";
import CoursePreview from "./components/coursePreview/CoursePreview";
import Review from "./components/Review";
import Instructor from "./components/course/Instructor";
import CourseDetails from "./components/CourseDetails";
import Overview from "./components/course/Overview";
import Lecture from "./components/course/Lecture";
export const DataContext = React.createContext();
function App() {
  let obj = {
    title: "Top courses in Python",
    header: "Expand your career opportunities with Python",
    description:
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    courses: [
      {
        id: 394676,
        title: "Learn Python: The Complete Python Programming Course",
        headline:
          "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        rating: 4.372561,
        image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
        instructors: [
          {
            name: "Avinash Jain",
            jop: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
            image:
              "https://img-b.udemycdn.com/user/100x100/10260436_946b_6.jpg",
          },
          {
            name: "The Codex",
            jop: "Teaching Python through Projects",
            image: "https://img-b.udemycdn.com/user/100x100/52310762_220a.jpg",
          },
        ],
        price: 16.99,
      },
      {
        id: 396876,
        title: "Learning Python for Data Analysis and Visualization",
        headline:
          "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
        rating: 4.3899083,
        image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
        instructors: [
          {
            name: "Jose Portilla",
            jop: "Head of Data Science at Pierian Training",
            image: "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
          },
        ],
        price: 19.99,
      },
      {
        id: 405878,
        title: "Python for Beginners - Learn Programming from scratch",
        headline:
          "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
        rating: 4.40372,
        image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
        instructors: [
          {
            name: "Edwin Diaz",
            jop: "Web Developer & Premium Instructor - 800,000 students",
            image: "https://img-c.udemycdn.com/user/100x100/6772884_fcfc_2.jpg",
          },
          {
            name: "Coding Faculty Solutions",
            jop: "Coding Faculty",
            image: "https://img-c.udemycdn.com/user/100x100/34613172_6fb4.jpg",
          },
        ],
        price: 14.99,
      },
      {
        id: 426570,
        title: "Learn Python: Python for Beginners",
        headline:
          "Python introduction for beginners. Learn complete Python from scratch!",
        rating: 4.2765956,
        image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
        instructors: [
          {
            name: "Abrar Hussain",
            jop: "Programmer, Student",
            image:
              "https://img-c.udemycdn.com/user/100x100/10971708_a969_3.jpg",
          },
        ],
        price: 16.99,
      },
      {
        id: 449532,
        title: "Python Beyond the Basics - Object-Oriented Programming",
        headline:
          "From Classes To Inheritance - OOP In-Depth For Python Programmers",
        rating: 4.3240743,
        image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
        instructors: [
          {
            name: "Infinite Skills",
            jop: "High Quality Training",
            image: "https://img-c.udemycdn.com/user/100x100/39032_bdc3_5.jpg",
          },
        ],
        price: 17.99,
      },
    ],
  };
  const courseDetails = {
    courses: [
      {
        id: 1,
        topic: "Python",
        image: "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
        title: "Learn Python: The Complete Python Programming Course",
        language: "English",
        subs: "English",
        instructor: [
          {
            name: "Avinash Jain",
            intro:
              "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
            image: "https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg",
            rating: "4.4",
            reviewsNumber: "73,735",
            studentsNumber: "890,586",
            coursesNumber: "16",
            description: [
              "Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.",
              "His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.",
              "Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.",
              "Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help.",
            ],
          },
          {
            name: "The Codex",
            intro: "Teaching Python through Projects",
            image: "https://img-b.udemycdn.com/user/200_H/52310762_220a.jpg",
            rating: "4.4",
            reviewsNumber: "73,767",
            studentsNumber: "890,984",
            coursesNumber: "16",
            description: [
              "You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to build fun, practical projects. Now, you can stand out from the crowd and land your dream job.",
              "Join us on our platform today!",
            ],
          },
        ],
        rate: "4.4",
        ratingCount: "3,159",
        price: "199.99",
        originalPrice: "679.99",
        introduction:
          "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        enrollCount: "19,349",
        lastUpdate: "9/2015",
        globe: "English",
        Captioning: "English",
        overview: [
          "Create their own Python Programs",
          "Parse the Web and Create their own Games",
          "Parse the Web and Create their own Games",
        ],
        sectionsCount: "15",
        lecturesCount: "146",
        totalLength: "14h 42m",
        content: [
          [
            ["Up and Running With Python"],
            ["Installing Python", "Hello World"],
          ],
          [
            ["The Basics (Data Types)"],
            [
              "Variables",
              "Multiple Assignment",
              "Data Types and Ints",
              "Strings",
              "Placeholders",
              "Lists/Arrays",
              "List Functions",
              "Dictionaries",
              "Dictionary Functions",
              "Tuples",
              "Exercise Files",
            ],
          ],
          [
            ["Conditions and Loops"],
            [
              "If-Else Statements",
              "Relational Operators",
              "Nested If/Else",
              "Elif Statements",
              "Logical Operators",
              "For Loops",
              "While Loops",
              "Nested For Loops",
              "Pass, Break and Continue",
              "Try and Except",
              "Commenting",
              "Quick Tips",
              "Exercise Files",
            ],
          ],
          [
            ["Functions!"],
            [
              "Creating our own Functions",
              "Global and Local Vars",
              "Abs and Bool",
              "Help and Dir",
              "Eval and Exec",
              "Str, Int, Float",
              "Recap and Sum",
            ],
          ],
          [
            ["Classes! (Object Orientated Programming)"],
            [
              "Basics of Classes",
              "Functions in Classes",
              "Class Attributes",
              "Inheritance",
              "Overriding Methods",
            ],
          ],
          [
            ["File Input/Output"],
            [
              "Creating a File",
              "Creating a File (Windows)",
              "Reading a File",
              "Writing to a File",
              "Appending to Files",
              "Copying Files",
            ],
          ],
          [
            ["Using Python Modules"],
            [
              "Random Module - Randint",
              "Guessing Game",
              "Guessing Game Challenge",
              "Random Module - Shuffle and Choice",
              "Sys Module",
              "Time Module",
              "Turtle Module",
              "For Loops in Turtle",
              "Up and Down Functions",
              "Coloring in Turtle",
              "Functions in Turtle",
              "Exercise Files",
            ],
          ],
          [
            ["Crawling The Web"],
            [
              "Re Module",
              "Crawling The Web (Stocks)",
              "Stock Quotes (.py)",
              "Crawling The Web (Weather)",
              "Weather (.py)",
              "Crawling The Web (Definition)",
              "Definition (.py)",
            ],
          ],
          [
            ["Beautiful Soup HTML Parsing"],
            [
              "intro to Beautiful Soup",
              "Installing the Beautiful Soup Module",
              "Prettify with Soup",
              "Drilling Down",
              "Functions in Soup",
              ".String and .Parent",
              "Searching in Soup",
              "Weather Parsing",
              "Antonym Parsing",
            ],
          ],
          [
            ["MatPlotLib - Charts, Plots and 3D Figures!"],
            [
              "intro to MatPlotLib",
              "First Graph!",
              "Understanding the MatPlotLib Interface",
              "Graph Labels",
              "Creating a Graph from a File",
              "Understanding SubPlots and Figures",
              "Coloring of Graph",
              "Multiple Plots in a Graph",
              "Multiple Graphs in a Figure",
              "What about 3 graphs?",
              "Bar Graphs intro",
              "Modifying our Bar Graph",
              "Pie Chart intro",
              "Modifying our Pie Chart",
              "Adding a Legend",
              "3D Graphics intro",
              "3D Scatter Plots",
              "Multiple 3D Scatter Plots",
              "3D Bar Graphs",
              "3D Wireframes",
            ],
          ],
          [
            ["Data Analysis with Pandas!"],
            [
              "intro to Pandas",
              "Series Data Structure",
              "Series Continuation",
              "Data Frames intro",
              "Creating a CSV",
              "Reading a CSV",
              "Writing to a CSV",
              "Getting our Data",
              "Slicing Data Frames",
              "Data Manipulation",
              "Indexing and More",
              "Merging Data Frames",
              "GroupBy Function",
              "MovieLens Data",
              "Heavy Data Analysis",
              "MatPlotLib with Pandas",
              "Let's Finish This",
            ],
          ],
          [
            ["Python GUI with Tkinter"],
            [
              "Tkinter introduction",
              "Labels",
              "Buttons",
              "Layouts",
              "Fill",
              "Grid Layout",
              "Entries",
              "Check Buttons",
              "GUI Login",
              "Actions on Button Click",
              "Binding Functions",
              "More Binding!",
              "Getting Entry Data",
              "Message Box",
              "Drop Down Menus",
              "Calculator Part 1",
              "Calculator Part 2",
              "Calculator Part 3",
              "Calculator Part 4",
              "Canvas intro",
              "Canvas Objects",
              "Canvas Fill",
              "Random Rectangle Generator",
              "Text and Arcs",
              "Animations",
            ],
          ],
          [
            ["Our First Game (Bounce!)"],
            [
              "Creating our Ball",
              "Adding the Game Interface",
              "Adding the Paddle",
              "Final Touches",
              "Recap",
              "Bounce! (.py) (v1/v2/v3)",
            ],
          ],
          [
            ["Our Second Game (Pong!)"],
            [
              "Creating our Ball",
              "Adding Paddle1",
              "Adding Paddle2",
              "Final Touches",
              "Pong! (.py)",
            ],
          ],
          [["What's Next?"], ["Up and Beyond!"]],
        ],
        requirements: [
          "Macintosh (OSX)/ Windows(Vista and higher) Machine",
          "Internet Connection",
        ],
        description: [
          "Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?",
          "If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!",
          "Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.",
          "The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!",
          "As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses.",
          "So what are you waiting for? Jumpstart your programming journey and dive into the world of Python by enrolling in this course today!",
        ],
        whoFor: [
          "Even if you haven't touched coding before, it won't matter. The easy step-to-step lectures will quickly guide you through everything you'll need to know about coding, mainly Python. This course is here for you to get accustomed and familiar with Python and its syntax. And above all, Python is one of the easiest coding languages to learn, and there's a lot you can do with it.",
        ],
        studentFeedback: ["43", "37", "15", "3", "2"],
        reviews: [
          {
            id: 1,
            name: "Asif H.",
            rate: "3",
            content:
              "Sometimes confusing but was able to clarify. Good job nonetheless.",
          },
          {
            id: 2,
            name: "M.S.Swaroop",
            rate: "4",
            content:
              "the course is specialized so that we learn ourselves deeply,simple and easy.",
          },
          {
            id: 3,
            name: "Saurish R.",
            rate: "5",
            content:
              "In depth concepts of python have been clearly explained. Good chemistry between student and instructor. Fantastic course. Completed every vid and had lot of fun.",
          },
          {
            id: 4,
            name: "Shiristi",
            rate: "5",
            content:
              "I can't say as i have not taken that many classes yet but so far it is good. edited( so yeah it was a journey for me many things happen but i am glad they did and also grateful to the person who is guiding me and thanks udemy for these courses really appreciate it !!!)",
          },
          {
            id: 5,
            name: "Ejeshi G.",
            rate: "4",
            content:
              "teacher is good and direct, though not prompt at responding to questions and enquiries.",
          },
          {
            id: 6,
            name: "Ejeshi G.",
            rate: "4",
            content:
              " Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?,  f you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!,  Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.,  The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!,As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses. So what are you waiting for? Jumpstart your programming journey and dive into the world of Python by enrolling in this course today!",
          },
        ],
        hoursCount: "14",
        articlesCount: "1",
        downloadableResource: "3",
      },
      {
        id: 2,
        topic: "Python",
        image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
        title: "Learning Python for Data Analysis and Visualization",
        language: "English",
        subs: "English",
        instructor: [
          {
            name: "Jose Portilla",
            intro: "Head of Data Science at Pierian Training",
            image: "https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
            rating: "4.6 ",
            reviewsNumber: "940,127",
            studentsNumber: "3,012,421",
            coursesNumber: "54",
            description: [
              "Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming.",
              "He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations.",
              "Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.",
            ],
          },
        ],
        rate: "4.4",
        ratingCount: "18,118",
        price: "319.99",
        originalPrice: "1599.99",
        introduction:
          "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
        enrollCount: "191,520",
        lastUpdate: "9/2019",

        globe: "English",
        Captioning: "English [Auto], Indonesian [Auto]",
        overview: [
          "Have an intermediate skill level of Python programming.",
          "Use the Jupyter Notebook Environment.",
          "Use the numpy library to create and manipulate arrays.",
          "Use the pandas module with Python to create and structure data.",
          "Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.",
          "Create data visualizations using matplotlib and the seaborn modules with python.",
          "Have a portfolio of various data analysis projects.",
        ],
        sectionsCount: "15",
        lecturesCount: "110",
        totalLength: "21h 5m",
        requirements: [
          "Basic math skills.",
          "Basic to Intermediate Python Skills",
          "Have a computer (either Mac, Windows, or Linux)",
          "Desire to learn!",
        ],
        description: [
          "This course will give you the resources to learn python and effectively use it analyze and visualize data! Start your career in Data Science!",
          "You'll get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data.",
          "You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers!",
          "With 100+ lectures and over 20 hours of information and more than 100 example python code notebooks, you will be excellently prepared for a future in data science!",
          "Have an understanding of Machine Learning and SciKit Learn!.",
          "Know how to create and manipulate arrays using numpy and Python.",
        ],
        whoFor: [
          "Anyone interested in learning more about python, data science, or data visualizations.",
          "Anyone interested about the rapidly expanding world of data science!",
        ],
        studentFeedback: ["46", "36", "13", "3", "2"],
        reviews: [
          {
            id: 1,
            name: "Bryan P.",
            rate: "3.5",
            content:
              "His voice in each video can either be audible or barely audible. If it was consistent then it would be fine, but I have to keep adjusting the volume.",
          },
          {
            id: 2,
            name: "Redon D.",
            rate: "4",
            content:
              "I found the course to be amazing, the instructor was clear and easy to follow. The instructions were easily available and covered almost every thing I could have asked for. The Q&A section was helpful as well. One negative aspect was that it did not exhaust all the topic especially from the data visualization were matplotlib did not even have a section.",
          },
          {
            id: 3,
            name: "Tanishq",
            rate: "5",
            content:
              "course is good but please update these course because many of the code which is being used has been updated and some of the code doesn't work because of updating please mention these kind of thing while purchase because if you provide a updated course with 500 i thing you sale will boost up may be you ca raise price around 1500 rs we can spend that much of money for knowledge.",
          },
          {
            id: 4,
            name: "Jerell S.",
            rate: "5",
            content:
              "Instructor was very clear and knowledgeable. I was able to understand all the concepts and apply them. The course was a little outdated but I was still able to get almost everything to work.",
          },
          {
            id: 5,
            name: "Sechaba M.",
            rate: "4",
            content:
              "Really enjoyed the course, being a total beginner it really set a good foundation.Was this review helpful?",
          },
        ],
        hoursCount: "21",
        articlesCount: "3",
        downloadableResource: "4",
        content: [
          [["intro to Course and Python"], ["Course intro", "Course FAQs"]],
          [
            ["Setup"],
            [
              "Installation Setup and Overview",
              "IDEs and Course Resources",
              "iPython/Jupyter Notebook Overview",
            ],
          ],
          [
            ["Learning Numpy"],
            [
              "intro to numpy",
              "Creating arrays",
              "Using arrays and scalars",
              "Indexing Arrays",
              "Array Transposition",
              "Universal Array Function",
              "Array Processing",
              "Array Input and Output",
            ],
          ],
          [
            ["intro to Pandas"],
            [
              "Series",
              "DataFrames",
              "Index objects",
              "Reindex",
              "Drop Entry",
              "Selecting Entries",
              "Data Alignment",
              "Rank and Sort",
              "Summary Statistics",
              "Missing Data",
              "Index Hierarchy",
            ],
          ],
          [
            ["Working with Data: Part 1"],
            [
              "Reading and Writing Text Files",
              "JSON with Python",
              "HTML with Python",
              "Microsoft Excel files with Python",
            ],
          ],
          [
            ["Working with Data: Part 2"],
            [
              "Merge",
              "Merge on Index",
              "Concatenate",
              "Combining DataFrames",
              "Reshaping",
              "Pivoting",
              "Duplicates in DataFrames",
              "Mapping",
              "Replace",
              "Rename Index",
              "Binning",
              "Outliers",
              "Permutation",
            ],
          ],
          [
            ["Working with Data: Part 3"],
            [
              "GroupBy on DataFrames",
              "GroupBy on Dict and Series",
              "Aggregation",
              "Splitting Applying and Combining",
              "Cross Tabulation",
            ],
          ],
          [
            ["Data Visualization"],
            [
              "Installing Seaborn",
              "Histograms",
              "Kernel Density Estimate Plots",
              "Combining Plot Styles",
              "Box and Violin Plots",
              "Regression Plots",
              "Heatmaps and Clustered Matrices",
            ],
          ],
          [
            ["Example Projects."],
            [
              "Data Projects Preview",
              "intro to Data Projects",
              "Titanic Project - Part 1",
              "Titanic Project - Part 2",
              "Titanic Project - Part 3",
              "Titanic Project - Part 4",
              "intro to Data Project - Stock Market Analysis",
              "Data Project - Stock Market Analysis Part 1",
              "Data Project - Stock Market Analysis Part 2",
              "Data Project - Stock Market Analysis Part 3",
              "Data Project - Stock Market Analysis Part 4",
              "Data Project - Stock Market Analysis Part 5",
              "Data Project - intro to Election Analysis",
              "Data Project - Election Analysis Part 1",
              "Data Project - Election Analysis Part 2",
              "Data Project - Election Analysis Part 3",
              "Data Project - Election Analysis Part 4",
            ],
          ],
          [
            ["Machine Learning"],
            [
              "introduction to Machine Learning with SciKit Learn",
              "Linear Regression Part 1",
              "Linear Regression Part 2",
              "Linear Regression Part 3",
              "Linear Regression Part 4",
              "Logistic Regression Part 1",
              "Logistic Regression Part 2",
              "Logistic Regression Part 3",
              "Logistic Regression Part 4",
              "Multi Class Classification  Part 1 - Logistic Regression",
              "Multi Class Classification Part 2 - k Nearest Neighbor",
              "Support Vector Machines Part 1",
              "Support Vector Machines - Part 2",
              "Naive Bayes Part 1",
              "Naive Bayes Part 2",
              "Decision Trees and Random Forests",
              "Natural Language Processing Part 1",
              "Natural Language Processing Part 2",
              "Natural Language Processing Part 3",
              "Natural Language Processing Part 4",
            ],
          ],
          [
            ["Appendix: Statistics Overview"],
            [
              "intro to Appendix B",
              "Discrete Uniform Distribution",
              "Continuous Uniform Distribution",
              "Binomial Distribution",
              "Poisson Distribution",
              "Normal Distribution",
              "Sampling Techniques",
              "T-Distribution",
              "Hypothesis Testing and Confidence Intervals",
              "Chi Square Test and Distribution",
              "Bayes Theorem",
            ],
          ],
          [
            ["Appendix: SQL and Python"],
            [
              "introduction to SQL with Python",
              "SQL - SELECT,DISTINCT,WHERE,AND &amp; OR",
              "SQL WILDCARDS, ORDER BY, GROUP BY and Aggregate Functions",
            ],
          ],
          [
            ["Appendix: Web Scraping with Python"],
            ["Web Scraping Part 1", "Web Scraping Part 2"],
          ],
          [
            ["Appendix: Python Special Offers"],
            [
              "Python Overview Part 1",
              "Python Overview Part 2",
              "Python Overview Part 3",
            ],
          ],
          [["BONUS SECTION: THANK YOU!"], ["Bonus Lecture"]],
        ],
      },
      {
        id: 3,
        topic: "Python",
        image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
        title: "Python for Beginners - Learn Programming from scratch",
        language: "English",
        subs: "English",
        instructor: [
          {
            name: "Edwin Diaz",
            intro: "Web Developer & Premium Instructor - 800,000 students",
            image: "https://img-b.udemycdn.com/user/200_H/6772884_fcfc_2.jpg",
            rating: "4.4",
            reviewsNumber: "123,378",
            studentsNumber: "829,107",
            coursesNumber: "47",
            description: [
              "Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur with multiple online businesses, ranging from online jewelry shops, affiliate websites, application development and consultations services, personal online schools, etc.",
              "With over one million students, and clients growing by the thousands a day, Mr. Diaz lets the numbers speak for themselves.",
              "Founding multiple online companies have allowed Mr. Diaz to have the time to teach others. He currently teaches web technologies on different online platforms. He also teaches life coaching sessions to help others achieve a high level of success in many areas of life.",
              "For Mr. Diaz, there is nothing more rewarding than helping others become successful.",
              "His ability to transmit energy, enthusiasm, and complex knowledge allows him to do what he does best 'Teach'.",
              "Teaching is not just a job for Mr. Diaz but a way of life that continues to flourish every single day.",
              "Apart from teaching he enjoys spending part of his time with his family.",
            ],
          },
          {
            name: "Coding Faculty Solutions",
            intro: "Coding Faculty",
            image: "https://img-b.udemycdn.com/user/200_H/34613172_6fb4.jpg",
            rating: "4.4",
            reviewsNumber: "115,080",
            studentsNumber: "737,714",
            coursesNumber: "38",
            description: [
              "Coding Faculty creates high quality technology training content. We aim to teach technology the right way but at the same time putting emphasis on each of our students",
              "We are a growing team of professional trainers who love our work but overall helping our students reach their maximum potential in their career.",
            ],
          },
        ],
        rate: "4.4",
        ratingCount: "1,901",
        price: "269.99",
        originalPrice: "679.99",
        introduction:
          "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
        enrollCount: "7,663",
        lastUpdate: "5/2022",

        globe: "English",
        Captioning: "English [Auto]",
        overview: [
          "To learn the python language.",
          "To learn the CORE skills to understand any programming language.",
        ],
        sectionsCount: "6",
        lecturesCount: "42",
        totalLength: "2h 36m",
        requirements: ["NO programming knowledge required."],
        description: [
          "NEW PYTHON CODE",
          "This python for beginners course is geared to students who want to know how python works and also to those totally new to programming.",
          "The python language has very simple syntax(way to write it) to learn and it is one of the most powerful languages to learn since it can used for a variety of things.",
          "obs in this field are really lucrative and knowing this language will give you an edge when finding a job and making a lot more money than other developers; python developers are not as many as in other languages since people think is hard. Python is super easy to learn but very powerful since it contains many possibilities.",
          "Python is growing faster and faster everyday and it has surpassed many other languages over the years for a lot of reasons, which you will find out soon enough.",
        ],
        whoFor: [
          "Student totally new to programming.",
          "Student totally new to python.",
        ],
        studentFeedback: ["45", "39", "13", "2", "1"],
        reviews: [
          {
            id: 1,
            name: "Ashu C.",
            rate: "3",
            content:
              "i am a homemaker learning languages on udemy hoping for a better future , i hope this will help me in achieving what i want . I am so far able to understand lecture let 's see what comes ahead .",
          },
          {
            id: 2,
            name: "Senduran B.",
            rate: "5",
            content:
              "Edwin is a wonderful teacher! His lectures are very short but also informative and really encourages you to code along with him. The lectures were not only easy to follow but Edwin himself was an engaging lecturer that made it really easy to pay attention. His words of encouragement were a nice bonus. I super recommend this course to anyone who wants to get started in Python.",
          },
          {
            id: 3,
            name: "Tanishq",
            rate: "5",
            content:
              "This was a great learning experience. It was fun and I learned a lot.",
          },
          {
            id: 4,
            name: "Mike M.",
            rate: "5",
            content:
              "Instructor was very clear and knowledgeable. I was able to understand all the concepts and apply them. The course was a little outdated but I was still able to get almost everything to work.",
          },
          {
            id: 5,
            name: "Chad F.",
            rate: "4.5",
            content:
              "Edwin is good instructor. I'll be referring back to his lessons and my notes as I really learn to code Python by practicing it over and over -- Edwin is right that is the only way! I really enjoyed this course and it will be useful to me.",
          },
        ],
        hoursCount: "2.5",
        articlesCount: "1",
        downloadableResource: "1",
        content: [
          [
            ["Programming fundamentals"],
            [
              "introduction",
              "What is programming?",
              "What is source code?",
              "Compile VS Interpreted Languages",
              "Strings and numbers",
              "Variables",
              "Lists, Arrays or Collections",
              "Conditional Code - If statements",
              "Loops",
              "Functions",
            ],
          ],
          [
            ["Getting Started with Python"],
            [
              "intro to getting started",
              "What is Python?",
              "Installing Python",
              "Running Python IDLE and online",
              "Installing IDE",
            ],
          ],
          [
            ["Python Basics"],
            [
              "intro to python basics",
              "Exercise files",
              "Strings  &amp; print function",
              "Numbers / Math",
              "Variables",
              "Lists",
              "Tuples",
              "Dictionaries",
            ],
          ],
          [
            ["Conditional structures"],
            [
              "intro to conditional code",
              "If Statements",
              "While Loop",
              "For loop",
              "Break and Continue",
            ],
          ],
          [
            ["Functions"],
            [
              "intro to functions",
              "Custom Functions &amp; arguments",
              "Functions with arguments",
              "Function variable scopes",
              "Function return",
              "Functions with flexible arguments",
              "Unpacking",
              "Modules",
              "Built in functions",
            ],
          ],
          [
            ["Working with files"],
            [
              "intro to working files",
              "Opening / Creating files / Writing files",
              "File reading",
              "Renaming files",
              "Deleting files",
            ],
          ],
        ],
      },
      {
        id: 4,
        topic: "Python",
        image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
        title: "Learn Python: Python for Beginners",
        language: "English",
        subs: "English",
        instructor: [
          {
            name: "Abrar Hussain",
            intro: "Programmer, Student",
            image: "https://img-b.udemycdn.com/user/200_H/10971708_a969_3.jpg",
            rating: "4.2",
            reviewsNumber: "2,790",
            studentsNumber: "29,133",
            coursesNumber: "1",
            description: [
              "Hi, I'm Abrar! I'm a student at the University of Toronto with a passion for programming.",
              "I started learning about programming through the Stanford Engineering Everywhere program years ago, where I worked through the multiple available courses. After that, I dedicated myself towards learning Python and other programming languages so that I could build applications that are useful to people.",
              "I'm spending most of my time off of this platform, so if you have a question that I haven't responded to on the board, feel free to message me through the other channels.",
            ],
          },
        ],
        rate: "4.2",
        ratingCount: "2,790",
        price: "269.99",
        originalPrice: "319.99",
        introduction:
          "Python introduction for beginners. Learn complete Python from scratch!",
        enrollCount: "29,133",
        lastUpdate: "11/2018",
        globe: "English",
        Captioning: "English [Auto]",
        overview: [
          "Create fully functional Python programs.",
          "Understand user input.",
          "Learn about loop structures and conditionals.",
          "Correctly execute operations in Python.",
          "Work with Python file handling.",
          "Create and modify data structures in Python.",
          "Manipulate strings and data.",
        ],
        sectionsCount: "7",
        lecturesCount: "27",
        totalLength: "1h 15m",
        requirements: [
          "Internet Connection.",
          "Mac OSX or PC with Windows Vista or Newer or Linux",
        ],
        description: [
          "Do you want to become a programmer?",
          "ou want to be able to create games, work with files, manipulate data, and much more?",
          "If you want to learn programming or are learning Python for the first time, then you've come to the right place!",
          "This course has everything you need to get started with Python. We'll first start with the basics of Python - learning about strings, variables, and data types. Then, we'll move on to loops and conditionals. Once we're done with that, we'll learn about functions and files in Python. All of this will culminate towards building a fun game using the concepts we've learned in Python. The entire course is filled with exercises that challenge you so that you get the best experience possible.",
          "I hope you're excited to dive into Python with this course. So what are you waiting for? Let's get started!",
        ],
        whoFor: [
          "Programmers",
          "Students and Teachers",
          "Beginners",
          "Anyone who wants to learn to program with Python!",
        ],
        studentFeedback: ["39", "37", "18", "4", "2"],
        reviews: [
          {
            id: 1,
            name: "Apatrickallen14@Aol.Com",
            rate: "5",
            content:
              "I have never thought I would even attempt to get into coding but times have called for it and this course has been very helpful the pace is a little fast but the coaching and examples are easy to understand and each aspect of the lectures are making it easier for me to understand!",
          },
          {
            id: 2,
            name: "Mveli H.",
            rate: "2",
            content:
              "first of all the lecturer was not explaining for beginners and I still don't know how access the extra resources. I couldn't view the notes on the videos(it didn't allow me to). From section I had to look at other videos from Youtube because I really could not understand the lecturer.",
          },
          {
            id: 3,
            name: "Vedant R.",
            rate: "5",
            content:
              "It is a basic introduction to python. However it doesn't have plenty of exercises with ans. Only one- two questions are discussed as questions. It is a great course to start for beginners however they should look for some terms used in python from net or youtube in order to avoid getting confused at their first introduction in the lecture.",
          },
          {
            id: 4,
            name: "Eslam Ashraf",
            rate: "4",
            content:
              "Indeed it was a good match. To the last courses my personal opinion is that the tutors where really fast making the task of understanding, i would say challenging..",
          },
          {
            id: 5,
            name: "MD. Shamsul A.",
            rate: "4.5",
            content:
              "Course is good for those people's who's very new in python. But quite hard to understand for locals. Good to see that some new contents were added in this course that could help to gain knowledge for the beginners.Though all the codes were used in a python shell; it would be better if the teacher uses a IDE like Pycharm/VScode etc to describe that would be better for new pep's to get it faster.",
          },
        ],
        hoursCount: "1.5",
        articlesCount: "6",
        downloadableResource: "1",
        content: [
          [
            ["Getting Started"],
            ["Welcome!", "Install Python", "About Python", "Hello World"],
          ],
          [
            ["The Basics"],
            [
              "Basic Syntax",
              "Variables",
              "Strings",
              "Lists",
              "Dictionaries",
              "Tuples",
              "Extra: Tuple Unpacking",
              "Exercise",
              "Exercise Solution",
            ],
          ],
          [
            ["Conditionals and Loops"],
            [
              "If-Else Statements",
              "For Loops",
              "While Loops",
              "Pass, Break, and  Continue",
              "Extra: Exercise Loop",
            ],
          ],
          [["User Input"], ["User Input and Casting", "Exceptions"]],
          [
            ["Functions and Files"],
            [
              "Understanding Functions",
              "Opening and Reading Files",
              "Writing to Files",
              "Copying a File",
            ],
          ],
          [["Classes and Objects"], ["Creating Classes", "Objects"]],
          [["Graphics and Animatons"], ["Tkinter intro"]],
        ],
      },
    ],
  };

  console.log(courseDetails.courses[0].reviews);
  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      {/*<DataContext.Provider value={[obj, courseDetails]}>
        <Home />
        
      </DataContext.Provider>*/}
      <Nav></Nav>
      <DataContext.Provider value={[obj, courseDetails]}>
        <CourseDetails index={0} />
      </DataContext.Provider>
      {/*

<Lecture lecture={courseDetails.courses[0].content[0]}></Lecture>
      <Overview GoalsList={courseDetails.courses[0].overview}></Overview>

<Review review={courseDetails.courses[0].reviews[0]}></Review>
*/}
    </div>
  );
}

export default App;
