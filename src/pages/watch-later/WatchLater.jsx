import React from "react";
import { useUserData } from "../../context/userDataContext/userData-context";
import { Empty, CommonCard } from "../../components/Components";
import "./watchLater.css";

function WatchLater() {
  const {
    dataState: { watchlater },
  } = useUserData();
  return (
    <div>
      {watchlater.length === 0 ? (
        <Empty emptyText="Watch-Later Page" />
      ) : (
        <section className="videos-wrapper p-4">
          <h4>Watch-Later Videos</h4>
          <div className="flex flex-wrap gap-2 mb-20 mt-4">
            {watchlater.map((video) => (
              <CommonCard video={video} key={video._id} type="watchlater" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export { WatchLater };
