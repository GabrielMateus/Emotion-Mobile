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
    const [quant, setQuant] = useState({
        a: 0,
        b: 0,
        c: 0,
    })


    const Pontuacao = () => {
        quant.a *= 10
        quant.b *= 10
        quant.c *= 10

        if (quant.a > quant.b && quant.a > quant.c) {
            setResp({
                title: "Lider Autocrata",
                text: `Governante com poder absoluto e inquestionável.
                Pessoa cujo poder não depende de nenhum outro; autócrata.
                Indivíduo que não divide seu poder com outros, agindo de maneira autoritária.`,
            });
        } else if (quant.b > quant.a && quant.b > quant.c) {
            setResp({
                title: "Lider Permissivo",
                text: `Que permite alguma coisa; que dá autorização, permissão.
                Que é tolerante com os erros e falhas dos demais; indulgente: sociedade permissiva.
                Sem controle; que é desregrado; sem firmeza; licencioso.
                Que demonstra tolerante ao que é socialmente reprovável, especialmente falando de regras comportamentais ou sociais.`,
            });
        } else if (quant.c > quant.a && quant.c > quant.b) {
            setResp({
                title: "Lider Democrata",
                text: `Que está relacionado à democracia, ao governo cujo poder é exercido pelo povo, em que os governantes são definidos através de votações: partido democrata.
                Que participa da democracia ou adota os seus princípios: parlamentar democrata.`,
            });

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
                    quarta={true}
                    questionLideranca={quant}
                />
            ) : (
                    <Resultado resp={resp} Pontuacao={Pontuacao} />
                )}
        </ScrollView>
    );

}