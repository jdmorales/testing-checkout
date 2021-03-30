<template>
  <div class="checkout-component">
    <div class="wrapper-form">
      <form>
        <div class="form-group">
          <label for="coupon-input">Enter a coupon</label>
          <input
            id="coupon-input"
            v-model="coupon"
            type="text"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Checkout',
  data(){
    return {
      coupon: ''
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.checkout-component{
  display: flex;
  justify-content: center;
}

.wrapper-form{
  background-color: #f0efef;
  padding: 32px;
  border-radius: 8px;
}

.form-group{
  display: flex;
  flex-direction: column;
}
</style>
