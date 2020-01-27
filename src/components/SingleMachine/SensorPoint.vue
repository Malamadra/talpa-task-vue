<template>
  <div>{{ number }}) value: {{ point.value }}, date: {{ date }}</div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    point: Object,
    number: Number
  },
  data() {
    const date = format(this.point.timestamp, 'dd/MM/yyyy')

    return {
      date
    }
  }
}
</script>
