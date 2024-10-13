

function changeImg(actorname){
    
    const actorImg = document.getElementById('actors-img');

    if(actorname == 'amir'){
        actorImg.src = './images/Aamir Khan.avif';

    }else if(actorname == 'manoj'){
        actorImg.src = './images/manoj bajpey.jpg';

    }else if(actorname == 'madhavan'){
        actorImg.src = './images/R. Madhavan.webp';

    }else if(actorname == 'rajkumar'){
        actorImg.src = './images/Rajkummar Rao.jpg';

    }else if(actorname == 'ranbir'){
        actorImg.src = './images/Ranbir Kapoor.jpeg';

    }else if(actorname == 'sushant'){
        actorImg.src = './images/sushant shingh.jpg';
    }

}