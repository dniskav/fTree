import App from './app/App.tsx'
import render from './app/fTree/jsx/render'

const app = document.getElementById('app') as HTMLElement

render(<App />, app)
