import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

export function useCotas() {
  const store = useCounterStore()

  const cotas = ref<Cota[]>([
    { message: 'Selecionar', value: 20, selected: false },
    { message: 'Selecionar', value: 50, selected: false },
    { message: 'Selecionar', value: 100, selected: false },
    { message: 'Selecionar', value: 300, selected: false },
    { message: 'Selecionar', value: 1000, selected: false },
    { message: 'Selecionar', value: 2000, selected: false }
  ])

  function toggleSelected(item: Cota) {
    cotas.value.forEach((c) => {
      c.selected = false
    })

    item.selected = true
    store.count += item.value
  }

  return {
    cotas,
    toggleSelected
  }
}