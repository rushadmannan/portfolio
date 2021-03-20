//Education ID
const education = document.querySelector('#education');
education.addEventListener('mouseover', e =>{
    e.preventDefault();
    document.getElementById('education').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)";
});
education.addEventListener('mouseout', e =>{
    e.preventDefault();
    setTimeout(() =>
    document.getElementById('education').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)",200
    );
});

//Interest ID
const interest = document.querySelector('#interest');
interest.addEventListener('mouseover', e =>{
    e.preventDefault();
    document.getElementById('interest').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)";
});
interest.addEventListener('mouseout', e =>{
    e.preventDefault();
    setTimeout(() =>
    document.getElementById('interest').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)",200
    );
});

//Extra Caricullar ID
const extra = document.querySelector('#extra');
extra.addEventListener('mouseover', e =>{
    e.preventDefault();
    document.getElementById('extra').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)";
});
extra.addEventListener('mouseout', e =>{
    e.preventDefault();
    setTimeout(() =>
    document.getElementById('extra').style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)",200
    );
});

