import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? ".3" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    getItemById,
    //getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    //const prevItem = getPrevItem();
    //scrollToItem(prevItem?.entry?.target, "smooth", "start");
    // OR
    scrollToItem(
      getItemById(visibleItemsWithoutSeparators.slice(-3)[0]),
      "smooth",
      "end"
    );
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler}>
      <LeftOutlined style={{ fontSize: "10em" }} />
    </Arrow>
  );
}

export function RightArrow() {
  const {
    getItemById,
    //getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    //const nextItem = getNextItem();
    //scrollToItem(nextItem?.entry?.target, "smooth", "end");
    // OR
    scrollToItem(
      getItemById(visibleItemsWithoutSeparators[2]),
      "smooth",
      "start"
    );
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler}>
      <RightOutlined />
    </Arrow>
  );
}
