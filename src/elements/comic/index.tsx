import { useEffect, useMemo, useState } from "react";
import { getFromApi } from "@utils/requests";

interface ComicItemProps {
  data: Item;
}

const ComicItem = ({ data }: ComicItemProps) => {
  const [image, setImage] = useState<string>();

  const nameYear = useMemo(() => {
    const yearInTitle = data?.name?.match(/\(\d{4}\)/);

    if (yearInTitle) {
      const indexOfTitle = data.name.indexOf(yearInTitle[0]);
      const year = yearInTitle[0].substring(1, 5);
      const name = `${data.name.substring(0, indexOfTitle - 1)}${data.name.substring(indexOfTitle + 6, data.name.length)}`;

      return { name, year };
    }

    return { name: data?.name, year: null };
  }, [data]);

  useEffect(() => {
    getFromApi(data.resourceURI).then((response: Comic) => {
      const results = response?.results;
      if (results?.length > 0) {
        const imageInfo = results[0]?.images;
        imageInfo?.length > 0 &&
          setImage(`${imageInfo[0].path}.${imageInfo[0].extension}`);
      }
    });
  }, [data]);

  return (
    <div className="comic-item">
      <img src={image} />
      <div className="comic-info-container">
        <div className="comic-name">{nameYear.name}</div>
        <div className="comic-year">{nameYear.year}</div>
      </div>
    </div>
  );
};

export default ComicItem;
