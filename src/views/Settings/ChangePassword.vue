<template>
        <div class="info">
          <h3 class="info__title">Parolni o’zgartirish</h3>
          <div class="info__item">
            <label class="info__item-label">Eski parolni kiriting</label
            ><br />
            <input
              type="password"
              class="info__item-input"
            /><br />
            <span v-if="oldPasswordError" class="info__item-error">Eski parol xato kirildi</span>
          </div>
          <div class="info__item">
            <label class="info__item-label">Yangi parolni kiriting</label
            ><br />
            <input
              type="password"
              class="info__item-input"
            /><br />
          </div>
          <div class="info__item">
            <label class="info__item-label">Yangi parolni qayta kiriting</label
            ><br />
            <input
              type="password"
              class="info__item-input"
            /><br />
            <span v-if="PasswordMatchError" class="info__item-error">Yangi parol maydonlari bir bo’lishi lozim!</span>
          </div>
          <button class="save-btn">Saqlash</button>
        </div>
</template>

<script>
export default {
  data() {
    return {
      oldPasswordError: false,
      PasswordMatchError: false
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