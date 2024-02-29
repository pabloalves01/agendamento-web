<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <header
        class="flex justify-between p-4 border-b border-gray-300 font-semibold"
      >
        <span class="font-semibold">{{ title }}</span>
        <button @click="closeModal"><X :size="16"/></button>
      </header>
      <div class="px-6 py-10"><slot></slot></div>
      <hr />
      <div class="px-6 py-2">
        <button
          class="close-button bg-cinza text-white py-2 px-4 rounded-lg"
          @click="emitAction"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { X } from "lucide-vue-next";

export default {
  components: {
    X,
  },
  props: {
    isVisible: Boolean,
    title: String,
  },

  methods: {
    closeModal() {
      this.$emit("update:isVisible", false);
    },
    emitAction() {
      this.$emit('action');
    }
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  /* padding: 20px; */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 700px; /* Largura máxima */
  max-height: 80%; /* Altura máxima */
  overflow: auto; /* Faz o conteúdo ser rolável */
}

.close-button {
  display: block;
}
</style>
