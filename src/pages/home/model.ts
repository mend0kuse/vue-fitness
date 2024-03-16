import { createEvent, createStore } from 'effector'

export const incremented = createEvent()
export const $count = createStore(0)

$count.on(incremented, (count) => count + 1)
