export const generateRandomList = (a: number, b: number): Record<string, string>[] =>
  Array.from({ length: Math.floor(Math.random() * a) + b }, () => genItem())

export const genItem = (): Record<string, string> => {
  return {
    key: Math.random().toString(36).substring(2, 8)
  }
}
