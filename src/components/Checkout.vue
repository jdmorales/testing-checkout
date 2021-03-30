<template>
  <div class="checkout-component">
    <div class="wrapper-form">
      <div class="content-totals-rows">
        <div>
          <span>Total before update</span>
          <span
            id="total-before-discount"
            data-testid="total-before-discount"
            class="total-value"
          >
            {{ totalToPay }}
          </span>
        </div>
        <div>
          <span>Total after discount</span>
          <span
            id="total-to-pay"
            data-testid="total-to-pay"
            class="total-value"
          >
            {{ totalAfterDiscount }}
          </span>
        </div>
      </div>
      <form @submit.prevent="applyingDiscount">
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

const coupons = [
  {
    id: 'TESTING_DISCOUNT_25',
    discount: 25
  },
  {
    id: 'TESTING_DISCOUNT_60',
    discount: 60
  }
]

export default{
  name: 'Checkout',
  props: {
    totalToPay: {
      type: Number,
      default: 0,
    }
  },
  data(){
    return {
      coupon: '',
      totalAfterDiscount: 0,
    }
  },
  methods: {
    applyingDiscount(){
      const couponDiscount = coupons.find((couponItem) => couponItem.id === this.coupon )
      this.totalAfterDiscount = ((100 - couponDiscount.discount) / 100) * 100
    }
  }
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
  margin-bottom: 16px;
}

.content-totals-rows{
  margin-bottom: 32px;
}

.content-totals-rows > div{
  margin-bottom: 16px;
}

.total-value{
  margin-left: 16px;
}
</style>
