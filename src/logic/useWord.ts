
export const useWord = async () => {
  const url = 'https://random-word-api.herokuapp.com/word?number=10&swear=0'

  try {
    const resp = await fetch(url)
    if (resp.ok) return await resp.json()
    else throw (new Error('Error fetching random words!'))
  }
  catch (err) {
    console.error(err)
  }
}
