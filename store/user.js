export const useUserStore = defineStore('user', () => {
  const { $axios } = useNuxtApp()
  const currentPage = ref(1)
  const perPage = ref(10)
  const fetchedData = ref([])
  const isLoading = ref(false)
  const reload = ref(null)

  const users = computed(() => fetchedData.value?.data)
  const totalPage = computed(() => fetchedData.value?.meta?.total_pages)

  function fetch() {
    const { data, pending, refresh } = useLazyAsyncData('users', async () => {
      const params = {
        page: currentPage.value,
        limit: perPage.value,
      }

      return await $axios.$get('users', { params })
    })

    fetchedData.value = data
    isLoading.value = pending
    reload.value = refresh
  }

  function gotoPage(i) {
    currentPage.value = i
    reload.value()
  }

  return {
    fetchedData,
    users,
    isLoading,
    fetch,
    currentPage,
    perPage,
    totalPage,
    gotoPage,
  }
})
