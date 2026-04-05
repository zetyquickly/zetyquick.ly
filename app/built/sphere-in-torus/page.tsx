export const metadata = {
  title: 'Sphere in Torus',
  description: 'WebGPU simulation of a sphere traveling inside a wireframe torus.',
}

export default function Page() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50 }}>
      <iframe
        src="/sphere-in-torus/fullscreen.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Sphere in Torus WebGPU demo"
      />
    </div>
  )
}
