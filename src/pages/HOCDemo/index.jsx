import { useState } from "react";
import UserProfile from "../../components/UserProfile";
import ProductList from "../../components/ProductList";
import styles from "./HOCDemo.module.scss";
function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false)

    return (
        <div>
            <div className={styles.content}>
                <UserProfile isLoading={userLoading} />
                <ProductList isLoading={productLoading} />
            </div>
            <div className={styles.button}>

                <button onClick={() => setUserLoading(!userLoading)}>Toggle User</button>
                <button onClick={() => setProductLoading(!productLoading)}>Toggle Product</button>
            </div>
        </div>
    )


}

export default HOCDemo;