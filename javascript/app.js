const background = document.getElementsByClassName('background-page');
const login = document.getElementsByClassName('registration');
const title = document.querySelector('h3');
const text = document.querySelector('.login-page p');
const inputs = document.querySelector('.input-page input:nth-child(1)');
const inputs1 = document.querySelector('.input-page input:nth-child(2)');
const inputs2 = document.querySelector('.input-page input:nth-child(3)');
const inputs3 = document.querySelector('.input-page input:nth-child(4)');
const inputs4 = document.querySelector('.input-page input:nth-child(5)');
const inputs5 = document.querySelector('.input-page input:nth-child(6)');
const check = document.querySelector('.checkbox-page');
const check1 = document.querySelector('.checkbox-page input');
const text1 = document.querySelector('.checkbox-page span');
const button = document.querySelector('.registration__container button');
const hr = document.querySelector('hr');
const sign = document.querySelector('.sign');
const sign1 = document.querySelector('.sign p');
const sign2 = document.querySelector('.sign span a');

button && button.addEventListener('click', function () {
    
})

title.style.color = 'rgba(255, 255, 255, 1)';
title.style.fontSize = '32px';
title.style.fontWeight = '700';
title.style.lineHeight = '48px';

text.style.color = 'rgba(127, 127, 127, 1)';
text.style.fontSize = '18px';
text.style.fontWeight = '400';
text.style.lineHeight = '27px'

inputs.style.backgroundColor = 'rgba(36, 36, 36, 1)';
inputs1.style.backgroundColor = 'rgba(36, 36, 36, 1)';
inputs2.style.backgroundColor = 'rgba(36, 36, 36, 1)';
inputs3.style.backgroundColor = 'rgba(36, 36, 36, 1)';
inputs4.style.backgroundColor = 'rgba(36, 36, 36, 1)';
inputs5.style.backgroundColor = 'rgba(36, 36, 36, 1)';

inputs.style.color = 'rgba(255, 255, 255, 1)';
inputs1.style.color = 'rgba(255, 255, 255, 1)';
inputs2.style.color = 'rgba(255, 255, 255, 1)';
inputs3.style.color = 'rgba(255, 255, 255, 1)';
inputs4.style.color = 'rgba(255, 255, 255, 1)';
inputs5.style.color = 'rgba(255, 255, 255, 1)';

inputs.style.width = '800px';

inputs.style.padding = '12px';
inputs1.style.padding = '12px';
inputs2.style.padding = '12px';
inputs3.style.padding = '12px';
inputs4.style.padding = '12px';
inputs5.style.padding = '12px';

inputs.style.borderRadius = '4px';
inputs1.style.borderRadius = '4px';
inputs2.style.borderRadius = '4px';
inputs3.style.borderRadius = '4px';
inputs4.style.borderRadius = '4px';
inputs5.style.borderRadius = '4px';

check.style.position = 'absolute';
check.style.top = '746px';
check.style.display = 'flex';
check.style.gap = '15px';
check1.style.width = '24px';
check1.style.height = '24px';
check1.style.cursor = 'pointer';

text1.style.color = 'rgba(127, 127, 127, 1)';
text1.style.fontSize = '16px';
text1.style.fontWeight = '400';
text1.style.lineHeight = '24px';

button.style.position = 'absolute';
button.style.top = '830px';
button.style.padding = '12px 64px';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
button.style.background = 'rgba(75, 114, 194, 1)';
button.style.color = 'rgba(255, 255, 255, 1)';
button.style.fontWeight = '400';
button.style.fontSize = '16px';

hr.style.position = 'absolute';
hr.style.top = '940px';
hr.style.width = '800px'
hr.style.borderColor = 'rgba(77, 77, 77, 1)';
hr.style.border = '2px solid rgba(77, 77, 77, 1)';

sign.style.display = 'flex';
sign.style.alignItems = 'center';
sign.style.gap = '15px';
sign.style.position = 'absolute';
sign.style.top = '990px';
sign1.style.color = 'rgba(127, 127, 127, 1)';
sign1.style.fontSize = '16px';
sign1.style.fontWeight = '400';
sign2.style.textDecoration = 'none';
sign2.style.color = 'rgba(75, 114, 194, 1)';