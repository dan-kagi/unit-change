const questions = [
    {
        id: "1",
        question: "Expresse as seguintes medidas de unidade de distância em m: 1,5 Km, 300 cm e 200 mm.",
        options: [
            {isCorrect:true, answer:"1500 m, 3 m, 0,2 m"},
            {isCorrect: false, answer:"15 m, 30 m, 2 m"},
            {isCorrect:false, answer:"150 m, 3 m, 0,2 m"},
            {isCorrect:false, answer:"1500 m, 3 m, 20 m"},
        ],
    },
    {
        id: "2",
        question: "0,076 m corresponde a:",
        options: [
            {isCorrect: true, answer:"7,6 cm ou 76 mm"},
            {isCorrect:false, answer:"7,6 dm ou 0,76 Km"},
            {isCorrect:false, answer:"0,00076 mm"},
            {isCorrect:false, answer:"760 cm"},
        ],
    },
    {
        id: "3",
        question: "O tempo de 360 s corresponde a",
        options: [
            {isCorrect: true, answer:"0,1 h ou 6 min"},
            {isCorrect:false, answer:"1 h ou 60 min"},
            {isCorrect:false, answer:"3h"},
            {isCorrect:false, answer:"0,6 min"},
        ],
    },
    {
        id: "4",
        question: "O tempo de 2h e 3 min equivale a quantos segundos?",
        options: [
            {isCorrect: true, answer:"7380 s"},
            {isCorrect:false, answer:"738 s"},
            {isCorrect:false, answer:"3780 s"},
            {isCorrect:false, answer:"5580 s"},
        ],
    }
]

function shuffle(arr){
    const length = arr.length;
    const newArr = []
    const storedIdx = []
    for (let i = 0; i < length; i++){
        let randomIdx = Math.floor(Math.random() * length);
        while(storedIdx.includes(randomIdx)){
           randomIdx = Math.floor(Math.random() * length);
        }
        newArr.push(arr[randomIdx]); 
        storedIdx.push(randomIdx);
    }
    return newArr;
}

function checkResult(inputs){
    let selectedInput = false;
    const questionId = inputs[0].id
    inputs.forEach(input => {
        if (input.checked === true){
            selectedInput = input;
        }
    })
    if (selectedInput){
        if (selectedInput.value === "true"){
            alert(`Q${questionId} - Parabéns, Você Acertou!`)
        } else {
            alert(`Q${questionId} - Errado. Resolva o exercício novamente.`)
        }
    } else {
        alert(`Você deve selecionar uma resposta para Q${questionId}!`);
    }
}

function createQuestion(obj){
    let template = document.getElementsByTagName("template")[0];
    let card = template.content.cloneNode("true");
    card.querySelector("p").innerHTML = `<span><em>${obj.id} - </em></span>${obj.question}`
    const inputs = card.querySelectorAll("input");
    const labels = card.querySelectorAll("label");
    const shuffledOptions = shuffle(obj.options)
    const button = card.querySelector("button")
    button.addEventListener("click", (event) => {
        checkResult(inputs);
        event.preventDefault();
    });
    for (let i = 0; i < 4; i++){
        inputs[i].value = shuffledOptions[i].isCorrect
        inputs[i].id = obj.id;
        labels[i].textContent =  shuffledOptions[i].answer
    }
    
    let container = document.createElement("div");
    container.setAttribute("class", "card");
    container.appendChild(card);
    const main = document.querySelector("#main");
    main.append(container);
}

function listAllQuestions(){
    questions.forEach(createQuestion);
}

document.querySelector("footer").innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`


listAllQuestions();