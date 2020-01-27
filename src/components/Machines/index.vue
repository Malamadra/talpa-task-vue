<template>
  <div class="content">
    <div
      class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <div v-for="machine in machines" :key="machine.id" class="md-layout-item">
        <md-card>
          {{ machine.name }}
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { machines } from '@/fakeData'

export default {
  name: 'LayoutHorizontalResponsive',
  data() {
    return {
      machines
    }
  }
}
</script>

<style scoped>
.content {
  padding: 30px 0;
}

.md-layout-item {
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
