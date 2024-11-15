// 


import { useState } from "react";

function Cell({ filled, onclick, isDisabled }) {
  return (
    <button
      className={filled ? "cell cell_activated" : "cell"}
      onClick={onclick}
      disabled={isDisabled}
    />
  );
}

export default function GridLight() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((originOrder) => {
        const newOrder = originOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];

    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onclick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}
