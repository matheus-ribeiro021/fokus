import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image source={require('./foco.png')} />
      <View style= {style.actions}>
        <Text style={style.timer}>25:00</Text>
        <Pressable style={style.button}> 
          <Text style={style.buttonText}>Começar</Text>
        </Pressable>
      </View>
    <View style={style.footer}>
      <Text style={style.footerText}>
        Projeto ficticio e sem fins comerciais. Desenvolvido por Aluno.
      </Text>
    </View>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",  
    backgroundColor: "#021123",
  },
  actions: {
    padding: 24,
    backgroundColor: "#144480",
    borderRadius: 32,
    borderWidth: 2,
    borderColor:"#144480",
    alignItems: "center",
    width: "80%",
  },
})

