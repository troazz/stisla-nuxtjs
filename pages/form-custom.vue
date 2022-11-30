<script setup>

useHead({
  title: 'FormCustom',
})
const { data: forms, pending } = useLazyAsyncData('forms', async () => {
  return await $axios.$get('forms')
})
</script>

<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card card-statistic-2">
          <div class="card-icon shadow-primary bg-primary">
            <i class="fas fa-file-alt"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Total Form</h4>
            </div>
            <div class="card-body">17</div>
          </div>
        </div>
      </div>
    </div>
    <basic-table/>
  </div>
</template>