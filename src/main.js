import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import VueAnalytics from 'vue-analytics';

// Vue.use(VueAnalytics, {
//     id: 'your-GA-tracking-code',
//     // `router` is required to track routes within the app
//     router,
//     debug: {
//         // Only enable debug mode on non-production environments
//         enabled: process.env.NODE_ENV !== 'production',
//         // Only send events to Google Analytics on production
//         sendHitTask: process.env.NODE_ENV === 'production',
//     },
// });

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
