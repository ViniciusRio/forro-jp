<script setup lang="ts">
import { useAgendaStore } from '@/stores/agendaStore'
import type { Day, DayFilter } from '@/features/agenda/types'

const store = useAgendaStore()

const props = defineProps<{
  days: Day[]
}>()

function handleFilter(filter: DayFilter) {
  store.setFilter(filter)
}

function isActive(filter: DayFilter) {
  return store.activeFilter === filter
}
</script>

<template>
  <div class="day-filter">
    <button :class="['filter-btn', { active: isActive('all') }]" @click="handleFilter('all')">
      Todos os dias
    </button>

    <button
      :class="['filter-btn', 'today-btn', { active: isActive('today') }]"
      @click="handleFilter('today')"
    >
      Hoje
    </button>

    <button
      v-for="day in props.days"
      :key="day.id"
      :class="['filter-btn', { active: isActive(day.id) }]"
      @click="handleFilter(day.id)"
    >
      {{ day.label.split('-')[0] }}
    </button>
  </div>
</template>

<style scoped>
.day-filter {
  display: flex;
  gap: 6px;
  padding: 0 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.day-filter::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  flex-shrink: 0;
  padding: 5px 14px;
  border-radius: 20px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  color: #6b7280;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.filter-btn:hover {
  border-color: #16a34a;
  color: #16a34a;
}

.filter-btn.active {
  background: #16a34a;
  border-color: #16a34a;
  color: #fff;
}

.filter-btn.today-btn {
  border-color: #7c3aed;
  color: #7c3aed;
}

.filter-btn.today-btn.active {
  background: #7c3aed;
  border-color: #7c3aed;
  color: #fff;
}
</style>
