import styles from "./styles.module.css";
const Skeleton = ({ count = 1, type = "banner" }) => {
    return (
        <>
            {count > 1 ? (
                <ul>
                    {Array.from({ length: count }).map((_, index) => (
                        <li key={index} className={type === "banner" ? styles.banner : styles.item}>
                            {/* You can add content here if needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item}>
                    {/* You can add content here if needed */}
                </li>
            )}
        </>
    );
}
export default Skeleton