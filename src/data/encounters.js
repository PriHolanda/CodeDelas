import convidada01 from "../assets/images/convidada01.png";
import convidada02 from "../assets/images/convidada02.jpeg";
import convidada04 from "../assets/images/convidada04.jpeg";
import convidada05 from "../assets/images/convidada05.jpeg";
import convidada06 from "../assets/images/convidada06.jpeg";
import convidada07 from "../assets/images/convidada07.jpeg";

export const encounters = [
    {
        id: 1,
        number: "01",
        title: "IDENTIFICAÇÃO DE PROBLEMAS",
        description:
            "Neste encontro, você vai investigar o que realmente precisa ser resolvido, compreender as pessoas e o cenário envolvidos, construir uma direção clara para o projeto e testar uma primeira versão para aprender com a prática.",
        topics: [
            "Identificando problemas",
            "Imersão no contexto",
            "Definindo a Visão",
            "Validando a solução escolhida (MVP)",
        ],
        guest: {
            name: "Liana Feitosa",
            role: "Product Manager na idwall/Serasa",
            education: "Formada em Engenharia Eletrônica (USP), MBA internacional em gestão de negócios (Quantic School of Business and Tecnology) e certificado CSPO (profissionais de produto)",
            theme: "Identificação de Problemas",
            image: convidada01,
        },
        video: { url: "https://drive.google.com/drive/folders/1xR3KwBSqagAXa1K2qwQa4RocBWG_e8Qq" },
    },
    {
        id: 2,
        number: "02",
        title: "IDEAÇÃO DE SOLUÇÕES",
        description:
            "Neste encontro, você vai aprender a não se apegar à primeira ideia: primeiro afiar o problema, depois gerar muitas possibilidades e escolher a melhor.",
        topics: [
            "Por que não pular direto para a solução",
            "Declaração do problema e técnica Como Poderíamos (HMW)",
            "Brainstorming estruturado e Crazy 8s",
            "Critérios para escolher a ideia: viabilidade, impacto e originalidade",
        ],
        guest: {
            name: "Izabella Mota",
            role: "Product Manager na idwall/Serasa",
            education: "Formada em Administração pela UFC",
            theme: "Ideação de Soluções",
            image: convidada02,
        },
        video: { url: "https://drive.google.com/drive/folders/1OK9XkzjYVTCZsYFmsYJ9Ex49Dk2kFSR1" },
    },
    {
        id: 3,
        number: "03",
        title: "DESIGN E PROTOTIPAGEM DIGITAL",
        description:
            "Neste encontro, você vai transformar sua ideia em algo visual, do rascunho ao protótipo navegável, entendendo como pensar na experiência de quem vai usar.",
        topics: [
            "Noções de UX/UI",
            "O que é um MVP",
            "Wireframes de baixa fidelidade",
            "Protótipos de alta fidelidade",
        ],
        video: { url: "https://drive.google.com/drive/folders/1zbP1N1Ok1KiUV28V6lpARem1AlBiHuIe" },
    },
    {
        id: 4,
        number: "04",
        title: "TESTES DE USABILIDADE",
        description:
            "Neste encontro, você vai aprender a olhar para o protótipo como um QA: testar além de ver se funciona, observar a experiência do usuário e refinar o que for preciso.",
        topics: [
            "Usabilidade pelo olhar do QA: testar vai além de verificar se funciona",
            "O que observar: fluxo, textos, feedback, mensagens de erro e navegação",
            "Bug ou melhoria de usabilidade? Como investigar, registrar e comunicar",
            "Refinamento final: cenários alternativos, checklist de QA e ajustes na experiência",
        ],
        guest: {
            name: "Iraneide Lima",
            role: "Quality Assurance at HeavyConnect",
            education: "Graduação em Sistemas de Informação e mestrado e ciência da computação pela UFC",
            theme: "Testes de Usabilidade",
            image: convidada04,
        },
        video: { url: "https://drive.google.com/drive/folders/1TKWpxjGWKorO6XaXpZnciungYzzB-0VN" },
    },
    {
        id: 5,
        number: "05",
        title: "INTRODUÇÃO AO DESENVOLVIMENTO FRONT-END",
        description:
            "Neste encontro, você vai descobrir como dar vida a ideias na web: criar interfaces atuais, desenvolver com práticas usadas no mercado e transformar dados em painéis que ajudam a enxergar o que importa.",
        topics: [
            "Fundamentos do Front-end",
            "Interfaces modernas",
            "Front-end profissional",
            "Dashboard e engenharia de dados",
        ],
        guest: {
            name: "Catarina Sonsine",
            role: "Engenheira de Dados Pleno, na empresa FRANQ - Florianópolis",
            education: "Formada e Mestre em Física, com ênfase em física computacional",
            theme: "Desenvolvimento Front-end",
            image: convidada05,
        },
        video: { url: "https://drive.google.com/drive/folders/1yEh0-5w9LnLhsodh4PJr1YTsGxBFjRLU" },
    },
    {
        id: 6,
        number: "06",
        title: "INTEGRAÇÃO E PUBLICAÇÃO",
        description:
            "Neste encontro, você vai entender como as partes de uma aplicação web se conectam e como o front-end busca e envia dados para o back-end, usando o projeto Conecta Delas como exemplo.",
        topics: [
            "As partes de uma aplicação web: front-end, back-end, API e banco de dados",
            "Métodos HTTP: GET, POST, PUT e DELETE",
            "Buscando dados da API com fetch e transformando o JSON em cards na tela",
            "Cadastrando dados com formulário e requisição POST, e usando a aba Network para investigar a integração",
        ],
        guest: {
            name: "Dirlandia Oliveira",
            role: "Desenvolvedora fullstack",
            education: "Graduação em Sistemas de Informação pela UFC",
            theme: "Integração e Publicação",
            image: convidada06,
        },
        video: { url: "https://drive.google.com/drive/folders/1UIj070Pt6BhVxvXb-P-8IDjenC-9XwBT" },
    },
    {
        id: 7,
        number: "07",
        title: "MODELO DE NEGÓCIO E SUSTENTABILIDADE",
        description:
            "Neste encontro, você vai aprender a desenhar o modelo de negócio do seu projeto com o Canvas, descobrir como ele se sustenta financeiramente e validar a ideia antes de investir mais.",
        topics: [
            "Modelo de negócio: como criar, entregar e capturar valor",
            "Business Model Canvas e Lean Canvas: diferenças e quando usar cada um",
            "Fontes de receita, custos de manter uma aplicação web e editais de fomento",
            "Validação com clientes, métricas simples e sustentabilidade do projeto",
        ],
        guest: {
            name: "Caetano Lima",
            role: "Analista de Inovação Sr. NINNA HUB",
            education: "Especialista em Projetos de Inovação",
            theme: "Modelo de Negócio",
            image: convidada07,
        },
        video: { url: "https://drive.google.com/drive/folders/148Ez607UM2KTPBxBeIAxhAKiPxt9v2em" },
    },
];