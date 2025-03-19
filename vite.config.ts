import { defineConfig } from 'vite'
const url = import.meta.url

export default defineConfig({
  base: '/fTree/',
  resolve: {
    alias: {
      '@': new URL('./src', url).pathname, // 🔹 Alias global para `src/`
      '@runtime': new URL('./src/app/fTree/jsx/runtime', url).pathname // 🔹 Alias para runtime JSX
    }
  },
  css: {
    modules: {
      scopeBehaviour: 'local' // 🔹 Asegura que los estilos sean locales
    }
  },
  esbuild: {
    jsx: 'transform', // 🔹 Transforma JSX en llamadas a `jsx()`
    jsxDev: false, // 🔹 Desactiva modo desarrollo para optimización
    jsxImportSource: '@runtime', // 🔹 Usa nuestro runtime JSX personalizado
    jsxInject: `import { jsx, Fragment } from '@runtime/jsx-runtime'`, // 🔹 Inyección automática de `jsx`
    jsxFactory: 'jsx.component', // 🔹 Convierte `<div>` en `jsx("div", ...)`
    jsxFragment: 'Fragment' // 🔹 Convierte `<>...</>` en `Fragment(...)`
  }
})
