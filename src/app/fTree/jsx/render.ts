type JSXElement = {
  type: string
  props: {
    [key: string]: any
    children?: JSXElement[] | string
  }
}

export default function render(component: JSXElement | string, container: HTMLElement): void {
  const el = processHtmlTag(component)
  console.log(el)
  container.appendChild(el)
}

function processHtmlTag(tag: JSXElement | string): Node {
  if (typeof tag === 'string') {
    return document.createTextNode(tag)
  }

  console.log(tag.type)
  const children = tag.props.children
  const props = tag.props
  const el = document.createElement(tag.type)

  processProps(el, props)

  console.log(tag.props)

  if (children) {
    if (typeof children === 'string') {
      el.appendChild(document.createTextNode(children))
    } else {
      children.forEach((child) => {
        render(child, el)
      })
    }
  }

  return el
}

export function processChildren(children: JSXElement[] | string): void {
  console.log(children)
}

export function processProps(el: HTMLElement, props: Record<string, any>): void {
  Object.keys(props).forEach((key) => {
    const value = props[key]
    if (key === 'children') return

    if (key === 'className') {
      el.setAttribute('class', value)
    } else if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLowerCase(), value)
    } else {
      el.setAttribute(key, value)
    }
  })
}
