/** Zachte lijn-iconen voor de dienstenkaarten. */

type IconProps = { className?: string };

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 9-9a9 9 0 0 1 7 2c0 6-4 11-9 11Z" />
      <path d="M13 4c-1 6-4 10-8 13" />
    </svg>
  );
}

export function HeartIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20s-7-4.5-9.3-9C1 7.7 2.6 4.8 5.6 4.8c1.9 0 3.2 1.1 4.4 2.6C11.2 5.9 12.5 4.8 14.4 4.8c3 0 4.6 2.9 2.9 6.2C15 15.5 12 20 12 20Z" />
    </svg>
  );
}

export function PathIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 20c0-4 4-4 4-8s-4-4-4-8" />
      <circle cx="6" cy="20" r="1" />
      <path d="M18 4c0 4-4 4-4 8s4 4 4 8" />
      <circle cx="18" cy="4" r="1" />
    </svg>
  );
}

export const icons = {
  leaf: LeafIcon,
  heart: HeartIcon,
  path: PathIcon,
};
