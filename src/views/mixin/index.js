import store from '@/store';
import fa from 'element-ui/src/locale/lang/fa';
const { body } = document;
const WIDTH = 996;  //  小于996的时候就是移动端了
export default {
  //  生命周期-载入前
  beforeMount() {
    //  添加监听器监听页面的大小改变
    window.addEventListener('resize', this.debounce(this.$_resizeHandler, 500));
    //  添加监听器监听系统当前模式的变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.$_changeMode)
  },
  //  生命周期-销毁前
  beforeDestroy() {
    //  销毁在页面载入前加载的监听器
    window.removeEventListener('resize', this.debounce(this.$_resizeHandler, 500))
  },
  mounted() {
    this.createdTimeChange()
  },
  methods: {
    //  监听页面宽度改变的方法
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    //  当页面宽度到达指定参数后执行的方法
    async $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        await store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
        // if (isMobile) {
        //   await store.dispatch('app/closeSideBar', { withoutAnimation: true })
        // }
      }
    },
    //  防抖
    debounce(fn, wait) {
      const that = this;
      let timeout = null;
      return function() {
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(that.$_resizeHandler, wait);
      }
    },
    //  创建一个监听时间实时变化的方法
    createdTimeChange() {
      let timer = null;
      timer = setInterval(this.$_createdTime, 1000)
    },
    //  监听时间变化
    async $_createdTime() {
      await store.dispatch('app/changeTime', new Date().toLocaleString())
      // await store.dispatch('app/changtMode', new Date().getHours() > 20 ? 'black' : '')
    },
    //  监听当前模式的变化
    async $_changeMode (e) {
      const newColorScheme = e.matches ? "dark" : "light";
      await store.dispatch('app/changtMode', newColorScheme)
    }
  }
}
