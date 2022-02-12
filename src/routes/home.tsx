import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { Cards } from "../component/announce/card";
import { LeftArrow, RightArrow } from "../component/home/arrows";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const eleMeta = "price";
const getId = (index: number) => `${elemPrefix}${index}`;
const getMeta = (index: number) => `${eleMeta}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind), metas: getMeta(ind) }));
/*const getItemsClot = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind), metas: getMeta(ind) }));*/

const checkLogged = (item: any) => {
  if (item === undefined) {
    return false;
  } else {
    return true;
  }
};

function Home() {
  const [items] = React.useState(getItems);
  // const [itemsClo] = React.useState(getItemsClot);
  const cookies = new Cookies();
  const session: any = cookies.get("session");

  return (
    <>
      <section className="home-main-text">
        <h5>
          Welcome,{" "}
          {checkLogged(session) ? session.name : "nice to have you here."}
        </h5>
        <h6>Continue your navigation to discover more announce!</h6>
      </section>
      <div className="example" style={{ paddingTop: "60px" }}>
        <div className="horizzontal-scroll-title">
          <h5>best appliance product with more observations</h5>
          <span className="show-more">
            {" "}
            <Link className="show-more-link" to="/best_product/appliance">
              show more
            </Link>
          </span>
        </div>

        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {items.map(({ id, metas }) => (
              <Cards
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                meta={metas}
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div className="horizzontal-scroll-title">
          <h5>best clothing with more observations</h5>
          <span className="show-more">
            {" "}
            <Link className="show-more-link" to="/best_product/clothing">
              show more
            </Link>
          </span>
        </div>

        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {items.map(({ id, metas }) => (
              <Cards
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                meta={metas}
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div className="horizzontal-scroll-title">
          <h5>best photo and video with more observations</h5>
          <span className="show-more">
            {" "}
            <Link className="show-more-link" to="/best_product/photovideo">
              show more
            </Link>
          </span>
        </div>

        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {items.map(({ id, metas }) => (
              <Cards
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                meta={metas}
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div className="horizzontal-scroll-title">
          <h5>best hobby with more observations</h5>
          <span className="show-more">
            {" "}
            <Link className="show-more-link" to="/best_product/hobby">
              show more
            </Link>
          </span>
        </div>

        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {items.map(({ id, metas }) => (
              <Cards
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                meta={metas}
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default Home;
/*
onWheel={onWheel}
function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

/*
<div>
        {(() => {
          const options = [];

          for (let i = 1; i <= 6; i++) {
            options.push(
              <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                <div
                  style={{
                    width: "10em",
                    height: "2em",
                    backgroundColor: "#ddd",
                  }}
                ></div>
              </ScrollMenu>
            );
          }

          return options;
        })()}
      </div>*/
