import { Text, StyleSheet, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { LayoutStyles } from "@/src/utils/Styles";
import Colors from "@/src/utils/Colors";
import ChildPage from "@/src/components/layouts/child-page";
import { useAuthContext } from "@/src/context/Auth";

const Terms = () => {
  const { config } = useAuthContext();
  const { width } = useWindowDimensions();
  const termsHml = config.terms;

  return (
    <ChildPage style={{ paddingBottom: 70 }}>
      <Text style={LayoutStyles.pageTitle}>TÉRMINOS Y CONDICIONES</Text>
      <RenderHtml
        contentWidth={width * 0.8}
        source={{ html: termsHml }}
      />
    </ChildPage>
  );
};

export default Terms;

const styles = StyleSheet.create({
  content: {
    color: Colors.maastrichtBlue,
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    marginBottom: 10,
    textAlign: "justify",
  },
});
