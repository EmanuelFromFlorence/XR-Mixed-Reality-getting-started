import { XRCanvas } from "@coconut-xr/natuerlich/defaults";

const cssStyle = {
  touchAction: "none",
  overscrollBehavior: "none",
  userSelect: "none",
  position: "absolute",
  inset: 0,
} as const;

export default function Index() {
  return <XRCanvas style={cssStyle}>
    
  </XRCanvas>;
}
