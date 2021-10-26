export function Picture(){
	this.img = undefined;
	this.name = undefined;
	this.xcoord = undefined;
	this.ycoord = undefined;
	this.width = undefined;
	this.height = undefined;
}

export function Draw(ctx){
	this.imgStore = [];
	this.imgQueue = [];

	this.addStore = (image) => {
		this.imgStore.push(image);
	}
	this.addQueue = (name, x, y, width, height) => {
		for(let item of this.imgStore){
			if(item.name == name){
				let temp = new Picture;
				temp.img = item.img;
				temp.xcoord = x;
				temp.ycoord = y;
				temp.width = width;
				temp.height = height;
				this.imgQueue.push(temp);
			}
		}
	}
	this.removeQueue = () => {}
	this.clearQueue = () => {
		while(this.imgQueue.length > 0){
			this.imgQueue.pop();
		}
	}
	this.paint = () => {
		ctx.clearRect(0,0,1000,500);
		for(let item of this.imgQueue){
			ctx.drawImage(item.img, item.xcoord, item.ycoord, item.width, item.height);
		}
	}
}