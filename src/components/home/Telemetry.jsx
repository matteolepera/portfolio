import { profile, telemetry } from "../../content/profile";
import useLastCommit from "../../hooks/useLastCommit";
import { useTheme } from "../../theme/themeContext";

function WantedStars() {
  return (
    <span
      role="img"
      aria-label="Livello di ricercato: cinque stelle"
      className="inline-flex gap-0.5 align-[-2px]"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

function Row({ label, children, valueClassName = "" }) {
  return (
    <div className="flex justify-between gap-4 border-b border-dashed border-line py-[11px] last:border-b-0">
      <dt className="text-muted">{label}</dt>
      <dd className={`m-0 text-right ${valueClassName}`}>{children}</dd>
    </div>
  );
}

export default function Telemetry() {
  const { theme } = useTheme();
  const isVi = theme === "vi";
  const lastCommit = useLastCommit(profile.githubUser);

  return (
    <aside
      aria-label="Stato attuale"
      className="min-w-0 flex-[1_1_340px] overflow-hidden rounded-2xl border border-line bg-surface font-mono text-sm transition-colors duration-500"
    >
      <div className="flex items-center justify-between border-b border-line px-[18px] py-3.5 text-xs tracking-[0.12em] text-muted uppercase">
        <span>Telemetria</span>
        <span className="flex items-center gap-2 text-hi">
          <span
            aria-hidden="true"
            className="size-2 animate-pulse rounded-full bg-hi"
          />
          Live
        </span>
      </div>

      <dl className="m-0 px-[18px] pt-1 pb-2">
        <Row
          label={isVi ? "Ricercato" : "Stato"}
          valueClassName="font-semibold text-hi"
        >
          {isVi ? <WantedStars /> : telemetry.status}
        </Row>
        <Row label="Sede">{telemetry.location}</Row>
        <Row label="In garage">{telemetry.inGarage}</Row>
        <Row label="Ultimo commit">{lastCommit.label}</Row>
        <Row label="Stack">{telemetry.stack}</Row>
        {isVi && (
          <Row label="Leonida" valueClassName="font-semibold text-accent-text">
            {telemetry.viReleaseDate}
          </Row>
        )}
      </dl>

      <p className="border-t border-line px-[18px] py-3 text-xs text-muted">
        Ultimo commit in diretta da GitHub
      </p>
    </aside>
  );
}
