import { css } from "@emotion/css";

import ItemForm from "./ItemForm";

const buttonSecondary = css`
  background-color: #31354c;
  color: #b9bcc9;
  margin-bottom: 60px;

  &:hover {
    background-color: #3a3f5a;
  }
`;

function ItemList({ items, onChange }) {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <ItemForm
              item={item}
              variant="item"
              onChange={(item) => {
                onChange(
                  items.map((s, j) => {
                    return j === i ? item : s;
                  })
                );
              }}
            />
            <div>
              <button
                className={buttonSecondary}
                onClick={() => {
                  onChange(
                    items.filter((_, j) => {
                      return j !== i;
                    })
                  );
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
