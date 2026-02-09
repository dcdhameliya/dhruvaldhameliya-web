"use client";

import { trackOutboundClick, trackContactClick, trackResumeDownload } from "@/lib/analytics";

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackAs: "outbound" | "contact" | "resume";
  label?: string;
};

export function TrackedLink({
  trackAs,
  label,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trackAs === "outbound") {
      trackOutboundClick(props.href ?? "", label);
    } else if (trackAs === "contact") {
      trackContactClick(label ?? "unknown");
    } else if (trackAs === "resume") {
      trackResumeDownload();
    }
    onClick?.(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
