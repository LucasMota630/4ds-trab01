import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#2f4f4f',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        },

    texto: { 
        color: 'white',
        fontSize: 40,
        marginBottom: 20,
        marginTop: 20,
    },
    nome: {
    borderWidth: 1,
    borderColor: "#4b0082",
    color: "white",
    backgroundColor: "#4b0082" ,
    padding: 8,
    fontFamily: "sans-serif",
    fontSize: 25,
    marginBottom: 15,
    width: "80%",
    height: 70 ,
    textAlign: "center",
    },
    butao: {
    padding: 8,
    fontFamily: "sans-serif",
    marginBottom: 15,
    width: "80%",
    height: 70 ,
    textAlign: "center",
    },
    image: {
    width: 150, // Dimensão 1
    height: 150, // Dimensão 2 (igual à largura)
    borderRadius: 75, // Metade da dimensão (100/2)
    borderWidth: 2, // Opcional: borda
    borderColor: '#4b0082', // Opcional: cor da borda
  },
})

export default styles