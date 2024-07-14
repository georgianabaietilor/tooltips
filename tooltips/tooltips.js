function printMousePos(e) {
    console.log(e.clientX, e.clientY);
    let tooltipEl = document.getElementById("tooltip");

    tooltipEl.classList.remove('left', 'right');
    var tooltipElDimensions = tooltipEl.getBoundingClientRect();

    var containerDimensions = document.getElementById('container').getBoundingClientRect()
    if (e.clientX < containerDimensions.left + (containerDimensions.width / 2)){
        tooltipEl.classList.add('left');
        tooltipEl.style.left = e.clientX + 'px';
    }
    else {
        tooltipEl.classList.add('right');
        tooltipEl.style.left = (e.clientX - tooltipElDimensions.width) + 'px';
    }
    
    tooltipEl.style.top = (e.clientY - tooltipElDimensions.height/2)+ 'px';
    tooltipEl.style.display = 'block';
}
  