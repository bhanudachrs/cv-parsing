import React from "react";
import { colors } from "../../styles/theme";
import { ToggleDiv ,ToggleDivWrap} from "./style";

const ToggleSwitch = ({
  isOn,
  handleToggle,
  onColor,
  id,
  option1,
  option2,
}: any) => {
  return (
    <ToggleDivWrap>
    <ToggleDiv>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={id}>
        <span
          style={{
            background: isOn ? colors.white : colors.base,
            color: isOn ? colors.black : '#B6B2CC',
            marginLeft:'2px'

          }}
          className={`react-switch-button`}
        >
          {option1}
        </span>

        <span
          style={{
            background: isOn ? colors.base : colors.white,
            color: isOn ? '#B6B2CC' : colors.black ,
            marginRight:'2px'
          }}
          className={`react-switch-button`}
        >
          {option2}
        </span>
      </label>
    </ToggleDiv>
    </ToggleDivWrap>
  );
};

export default ToggleSwitch;
