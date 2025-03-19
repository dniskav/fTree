export const generateRandomList = (a, b) =>
  Array.from({ length: Math.floor(Math.random() * a) + b }, (_, i) => genItem())

export const genItem = () => {
  return {
    [`key`]: Math.random().toString(36).substring(2, 8)
  }
}
