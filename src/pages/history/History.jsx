import React from "react";
import { useUserData } from "../../context/userDataContext/userData-context";
import { Empty, CommonCard } from "../../components/Components";
import "./history.css";
import { useHistoryServerCalls } from "../../context/userDataContext/useHistoryServerCalls";

function History() {
  const {
    dataState: { history },
  } = useUserData();
  const { clearHistory } = useHistoryServerCalls();

  return (
    <div>
      {history.length === 0 ? (
        <Empty emptyText="History Page" />
      ) : (
        <section className="videos-wrapper p-4">
          <div className="flex justify-between items-center">
            <h4>History</h4>{" "}
            <button className="btn btn-primary" onClick={() => clearHistory()}>
              Clear History
            </button>
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
