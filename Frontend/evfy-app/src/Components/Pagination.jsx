import styles from "../styles/Pagination.module.css";
export const Pagination = ({ totalPage, page, onChange }) => {
    const pages = new Array(totalPage).fill(0).map((a, i) =>
        <button key={i} className={styles.per_page_btn} onClick={() => onChange(i + 1)} disabled={page === (i + 1)}>{i + 1}</button>
    )
    return (
        <div className={styles.pagination_div}>
            <button className={styles.btn_prev} disabled={page == 1} onClick={() => onChange(page - 1)}>Previous</button>
            {pages}
            <button className={styles.btn_next} disabled={page == totalPage} onClick={() => onChange(page + 1)}>Next</button>
        </div>
    )
}
