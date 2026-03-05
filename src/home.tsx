import React, { useState } from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import styles from './StyleHome';

export default function Home() {

    const [mensagem, setMessage] = useState('Sua sorte de hoje é...');
    const [nome, setNome] = useState("");

    const abrir = () => {
        const numero = Math.floor(Math.random() * 10);

        const frases = [
            'Beta1',
            'Beta2',
            'Beta3',
            'Beta4',
            'Beta5',
            'Beta6',
            'Beta7',
            'Beta8',
            'Beta9',
            'Beta10',
        ];

        setMessage(frases[numero]);
    };

    return (
        <View style={styles.conteiner}>
            <Image source={require("../assets/images/guko.png")} />
            <Text style={styles.texto}>Beta</Text>
            <TextInput value={nome} onChangeText={setNome} style={styles.nome}/>
            <Button title='Abrir Guko' onPress={abrir} />
            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    );
}