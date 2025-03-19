import { generateRandomList, genItem } from '@/app/utils'

export function ListAddingItems() {
  let items = generateRandomList(11, 5)

  const add = () => {
    const item = genItem()
    items.push(item)
    console.log(item, items)
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.key}>{item.key}</li>
        ))}
      </ul>
      <button onClick={add}>add</button>
    </div>
  )
}
