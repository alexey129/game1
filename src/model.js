export function ModelGame(){
	this.canvasWidth = 1000;
	this.canvasHeight = 500;
	this.canvasCoordX = 0;
	this.canvasCoordY = 0;
	this.Elem = document.querySelector('.main-canvas');
	this.textMessage = document.querySelector('.text');
	this.ctx = this.Elem.getContext('2d');
	this.message;//переменная в которой будет лежать "сообщения".
	this.eventIsEnable;//если равно true, то обработчик сообщений не будет запускаться
	this.mouseLeftPress = false;//нажата ли левая кнопка мыши
	this.xmouse = 0;//координата x последнего нажатия мыши
	this.ymouse = 0;//координата y последнего нажатия мыши

	this.startPoint = undefined;
	this.startPointX = 0;
	this.startPointY = 0;

	//граф на котором показаны пути из одного места в другое
	this.graph = [
	[0,1,1,1,0],//сев. америка 1
	[1,0,0,1,0],//юж. америка 2
	[1,0,0,1,1],//евразия 3
	[1,1,1,0,1],//африка 4
	[0,0,1,1,0],//австралия 5
	];

	this.countryesInfected = [0,0,0,0,0];//страны в которых сейчас происходит заражение
	this.countryCountInfectPeople = [0,0,0,0,0];//кол-во зараженных в каждой стране
	this.countryCountDeadPeople = [0,0,0,0,0];//кол-во умерших в каждой стране
	this.countryMedicalPower = [18,15,13,10,5];//противодействие болезни в каждой стране.
	//должно быть меньше 20, иначе заражение будет длиться до бесконечности
}