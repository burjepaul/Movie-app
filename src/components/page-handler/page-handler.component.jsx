import './page-handler.styles.css'

export default function PageHandler({page, setPage}) {

  return (
    <div className="page-handler">
      <div className="arrow" onClick={() => {page > 1 ? setPage(page-1): setPage(1)}}>
        &#10094;
      </div>
      <div className="value">{page}</div>
      <div className="arrow" onClick={() => {setPage(page+1)}}>
        &#10095;
      </div>
    </div>
  );
}
