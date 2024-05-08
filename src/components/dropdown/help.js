export const itemConvert = (arr) => {
  const data = arr.filter((item, index) => arr.indexOf(item) === index)
  const dataLength = data.length
  let cart = []

  for (let i = 0; i < dataLength; i++) {
    const element = {}
    element.label = data[i]
    element.key = `${i}`
    cart.push(element)
  }

  return cart
}
