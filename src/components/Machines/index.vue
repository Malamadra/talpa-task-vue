<template>
  <div class="content">
    <div class="md-layout md-gutter">
      <div
        v-for="machine in machines"
        :key="machine.id"
        class="md-layout-item md-large-size-33 md-xlarge-size-33 md-medium-size-50 md-xsmall-size-100"
      >
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
