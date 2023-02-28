import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

import NewBg1 from "../../../src/assets/news_bg1.svg"

const news = [
    {
        background: NewBg1,
        date: "Dec 31 2022",
        title: "2022 - A pivotal year for Strike X"
    },
    {
        background: NewBg1,
        date: "Dec 31 2022",
        title: "2022 - A pivotal year for Strike X"
    },
    {
        background: NewBg1,
        date: "Dec 31 2022",
        title: "2022 - A pivotal year for Strike X"
    },
    {
        background: NewBg1,
        date: "Dec 31 2022",
        title: "2022 - A pivotal year for Strike X"
    }
]

const LatestNews = () => {
  return (
    <div className="latest__news">
      <h3>Latest News</h3>
      <div className="news flex__one">
        {news?.map((news, idx) => (
          <div
            className="new"
            key={idx}
            style={{ background: news.background }}
          >
            <div className="news__body">
              <span>{news.date}</span>
              <h5>{news.title}</h5>
              <Link href="">
                Read News <BiChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
