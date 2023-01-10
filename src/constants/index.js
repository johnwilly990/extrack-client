// Review imports
import alisha from "../assets/images/alisha-li.jpg";
import robert from "../assets/images/robert-burke.jpg";
import john from "../assets/images/john-peng.jpg";

// Hero imports
import landingHeroImg from "../assets/images/hero.jpg";
import aboutHeroImg from "../assets/images/about-hero.jpg";
import monthToMonth from "../assets/images/month-to-month.png";
import kpi from "../assets/images/kpi.png";

// Side NavBar imports
import dollar from "../assets/icons/dollar.svg";
import overview from "../assets/icons/overview.svg";
import reports from "../assets/icons/reports.svg";
import avatar from "../assets/icons/avatar.svg";
import logout from "../assets/icons/logout.svg";

// Landing Page Constants
export const landingHero = [
  {
    image: landingHeroImg,
    title: "Welcome to ExTrack!",
    description:
      "ExTrack is a free expense tracking application. ExTrack allows you to enter and track your expenses in real-time, categorize them, and generate reports to understand their spending patterns. We aim to help you become more financially repsonsible, and viable, considering the current inflated market and economy!",
    cta: "Sign Up for Free!",
  },
];

export const howItWorks = {
  title: "How ExTrack Works",
  description:
    "Budgeting and expense tracking application can get complicated really quickly. With ExTrack, we ensure that your user experience is simple and smooth. We want you to focus your time and energy on making, and meeting, your financial goals rather than wasting it on figuring how to navigate and application",
};

export const works = [
  {
    id: 1,
    title: "Four Expense Categories",
    description:
      "There are four categories of expense (Montly Payment, Flexible Expenses, Investments, and Savings). All of which you can modify.",
  },
  {
    id: 2,
    title: "Budget Remaining",
    description:
      "The budget displayed on your dashboard is the budget that you have to spend on flexible expenses after all fixed expenses (Monthly Payments, Investments, Savings) have been made from your income.",
  },
  {
    id: 3,
    title: "Real Time Update",
    description:
      "Whenever an update to your expenses happen, the budget remaining for the month is updated in real time.",
  },
];

export const reviews = [
  {
    id: 1,
    image: alisha,
    name: "Alisha Li",
    review:
      "ExTrack helped me to really understand where my money is going towards, I was able to cut down my costs significantly!",
  },
  {
    id: 2,
    image: robert,
    name: "Robert Burke",
    review:
      "ExTrack helped me to really understand where my money is going towards, I was able to cut down my costs significantly!",
  },
  {
    id: 3,
    image: john,
    name: "John Peng",
    review:
      "ExTrack helped me to really understand where my money is going towards, I was able to cut down my costs significantly!",
  },
];

// About Page Constants
export const aboutHero = [
  {
    image: aboutHeroImg,
    title: "Save and make money!",
    description:
      "Our aim is to help you save and make money. ExTrack provides in-depth analysis of your financial patterns so you can make informed and educated decisions of your spending and saving habits!",
    cta: "Go To Features",
  },
];

export const features = [
  {
    id: 1,
    image: monthToMonth,
    title: "Month to Month Analysis",
    description:
      "One of the best ways to view your financial progression is seeing how your current spending compares to your previous. That's why we to month to month analysis. Through graph visualisations, you can see how much of your income is left over at the end of each month compared to the previous month.",
  },
  {
    id: 2,
    image: kpi,
    title: "Key Performace Indicators (KPI)",
    description:
      "KPIs help you to understand and meet your goals. Through charts and graphs, we provide an exact breakdown of where you income went towards what helping you to cut down, or invest more, into different areas of your financial planning.",
  },
];

// Input Constants
export const signUpInputName = [
  {
    type: "text",
    name: "first_name",
    placeholder: "First Name",
  },
  {
    type: "text",
    name: "last_name",
    placeholder: "Last Name",
  },
];

export const signUpInput = [
  {
    type: "email",
    name: "username",
    placeholder: "Enter Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter Password",
  },
  {
    type: "password",
    name: "confirm_password",
    placeholder: "Confirm Password",
  },
];

export const loginInput = [
  {
    type: "email",
    name: "username",
    placeholder: "Enter Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter Password",
  },
];

// Footer Constants
export const accountLinks = [{ link: "login" }, { link: "sign-up" }];

export const companyLinks = [
  { link: "about" },
  { link: "privacy" },
  { link: "terms" },
];

// Side NavBar Constants
export const sideNavBar = [
  {
    image: overview,
    heading: "Overview",
  },
  {
    image: dollar,
    heading: "Expenses",
  },
  {
    image: reports,
    heading: "Reports",
  },
];

export const sideNavBarProfile = [
  {
    image: avatar,
    heading: "Profile",
  },
  {
    image: logout,
    heading: "Logout",
  },
];

// Dashboard Constants
export const dashboardValues = [
  { heading: "Monthly Payments", value: "monthly" },
  { heading: "Flexible Expenses", value: "flexible" },
  { heading: "Savings", value: "savings" },
  { heading: "Investments", value: "investments" },
];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const expensesHeadings = ["Category", "Name", "Assigned", "Date"];
