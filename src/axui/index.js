import AxLayout1 from './components/AxLayout'
import AxHeader1 from './components/AxHeader'
import AxTabs1 from './components/AxTabs'
import AxGridList1 from './components/AxGridList'
import AxGrid1 from './components/AxGrid'
import AxSwiper1 from './components/AxSwiper'



export  const AxHeader = AxHeader1
export  const AxGrid = AxGrid1
export  const AxLayout = AxLayout1
export  const AxTabs = AxTabs1
export  const AxGridList = AxGridList1
export  const AxSwiper = AxSwiper1


// export AxLayout from './components/AxLayout'
// export  AxHeaderfrom './components/AxHeader'
// export  AxTabs from './components/AxTabs'
// export  AxGridList from './components/AxGridList'
// export  AxGrid from './components/AxGrid'
// export  AxSwiper from './components/AxSwiper'


const components = {
    AxLayout,
    AxLayoutPage: AxLayout.AxLayoutPage,
    AxHeader,
    AxTabs,
    AxTabPane: AxTabs.AxTabPane,
    AxGrid,
    AxGridList,
    AxGridListItem: AxGridList.AxGridListItem,
    AxSwiper,
    AxSwiperItem: AxSwiper.AxSwiperItem,
}


const install = function(Vue, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Notice = Notice;
    // Vue.prototype.$Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


const API = {
    // version: process.env.VERSION, // eslint-disable-line no-undef
    // locale: locale.use,
    // i18n: locale.i18n,
    install,
    // Circle,
    // Switch,
    ...components
};

// // API.lang = (code) => {
// //     const langObject = window['iview/locale'].default;
// //     if (code === langObject.i.locale) locale.use(langObject);
// //     else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
// // };

// module.exports.default = module.exports = API; 
// export default components



