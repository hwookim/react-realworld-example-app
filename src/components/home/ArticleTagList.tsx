import React, { useEffect, useState } from "react";

import $api from "../../api";

export default function ArticleTagList(): JSX.Element {
  const [, setLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);

  const loadTagList = async () => {
    const data = await $api.article.getTagList();
    setTags(data.tags);
  };

  useEffect(() => {
    setLoading(true);
    loadTagList();
    return () => setLoading(false);
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
