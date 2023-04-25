const pencilImg = document.querySelector(".main-img");


const titleTag = document.querySelector(".main-text h1");
const paragraphTag = document.querySelector(".main-text p");

const leftBtn = document.querySelector(".btn-l");
const rightBtn = document.querySelector(".btn-r");

const pencilTag = document.querySelector(".pencil");
const containerTag = document.querySelector(".container");

let num = 1;

rightBtn.addEventListener('click', function(){
    num ++;
    if(num>10){
        num = 1;
    }
    pencilImg.style.backgroundImage = `url(images/pencil${num}.jpg)`;

    titleTag.innerHTML = contents[num-1].title;
    paragraphTag.innerHTML = contents[num-1].paragraph;
});

leftBtn.addEventListener('click', function(){
    num --;
    if(num<1){
        num=10;
    }
    pencilImg.style.backgroundImage = `url(images/pencil${num}.jpg)`;


    titleTag.innerHTML = contents[num-1].title;
    paragraphTag.innerHTML = contents[num-1].paragraph;
});

//마우스 enter시 좌우 버튼 색상 채우기
leftBtn.addEventListener('mouseenter', function(){
    leftBtn.src = `images/btn-l-2.png`;
});
rightBtn.addEventListener('mouseenter', function(){
    rightBtn.src = `images/btn-r-2.png`;
});
leftBtn.addEventListener('mouseleave', function(){
    leftBtn.src = `images/btn-l.png`;
});
rightBtn.addEventListener('mouseleave', function(){
    rightBtn.src = `images/btn-r.png`;
});

//마우스를 따라다니는 연필
containerTag.addEventListener('mousemove', function(e){
    pencilTag.style.top =  e.clientY+(-50) + 'px';
    pencilTag.style.left =  e.clientX+(10) + 'px';
});

//바뀌는 텍스트 배열
const contents = [
    {
        title: "작은연필가게 흑심",
        paragraph: "2016년부터 추억의 도구로 전락해버린 연필의 가치에 대해 다시 한번 색각해보고, 다양하고 아름다운 연필을 소개하는 프로젝트 브랜드 ‘작은연필가게 흑심’입니다. 연필을 중심으로 예전의 것을 재해석하고, 디자인을 전개하고 있습니다."
    },
    {
        title: "THE START : JUMBO",
        paragraph: "LYRA의 흑연크레용입니다. 2B, 6B, 9B 3가지 경도가 있으며, 스케칭과 넓은 면의 명암작업에 유용한 전문가용 몽당흑연입니다."
    },
    {
        title: "CUSTOM TEXT",
        paragraph: "연필에 원하는 문구를 각인할 수 있습니다. 흑심에서 진행하는 각인은 레이저 각인이 아닌 불박기를 이용한 각인입니다. 불박기는 높은 온도의 열과 압력으로 각인하는 기계로, 다양한 색상의 불박지를 사용해 글씨에 색상을 입힐 수도 있습니다."
    },
    {
        title: "PENCILS",
        paragraph: "Blackwing Vol.7은 애니메이션에 대한 찬사이며, 우리가 스토리를 전달하고 보는 방식을 어떻게 혁신했는지 보여줍니다. Blackwing Vol.7 연필 세트에는 6가지 다른 디자인이 있습니다. 서로 다른 디자인의 블랙윙 Vol.7 연필 6자루를 나란히 정렬하고 뷰파인더를 통해 보면 척 존스의 상징인 Wile E의 7프레임 실행 애니메이션을 볼 수 있습니다."
    },
    {
        title: "VINTAGE PENCILS",
        paragraph: "Lyra No.6536은  현재는 단종된 빈티지 연필입니다. 200년이 넘는 역사를 자랑하는 Lyra는 2008년 이탈리아의 Fila에 합병되었지만 현재도 Lyra라는 브랜드명으로 연필을 생산하고 있습니다."
    },
    {
        title: "ERASERS / SHARPENERS",
        paragraph: "안전 가드가 달려 있는 연필깎이 칼입니다. 안전 가드가 있어 손 다칠 위험 없이 연필을 깎을 수 있기 때문에 연필깎이 입문용 칼로 적합합니다."
    },
    {
        title: "PAPER",
        paragraph: "자유롭게 사용할 수 있는 무지 디자인의 메모지입니다. 비점착 메모지와 미니연필로 구성되었습니다. 한 장씩 뜯어내어 사용할 수 있습니다."
    },
    {
        title: "VINTAGE ITEM",
        paragraph: "총알 모양의 연필형태이며, 19세기 초 전쟁터에서 유래되어 기념품으로 판매되었다는 기록이 있습니다. Vintage Pencil Holder_Yellow&Green은 주로 1950~60년대 미국에서 광고용으로 많이 제작되었던 제품입니다."
    },
    {
        title: "ETC",
        paragraph: "작은연필가게 흑심과 가죽공방 두낫바이가 만나 연필을 위한 제품을 제작합니다. 이태리 베지터블 가죽으로 제작한 점보연필캡입니다. 이태리 베지터블 가죽협회인 베라펠레에서 인증받은 가죽을 사용합니다."
    },
    {
        title: "LECT : COFFEE & PENCIL",
        paragraph: "LECT는 모으다, 선택하다의 의미이자 수집하 (collect)의 어근입니다. 수집을 키워드로 하여 과거와 현재를 잇는 순간을 우리의 시각으로 재해석합니다. LECT가 제안하는 순간을 경험해보세요."
    },
]