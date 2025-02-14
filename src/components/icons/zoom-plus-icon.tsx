import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ZoomPlusIcon = ({ size, color }: { size: number, color: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 50 50">
      <Defs>
        <ClipPath id="clipPath156">
          <Path transform="translate(-457.53 -711.69)" d="m0 1170h540v-1170h-540z"/>
        </ClipPath>
        <ClipPath id="clipPath158">
          <Path transform="translate(-467.55 -712.81)" d="m0 1170h540v-1170h-540z"/>
        </ClipPath>
      </Defs>
      <G transform="matrix(.26458 0 0 .26458 101.42 -142.99)">
        <Path
          transform="matrix(8.5087 0 0 -8.5087 -361.17 616.16)"
          d="m0 0c-3e-3 -3.479 2.813-6.308 6.292-6.318 3.483-0.011 6.32 2.82 6.321 6.309 1e-3 3.478-2.824 6.305-6.301 6.307s-6.309-2.824-6.312-6.298m17.263-13.306c-0.671 0.11-1.146 0.523-1.607 0.99-1.503 1.523-3.022 3.029-4.535 4.542-0.051 0.051-0.096 0.107-0.15 0.169-2.526-1.436-5.149-1.722-7.867-0.708-1.959 0.732-3.471 2.033-4.51 3.845-2.114 3.685-1.373 8.295 1.756 11.094 3.14 2.809 7.827 3.03 11.224 0.563 3.43-2.49 4.905-7.587 2.327-11.873 0.141-0.128 0.295-0.26 0.437-0.402 1.413-1.409 2.818-2.826 4.239-4.226 0.469-0.462 0.902-0.934 1.028-1.608v-0.564c-0.016-0.062-0.033-0.123-0.049-0.185-0.212-0.812-0.716-1.34-1.527-1.57-0.082-0.023-0.164-0.045-0.245-0.067z"
          clipPath="url(#clipPath156)"
          fill={color}
        />
        <Path
          transform="matrix(8.5087 0 0 -8.5087 -275.87 606.59)"
          d="m0 0v-2.041h-2.667v-2.688h-2.057v2.665c-0.098 4e-3 -0.174 0.01-0.251 0.01-0.744 1e-3 -1.488 5e-3 -2.233-3e-3 -0.163-2e-3 -0.209 0.048-0.207 0.209 9e-3 0.549 0.01 1.098 0 1.647-3e-3 0.168 0.056 0.206 0.212 0.204 0.738-7e-3 1.474-3e-3 2.211-3e-3h0.259v2.665c0.076 0.01 0.13 0.023 0.185 0.023 0.564 2e-3 1.127-3e-3 1.691 5e-3 0.157 2e-3 0.193-0.055 0.192-0.201-5e-3 -0.744-2e-3 -1.489-2e-3 -2.233v-0.259z"
          clipPath="url(#clipPath158)"
          fill={color}
        />
      </G>
    </Svg>
  )
};

export default ZoomPlusIcon;
