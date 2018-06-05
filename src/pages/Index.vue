<template>
  <div>
    <navbar-menu></navbar-menu>
    <card></card>
  </div>
</template>

<script>
import NavbarMenu from '@/components/Navbar'
import Card from '@/components/Card'
export default {
  name: 'index',
  components: {
    NavbarMenu,
    Card
  }
}
</script>

<style scoped>
</style>
