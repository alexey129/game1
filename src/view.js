import styles from './scss/style.scss';

export function ViewGame(){
	this.canvasCircleDraw = (ctx, x, y, radius) => {
		x += radius/2;
		y += radius/2;
		ctx.beginPath();
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
		ctx.fill();
	}
}