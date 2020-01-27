<template>
  <div class="content">
    <div class="md-layout md-gutter">
      <div
        v-for="machine in machines"
        :key="machine.id"
        class="md-layout-item md-large-size-33 md-xlarge-size-33 md-medium-size-50 md-xsmall-size-100"
      >
        <md-card>
          <md-card-header>
            <div class="md-title">{{ machine.name }}</div>
            <md-card-media-actions>
              <img src="../../assets/orange-car.png" alt="" class="image" />
            </md-card-media-actions>
          </md-card-header>
          <md-card-content>
            Last known position:
            <div>latititude: {{ machine.lastKnownPosition.latitude }}</div>
            <div>longtitude: {{ machine.lastKnownPosition.longitude }}</div>
          </md-card-content>
          <md-card-actions>
            <md-button
              class="md-accent"
              @click="removeMachine(machine.id)"
              :disabled="removingDisabled"
            >
              Remove
            </md-button>
            <md-button class="md-primary">Details</md-button>
          </md-card-actions>
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
  },
  methods: {
    removeMachine(id) {
      this.machines = this.machines.filter(machine => machine.id !== id)
    }
  },
  computed: {
    removingDisabled() {
      return this.machines.length <= 1
    }
  }
}
</script>

<style scoped>
.content {
  padding: 30px 0;
}

.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;
}

.md-card-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.image {
  height: 140px;
  width: 210px;
}
</style>
