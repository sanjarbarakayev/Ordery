<template>
  <div>
    <nav class="top-navbar">
      <ul class="top-menu">
        <router-link
          tag="li"
          class="top-menu__item"
          to="/"
        >
          <div class="top-menu__item-img">
            <img src="@/assets/images/calendar-current-icon.svg" alt="calendar-current-icon" />
          </div>
          <div class="top-menu__item-text">
            <h3>Hozirgi</h3>
          </div>
        </router-link>
        <router-link
          tag="li"
          class="top-menu__item"
          to="/todays-clients"
        >
          <div class="top-menu__item-img">
            <img src="@/assets/images/calendar-todays-icon.svg" alt="calendar-todays-icon" />
          </div>
          <div class="top-menu__item-text">
            <h3>Bugungi</h3>
          </div>
        </router-link>
        <router-link
          tag="li"
          class="top-menu__item"
          to="/all-clients"
        >
          <div class="top-menu__item-img">
            <img src="@/assets/images/calendar-all-icon.svg" alt="calendar-all-icon" />
          </div>
          <div class="top-menu__item-text">
            <h3>Barchasi</h3>
          </div>
        </router-link>
        <router-link
          tag="li"
          class="top-menu__item"
          to="/old-clients"
        >
          <div class="top-menu__item-img">
            <img src="@/assets/images/calendar-olds-icon.svg" alt="calendar-olds-icon" />
          </div>
          <div class="top-menu__item-text">
            <h3>Eskilari</h3>
          </div>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: #F6FFFF !important;
  box-shadow: 0px 0px 50px rgba(205, 205, 205, 0.18), inset 0px 4px 4px rgba(14, 109, 109, 0.18);
}

</style>