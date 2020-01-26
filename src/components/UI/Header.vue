<template>
  <div class="wrapper">
    <Container>
      <div class="content">
        logo
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/UI/Container'

export default {
  components: {
    Container
  }
}
</script>

<style scoped>
.wrapper {
  background: blue;
}

.content {
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
