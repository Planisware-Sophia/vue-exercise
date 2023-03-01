<template>
  <div>
    <button @click="goPrev">Prev &larr;</button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button @click="goNext">Next &rarr;</button>
  </div>
</template>

<script setup lang="ts">
interface PaginationProps {
  page: number;
  totalPages: number;
}

const props = defineProps<PaginationProps>()
const emit = defineEmits(['goToPage'])

const goPrev = () => {
  const destPage = props.page - 1
  if (destPage > 0) {
    emit('goToPage', destPage)
  }
}

const goNext = () => {
  const destPage = props.page + 1
  if (destPage <= props.totalPages) {
    emit('goToPage', destPage)
  }
}
</script>
