function openPlayerConfig(params) {
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig(params) {
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent=''
}

function savePlayerConfig(event){
    event.preventDefault();//리로드 안함.
    const formData=new FormData(event.target);
    const enteredPlayername=formData.get('playername').trim();//공백제거
    
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent='Please enter a valid name!'
        return;//함수 종료.
    }
}