<script setup lang="ts">
import { useAgendaStore } from '@/stores/agendaStore';
import { S } from 'vue-router/dist/options-C8M2qFcl.cjs';

	const store = useAgendaStore();

</script>

<template>
  <main class="agenda-list">
    <div
      v-for="day in store.filteredDays"
      :key="day.id"
      class="day-section">
      <div class="day-header"></div>

    </div>
  </main>
</template>

<style></style>
