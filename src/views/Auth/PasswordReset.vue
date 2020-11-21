<template>
	<div class="login-page">
		<login-sidebar></login-sidebar>
		<div class="login-form">
			<div class="login-form__title">
				<h3 class="login-form__title-text">Parolni tiklash</h3>
			</div>
			<form action="" method="">
				<label class="input__label" for="psw">Yangi parolni kiriting</label>
				<input class="input input__psw" type="password" name="psw" required />
				<label class="input__label" for="psw"
					>Yangi parolni qayta kiriting</label>
				<input class="input input__psw" type="password" name="psw" required />
				<span v-if="passworMatches" class="input__error">Kiritilgan parollar bir xil bo’lishi lozim, Qayta urinib ko’ring!</span>
				<button class="login-btn">KIRISH</button>
			</form>
			<div class="any-problem">
				<h4>Muammo bormi?</h4>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			passworMatches: false
		};
	},
};
</script>

<style lang="scss" scoped>
*:focus {
    outline: none;
}
.login-page {
	display: flex;
	justify-content: space-between;
	height: 100vh;
	overflow: hidden;
}
.login-form {
	background-color: #e7f3fe;
	width: 39vw;
	height: 100vh;
	padding: 0 34px;
	position: relative;
	&__title {
		padding: 55px 188px 70px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__title-text {
		font-weight: 500;
		font-size: 22px;
		line-height: 0.65;
		letter-spacing: 0.045em;
		color: #333;
		white-space: nowrap;
	}

	&__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
form {
	display: flex;
	flex-direction: column;
}
.input {
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.25);
	border-radius: 10px;
	width: 100%;
	height: 90px;
	margin-bottom: 20px;
	padding: 30px 40px;
	font-weight: 500;
	font-size: 22px;
	color: #333;

	&__label {
		font-weight: normal;
		font-size: 18px;
		line-height: 0.525;
		color: #333;
		margin-bottom: 10px;
	}

	&__error {
		font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 1.16;
	color: #FF8B8B;
	margin-bottom: 25px;
}
}
.login-btn {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 27vw;
	height: 6.25vw;
	background: #00cccc;
	box-shadow: 0px 4px 4px rgba(170, 170, 170, 0.25),
		inset 0px 4px 4px rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	font-weight: 500;
	font-size: 24px;
	line-height: 0.7;
	letter-spacing: 0.045em;
	color: #fff;
}
.any-problem {
	transform: translate(-50%, 0px);
	position: absolute;
	bottom: 35px;
	left: 50%;
}
.any-problem h4 {
	text-align: center;
}
</style>