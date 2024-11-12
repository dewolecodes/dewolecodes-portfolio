const ProjectImagePlaceholder = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-base/5 via-background-base to-accent-base/5 p-6 dark:from-primary-base-dark/5 dark:via-background-base-dark dark:to-accent-base-dark/5">
      <div className="text-center">
        <div className="mb-3 font-mono text-sm text-primary-base/60 dark:text-primary-base-dark/60">
          <div className="mb-2">$ image not found</div>
          <div className="flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-base/60 dark:bg-accent-base-dark/60" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-base/60 [animation-delay:150ms] dark:bg-accent-base-dark/60" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-base/60 [animation-delay:300ms] dark:bg-accent-base-dark/60" />
          </div>
        </div>
        <div className="font-space-grotesk text-sm text-default-base/50 dark:text-default-base-dark/50">
          404: Project preview unavailable
        </div>
      </div>

      {/* Terminal-style decorative elements */}
      <div className="absolute left-6 top-6 flex gap-1.5">
        <div className="h-2 w-2 rounded-full bg-primary-base/20 dark:bg-primary-base-dark/20" />
        <div className="h-2 w-2 rounded-full bg-primary-base/20 dark:bg-primary-base-dark/20" />
        <div className="h-2 w-2 rounded-full bg-primary-base/20 dark:bg-primary-base-dark/20" />
      </div>
    </div>
  );
};

export default ProjectImagePlaceholder;
