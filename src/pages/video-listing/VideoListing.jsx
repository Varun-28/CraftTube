import React from "react";
import { useVideo } from "../../context/videoContext/video-context";
import { Loading, VideoCards } from "../../components/Components";
import { useTheme } from "../../context/themeContext/theme-context";
import "./videoListing.css";

function VideoListing() {
  const { theme } = useTheme();
  const { videosCategory, videoCategoryHandler, filteredVideos } = useVideo();
  const videoHandler = (e) => {
    if (e.target.checked) {
      videoCategoryHandler(e.target.value);
    }
  };
  return (
    <div>
      <div
        className={`category-options ${
          theme.isLight ? "category-options-light" : "category-options-dark"
        }`}
      >
        <label
          className={`radio-label ${
            videosCategory.category === "all" && "radio-checked"
          }`}
          htmlFor="all"
        >
          <input
            type="radio"
            id="all"
            value="all"
            name="video-category"
            onChange={videoHandler}
          />
          All
        </label>
        <label
          className={`radio-label ${
            videosCategory.category === "craft" && "radio-checked"
          }`}
          htmlFor="craft"
        >
          <input
            type="radio"
            id="craft"
            value="craft"
            name="video-category"
            onChange={videoHandler}
          />
          Craft
        </label>
        <label
          className={`radio-label ${
            videosCategory.category === "science-experiments" && "radio-checked"
          }`}
          htmlFor="science-experiments"
        >
          <input
            type="radio"
            id="science-experiments"
            value="science-experiments"
            name="video-category"
            onChange={videoHandler}
          />
          Science
        </label>
        <label
          className={`radio-label ${
            videosCategory.category === "life-hacks" && "radio-checked"
          }`}
          htmlFor="life-hacks"
        >
          <input
            type="radio"
            id="life-hacks"
            value="life-hacks"
            name="video-category"
            onChange={videoHandler}
          />
          Life
        </label>
        <label
          className={`radio-label ${
            videosCategory.category === "smart-parenting-hacks" &&
            "radio-checked"
          }`}
          htmlFor="smart-parenting-hacks"
        >
          <input
            type="radio"
            id="smart-parenting-hacks"
            value="smart-parenting-hacks"
            name="video-category"
            onChange={videoHandler}
          />
          Parenting
        </label>
      </div>

      <div className="videos-wrapper flex flex-wrap mb-20 mt-4">
        {filteredVideos.length === 0 ? (
          <Loading />
        ) : (
          filteredVideos.map(
            ({
              _id,
              title,
              description,
              creator,
              categoryName,
              creatorLogo,
              thumbnail,
            }) => (
              <VideoCards
                key={_id}
                _id={_id}
                title={title}
                description={description}
                creator={creator}
                categoryName={categoryName}
                creatorLogo={creatorLogo}
                thumbnail={thumbnail}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export { VideoListing };
