import React, { useCallback } from "react";
import { Visibility } from "../entities/visibility";

import Link from "./Link";

interface VisibilitySelectProps {
  visibility: Visibility;
  handleVisibilityChange: (visibility: Visibility) => void;
}

const VisibilitySelect: React.FC<VisibilitySelectProps> = ({
  visibility,
  handleVisibilityChange
}) => {
  const setVisibilityAll = useCallback(() => {
    handleVisibilityChange(Visibility.ALL);
  }, [handleVisibilityChange]);

  const setVisibilityActive = useCallback(() => {
    handleVisibilityChange(Visibility.ACTIVE);
  }, [handleVisibilityChange]);

  const setVisibilityCompleted = useCallback(() => {
    handleVisibilityChange(Visibility.COMPLETED);
  }, [handleVisibilityChange]);

  return (
    <div>
      Show:&nbsp;
      <Link
        selected={visibility === Visibility.ALL}
        text="All"
        onClick={setVisibilityAll}
      />
      {", "}
      <Link
        selected={visibility === Visibility.ACTIVE}
        text="Active"
        onClick={setVisibilityActive}
      />
      {", "}
      <Link
        selected={visibility === Visibility.COMPLETED}
        text="Completed"
        onClick={setVisibilityCompleted}
      />
    </div>
  );
};

export default VisibilitySelect;
