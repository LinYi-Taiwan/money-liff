import styles from "./index.module.scss";

function EntryBox({ children }) {
    return (
        <>
            <div className={styles.box}>{children}</div>
        </>
    );
}

export default EntryBox;
