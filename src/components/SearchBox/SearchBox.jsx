import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.searchWrap}>
      <div>
        <p className={css.text}>Find contacts by name or number</p>

        <input
          className={css.search}
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
