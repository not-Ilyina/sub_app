import React from "react";
const RemoteButton = React.lazy(() => import('home/Button'));

const Shop = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <RemoteButton />
            </React.Suspense>
            Shop Page
        </div>
    );
}

export default Shop;
