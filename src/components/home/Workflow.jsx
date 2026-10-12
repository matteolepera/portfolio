import { commitTerminal, habits } from "../../content/workflow";
import SectionHeading from "../ui/SectionHeading";
import CommitTerminal from "./CommitTerminal";
import HabitList from "./HabitList";

export default function Workflow() {
  return (
    <section
      id="come-lavoro"
      className="scroll-mt-6 lg:scroll-mt-[88px] border-t border-line"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20 lg:py-24">
        <SectionHeading
          index="02"
          kicker="Come lavoro"
          title="Quattro abitudini che porto in ogni progetto"
        />
        <div className="flex flex-wrap items-start gap-12">
          <HabitList habits={habits} />
          <CommitTerminal lines={commitTerminal} />
        </div>
      </div>
    </section>
  );
}
