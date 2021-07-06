interface MictoEvent {
  type: string
  actions?: any
}
const microMessage = (events: MictoEvent) => {
  console.log('🚀 ~ file: handle-config.ts ~ line 6 ~ message ~ events', events)
}
// const { entrys } = require(`./${process.env.NODE_ENV}`)
// const url = process.env.VUE_APP_MICRO_URL
export const handleConfig: any = {
  pro_lowcode_flow_front: {
    name: 'vue3',
    props: { microMessage, targetName: 'asd' },
  },
}

export const PORT: any = {
  pro_lowcode_flow_front: 5555,
}
