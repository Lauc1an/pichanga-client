import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ChatIcon = ({ color, size }: { color: string; size: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10">
      <Defs>
        <ClipPath id="clipPath7987">
          <Path d="m-375.52 1099.4h540v-1170h-540z" />
        </ClipPath>
        <ClipPath id="clipPath7993">
          <Path d="m-382.94 1095.9h540v-1170h-540z" />
        </ClipPath>
      </Defs>
      <G transform="translate(-124.88 -151.23)">
        <Path
          transform="matrix(.37284 0 0 -.37289 131.36 157.69)"
          d="m0 0c0.013 0.882-0.658 1.595-1.525 1.621-0.842 0.025-1.588-0.7-1.601-1.557-0.013-0.867 0.686-1.581 1.556-1.588 0.86-8e-3 1.557 0.669 1.57 1.524m-9.53 0.042c-1e-3 0.868-0.718 1.588-1.571 1.58-0.858-9e-3 -1.557-0.73-1.549-1.601 7e-3 -0.859 0.692-1.542 1.551-1.545 0.876-4e-3 1.57 0.689 1.569 1.566m3.194-1.567c0.862-6e-3 1.584 0.698 1.593 1.554 8e-3 0.838-0.724 1.582-1.568 1.593-0.84 0.01-1.576-0.717-1.585-1.568-0.011-0.856 0.697-1.573 1.56-1.579m-8.794-4.311c-0.864 0.994-1.497 2.067-1.863 3.29-0.833 2.788-0.304 5.319 1.476 7.591 1.33 1.696 3.082 2.802 5.107 3.497 1.657 0.569 3.366 0.777 5.101 0.624 3.268-0.289 6.083-1.533 8.185-4.132 1.495-1.848 2.107-3.977 1.758-6.337-0.266-1.799-1.115-3.333-2.366-4.637-1.775-1.852-3.936-3.005-6.466-3.445-0.472-0.082-0.96-0.104-1.441-0.105-3.58-8e-3 -7.16-6e-3 -10.74 1e-3 -0.209 0-0.441 0.031-0.621 0.126-0.44 0.233-0.5 0.792-0.144 1.209 0.519 0.608 1.05 1.206 1.576 1.808 0.141 0.162 0.279 0.325 0.438 0.51"
          clipPath="url(#clipPath7987)"
          fill={color}
        />
        <Path
          transform="matrix(.37284 0 0 -.37289 134.13 156.39)"
          d="m0 0c0.51-0.598 1.011-1.186 1.512-1.774 0.107-0.125 0.217-0.248 0.321-0.377 0.198-0.248 0.248-0.519 0.122-0.818-0.128-0.302-0.37-0.47-0.677-0.478-0.784-0.021-1.57-7e-3 -2.343-7e-3 -0.104 0.676-0.166 1.333-0.31 1.971-0.518 2.301-1.76 4.171-3.559 5.659-2.877 2.381-6.22 3.309-9.92 3.063-1.169-0.078-2.306-0.318-3.488-0.694 0.03 0.184 0.04 0.326 0.077 0.462 0.628 2.337 2.101 4.02 4.139 5.231 2.185 1.297 4.561 1.778 7.088 1.536 2.519-0.242 4.737-1.168 6.571-2.932 1.198-1.153 2.019-2.538 2.341-4.183 0.442-2.26-0.103-4.297-1.465-6.133-0.128-0.172-0.263-0.338-0.409-0.526"
          clipPath="url(#clipPath7993)"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default ChatIcon;
