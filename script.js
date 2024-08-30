const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   [
    {
        "enunciado": "Assim que você saiu da escola, deparou-se com uma nova tecnologia que permite monitorar e otimizar o consumo de energia em sua casa. Qual o primeiro pensamento?",
        "alternativas": [
            {
                "texto": "Isso é incrível! Vou explorar como posso reduzir meu impacto ambiental.",
                "afirmacao": "Ficou entusiasmado em usar a tecnologia para melhorar a eficiência energética e reduzir sua pegada ecológica."
            },
            {
                "texto": "Isso é complexo! Não sei como começar a usar essa tecnologia.",
                "afirmacao": "Sentiu-se intimidado pela complexidade da tecnologia e não sabia como integrá-la em sua rotina."
            }
        ]
    },
    {
        "enunciado": "Com a descoberta dessa tecnologia de monitoramento de energia, seu professor de ciências decidiu criar um projeto sobre a redução de pegada ecológica usando novas tecnologias. Qual atitude você toma?",
        "alternativas": [
            {
                "texto": "Utiliza a tecnologia de monitoramento para coletar dados e desenvolver um projeto detalhado sobre eficiência energética.",
                "afirmacao": "Utilizou a tecnologia para obter dados reais e criar um projeto detalhado e informativo."
            },
            {
                "texto": "Baseia o projeto em pesquisas sobre práticas sustentáveis e soluções tradicionais.",
                "afirmacao": "Escolheu usar fontes de pesquisa tradicionais para desenvolver o projeto, focando em práticas sustentáveis conhecidas."
            }
        ]
    },
    {
        "enunciado": "Após a apresentação do projeto, a turma debateu como tecnologias sustentáveis podem impactar o futuro. Qual é a sua opinião?",
        "alternativas": [
            {
                "texto": "Acredito que tecnologias sustentáveis podem transformar o mercado e criar novas oportunidades.",
                "afirmacao": "Defendeu a ideia de que tecnologias sustentáveis têm o potencial de gerar novas oportunidades e inovar o mercado."
            },
            {
                "texto": "Estou preocupado com os desafios financeiros e sociais que podem surgir com a adoção dessas tecnologias.",
                "afirmacao": "Expressou preocupações sobre os desafios financeiros e sociais que podem acompanhar a adoção de tecnologias sustentáveis."
            }
        ]
    },
    {
        "enunciado": "Você precisa criar um cartaz para a feira de ciências sobre os benefícios da tecnologia sustentável. O que faz?",
        "alternativas": [
            {
                "texto": "Cria o cartaz usando um software de design gráfico.",
                "afirmacao": "Desenvolveu o cartaz manualmente usando ferramentas de design gráfico para uma apresentação visual atraente."
            },
            {
                "texto": "Usa uma ferramenta de IA para gerar um cartaz visualmente atraente.",
                "afirmacao": "Utilizou uma ferramenta de IA para criar rapidamente um cartaz visualmente impactante."
            }
        ]
    },
    {
        "enunciado": "Seu grupo está atrasado na entrega de um projeto de biologia sobre o impacto ambiental das tecnologias. Um membro do grupo usou IA para criar o projeto. O que você faz?",
        "alternativas": [
            {
                "texto": "Aceita o trabalho da IA como está, sem revisão.",
                "afirmacao": "Decidiu aceitar o trabalho gerado pela IA sem alterações, mas percebeu que isso poderia afetar a qualidade do projeto."
            },
            {
                "texto": "Revisa o trabalho gerado pela IA e adiciona suas próprias observações para garantir precisão e pessoalidade.",
                "afirmacao": "Revisou o trabalho da IA, ajustando e adicionando suas próprias ideias para garantir que o projeto fosse preciso e pessoal."
            }
        ]
    }
]



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
