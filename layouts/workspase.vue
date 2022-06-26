<template>
  <div class="home">
    <!-- <Modal
      v-show="isShowModal2"
      :show="isShowModal2"
      :scrollable="true"
      header-id="modalHeader"
      body-id="modalBody"
      @close="toggleModal"
    >
      <template #header>
        Наши правила по работе
      </template>
      <template #body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
          doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
          quos rem, rerum sapiente sed temporibus velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
          doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
          quos rem, rerum sapiente sed temporibus velit.
        </p>
      </template>
    </Modal> -->
    <button @click="toggleModal">
      Open Modal
    </button>
  </div>
</template>
<script>
//import Modal from '../components/modal_window.vue';
//import Modal from '@/components';
//const Modal = require('Modal')

export default {
  //components: { Modal },
  //components: {
   // Modal,
 // },
  data: () => ({
    isShowModal: false,
  }),
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>