<template>
    <div class="login-form">
      <div class="login-form__title">
        <h3 class="login-form__title-text">Parolni tiklash</h3>
      </div>
      <form action="" method="">
        <label class="input__label" for="phone"
          >Mobil raqamingizni kiriting</label
        >
        <input
          class="input input__phone"
          type="tel"
          placeholder="XX XXX XX XX"
          name="phone"
          required
        />
        <span v-if="phoneError" class="input__phone-error input__error"
          >Tizimda bunday mobil raqam mavjud emas, qayta urinib ko’ring!</span
        >
        <label class="input__label" for="psw">Tasdiqlash kodini kiriting</label>
        <input class="input input__code" type="number" name="code" required />
        <span v-if="codeError" class="input__phone-error input__error"
          >Tasdiqlash kodi xato kiritildi, qayta urinib ko’ring</span
        >
        <router-link tag="button" :to="{name: 'password-reset'}" class="login-btn"
          >Davom etish</router-link
        >
      </form>
      <div class="any-problem">
        <a>Muammo bormi?</a>
      </div>
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

  &__code {
    width: 60%;
  }
  &__error {
    font-weight: normal;
    font-size: 18px;
    line-height: 1;
    color: #ff8b8b;
    margin-bottom: 20px;
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
.any-problem a {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.045em;
  color: #333333;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>