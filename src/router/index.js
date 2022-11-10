import DefaultLayout from '~/pages/Pages';
import DienThoai from './../pages/dienthoai/DienThoai';
import TaiPhone from './../pages/taiphone/TaiPhone';;


const publicRouter = [

    { path: '/', component: DefaultLayout },
    { path: '/dienthoai', component: DienThoai },
    { path: '/taiphone', component: TaiPhone },
];

export { publicRouter };
