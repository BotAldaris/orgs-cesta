import { Image, StyleSheet, View, FlatList } from "react-native";
import Texto from "../../../Components/Texto";
interface IItem {
  item: {
    nome: string;
    imagem: any;
  };
}
export default function Item({ item: { nome, imagem } }: IItem) {
  return (
    <View key={nome} style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    alignItems: "center",
    gap: 11,
    paddingVertical: 16,
    marginHorizontal:16
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    color: "#464646",
  },
});
