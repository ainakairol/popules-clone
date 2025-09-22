<template>
  <div class="min-h-screen bg-white flex flex-col">
    <header class="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-10">
      <img src="@/assets/popules_logo.png" alt="Popules Logo" class="h-10 w-auto" />

      <div class="flex-1 mx-6">
        <div class="relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-full rounded-full px-4 py-2 pl-10 bg-gray-50"
          />
          <img
            src="@/assets/search-icon.png"
            alt="Explore"
            class="w-5 h-5 absolute right-3 top-2.5 text-gray-500"
          />
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-pink-500 text-white px-4 py-2 rounded-full">Post</button>
        <button class="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
          <img src="@/assets/apps.png" alt="Explore" class="w-5 h-5" />
        </button>
        <button class="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
          <img src="@/assets/notification.png" alt="Explore" class="w-7 h-7" />
        </button>
        <button class="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
          <img src="@/assets/profile-login.png" alt="Explore" class="w-6 h-6" />
        </button>
      </div>
    </header>

    <div class="flex flex-1">
      <aside
        class="fixed top-16 left-0 w-60 bg-white px-4 py-6 border-r flex flex-col justify-between h-[calc(100vh-4rem)]"
      >
        <div>
          <nav class="space-y-4">
            <button
              class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
            >
              <img src="@/assets/explore.png" alt="Explore" class="w-8 h-8" />
              Explore
            </button>
            <button
              class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
            >
              <img src="@/assets/Following.svg" alt="Following" class="w-8 h-8" />
              Following
            </button>
            <button
              class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
            >
              <img src="@/assets/message.png" alt="Messages" class="w-6 h-6" />
              Messages
            </button>

            <div v-if="showMore" class="space-y-4">
              <button
                class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
              >
                <img src="@/assets/profile.png" alt="Profile" class="w-6 h-6" />
                Profile
              </button>
              <button
                class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
              >
                <img src="@/assets/businesses.png" alt="Businesses" class="w-6 h-6" />
                Business
              </button>
            </div>
          </nav>

          <div class="mt-6">
            <button
              @click="showMore = !showMore"
              class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
            >
              {{ showMore ? 'Less' : 'More' }}
              <img v-if="showMore" src="@/assets/expand-less.svg" alt="Less" class="w-8 h-8" />
              <img v-else src="@/assets/expand-more.svg" alt="More" class="w-8 h-8" />
            </button>
          </div>

          <div class="mt-6">
            <p class="text-sm text-gray-600 mb-2">Join our community now!</p>
            <button class="w-full bg-black text-white py-2 rounded-full">Login</button>
          </div>
        </div>

        <div class="mt-6">
          <button
            class="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full w-full"
          >
            <img src="@/assets/more.svg" alt="More" class="w-5 h-5" />
            More
          </button>
        </div>
      </aside>

      <div class="flex-1 ml-60">
        <div class="sticky top-16 z-10 flex gap-4 overflow-x-auto px-6 py-3 bg-white">
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">All</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Vacancies</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Workplace</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Food</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Design</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Cars</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Finance</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Lifestyle</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Travel</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Makeup</button>
          <button class="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">Fitness</button>
        </div>

        <main class="p-6 columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4 space-y-6">
          <div
            v-for="(post, i) in feed.posts"
            :key="post.id"
            class="bg-white rounded-lg overflow-hidden"
          >
            <img :src="post.thumbnail" alt="" class="w-full object-cover" />
            <div class="p-3">
              <h3 class="font-semibold text-gray-800 truncate">{{ post.title }}</h3>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div v-if="post.user.logo_url">
                    <img :src="post.user.logo_url" alt="profile" class="w-6 h-6 rounded-full" />
                  </div>
                  <div
                    v-else
                    class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    :style="{ backgroundColor: getRandomColor(i) }"
                  >
                    {{ post.user.fullname ? post.user.fullname.charAt(0).toUpperCase() : 'U' }}
                  </div>
                  <p class="text-xs text-gray-600">
                    {{ post.user.fullname || 'Unknown' }}
                  </p>
                </div>

                <div class="flex items-center space-x-1 text-gray-500 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    class="w-4 h-4"
                  >
                    <path
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                  <span>{{ post.likes_count || 0 }}</span>
                </div>
              </div>
            </div>
          </div>

          <div ref="loadMoreTrigger" class="h-10"></div>
        </main>

        <div v-if="feed.loading" class="text-center py-4 text-gray-500">Loading...</div>
        <div v-if="feed.noMoreData" class="text-center py-4 text-gray-400">No more posts</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFeedStore } from '../stores/feedStore'

const showMore = ref(false)
const feed = useFeedStore()
const colors = ['#F87171', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA', '#F472B6']
const loadMoreTrigger = ref(null)

function getRandomColor(index) {
  return colors[index % colors.length]
}

onMounted(() => {
  feed.fetchPosts()

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        feed.fetchPosts()
      }
    },
    { rootMargin: '200px' },
  )

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value)
  }

  onUnmounted(() => {
    if (loadMoreTrigger.value) observer.unobserve(loadMoreTrigger.value)
  })
})
</script>
