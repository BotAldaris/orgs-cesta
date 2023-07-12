import { FlatList, StyleSheet, View } from "react-native";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import { TCesta } from "../../Types/Cesta";
import Item from "./Components/Item";
import Texto from "../../Components/Texto";
export default function Cesta({ topo, detalhes, itens }: TCesta) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
