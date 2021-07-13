import React from "react";
import DiscordHomeLogo from "../../Assets/Images/DiscordHomeLogo";
import theme from "../../theme";

function Header(): JSX.Element {
  return (
    <div style={{ background: "blue" }}>
      <DiscordHomeLogo fill={theme.colors.white} />
    </div>
  );
}

export default Header;
