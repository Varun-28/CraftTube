import React from "react";
import { useUserData } from "../../context/userDataContext/userData-context";
import { Empty, CommonCard } from "../../components/Components";
import { clearHistory } from "../../context/userDataContext/history-serverCalls";
import "./history.css";

function History() {
  const {
    dataState: { history },
    dataDispatch,
  } = useUserData();

  return (
    <div>
      {history.length === 0 ? (
        <Empty emptyText="History Page" />
      ) : (
        <section className="videos-wrapper p-4">
          <div className="flex justify-between items-center">
            <h4>History</h4>{" "}
            <button className="btn btn-primary" onClick={() => clearHistory(dataDispatch)}>Clear History</button>
          </div>
          <div className="flex flex-wrap gap-2 mb-20 mt-4">
            {history.map((video) => (
              <CommonCard video={video} key={video._id} type="history" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export { History };
