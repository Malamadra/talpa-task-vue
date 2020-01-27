<template>
  <MainLayout>
    <div class="content">
      <div class="back-to-main">
        <router-link to="/">
          <md-button class="md-raised">Back to main page</md-button>
        </router-link>
      </div>
      <div v-if="!!machineId">
        <SensorsList :sensors="sensors" />
      </div>
      <div class="no-machine" v-else>
        There is no such a machine
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import { getSingleMachine } from '@/fakeData'
import SensorsList from '@/components/SingleMachine/SensorsList'

export default {
  components: {
    MainLayout,
    SensorsList
  },
  props: {
    id: String
  },
  data() {
    const { id: machineId, name, sensors } = getSingleMachine(this.id) || {}

    return {
      machineId,
      name,
      sensors
    }
  }
}
</script>

<style scoped>
.content {
  padding: 30px 0;
}

.no-machine {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.back-to-main {
  margin-bottom: 15px;
}
</style>
