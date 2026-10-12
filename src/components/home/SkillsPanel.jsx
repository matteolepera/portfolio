import Panel from "../ui/Panel";

export default function SkillsPanel({ skills }) {
  return (
    <Panel title="Attrezzatura" className="flex-[1_1_280px]">
      <dl className="flex flex-col gap-3 text-[15px]">
        {skills.map((group) => (
          <div key={group.id}>
            <dt className="font-mono text-xs text-muted">{group.label}</dt>
            <dd className="mt-0.5">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
