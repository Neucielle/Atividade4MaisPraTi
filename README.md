# Atividade 4 - Desenvolvendo LP Completa:

## Cakes Honey. 🍰

Este projeto é uma landing page chamada Cakes Honey, desenvolvida como parte da Atividade 4 do meu curso. 
O objetivo desta atividade foi criar uma página completa e funcional para apresentar uma variedade de bolos
e decoração de eventos, proporcionando aos usuários uma experiência visual agradável e informações úteis.

### Estrutura do Projeto: 📝

### HTML e CSS:

**HTML** 🔤: Estruturação do conteúdo da página.
- **CSS** 🎨: Estilização e layout responsivo.
- **JavaScript** ⚙️: Interatividade
- **AOS (Animate On Scroll)** 🌟: Biblioteca para adicionar animações suaves durante o scroll da página.

Utilizei HTML para estruturar o conteúdo da página, que inclui seções para apresentar os produtos, testemunhos
de clientes e um formulário de contato. O CSS foi utilizado para estilizar a página, garantindo um design
consistente e atraente, com um esquema de cores em tons de rosa e branco, refletindo a identidade da marca
Cakes Honey.

## Funcionalidades 🚀

- **Slider de Imagens**: Apresenta os produtos em destaque com um slider que permite a visualização das imagens.
- **Seção de Serviços**: Carrega dinamicamente informações sobre os serviços a partir de um arquivo JSON.
- **Seção de Testemunhos**: Exibe depoimentos de clientes, também carregados de um arquivo JSON.
- **Formulário de Contato**: Permite que os usuários enviem mensagens diretamente para a empresa,
utilizando a API do EmailJS.

# APIs Utilizadas 🌐
- **JSON Simulado**: Utilizado para carregar dados dinâmicos sobre serviços e testemunhos.
Os dados são armazenados em arquivos JSON que são carregados através de requisições Fetch.
- **EmailJS** 📧: Serviço que permite enviar emails a partir de um formulário sem necessidade
   de um backend próprio.

## APIs Simuladas com JSON

Para gerenciar os dados dos produtos e testemunhos, criei arquivos JSON que simulam APIs:

Produtos: O arquivo _**produtos.json**_ contém um array de objetos, onde cada objeto representa um produto.
Cada produto inclui informações como título, descrição, preço e a URL da imagem correspondente.
Esses dados são carregados dinamicamente na página usando JavaScript.


___________________________________________________________________________
###**Exemplo de código**
 ```bash
{
    "titulo": "Bolo de Chocolate",
    "descricao": "Delicioso bolo de chocolate com recheio cremoso.",
    "preco": "R$ 70,00",
    "foto": "link-da-imagem"
}
```
Testemunhos:
O arquivo testemunhos.json contém os depoimentos dos clientes. Cada testemunho é um objeto que inclui o nome
do cliente, o texto do depoimento e a URL da imagem do cliente.


Exemplo de código

 ```bash
{
    "nome": "Ana Pereira",
    "texto": "O bolo estava incrível! Recomendo a todos!",
    "foto": "link-da-imagem"
}
```


Instruções para Visualizar o Projeto Localmente 💻
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Neucielle/Atividade4MaisPraTi

2.  **Navegue até o diretório do projeto**:
   ```bash
cd seu-repositorio
```

3. Abra o arquivo index.html em um navegador. Você pode usar o navegador de sua preferência.


