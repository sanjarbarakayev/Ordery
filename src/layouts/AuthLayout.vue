<template>
  <div class="login-page">
		<login-sidebar></login-sidebar>
    <slot />
  </div>
</template>

<script>
import LoginSidebar from '@/components/LoginSidebar.vue';
export default {
  components: {
		LoginSidebar,
	}
};
</script>

<style lang="scss">
.login-page {
	display: flex;
	justify-content: space-between;
	height: 100vh;
	overflow: hidden; 
}
</style>