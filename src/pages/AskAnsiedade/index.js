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
        if (pontuacao <= 20) {
            setResp({
                title: "Nível de estresse baixo",
                text: `Nível de estresse de baixo normal em relação ao padrão habitual, 
                mostrando que consegue atingir seus objetivos com satisfação e prudência, 
                não prejudicando resultados facilitando com mais frequência os resultados positivos nos relacionamentos e mantendo a saúde em níveis adequados a ótimo`,
            });
        } else if (pontuacao <= 30) {
            setResp({
                title: "Nível de estresse Médio",
                text: `Nível de estresse e ansiedade considerados médio (normal) em relação ao padrão habitual,
                 uma vez que as atividades cotidianas trazem uma necessidade de investir energia e nem sempre todos os resultados são perfeitamente atingíveis em todo o tempo`,
            });
        } else if (pontuacao <= 40) {
            setResp({
                title: "Nível de estresse acima do Normal",
                text: `Nível de estresse e ansiedade acima do normal (importante ter compensações de lazer e diminuir as preocupações diárias para evitar um acúmulo e desgaste,
                     prejudicando seus relacionamentos e sua saúde)`,
            });
        } else{
            setResp({
                title: "Alto nível de estresse",
                text: `Alto nível de estresse e ansiedade (busque avaliação e tente diminuir suas tensões com maior distração
                     e lazer para compensar os efeitos nocivos do estresse e da ansiedade em sua vida)`,
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
                />
            ) : (
                    <Resultado resp={resp} Pontuacao={Pontuacao} />
                )}
        </ScrollView>
    );

}