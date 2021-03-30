<template>
  <div class="checkout-component">
    <div class="wrapper-form">
      <div>
        <div>
          <span>Total before update</span>
          <span data-testid="total-before-discount">0</span>
        </div>
        <div>
          <span>Total after discount</span>
          <span data-testid="total-to-pay">0</span>
        </div>
      </div>
      <form>
        <div class="form-group">
          <label for="coupon-input">Enter a coupon</label>
          <input
            id="coupon-input"
            v-model="coupon"
            type="text"
          >
        </div>
        <button
          type="submit"
          role="button"
        >
          Apply coupon
        </button>
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
