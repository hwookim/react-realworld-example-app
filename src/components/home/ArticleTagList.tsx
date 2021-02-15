import React, { useEffect, useState } from "react";

import $api from "../../api";

export default function ArticleTagList(): JSX.Element {
  const [tags, setTags] = useState<string[]>([]);

  const loadTagList = async () => {
    const data = await $api.article.getTagList();
    setTags(data.tags);
  };

  useEffect(() => {
    loadTagList();
  }, []);

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <a href="" className="tag-default tag-pill" key={tag}>
          {tag}
        </a>
      ))}
    </div>
  );
}
