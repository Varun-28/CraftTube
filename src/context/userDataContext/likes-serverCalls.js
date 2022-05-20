import axios from "axios";

const getLikes = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { likes },
    } = await axios.get("/api/user/likes", {
      headers: { authorization: token },
    });
    dataDispatch({ type: "LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

const addToLikes = async (video, dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: { authorization: token },
      }
    );
    dataDispatch({ type: "LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

const removeFromLikes = async (videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("userToken");
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: token },
    });
    dataDispatch({ type: "LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

export { getLikes, addToLikes, removeFromLikes };
