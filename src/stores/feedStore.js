import { defineStore } from 'pinia'
import axios from 'axios'

export const useFeedStore = defineStore('feed', {
  state: () => ({
    posts: [],
    offset: 0,
    limit: 15,
    loading: false,
    noMoreData: false,
  }),

  actions: {
    async fetchPosts() {
      if (this.loading || this.noMoreData) return

      this.loading = true
      try {
        const res = await axios.get('https://api.popules.com/api/feed', {
          params: {
            offset: this.offset,
            limit: this.limit,
          },
        })

        console.log('res data', res.data.data)

        if (res.data.data && res.data.data.length > 0) {
          this.posts.push(...res.data.data)
          this.offset += this.limit
        } else {
          this.noMoreData = true
        }
      } catch (err) {
        console.error('Failed to fetch feed:', err)
      } finally {
        this.loading = false
      }
    },
  },
})
