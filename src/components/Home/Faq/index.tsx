// components/Faq.js
"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqData = [
  {
    question: "What is AlgoCast?",
    answer:
      "AlgoCast is an AI-powered prediction market platform that turns social trends into tradable YES/NO markets on Algorand.",
  },
  {
    question: "How does AlgoCast use AI?",
    answer:
      "AI continuously scans real-time social signals, proposes markets, and provides probability estimates alongside market odds.",
  },
  {
    question: "What do I trade on AlgoCast?",
    answer:
      "Instead of spot assets, you trade YES/NO outcome tokens that pay out based on whether an event happens.",
  },
  {
    question: "Is my personal information secure with AlgoCast?",
    answer:
      "Yes, we prioritize your security with advanced encryption and compliance protocols.",
  },
  {
    question: "Are there any deposit or withdrawal fees?",
    answer:
      "Our fee structure is transparent. Visit our pricing page for detailed info.",
  },
  {
    question: "Does AlgoCast offer advanced trading tools?",
    answer:
      "This demo focuses on a clean, minimal interface while still exposing AI probabilities, market odds, and liquidity.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-foreground">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary uppercase text-sm">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-foreground">
              Learn more about AlgoCast
            </h2>
            <p className="text-foreground/70 mt-2">
              Explore how AI and on-chain markets work together in this demo.
            </p>
          </div>
          <Accordion className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-foreground/5 rounded-lg border-none px-4"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  {item.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
