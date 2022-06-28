<template>
<div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
      </modal>
</div>
</template>
<script>
import Modal from '../components/modal_window.vue';

export default {
  components: {
    Modal,
  },
  data: () => ({
    isShowModal: false,
  }),
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
new Vue({
        el: "#app",
        data: {
          showModal: false
        }
      }),
        methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>