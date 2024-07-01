import css from "../SearchBox/SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.search} type="text" />
    </div>
  );
};

export default SearchBox;
