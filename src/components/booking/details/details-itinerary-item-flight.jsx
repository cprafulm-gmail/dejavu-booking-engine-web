import React from "react";
import Date from "../../../helpers/date";

const ItineraryItemFlight = (props) => {
  return props.items.map((item, key) => {
    var departure = item.item[0];
    var arrival = item.item[item.item.length - 1];

    return (
      <div key={key}>
        <article className="packages-grid-item-flight" key={key}>
          <div className="packages-grid-l packages-grid-flight0">
            <figure className="packages-grid-item-icon">
              <svg x={"0px"} y={"0px"} viewBox={"0 0 512 512"}>
                <g>
                  <g>
                    <path d="M423.125,36.86l-0.8-7.6c-1.6-15.6-14.4-27.6-30.4-28.8l-6.4-0.4c-19.2-0.8-38,6.4-51.6,20l-64,63.6l-209.6-0.4    c-17.6,0-34.8,7.2-47.6,20l-8.8,8.8c-2.8,2.8-4,7.6-3.2,11.6c1.2,4,4,7.2,8,8.4l166.8,45.6l-38.8,38.8l-70.4,2.4    c-7.2,0-14,2.8-19.2,8.4l-6.8,6.8c-2.8,2.8-4,7.2-3.2,11.2c1.2,4,4,6.8,7.6,8.4l89.6,34l36,92.8c1.6,4,5.2,6.8,9.2,7.2    c4,0.4,7.6-0.8,10.4-4l7.2-7.2c4.8-4.8,7.6-11.2,8.4-19.2l2.4-70.8l39.2-38.4l45.2,167.2c1.2,4,4.4,7.2,8.4,8.4    c1.2,0.4,2,0.4,3.2,0.4c3.2,0,6.4-1.2,8.8-3.6l8.8-8.8c12.8-12.8,20-30,20-48v-209.6l62-62.4    C418.325,77.26,425.525,56.86,423.125,36.86z M392.325,80.46l-64.8,64.8c-1.6,1.6-2.4,3.6-2.4,5.6v212.8c0,14-5.6,26.8-15.2,36.8    l-4,4l-47.6-173.2c-0.8-2.8-2.8-4.8-5.6-5.6c-0.8,0-1.2-0.4-2-0.4c-2,0-4,0.8-5.6,2.4l-51.2,50.4c-1.6,1.6-2.4,3.2-2.4,5.6    l-2.4,73.6c0,2.4-0.8,6-3.6,8.4l-2.8,2.8l-34.8-90c-0.8-2-2.4-3.6-4.8-4.4l-86.8-33.2l2.4-2.4c1.2-1.2,4.4-3.6,8.4-3.6l74-2.4    c2,0,4-0.8,5.2-2.4l50.8-50.8c2-2,2.8-4.8,2-7.6c-0.8-2.8-2.8-4.8-5.6-5.6l-173.6-47.6l4-4c9.6-9.6,22.8-15.2,36.4-15.2l212.8,0.4    c2,0,4-0.8,5.6-2.4l66.4-66c10.4-10.4,24.8-16,39.6-15.2l6.4,0.4c8,0.4,14.4,6.8,15.2,14.4l0.8,7.6    C408.725,54.06,403.525,69.26,392.325,80.46z" />
                  </g>
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </figure>
            <div>
              <h2>Flight</h2>
            </div>
          </div>

          <div className="packages-grid-r packages-grid-flight1">
            <figure className="packages-grid-item-img">
              <img src={departure.images[0].url} alt="" />
            </figure>

            <div>
              <b>
                {
                  departure.vendors.filter((x) => x.code === "airline")[0].item
                    .name
                }
              </b>
            </div>
          </div>
          <div className="packages-grid-r packages-grid-flight2">
            <div>
              <b>
                {departure.locationInfo.fromLocation.name
                  ? departure.locationInfo.fromLocation.name.split(",")[0]
                  : departure.locationInfo.fromLocation.id}
              </b>
              <span>
                <i className="display-date">
                  (<Date date={departure.dateInfo.endDate} />)
                </i>
                &nbsp;
                <Date date={departure.dateInfo.endDate} format="shortTime" />
              </span>
            </div>
          </div>
          <div className="packages-grid-r packages-grid-flight3">
            <div>
              <span className="packages-grid-flightline" />
              <span>
                {item.tpExtension.find((x) => x.key === "stops").value === "0"
                  ? "nonstop"
                  : item.tpExtension.find((x) => x.key === "stops").value +
                    " Stop"}
              </span>
            </div>
          </div>
          <div className="packages-grid-r packages-grid-flight4">
            <div>
              <b>
                {arrival.locationInfo.toLocation.name
                  ? arrival.locationInfo.toLocation.name.split(",")[0]
                  : arrival.locationInfo.toLocation.id}
              </b>
              <span>
                <Date date={arrival.dateInfo.endDate} format="shortTime" />
                &nbsp;
                <i className="display-date">
                  (<Date date={arrival.dateInfo.endDate} />)
                </i>
              </span>
            </div>
          </div>
          <div className="change-item-btn">
            <button onClick={props.handleItemChange}>Change Flight</button>
          </div>
        </article>
      </div>
    );
  });
};

export default ItineraryItemFlight;
