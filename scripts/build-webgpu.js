const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

const LOCAL_PATH = '/Users/emil/jack1232/sphere_in_torus'
const GITHUB_URL = 'https://github.com/zetyquickly/sphere-in-torus'
const TMP_DIR = path.join(os.tmpdir(), 'sphere-in-torus')
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'sphere-in-torus')

function run(cmd, cwd) {
  console.log(`[webgpu] $ ${cmd}`)
  execSync(cmd, { cwd, stdio: 'inherit' })
}

// Resolve source: prefer local, fall back to clone
let srcDir
if (fs.existsSync(LOCAL_PATH)) {
  console.log(`[webgpu] Using local: ${LOCAL_PATH}`)
  srcDir = LOCAL_PATH
} else {
  if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true })
  console.log(`[webgpu] Cloning ${GITHUB_URL}...`)
  run(`git clone ${GITHUB_URL} ${TMP_DIR}`)
  srcDir = TMP_DIR
}

console.log('[webgpu] Installing dependencies...')
run('npm install --include=dev', srcDir)

console.log('[webgpu] Building...')
run('npm run prod', srcDir)

console.log('[webgpu] Copying dist → public/sphere-in-torus...')
if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true })
fs.cpSync(path.join(srcDir, 'dist'), OUTPUT_DIR, { recursive: true })

console.log('[webgpu] Done.')
