<template>
  <div class="container">
    <stock-head />
    <div class="row">
      <div class="col-xs-12">
      <transition name="slide" appear>
        <router-view />
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "stock-head": Header
  }
};
</script>

<style>
body {
  padding: 30px;
}

.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-out 0.6s ease-out forwards;
  position: absolute;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.6s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-720px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(720px);
  }

  75% {
    transform: translateX(-20px);
  }

  87.5% {
    transform: translateX(10px) rotateY(10deg);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
