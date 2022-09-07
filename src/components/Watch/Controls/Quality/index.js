import React, { useEffect, useState } from "react";
import { Select } from "./Quality.styles";

function Quality({ VideoRef, hlsPlayer, levels, currentQuality }) {
  const [qualityLevels, setQualityLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(false);

  const handleChange = (e) => {
    if (hlsPlayer) {
      const { value } = e.target;
      hlsPlayer.currentLevel = value;
      setCurrentLevel(value);
    }
  };

  useEffect(() => {
    if (hlsPlayer) {
      setQualityLevels(levels);
      setCurrentLevel(-1);
    }
  }, [currentQuality, levels, hlsPlayer]);

  if (!qualityLevels) return null;
  return (
    <Select defaultValue={currentLevel} onChange={handleChange}>
      {qualityLevels.map((res, index) => {
        return (
          <option key={index} value={index}>
            {res.height}p
          </option>
        );
      })}
    </Select>
  );
}

export default Quality;
