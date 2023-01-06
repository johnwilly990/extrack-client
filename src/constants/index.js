import alisha from "../assets/images/alisha-li.jpg";
import robert from "../assets/images/robert-burke.jpg";
import john from "../assets/images/john-peng.jpg";
import hero from "../assets/images/hero.jpg";

export const heroValues = {
  image: hero,
  title: "Welcome to ExTrack!",
  description:
    "ExTrack is a free expense tracking application. ExTrack allows you to enter and track your expenses in real-time, categorize them, and generate reports to understand their spending patterns. We aim to help you become more financially repsonsible, and viable, considering the current inflated market and economy!",
  cta: "Sign Up for Free!",
};

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
