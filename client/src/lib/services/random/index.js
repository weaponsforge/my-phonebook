export const getRandomJoke = async() => {
  try {
    const API = process.env.NEXT_PUBLIC_RANDOM_JOKE_API
    // const response = await fetch(API)
    // const randomJoke = await response.json()
    // return randomJoke
  } catch(err) {
  }
}