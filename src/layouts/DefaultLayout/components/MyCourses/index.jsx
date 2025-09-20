import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./MyCourses.module.scss";
import course1 from "../../../../assets/images/mc1.png"
import course2 from "../../../../assets/images/mc2.png"
import course3 from "../../../../assets/images/mc3.png"

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (!isOpen) return

        const handleClose = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClose);

        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    })
    return (
            <div className={styles.wrapper} ref={wrapperRef}>
                <button className={styles.button} onClick={handleToggle}>Khóa học của tôi</button>
                {isOpen && (
                    <div className={styles.wrapperDrop}>
                        <div className={styles.header}>
                            <h6 className={styles.headerTitle}>Khóa học của tôi</h6>
                            <Link className={styles.seeAllText}>Xem tất cả</Link>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.item}>
                                <Link><img className={styles.imgCourse} src={course1} alt="" /></Link>
                                <div className={styles.courseInfo}>
                                    <h3 className={styles.courseTitle}>Lập Trình JavaScript Nâng Cao</h3>
                                    <p className={styles.lastTime}>
                                        Bạn chưa học khóa này
                                    </p>
                                    <div className={styles.process}>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Link><img className={styles.imgCourse} src={course2} alt="" /></Link>
                                <div className={styles.courseInfo}>
                                    <h3 className={styles.courseTitle}>HTML CSS từ Zero đến Hero</h3>
                                    <p className={styles.lastTime}>
                                      Bạn chưa học khóa này
                                    </p>
                                    <div className={styles.startText}>
                                        Bắt đầu học
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Link><img className={styles.imgCourse} src={course3} alt="" /></Link>
                                <div className={styles.courseInfo}>
                                    <h3 className={styles.courseTitle}>Fullstack Web</h3>
                                    <p className={styles.lastTime}>
                                        Học cách đây 2 ngày trước
                                    </p>
                                    <div className={styles.startText}>
                                        Bắt đầu học
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>

    )
}

export default MyCourses;