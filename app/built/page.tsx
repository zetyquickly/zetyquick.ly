import Link from 'next/link'

export const metadata = {
  title: 'Built',
  description: "Projects I've worked on.",
}

const externalProjects = [
  {
    name: 'Raspberry AI',
    url: 'https://www.raspberry.ai/',
    description:
      'Generative AI platform for fashion creatives — sketch-to-render, virtual try-on, AI photography, and video studio. Saves designers 3–5 hours per design.',
  },
  {
    name: 'Realm',
    url: 'https://apps.apple.com/us/app/realm-real-fun-ai-captured/id6444174028',
    description:
      "iOS social app that turns text into AI-generated visual stories. Share moments cameras can't catch, remix others' creations, and build custom AI models from your photos.",
  },
  {
    name: 'NEAR AI',
    url: 'https://near.ai/',
    description:
      'AI infrastructure platform providing developer tools, integration capabilities, and community-driven AI solutions.',
  },
  {
    name: 'FaceSwap-a-GIF',
    url: 'https://replicate.com/zetyquickly-org/faceswap-a-gif',
    description:
      'Optimized face swapper running InsSwapper with CodeFormer face upscaler. Blazingly fast — under 5 seconds per GIF.',
  },
]

const internalProjects = [
  {
    name: 'Sphere in Torus',
    href: '/built/sphere-in-torus',
    description:
      'WebGPU simulation of a sphere bouncing inside a wireframe torus. Built with TypeScript and raw WebGPU — no three.js.',
  },
]

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        What I've built
      </h1>

      <div className="flex flex-col space-y-6">
        {externalProjects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex flex-col space-y-1">
              <p className="font-medium group-hover:underline underline-offset-2">
                {project.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}

        {internalProjects.map((project) => (
          <div key={project.name} className="flex flex-col space-y-2">
            <iframe
              src="/sphere-in-torus/fullscreen.html"
              className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
              style={{ height: '40vh', display: 'block', border: 'none' }}
              title={project.name}
            />
            <div className="flex flex-col space-y-1">
              <Link
                href={project.href}
                className="font-medium hover:underline underline-offset-2"
              >
                {project.name} ↗
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
