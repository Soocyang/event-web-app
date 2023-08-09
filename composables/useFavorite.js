export const useFavorite = () => {
	const favorites = useState(() => [])

	const addFavorite = (payload) => {
		const newList = [...favorites.value, payload]
		favorites.value = newList
	}

  const removeFavorite = (id) => {
    const targetEventIndex = favorites.value.findIndex(eventInfo => eventInfo.id == id)
    favorites.value.splice(targetEventIndex, targetEventIndex + 1)
  }

	return {
		favorites,
		addFavorite,
		removeFavorite,
	}
}
