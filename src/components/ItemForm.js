import { useRef } from "react";
import { css } from "@emotion/css";

const buttonPrimary = css`
  background-color: #8596db;
  color: #fff;

  &:hover {
    background-color: #8d9fe8;
  }
`;

function ItemForm({ item, onChange, onSubmit, variant }) {
  const ref = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.focus();
  };

  return (
    <form onSubmit={onSubmit} variant="regular">
      <input
        ref={ref}
        name="name"
        type="text"
        placeholder="Enter the item name"
        value={item.name}
        onChange={(e) => {
          onChange({ ...item, name: e.currentTarget.value });
        }}
      />
      <textarea
        name="description"
        type="text"
        placeholder="Enter description"
        value={item.description}
        onChange={(e) => {
          onChange({ ...item, description: e.currentTarget.value });
        }}
      />

      <button
        onClick={variant !== "regular" ? handleClick : null}
        className={buttonPrimary}
        type="submit"
      >
        {variant === "regular" ? "Add" : "Edit"}
      </button>
    </form>
  );
}

export default ItemForm;
