import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { State } from "../entities/state";
import { Visibility as VisibilityEntity } from "../entities/visibility";

import { VisibilityAction, setVisibility } from "../actions/visibility";

import VisibilitySelect from "../components/VisibilitySelect";

interface VisibilityProps {
  visibility: VisibilityEntity;
  dispatch: Dispatch<VisibilityAction>;
}

const Visibility: React.FC<VisibilityProps> = ({ visibility, dispatch }) => {
  const handleVisibilityChange = useCallback(
    (visibility: VisibilityEntity) => {
      dispatch(setVisibility(visibility));
    },
    [dispatch]
  );

  return (
    <VisibilitySelect
      visibility={visibility}
      handleVisibilityChange={handleVisibilityChange}
    />
  );
};

const mapStateToProps = (state: State) => ({
  visibility: state.visibility
});

export default connect(mapStateToProps)(Visibility);
