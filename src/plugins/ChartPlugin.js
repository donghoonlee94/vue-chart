import Chart from 'chart.js';

export default {
  // install 함수는 vue에서 제공, prototype 에 $_Chart 을 넣고 전역에서 사용할 수 있다.
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}