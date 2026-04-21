"use client";

import Container from "../../ui/Container";
import { Briefcase, Workflow, Bot, Brain } from "lucide-react";

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-7 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        {icon}
      </div>
      <h3 className="text-[18px] font-semibold text-gray-900 leading-[1.3]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] text-gray-600 leading-[1.7]">
        {description}
      </p>
    </div>
  );
}

export default function WhoThisIsFor() {
  return (
    <section className="py-20 md:py-25">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[36px] font-semibold leading-[1.1] text-gray-900">
            Built for Teams Like Yours
          </h2>
          <p className="mt-4 text-[16px] text-gray-600 leading-[1.7]">
            If your operations are getting messy as you grow, this is where we
            step in.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<Briefcase className="h-7 w-7 text-blue-600" />}
            title="You're Running a Growing Business"
            description="Your operations are getting complex as you scale. Manual work is slowing you down and systems can’t keep up anymore."
          />

          <Card
            icon={<Workflow className="h-7 w-7 text-yellow-600" />}
            title="Your Team Relies on Manual Processes"
            description="From repetitive tasks to copy-paste workflows, your team spends hours doing work that should be automated."
          />

          <Card
            icon={<Bot className="h-7 w-7 text-purple-600" />}
            title="You've Tried Tools but Nothing Stuck"
            description="You’ve used tools or AI apps but they didn’t fit your workflow. The problem wasn’t the tools, it was the system."
          />

          <Card
            icon={<Brain className="h-7 w-7 text-pink-600" />}
            title="You Know AI Can Help, But Don’t Know How"
            description="You see the potential of AI, but don’t have a clear plan on what to automate or how to implement it properly."
          />
        </div>
      </Container>
    </section>
  );
}
