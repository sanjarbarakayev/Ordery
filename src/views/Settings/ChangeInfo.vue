<template>
  <div class="info">
    <h3 class="info__title">Shaxsiy ma’lumotlarni o’zgartirish</h3>
    <div class="info__item">
      <label class="info__item-label">Ismni o’zgartirish</label><br />
      <input type="text" class="info__item-input" value="Boltaboy" /><br />
    </div>
    <div class="info__item">
      <label class="info__item-label">Familiyani o’zgaritirish</label><br />
      <input type="text" class="info__item-input" value="Teshaboyev" /><br />
    </div>
    <div class="info__item">
      <label class="info__item-label">Sharfni o’zgartirish</label><br />
      <input
        type="text"
        class="info__item-input"
        value="Arrajon o’g’li"
      /><br />
    </div>
    <button class="save-btn">Saqlash</button>
  </div>
</template>

<script>
export default {};
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