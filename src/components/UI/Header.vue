<template>
  <div class="wrapper">
    <Container>
      <div class="content"></div>
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

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.wrapper {
  background: md-get-palette-color(blue, 300);
}

.content {
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
