import React from 'react';
import { listItemsFooter } from '../../../services/api';

export default function ItemsFooterHome() {
  return (
    <div className="list-col">
      {listItemsFooter.map((itemCol) => {
        return (
          <div key={itemCol[0]} className="list-item">
            {itemCol.map((item) => {
              return (<p key={item}>{item}</p>);
            })}
          </div>
        );
      })}
    </div>
  );
}
