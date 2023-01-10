export const routes = [
  { path: '/', component: () => import('./IndexView.vue') },
  { path: '/sheet', component: () => import('./DigitalCharacterSheetView.vue')}
]