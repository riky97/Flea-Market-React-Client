import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Card } from "antd";
import { extname } from "path/posix";
import { Link } from "react-router-dom";

export function Cards({
  title,
  itemId,
  meta,
}: {
  title: string;
  itemId: string;
  meta: string;
}) {
  const visibility = React.useContext(VisibilityContext);
  const { Meta } = Card;

  const visible = visibility.isItemVisible(itemId);

  return (
    <Link to={"/announce/" + title}>
      <div className="card">
        <img
          alt="ex"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <div className="card-body">
          <h6>{title}</h6>
          <p>{meta}</p>
        </div>
      </div>
    </Link>
  );
}

/*
 <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px",
        }}
      />
    </div>
*/

/*
<section className="card-hover">
      <Card
        size="small"
        hoverable
        style={{ width: 220, marginRight: "2em" }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title={title} description={meta} />
      </Card>
      </section>*/
