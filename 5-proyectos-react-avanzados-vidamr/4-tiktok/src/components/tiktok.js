import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import useItems from "./useItems";

import "./tiktok.css";
import TiktokVideo from "./tiktokVideo";

export default function TikTok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [response, data, isLoading] = useFetch(url, "json");
  const [items] = useItems(data);

  useEffect(() => {
    setUrl("http://localhost:4000/page/" + page);
  }, [page]);

  function nextVideo() {
    if (index + 2 === items.length) {
      // carga más vídeos
      setPage(page + 1);
    } else {
      setIndex(index + 1);
    }
  }
  function prevVideo() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div>{isLoading ? "Cargando..." : ""}</div>
      <button disabled={isLoading} onClick={() => nextVideo()}>
        Next Video
      </button>
      <button disabled={isLoading} onClick={() => prevVideo()}>
        Prev Video
      </button>
      <div className="tiktoksContainerView">
        <div
          className="tiktoksContainer"
          style={{ transform: `translateY(${-1 * index * 960 + "px"})` }}
        >
          {items?.map((item, i) => (
            <TiktokVideo key={item.id} item={item} current={index === i} />
          ))}
          <Videos items={items} index={index} />
        </div>
      </div>
    </div>
  );
}

const Videos = React.memo(({ items, index }) => {
  return (
    <>
      {items?.map((item, i) => (
        <TiktokVideo key={item.id} item={item} current={index === i} />
      ))}
    </>
  );
});
