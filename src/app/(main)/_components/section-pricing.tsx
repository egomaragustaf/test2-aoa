"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface PricingProps {
  title: string;
  price: number | string;
  features: string[];
  description: string;
  actionLabel: string;
}

function PricingCard({
  title,
  price,
  features,
  description,
  actionLabel,
}: PricingProps) {
  return (
    <Card className="w-72 flex flex-col justify-between py-1 mx-auto sm:mx-0">
      <div>
        <CardHeader className="pb-8 pt-4">
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {price === Number(price) ? price + "$" : "Custom"}
            </h3>
            <span className="flex flex-col justify-end text-sm mb-1">
              {price === Number(price) ? "/month" : ""}
            </span>
          </div>
          <CardDescription className="pt-1.5 h-12">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-[#0366fd] text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-[#0366fd]" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

export function Pricing() {
  const plans = [
    {
      title: "TIER 1 / Basic",
      price: 0,
      features: [
        "Logging incoming inventory",
        "Logging outcoming inventory",
        "Recording profit margins",
      ],
      description: "Essential features you need to get started",
      actionLabel: "Get Started",
    },
    {
      title: "TIER 2 / Business",
      price: 12,
      features: [
        "Logging incoming and outgoing inventory",
        "Profit tracking",
        "Analyzing sales outcomes with charts",
        "24/7 Support",
      ],
      description: "Perfect for owners of small & medium businessess",
      actionLabel: "Get Started",
    },
    {
      title: "TIER 3 / Entrepreneur",
      price: "Custom",
      features: [
        "Logging incoming and outcoming inventory",
        "Profit tracking",
        "Analyzing sales outcomes using CHART",
        "24/7 Support",
        "Exporting data to Excel",
        "AI revenue prediction",
      ],
      description: "Dedicated support and infrastructure to fit your needs",
      actionLabel: "Get Started",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-row lg:flex-col items-center justify-center gap-4">
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <h1 className="p-2 leading-normal flex text-center text-3xl font-bold">
          Choose Your Plan
        </h1>
        <p className="max-w-2xl text-center">
          Let's choose the package that make your business management cool,
          simple, and downright awesome.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
          {plans.map((plan) => {
            return <PricingCard key={plan.title} {...plan} />;
          })}
        </div>
      </div>
    </section>
  );
}
