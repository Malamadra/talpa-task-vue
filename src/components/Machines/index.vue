<template>
  <div>
    <ul v-for="machine in machines" :key="machine.id">
      <li>{{ machine.id }}}</li>
    </ul>
  </div>
</template>

<script>
import { machines } from '@/fakeData'

export default {
  data() {
    return {
      machines
    }
  }
}
</script>
