<template>
  <div class="current-client-page">
    <div class="client-info">
      <div class="client-info__title">
        <h3>Hozirgi mijoz haqida ma’lumot</h3>
      </div>
      <div class="client-info__list">
        <div class="client-info__item" v-for="(item, l) in list" :key="l">
          <div class="client-info__item-img">
            <img :src="item.img" :alt="item.text" />
          </div>
          <div class="client-info__item-text">
            <p>{{ item.text }}</p>
          </div>
        </div>
        <div class="client-info__item">
          <div class="client-info__item-img">
            <img src="@/assets/images/file-icon.svg" alt="file_icon" />
          </div>
          <div class="client-info__item-text user-msg">
            <p>Qabulga yozilish davomida qo`shimcha nimadir yozishi mumkin</p>
          </div>
        </div>
      </div>
    </div>
    <div class="widgets">
      <div class="number">
        <p>16</p>
      </div>
      <div class="qr">
        <img src="@/assets/images/qrcode.png" alt="qr" />
      </div>
      <button class="next-btn">Keyingisi</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {
          img: require("@/assets/images/user-functions-icon.svg"),
          text: "Isoyev Erkin Ergash o`g`li",
        },
        {
          img: require("@/assets/images/calendar-icon.svg"),
          text: "10.03.1999, 21 yosh",
        },
        { img: require("@/assets/images/gender-icon.svg"), text: "Erkak" },
        {
          img: require("@/assets/images/phone-icon.svg"),
          text: "+998(99) 609-70-87",
        },
        {
          img: require("@/assets/images/location-icon.svg"),
          text: "Toshkent v. Chirchiq sh.",
        },
      ],
    };
  },
};
</script>