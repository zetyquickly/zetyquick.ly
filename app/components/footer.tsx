const socials = [
  { name: 'twitter', href: 'https://x.com/superdiscoholic' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/emil-bogomolov' },
  { name: 'github', href: 'https://github.com/zetyquickly' },
]

export default function Footer() {
  return (
    <footer className="mb-16 mt-16">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
          socials
        </p>
        <ul className="flex flex-row space-x-4">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-neutral-400 dark:text-neutral-500 text-sm">
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
