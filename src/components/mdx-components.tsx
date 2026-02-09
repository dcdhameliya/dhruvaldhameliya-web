import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={800}
      height={450}
      className="rounded-lg"
    />
  ),
  a: (props) => {
    const href = props.href || "";
    if (href.startsWith("/") || href.startsWith("#")) {
      return <Link href={href}>{props.children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  },
};
