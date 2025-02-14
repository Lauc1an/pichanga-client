import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import Colors from "@/src/utils/Colors";

const ArrowMessageIcon = () => {
  return (
    <Svg viewBox="0 0 50 50" width="20" height="20">
      <Defs>
        <ClipPath id="clipPath21">
          <Path transform="translate(-446.86 -51.574)" d="m0 1170h540v-1170h-540z" />
        </ClipPath>
      </Defs>
      <G transform="matrix(.26458 0 0 .26458 -156.91 -390.61)">
        <Path
          transform="matrix(6.8111 0 0 -6.8111 607.19 1565.5)"
          d="m0 0c-0.437 1.713-0.868 3.388-1.292 5.065-0.251 0.991-0.519 1.979-0.727 2.979-0.208 0.999 0.138 1.847 0.908 2.495 0.786 0.662 1.706 0.834 2.657 0.448 2.829-1.149 5.644-2.334 8.465-3.505 4.626-1.918 9.251-3.836 13.876-5.754 1.145-0.476 1.785-1.392 1.78-2.538-4e-3 -1.13-0.641-2.044-1.762-2.509-7.348-3.052-14.702-6.09-22.042-9.161-1.818-0.761-3.316 0.21-3.778 1.466-0.206 0.563-0.202 1.133-0.057 1.704 0.641 2.515 1.285 5.03 1.928 7.543 0.012 0.049 0.034 0.095 0.062 0.169h0.47c3.047 0 6.094 3e-3 9.141-4e-3 0.412-1e-3 0.73 0.124 0.877 0.522 0.197 0.537-0.162 1.059-0.739 1.075-0.565 0.016-1.129 5e-3 -1.695 5e-3h-7.604z"
          clipPath="url(#clipPath21)"
          fill={Colors.maastrichtBlue}
        />
      </G>
    </Svg>
  )
};

export default ArrowMessageIcon;
