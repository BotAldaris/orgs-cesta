import { ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
interface Iprop {
  children: ReactNode;
  style: TextStyle;
}
export default function Texto(props: Iprop) {
  let estilo = estilos.texto;
  if (props.style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  }
  return <Text style={[props.style, estilo]}>{props.children}</Text>;
}
const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
