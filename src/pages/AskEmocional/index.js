import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native";
import { data } from './data'
import Question from "../../components/Questions";
import Resultado from "../../components/Resultado";

export default function AskEmocional({ navigation }) {
    const [choose, setChoose] = useState(0);
    const [questao, setQuestao] = useState(data);
    const [pontuacao, setPontuacao] = useState(0);
    const [resp, setResp] = useState(null);

    const Pontuacao = () => {
        console.log(pontuacao);
        console.log(resp);
        if (pontuacao <= 10) {
            setResp({
                title: "Seu grau de empatia e relacionamentos não é bom",
                textVoce: "Voce Precisa Melhorar!",
                text: `Procure compartilhar mais seus sentimentos e idéias Acredite que melhorar seus relacionamentos não é difícil, mas exige trabalho persistente,
                 e muita disponibilidade para o outro. Procure aprender com todas as experiências,
                 mesmo que sejam negativas, evitando repetir situações que promovam frustrações.`,
            });
        } else if (pontuacao <= 20) {
            setResp({
                title: "Inteligencia Emocional muita Baixa",
                text: `"Voce Precisa Melhorar!" 
                Seu grau de empatia e relacionamentos não é bom. 
                Procure ouvir mais e falar menos. Saiba gostar até mesmo de particularidades que outras pessoas apresentam e que você critica..`,
            });
        } else if (pontuacao <= 30) {
            setResp({
                title: "Sua INTELIGÊNCIA EMOCIONAL precisa “deslanchar”",
                text: ` "Converse um pouco mais consigo mesmo, ouça o que os outros dizem com sinceridade de você. Treine seus sentimentos de empatia e aprenda a observar com mais respeito os defeitos de outras pessoas.`,
            });
        } else if (pontuacao <= 40) {
            setResp({
                title: "Sua INTELIGÊNCIA EMOCIONAL é bastante desenvolvida",
                text: ` "mas se você aprender a observar atentamente as pessoas poderá desenvolvê-la ainda mais.`,
            });
        } else {
            setResp({
                title: "Sua INTELIGÊNCIA EMOCIONAL é bastante alta",
                text: `Você não deve ter dificuldades para fazer amigos, e nem de relacionar-se com os outros de forma bem harmoniosa e produtiva`,
            })
        }
    }

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            {choose <= 9 ? (
                <Question
                    item={questao[0][`quest${choose}`]}
                    setChoose={setChoose}
                    choose={choose}
                    alternativa={4}
                    pontuacao={pontuacao}
                    setPontuacao={setPontuacao}
                    navigation={navigation}
                />
            ) : (
                    <Resultado resp={resp} Pontuacao={Pontuacao} />
                )}
        </ScrollView>
    );

}