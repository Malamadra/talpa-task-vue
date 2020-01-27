<template>
  <md-list class="md-dense">
    <md-list-item v-for="sensor in sensors" :key="sensor.id" md-expand>
      <md-icon>whatshot</md-icon>
      <span class="md-list-item-text">Sensor {{ sensor.name }}</span>
      <md-list slot="md-expand">
        <md-list-item
          class="md-inset"
          v-for="(point, index) in sensor.data"
          :key="point.key"
        >
          <SensorPoint :point="point" :number="index + 1" />
        </md-list-item>
      </md-list>
    </md-list-item>
  </md-list>
</template>

<script>
import SensorPoint from './SensorPoint'

export default {
  components: {
    SensorPoint
  },
  props: {
    sensors: Array
  }
}
</script>
