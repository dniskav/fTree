export default function render(component, container) {
  const el = processHtmlTag(component)
  console.log(el)
  container.appendChild(el)
}

function processHtmlTag(tag) {
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
    children.forEach((key) => {
      render(key, el)
    })
  }

  return el
}

export function processChildren(children) {}

export function processProps(el, props) {
  Object.keys(props).forEach((key) => {
    const value = props[key]
    if (key === 'children') return
    if (key === 'className') {
      el.setAttribute('class', value)
    } else if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLocaleLowerCase(), value)
    } else {
      el.setAttribute(key, value)
    }
  })
}
