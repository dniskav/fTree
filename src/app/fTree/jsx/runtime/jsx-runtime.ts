declare global {
  module JSX {
    type IntrinsicElements = Record<keyof HTMLElementTagNameMap, Record<string, any>>
  }
}

type JSXComponent = string | ((props: Record<string, any>) => any)
type Props = Record<string, any>

let componentsStack: { fid: string; name: string }[] = []

let idCounter = 0
export function generateFID() {
  idCounter++
  return 'fid_' + idCounter
}

export type Component = (props: Record<string, any>) => any

export const jsx = {
  component(component: JSXComponent, props: Props | null, ...children: any[]) {
    const fid = generateFID()
    console.log('current component -> ', componentsStack[componentsStack.length - 1])

    if (!props) props = {}
    props.children = children.flat(Infinity)
    props.__fid = fid
    props._parent_name = componentsStack[componentsStack.length - 1]?.name
    props._parent_fid = componentsStack[componentsStack.length - 1]?.fid

    if (typeof component === 'function') {
      componentsStack.push({ fid, name: component.name })
      const vNode = component(props)
      componentsStack.pop()
      return vNode
    }

    return { type: component, props, __fid: fid }
  }
}

export function Fragment({ children }: { children: any }) {
  return children
}
