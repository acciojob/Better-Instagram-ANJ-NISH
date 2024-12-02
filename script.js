function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowdrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let ele1 = document.getElementById(data);
    let ele2 = ev.currentTarget.closest('div');
	if (!ele1 || !ele2) {
        console.error("Invalid elements for swapping.");
        return;
    }

    let img1 = ele1.style.backgroundImage;
    let img2 = ele2.style.backgroundImage;

    ele1.style.backgroundImage = img2;
    ele2.style.backgroundImage = img1;
}