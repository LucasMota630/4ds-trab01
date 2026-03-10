import React, { useState } from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import styles from './StyleHome';

export default function Home() {

    const [nome1, setNome1] = useState("");
    const [nome2, setNome2] = useState("");
    const [nome3, setNome3] = useState("");
    const [nome4, setNome4] = useState("");

    return (
        <View style={styles.conteiner}>
            <Image source={require("../assets/images/guko.png")} style={styles.image} />
            <Text style={styles.texto}>Cadastro</Text>

            <TextInput value={nome1} onChangeText={setNome1} placeholder="Nome" style={styles.nome}/>
            <TextInput value={nome2} onChangeText={setNome2} placeholder="E-mail" style={styles.nome}/>
            <TextInput value={nome3} onChangeText={setNome3} placeholder="Telefone" style={styles.nome}/>
            <TextInput value={nome4} onChangeText={setNome4} placeholder="Senha" style={styles.nome}/>

            <View style={styles.butao}>
                <Button title="Cadastrar"/>
            </View>
        </View>
    );
}