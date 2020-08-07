<template>
  <div class="home">
    <!-- <h1>Home</h1> -->

    <transition name="fade">
      <div class="container-row">
        <div class="items item1"></div>
        <div class="items item2"></div>
        <div class="items item3">
          <img src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg" alt />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",
      ],
      imgIndex: 0,
    };
  },

  mounted: function () {
    // this.autoChange();
  },
  methods: {
    autoChange() {
      setInterval(() => {
        this.imgIndex = (this.imgIndex + 1) % this.images.length;
      }, 3000);
    },
  },
  computed: {
    imgSrc: function () {
      return this.images[this.imgIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #e2e2e2;
.home {
  background: $color-primary;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 0.7;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 100%;
  width: 100%;
}

.container-row {
  display: flex;
  width: 100%;
  .items {
    border: 1px solid chocolate;
    height: 400px;
    margin-left: 4px;
  }
  .item1 {
    flex-basis: 20%;
    background: url("https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg");
    background-position: center;
  }
  .item2 {
    flex-basis: 60%;
  }
  .item3 {
    flex-basis: 20%;
  }
}
</style>
