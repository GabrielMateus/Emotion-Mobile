import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native";
import { data } from "./data";
import Question from "../../components/Questions";
import Resultado from "../../components/Resultado";

export default function AskPersonalidade() {
    const [choose, setChoose] = useState(0);
    const [questao, setQuestao] = useState(data);
    const [pontuacao, setPontuacao] = useState(0);
    const [resp, setResp] = useState(null);

    const Pontuacao = () => {
        console.log(pontuacao);
        if (pontuacao < 15) {
            setResp({
                title: "Perfil de Dominância ",
                textVoce: "Eu sei o que eu quero!",
                text: `
      O profissional dominante possui maior facilidade em lidar com desafios, é firme, objetivo e demonstra muita força de vontade, mas, em compensação, costuma ser criticado por amedrontar os colegas de trabalho.`,
            });
        } else if (pontuacao < 20) {
            setResp({
                title: "Perfil de Influência",
                text: `"Juntos somos mais fortes!" 
        O profissional influente normalmente é carismático e animado, 
        porém pode ser mal visto dentro da empresa por acabar falando demais. 
        Profissionais influentes são pessoas mais emocionais e com grande poder de persuasão. Suas características predominantes são: 
        entusiasmo, persuasão, comunicação efetiva e otimismo.`,
            });
        } else if (pontuacao < 25) {
            setResp({
                title: "Perfil de Estabilidade",
                text: ` "Prefiro uma abordagem mais calma". 
        O profissional estável tende a ser gentil e simpático mas tem dificuldade de dizer não. São pessoas que lidam melhor com as rotinas e padrões.`,
            });
        } else {
            setResp({
                title: "Perfil Condescendente",
                text: ` "Gosto de fazer as coisas do jeito certo!"
         O profissional condescendente é detalhista, confiável e organizado, mas também pode ser considerado centralizador. 
         São pessoas que possuem maior facilidade em lidar com regras e processos.`,
            });
        }
    };

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
                />
            ) : (
                    <Resultado resp={resp} Pontuacao={Pontuacao} />
                )}
        </ScrollView>
    );
}