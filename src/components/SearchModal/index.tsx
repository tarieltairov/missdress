import { FC } from "react";
import InputUI from "../UI/Input";
import styles from "./searchModal.module.scss";
import { useAppDispatch } from "../../core/hooks/redux";
import { setSearch } from "../../core/redux/dataSlice";

interface SerachModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: any) => void;
}

const SearchModal: FC<SerachModalProps> = () => {
  const dispatch = useAppDispatch();

  const onSearch = (text: string) => {
    // console.log(text);

    dispatch(setSearch(text));
  };

  return (
    <div className={styles.search}>
      <InputUI
        placeholder="Поиск"
        background="#F1DAC5"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchModal;
