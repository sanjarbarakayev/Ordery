<template>
		<div class="login-form">
			<div class="login-form__title">
				<h3 class="login-form__title-text">TIZIMGA KIRISH</h3>
			</div>
			<form action="" method="">
				<label class="input__label" for="phone">Mobil raqamingizni kiriting</label>
				<input class="input input__phone" type="tel" placeholder="XX XXX XX XX" name="phone" required>
				<label class="input__label" for="psw">Parolni kiriting</label>
				<input class="input input__psw" type="password" name="psw" required>
				<span class="forgot-psw"><router-link tag="a" :to="{name: 'password-recovery'}">Parolni unutdingizmi?</router-link></span>
				<button class="login-btn">KIRISH</button>
			</form>
			<div class="any-problem">
				<a>Muammo bormi?</a>
			</div>
		</div>
</template>

<script>

export default {
	
}
</script>

<style lang="scss" scoped>
.login-form {
	background-color: #E7F3FE;
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

	&__inner{
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
	background: #FFFFFF;
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
}
.forgot-psw {
	text-align: end;
	margin-bottom: 30px;
}

.forgot-psw a {
	font-weight: normal;
	font-size: 16px;
	line-height: 0.475;
	letter-spacing: 0.045em;
	color: #333;
	text-decoration: none;
}

.login-btn {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 27vw;
	height: 6.25vw;
	background: #00CCCC;
	box-shadow: 0px 4px 4px rgba(170, 170, 170, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	font-weight: 500;
	font-size: 24px;
	line-height: 0.7;
	letter-spacing: 0.045em;
	color: #FFF;
}
.any-problem {
	transform: translate(-50%, 0px);
	position: absolute;
	bottom: 35px;
	left: 50%;
}
.any-problem a {
	font-weight: 500;
	font-size: 18px;
	line-height: 1.16;
	letter-spacing: 0.045em;
	color: #333333;
	cursor: pointer;
}
</style>