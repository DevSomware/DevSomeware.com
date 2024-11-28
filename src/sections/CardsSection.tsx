import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight"; // Adjust the import path as needed

// CheckIcon Component
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

// Step Component
const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

// CardContent Component
const CardContent = ({
  title,
  steps,
  description,
}: {
  title: string;
  steps: string[];
  description: string;
}) => {
  return (
    <CardSpotlight className="h-96 w-full p-6">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">{title}</p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none mt-2">
          {steps.map((step, index) => (
            <Step key={index} title={step} />
          ))}
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {description}
      </p>
    </CardSpotlight>
  );
};

// CardsSection Component
export function CardsSection() {
  // Sample data for the cards
  const cardsData = [
    {
      title: "Authentication Steps",
      steps: [
        "Enter your email address",
        "Create a strong password",
        "Set up two-factor authentication",
        "Verify your identity",
      ],
      description:
        "Ensuring your account is properly secured helps protect your personal information and data.",
    },
    {
      title: "Profile Setup",
      steps: [
        "Upload a profile picture",
        "Fill out your bio",
        "Connect your social accounts",
        "Set your preferences",
      ],
      description:
        "Complete your profile to let others know more about you and your interests.",
    },
    {
      title: "Privacy Settings",
      steps: [
        "Manage your visibility",
        "Control data sharing",
        "Set up blocking",
        "Review activity logs",
      ],
      description:
        "Adjust your privacy settings to control who can see your information and activity.",
    },
    {
      title: "Subscription Plans",
      steps: [
        "Choose a plan that fits your needs",
        "Enter payment information",
        "Confirm your subscription",
        "Access premium features",
      ],
      description:
        "Select a subscription plan to unlock additional features and benefits.",
    },
  ];

  return (
    <div className="h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-4xl sm:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Our Features
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <CardContent
              key={index}
              title={card.title}
              steps={card.steps}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
