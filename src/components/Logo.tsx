/** The site's mark, the same file as the favicon. */
export function Logo({ className = 'size-6' }: { className?: string }) {
  return (
    <img
      src="/favicon.svg"
      width={32}
      height={32}
      alt=""
      aria-hidden="true"
      className={className}
    />
  )
}
