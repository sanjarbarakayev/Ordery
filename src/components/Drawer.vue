<template>
  <div>
    <aside class="aside">
      <div class="aside__inner">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="ordery" />
        </div>
        <nav class="aside-navbar">
          <ul class="aside-menu">
            <router-link tag="li" class="aside-menu__item" to="change-info">
              <div class="aside-menu__item-img">
                <img src="@/assets/images/user-icon.svg" alt="user-icon" />
              </div>
              <div class="aside-menu__item-text">
                <h3>Shaxsiy ma`lumotlar</h3>
              </div>
            </router-link>
            <router-link tag="li" class="aside-menu__item" to="/change-phone">
              <div class="aside-menu__item-img">
                <img src="@/assets/images/phone-icon.svg" alt="phone-icon" />
              </div>
              <div class="aside-menu__item-text">
                <h3>Mobil raqamni o`zgartirish</h3>
              </div>
            </router-link>
            <router-link tag="li" class="aside-menu__item" to="/change-password">
              <div class="aside-menu__item-img">
                <img src="@/assets/images/settings-icon.svg" alt="settings-icon" />
              </div>
              <div class="aside-menu__item-text">
                <h3>Parolni ozgartirish</h3>
              </div>
            </router-link>
            <router-link tag="li" class="aside-menu__item help" to="/help">
              <div class="aside-menu__item-img help__img">
                <img src="@/assets/images/info-icon.svg" alt="info-icon" />
              </div>
              <div class="aside-menu__item-text help__text">
                <h3>Yordam</h3>
              </div>
            </router-link>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
