//your code here
function drag(ev)
{
	ev.dataTransfer.setData("text",ev.target.id);
}
function allowdrop(ev)
{
	ev.preventDefault();
}
function drop(ev)
{
	ev.preventDefault();
	let data=ev.dataTransfer.getData("text");
	let ele1=document.getElementById(data);
	let ele2=document.getElementById(ev.target.id);

    let img1=ele1.style.backgroundImage.slice(5,-2);
	let img2=ele2.style.backgroundImage.slice(5,-2);

	ele1.style.backgroundImage=`url(${img2})`;
	ele2.style.backgroundImage=`url(${img1})`;
}