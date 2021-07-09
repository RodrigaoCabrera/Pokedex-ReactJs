import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsSvg";
import { usePokemon } from "../../Context/PokemonContext";

const Pagination = () => {
  const { page, setPage, totalPage } = usePokemon();

  const nextPage = () => {
    setPage(Math.min(page + 1, totalPage - 1));
  };

  const lastPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  return (
    <div className="d-flex justify-content-end px-3 py-3">
      <button className="btn btn-dark rounded-circle" onClick={lastPage}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div className="align-self-center mx-2">
        {page + 1} de {totalPage}
      </div>
      <button className="btn btn-dark rounded-circle" onClick={nextPage}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
