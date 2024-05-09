export const multipleReview = (data) => {
  const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1
  let reviews = []
  for (let i = 1; i <= randomNumber; i++) {
    reviews.push(data)
  }
  return reviews
}
