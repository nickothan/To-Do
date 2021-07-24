import { useDispatch } from "react-redux";
import { setFilter } from "../../app/Slice/filterSlice";
import { filters } from "../../consts";

import { FilterContainer } from "./styles";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      {[
        {
          filter: filters.ALL,
          label: "All",
        },
        {
          filter: filters.IN_PROGRESS,
          label: "In progress",
        },
        {
          filter: filters.COMPLETED,
          label: "Completed",
        },
      ].map(({ filter, label }) => (
        <button
          className="btn"
          key={Math.random() * 3}
          onClick={() => dispatch(setFilter(filter))}
        >
          {label}
        </button>
      ))}
    </FilterContainer>
  );
}
