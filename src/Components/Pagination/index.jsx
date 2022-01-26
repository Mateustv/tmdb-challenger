import styles from './styles.module.scss'

const siblingsCount = 1

function generatePagesArray(from, to) {
  return [new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}


export function Pagination({
  lastPage,
  currentPage = 1,
  onPageChange,
}) {

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []


  return (
    <section className={styles.paginationContent}>
      <div className={styles.pagination}>
        {currentPage > (1 + siblingsCount) && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>
            {currentPage > (2 + siblingsCount) &&
              <span> {'<'} </span>}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <button onClick={() => onPageChange(page)} key={page}>{page}</button>
        })}

        <button onClick={() => onPageChange(currentPage)}>{currentPage}</button>

        {nextPages.length > 0 && nextPages.map(page => {
          return (<button onClick={() => onPageChange(page)} key={page}>{page}</button>)
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage &&
              <span>{' > '}</span>}
            <button onClick={() => onPageChange(lastPage)}>Ultima</button>
          </>

        )}
      </div>
    </section>
  )
}