export function isInCircle(ax, ay, bx, by, radius){
	//a - точка нажатия
	//b - центр круга
	//radius - радиус круга
	let x = ax - bx;
	let y = ay - by;
	if(x**2 + y**2 <= radius**2){
		return true;
	} else {
		return false
	}
}