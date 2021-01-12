// 데이터
const userDataList = [
    { id: 2, name: '곰' },
    { id: 10, name: '여우' },
    { id: 4, name: '사자' },
    { id: 29, name: '기린' },
    { id: 101, name: '호랑이' }
  ];
  
function printList(){
    const resultList = document.getElementById('resultList');
    resultList.innerHTML ='';
    for(const data of userDataList ){
        resultList.innerHTML += `<li>${data.id} : ${data.name}</li>`;
    }
}

function UpperSort(){
    userDataList.sort((a,b) => {
        return a.id -b.id;
    })

    printList();
}

function LowerSort(){
    userDataList.sort((a,b) => {
        return b.id - a.id;
    })

    printList();
}

const upperBtn = document.getElementById('upperSort');
const lowerBtn = document.getElementById('lowerSort');

upperBtn.addEventListener('click', UpperSort);
lowerBtn.addEventListener('click', LowerSort);
printList();