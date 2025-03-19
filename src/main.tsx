function Example() {
  return (
    <section className="test">
      Hello, World!
      <br />
      <img src="https://placecats.com/300/200" alt="cat" />
      <br />
      <button onclick="alert('Hello, There!')">Click Me!</button>
    </section>
  )
}

const app = document.getElementById('app')
app?.append(<Example />)
