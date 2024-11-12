import React from "react";
import { Terminal } from "lucide-react";

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
    <div className="mb-8 rounded-lg border border-primary-base/20 bg-background-base/50 p-4 backdrop-blur-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/50">
      <div className="flex items-center gap-3">
        <Terminal className="h-4 w-4 text-accent-base/80 dark:text-accent-base-dark/80" />
        <div className="flex items-center gap-2">
          <span className="text-primary-base/90 dark:text-primary-base-dark/90">
            {command}
          </span>
          {flag && (
            <>
              <span className="text-default-base/30 dark:text-default-base-dark/30">
                /
              </span>
              <span className="text-accent-base/90 dark:text-accent-base-dark/90">
                {flag}
              </span>
            </>
          )}
          <span className="text-default-base/30 dark:text-default-base-dark/30">
            →
          </span>
          <span className="text-base text-default-base/70 dark:text-default-base-dark/70">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalInfo;
