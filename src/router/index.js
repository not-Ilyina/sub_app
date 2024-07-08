import Noti from "../pages/noti";
import Shop from "../pages/shop";

const noti_routes = [
    {
        path: '/noti/list',
        element: <Noti />
    },
    {
        path: '/noti/edit',
        element: <Noti />
    },
    {
        path: '/shop/list',
        element: <Shop />
    },
];

export default noti_routes