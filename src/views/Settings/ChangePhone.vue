<template>
		<div class="info">
			<h3 class="info__title">Mobil raqamni o’zgartirish</h3>
			<div class="info__item">
				<label class="info__item-label">Mobil raqam</label><br />
				<input type="text" class="info__item-input" value="+998996097087" disabled="disabled"/><br />
			</div>
			<div class="info__item">
				<label class="info__item-label">Yangi raqam</label><br />
				<input type="number" class="info__item-input" placeholder="+998995556677"/><br />
				<span v-if="phoneError" class="info__item-error">Bunday raqam tizimda mavjud!</span>
			</div>
			<div class="info__item">
				<label class="info__item-label">Tasdiqlash kodini kiriting</label><br />
				<input type="number" class="info__item-input" placeholder="XXXX"/><br />
				<span v-if="codeError" class="info__item-error">Tasdiqlash kodi xato kiritildi! Qayta urinib ko’ring.</span>
			</div>
			<button class="save-btn">Saqlash</button>
		</div>
</template>

<script>
export default {
	data() {
	return {
		phoneError: false,
		codeError: false,
	};
	},
};
</script>

<style lang="scss">
.v-application .info {
	background-color: #fff !important;
	border-color: #fff !important;
}
.info[data-v-7a6eb280] {
    margin: 0 !important;
}
</style>