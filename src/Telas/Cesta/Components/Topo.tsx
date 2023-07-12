import Texto from "../../../Components/Texto";
import { Dimensions, Image, StyleSheet } from "react-native";
import { TTopo } from "../../../Types/Cesta";
import topo from "../../../../assets/topo.png"
const width = Dimensions.get("screen").width;
export default function Topo({titulo}:TTopo ) {
  return (
    <>
      <Image source={topo} style={estilos.topo}></Image>
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    padding: 16,
    lineHeight: 26,
  },
});
