<template>
  <div class="main-layout-wrapper">
    <Header />
    <div class="content-wrapper">
      <Container>
        <slot />
      </Container>
    </div>
  </div>
</template>

<script>
import Header from '@/components/UI/Header'
import Container from '@/components/UI/Container'

export default {
  components: {
    Header,
    Container
  }
}
</script>

<style lang="scss" scoped>
  @import '~vue-material/dist/theme/engine';
  .main-layout-wrapper {
  min-width: 300px;
}

.content-wrapper {
  background: md-get-palette-color(grey, 200);
  min-height: calc(100vh - 65px);
}
</style>
