const contactInfo = {
    tel: '87474037720',
    git: 'curlygravity',
    mail: 'aydanadr@mail.ru',
    inst : '@curlygravity',
};
function getMyElFromDom(myClass, myText){
    document.querySelector('.' + myClass).innerHTML = myText;
}
getMyElFromDom('UserTel', contactInfo.tel);
getMyElFromDom('UserGit', contactInfo.git);
getMyElFromDom('UserMail', contactInfo.mail);
getMyElFromDom('UserInst', contactInfo.inst);