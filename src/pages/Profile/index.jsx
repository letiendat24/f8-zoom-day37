import styles from "./Profile.module.scss";
import avatarDefault from "../../assets/images/Profile_avatar_placeholder_large.png"
import { useEffect, useState } from "react";
function Profile() {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewUrl);
        }
    }, [previewUrl]);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewUrl = URL.createObjectURL(image);
        setPreviewUrl(previewUrl);
    }
    return (
        <div className={styles.container}>
            <label>
                <input type="file" hidden onChange={handleChange} />
                <img className={styles.avatar} src={previewUrl || avatarDefault} alt="" />
            </label>
        </div>
    )
}
export default Profile;