export type FNode = {
  fid: string
  type: string | Function
  props: Record<string, any>
  parent: string | null
  children: string[]
  dom?: HTMLElement
  hostedFids?: string[]
}

// 📌 Mapa global que almacena el Virtual DOM (fTree)
export const fTree = new Map<string, FNode>()

// 📌 Función para generar un ID único para cada nodo
let count = 0
export function generateFID() {
  return `fid-${count++}`
}

// 📌 Función para crear un nodo en el `fTree`
export function createFNode(
  type: string | Function,
  props: Record<string, any>,
  parent: string | null
): FNode {
  const fid = generateFID()
  const isHTMLTag = typeof type === 'string'

  // 📌 Creamos el nodo con la estructura correcta
  const node: FNode = {
    fid,
    type,
    props,
    parent,
    children: [],
    ...(isHTMLTag ? { dom: document.createElement(type) } : { hostedFids: [] })
  }

  // 📌 Guardamos el nodo en `fTree`
  fTree.set(fid, node)

  return node
}

// 📌 Función para obtener un nodo en el `fTree` por su `fid`
export function getFNode(fid: string): FNode | undefined {
  return fTree.get(fid)
}

// 📌 Función para actualizar un nodo en `fTree`
export function updateFNode(fid: string, newNode: FNode) {
  if (fTree.has(fid)) {
    fTree.set(fid, newNode)
  }
}

// 📌 Función para agregar un hijo a un nodo en `fTree`
export function appendChildFNode(parentFid: string, childFid: string) {
  const parentNode = fTree.get(parentFid)
  const childNode = fTree.get(childFid)

  if (parentNode && childNode) {
    parentNode.children.push(childFid)
    childNode.parent = parentFid
  }
}

// 📌 Función para obtener una instantánea del `fTree` (Para Debugging)
export function getFTreeSnapshot() {
  return Array.from(fTree.entries()).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {} as Record<string, FNode>)
}
