import React from "react";

interface TerminalInfoProps {
  command?: string;
  flag?: string;
  content?: string;
}

const TerminalInfo: React.FC<TerminalInfoProps> = ({
  command,
  flag,
  content,
}) => {
  return (
    <div className="mb-6 rounded-lg border border-primary-base/20 bg-background-base/50 p-3 font-mono text-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/50">
      <span className="text-accent-base dark:text-accent-base-dark">
        $ {command}
      </span>
      <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
        --{flag}
      </span>
      <span className="ml-2 text-primary-base-dark">
        &gt;&gt;&gt; {content}
      </span>
    </div>
  );
};

export default TerminalInfo;
