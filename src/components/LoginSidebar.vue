<template>
		<div class="image">
			<img class="image__illustration" src="@/assets/images/illustration.png" alt="illustration">
			<img class="image__logo text-center" src="@/assets/images/logo-login.png" alt="ordery">
		</div>
</template>

<script>
	export default {
		data () {
			return {}
		}
	};
</script>

<style lang="scss" scoped>


.image {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px 32px 32px;
	max-width: 61vw;

	&__illustration {
		width: 57vw;
		margin-bottom: 90px;
	}

	&__logo {
		width: 25vw;
		transform: translate(-50%, 0px);
		position: relative;
		left: 50%;
	}
}

</style>