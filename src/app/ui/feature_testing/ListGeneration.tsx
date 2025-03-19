import { generateRandomList } from '@/app/utils'

const list = generateRandomList(11, 5)

export function ListGeneration() {
  return (
    <>
      <h2>List Generation</h2>
      <ul className="list-css-class">
        {list.map((item, index) => (
          <li key={index}>{item.key}</li>
        ))}
      </ul>
    </>
  )
}
