declare global {
  module JSX {
    type IntrinsicElements = Record<keyof HTMLElementTagNameMap, Record<string, any>>
  }
}

let idCounter = 0
export function generateFID() {
  idCounter++
  return 'fid_' + idCounter
}

export type Component = (props: Record<string, any>) => any

export const jsx = {
  component(component: string | Component, props: Record<string, any> | null, ...children: any[]) {
    const fid = generateFID()

    if (!props) props = {}
    props.children = children.flat(Infinity)
    props.__fid = fid

    if (typeof component === 'function') {
      props['data-ftree-component'] = component.name
      const vNode = component(props)
      return vNode
    }

    // const element = document.createElement(component)
    // for (const [key, value] of Object.entries(props)) {
    //   if (key === 'children') continue
    //   else if (key === 'className') element.setAttribute('class', value)
    //   else element.setAttribute(key, value)
    // }

    // element.append(...props.children)

    return { type: component, props, __fid: fid }
  }
}

export function Fragment({ children }: { children: any }) {
  return children
}
