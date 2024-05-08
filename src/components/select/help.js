export const itemConvert = (arr) => {
  const data = arr.filter((item, index) => arr.indexOf(item) === index)
  const dataLength = data.length
  let cart = []

  for (let i = 0; i < dataLength; i++) {
    const element = {}
    element.value = data[i]
    element.label = data[i]
    cart.push(element)
  }

  return cart
}
