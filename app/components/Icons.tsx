type IconProps = { className?: string };

export function ArrowIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function CheckIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export function DotsIcon() {
  return <svg viewBox="0 0 44 12" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="16" cy="6" r="2"/><circle cx="27" cy="6" r="2"/><circle cx="38" cy="6" r="2"/></svg>;
}

export function PulseIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 26h9l5-11 8 21 6-14 4 4h8" /></svg>;
}

export function TargetIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="9"/><path d="m24 24 14-14M32 10h6v6" /></svg>;
}

export function PhoneIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 8h9l4 10-6 4c4 8 8 12 16 16l4-6 10 4v9c0 2-2 3-4 3C23 46 6 29 7 11c0-2 1-3 3-3Z" /></svg>;
}
