import React, { useEffect, useState } from "react";

import $api from "../../api";

export default function ArticleTagList(): JSX.Element {
  const [, setLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);

  const loadTags = async () => {
    const data = await $api.article.getTags();
    setTags(data.tags);
  };

  useEffect(() => {
    setLoading(true);
    loadTags();
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
