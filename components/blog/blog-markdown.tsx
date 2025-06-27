"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Note: highlight.js styles are handled by react-syntax-highlighter

interface BlogMarkdownProps {
  content: string;
  className?: string;
}

export function BlogMarkdown({ content, className = "" }: BlogMarkdownProps) {
  const { theme } = useTheme();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, codeKey: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCode(codeKey);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const components = {
    // Enhanced code blocks with syntax highlighting and copy functionality
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";

      // Ensure children is properly converted to string
      let codeString = "";
      if (Array.isArray(children)) {
        codeString = children.join("");
      } else if (typeof children === "string") {
        codeString = children;
      } else {
        codeString = String(children);
      }

      // Clean up the code string
      codeString = codeString.replace(/\n$/, "");
      const codeKey = `${language}-${codeString.slice(0, 20)}`;

      if (!inline && match) {
        const isDark = theme === "dark";

        return (
          <div className="group relative my-6">
            {/* IDE-style header */}
            <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-primary-base/50 bg-background-base/60 px-4 py-3 dark:border-primary-base-dark/30 dark:bg-background-base-dark/50">
              <div className="flex items-center gap-2">
                {/* IDE-style dots */}
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                </div>
                <span className="font-space-grotesk text-sm font-medium text-slate-300 dark:text-slate-400">
                  {language || "code"}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(codeString, codeKey)}
                className="flex items-center gap-2 rounded-md border border-primary-base/50 bg-background-base/60 px-3 py-1.5 transition-colors hover:bg-primary-base/10 dark:border-primary-base-dark/30 dark:bg-background-base-dark/50 dark:hover:bg-primary-base-dark/10"
              >
                {copiedCode === codeKey ? (
                  <>
                    <Check className="h-3 w-3" />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>
            {/* Code content */}
            <div className="overflow-hidden rounded-b-lg border border-t-0 border-primary-base/20 dark:border-slate-700">
              <SyntaxHighlighter
                // style={isDark ? vscDarkPlus : vs}
                language={language || "text"}
                PreTag="div"
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  background: isDark ? "#1e1e1e" : "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  padding: "1.25rem",
                  fontFamily: "Space Grotesk",
                }}
                wrapLines={true}
                wrapLongLines={true}
                showLineNumbers={codeString.split("\n").length > 5}
                lineNumberStyle={{
                  color: isDark ? "#6e7681" : "#656d76",
                  fontSize: "0.75rem",
                  paddingRight: "1rem",
                  userSelect: "none",
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      }

      // Inline code
      return (
        <code
          className="relative rounded border border-primary-base/20 bg-primary-base/10 px-1.5 py-0.5 font-mono text-sm text-accent-base dark:border-primary-base-dark/20 dark:bg-primary-base-dark/10 dark:text-accent-base-dark"
          {...props}
        >
          {children}
        </code>
      );
    },

    // Handle pre tags (code block containers)
    pre: ({ children, ...props }: any) => {
      // If pre contains a code element, let the code component handle it
      return <>{children}</>;
    },

    // Enhanced headings with anchor links
    h1: ({ children, ...props }: any) => (
      <h1
        className="group relative mb-6 mt-8 flex scroll-mt-20 items-center gap-2 font-raleway text-3xl font-bold text-default-base dark:text-default-base-dark"
        {...props}
      >
        {children}
        {props.id && (
          <Link
            href={`#${props.id}`}
            className="text-accent-base opacity-0 transition-opacity hover:text-accent-base/80 group-hover:opacity-100 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        )}
      </h1>
    ),

    h2: ({ children, ...props }: any) => (
      <h2
        className="group relative mb-4 mt-8 flex scroll-mt-20 items-center gap-2 font-raleway text-2xl font-semibold text-default-base dark:text-default-base-dark"
        {...props}
      >
        {children}
        {props.id && (
          <Link
            href={`#${props.id}`}
            className="text-accent-base opacity-0 transition-opacity hover:text-accent-base/80 group-hover:opacity-100 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </h2>
    ),

    h3: ({ children, ...props }: any) => (
      <h3
        className="group relative mb-3 mt-6 flex scroll-mt-20 items-center gap-2 font-raleway text-xl font-semibold text-default-base dark:text-default-base-dark"
        {...props}
      >
        {children}
        {props.id && (
          <Link
            href={`#${props.id}`}
            className="text-accent-base opacity-0 transition-opacity hover:text-accent-base/80 group-hover:opacity-100 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
          >
            <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </h3>
    ),

    // Enhanced links
    a: ({ href, children, ...props }: any) => {
      const isExternal = href?.startsWith("http");

      if (isExternal) {
        return (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent-base underline decoration-1 underline-offset-2 transition-all hover:text-accent-base/80 hover:decoration-2 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
            {...props}
          >
            {children}
            <ExternalLink className="h-3 w-3" />
          </Link>
        );
      }

      return (
        <Link
          href={href || "#"}
          className="text-accent-base underline decoration-1 underline-offset-2 transition-all hover:text-accent-base/80 hover:decoration-2 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Enhanced images with Next.js Image optimization
    img: ({ src, alt, ...props }: any) => (
      <div className="my-6 overflow-hidden rounded-lg border border-primary-base/20 dark:border-primary-base-dark/20">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={600}
          className="h-auto w-full object-cover"
          {...props}
        />
        {alt && (
          <div className="border-t border-primary-base/20 bg-primary-base/5 px-4 py-2 text-center text-sm text-primary-base dark:border-primary-base-dark/20 dark:bg-primary-base-dark/5 dark:text-primary-base-dark">
            {alt}
          </div>
        )}
      </div>
    ),

    // Enhanced blockquotes
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        className="my-6 rounded-r-lg border border-l-4 border-accent-base border-primary-base/20 border-l-accent-base bg-primary-base/5 py-4 pl-6 italic text-primary-base dark:border-accent-base-dark dark:border-primary-base-dark/20 dark:border-l-accent-base-dark dark:bg-primary-base-dark/5 dark:text-primary-base-dark"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Enhanced tables with app design
    table: ({ children, ...props }: any) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-primary-base/20 dark:border-primary-base-dark/20">
        <table
          className="w-full border-collapse bg-background-base dark:bg-background-base-dark"
          {...props}
        >
          {children}
        </table>
      </div>
    ),

    thead: ({ children, ...props }: any) => (
      <thead
        className="bg-primary-base/10 dark:bg-primary-base-dark/10"
        {...props}
      >
        {children}
      </thead>
    ),

    th: ({ children, ...props }: any) => (
      <th
        className="border border-primary-base/20 px-4 py-3 text-left font-semibold text-default-base dark:border-primary-base-dark/20 dark:text-default-base-dark"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }: any) => (
      <td
        className="border border-primary-base/20 px-4 py-3 text-primary-base dark:border-primary-base-dark/20 dark:text-primary-base-dark"
        {...props}
      >
        {children}
      </td>
    ),

    // Enhanced lists
    ul: ({ children, ...props }: any) => (
      <ul className="my-4 list-outside list-disc space-y-2 pl-6" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }: any) => (
      <ol className="my-4 list-outside list-decimal space-y-2 pl-6" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }: any) => (
      <li
        className="leading-relaxed text-primary-base dark:text-primary-base-dark"
        {...props}
      >
        {children}
      </li>
    ),

    // Enhanced paragraphs
    p: ({ children, ...props }: any) => (
      <p
        className="my-4 leading-relaxed text-primary-base dark:text-primary-base-dark"
        {...props}
      >
        {children}
      </p>
    ),

    // Horizontal rule
    hr: ({ ...props }: any) => (
      <hr
        className="my-8 h-px border-0 bg-gradient-to-r from-transparent via-primary-base/30 to-transparent dark:via-primary-base-dark/30"
        {...props}
      />
    ),
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
