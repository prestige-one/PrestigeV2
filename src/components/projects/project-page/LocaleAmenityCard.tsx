const ICON_STROKE = "#B22222";

export function SchoolIconSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 4L4 10v2l12 6 12-6v-2L16 4z"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 13v8M24 13v8" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8 21h16M13 21v7h6v-7"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 10h4" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HospitalIconSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 28V10l10-6 10 6v18H6z"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 12v8M12 16h8"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 24h12" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export type LocaleAmenityKind = "school" | "hospital";

export function LocaleAmenityCard({
  index,
  title,
  body,
  kind,
}: {
  index: number;
  title: string;
  body: string;
  kind: LocaleAmenityKind;
}) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article className="po-project-page-nearby-card">
      <div className="po-project-page-nearby-card-rail" aria-hidden="true">
        <div className="po-project-page-nearby-card-icon-wrap">
          {kind === "school" ? <SchoolIconSvg /> : <HospitalIconSvg />}
        </div>
        <span className="po-project-page-nearby-card-index">{indexLabel}</span>
      </div>
      <div className="po-project-page-nearby-card-body">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}
