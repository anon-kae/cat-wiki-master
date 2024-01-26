const BASE_API_URL = process.env.BASE_API_URL

export default function (httpService, app, store) {
  return {
    async getCats ({ limit = 5, page = 0 }, type) {
      const query = `?limit=${limit}&page=${page}`
      const cats = await httpService.get(`${BASE_API_URL}/breeds${query}`)

      if (type === 'SEARCH') {
        return cats
      } else {
        for (const cat of cats) {
          const { url } = await this.getImageCatById(cat?.reference_image_id)
          cat.imageCat = url
        }
        return cats
      }
    },
    async getCatById (id) {
      const cat = await httpService.get(`${BASE_API_URL}/breeds/${id}`)
      const { url } = await this.getImageCatById(cat?.reference_image_id)
      cat.imageCat = url

      return cat
    },
    getImageCatById (id) {
      return httpService.get(`${BASE_API_URL}/images/${id}`)
    },
    getImageCatsById (id) {
      return httpService.get(
        `${BASE_API_URL}/images/search?breed_ids=${id}&limit=10&page=1`
      )
    },
  }
}
