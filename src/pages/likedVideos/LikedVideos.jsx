import React from "react";
import { useUserData } from "../../context/userDataContext/userData-context";
import { Empty, CommonCard } from "../../components/Components";
import "./likedVideos.css";

function LikedVideos() {
  const {
    dataState: { likes },
  } = useUserData();
  return (
    <div>
      {likes.length === 0 ? (
        <Empty emptyText="Likes Page" />
      ) : (
        <section className="videos-wrapper p-4">
          <h4>Liked Videos</h4>
          <div className="flex flex-wrap gap-2 mb-20 mt-4">
            {likes.map((video) => (
              <CommonCard video={video} key={video._id} type="like" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export { LikedVideos };
