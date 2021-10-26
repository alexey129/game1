"use strict"

import {isInCircle} from './mathLib.js';
import {Picture, Draw} from './draw.js';
import {InterfaceGame} from './interface.js';
import {ModelGame} from './model.js';
import {ViewGame} from './view.js';
import {ControllerGame} from './controller.js';



let timer1 = 0;

let modelGame = new ModelGame();
let draw = new Draw(modelGame.ctx);
let interfaceGame = new InterfaceGame();
let viewGame = new ViewGame();
let controllerGame = new ControllerGame();

//обработчики каждого отдельного сообщения
function obrInitialisation(){
	setTimeout(() => {
		draw.addQueue('worldMap', 0, 0, 1000, 500);
		draw.addQueue('pointTarget', 100, 100, 50, 50);
		draw.addQueue('pointTarget', 200, 300, 50, 50);
		draw.addQueue('pointTarget', 600, 100, 50, 50);
		draw.addQueue('pointTarget', 450, 200, 50, 50);
		draw.addQueue('pointTarget', 800, 350, 50, 50);
		draw.paint();
	}, 1000);

	modelGame.textMessage.innerHTML = 'Инициализация прошла успешно<br>';
	modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Выберите страну с которой начнется заражение<br>';
	modelGame.message = selectCountry;
	modelGame.eventIsEnable = false;
};

function obrSelectCountry(){
	
	if(modelGame.mouseLeftPress == false){
		modelGame.message = selectCountry;
	} else {
		//вот тут надо проверить в правильном ли месте было нажатие
		if(isInCircle(modelGame.xmouse,modelGame.ymouse,100,100,50)){
			modelGame.startPoint = 0;
			modelGame.startPointX = 100;
			modelGame.startPointY = 100;
		}
		if(isInCircle(modelGame.xmouse,modelGame.ymouse,200,300,50)){
			modelGame.startPoint = 1;
			modelGame.startPointX = 200;
			modelGame.startPointY = 300;
		};
		if(isInCircle(modelGame.xmouse,modelGame.ymouse,600,100,50)){
			modelGame.startPoint = 2;
			modelGame.startPointX = 600;
			modelGame.startPointY = 100;
		};
		if(isInCircle(modelGame.xmouse,modelGame.ymouse,450,200,50)){
			modelGame.startPoint = 3;
			modelGame.startPointX = 450;
			modelGame.startPointY = 200;
		};
		if(isInCircle(modelGame.xmouse,modelGame.ymouse,800,350,50)){
			modelGame.startPoint = 4;
			modelGame.startPointX = 800;
			modelGame.startPointY = 350;
		};
		if(modelGame.startPoint != undefined){
			modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'выбрана точка - ' + modelGame.startPoint + '<br>';
			modelGame.message = infect;
			draw.clearQueue();
			draw.addQueue('worldMap', 0, 0, 1000, 500);
			draw.paint();
			viewGame.canvasCircleDraw(modelGame.ctx, modelGame.startPointX, modelGame.startPointY, 40);
			modelGame.countryesInfected[modelGame.startPoint] = 1;
			modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Заражение началось' + '<br>';
		} else {
			modelGame.message = selectCountry;
		}
	}
	modelGame.eventIsEnable = false;
};

function obrInfect(){
	//проверяем все ли 5 континентов полностью вымерли
	let a = 0;
	for(let i = 0; i < 5; i++){
		if(modelGame.countryCountDeadPeople[i] >= 200){a++}
	};

	for(let i = 0; i < modelGame.countryesInfected.length; i++){
		if(modelGame.countryesInfected[i] == 1){

			let num = Math.round((Math.random() * 100));

			let limit1 = 50 - modelGame.countryMedicalPower[i];
			let limit2 = 90 - modelGame.countryMedicalPower[i];

			if(num <= limit1 && modelGame.countryCountInfectPeople[i] < 200){
				modelGame.countryCountInfectPeople[i]++;
			}

			if(num > limit1 && num < limit2){
				if(modelGame.countryCountInfectPeople[i] > 20){
					if(modelGame.countryCountDeadPeople[i] < 200){
						modelGame.countryCountDeadPeople[i]++;
						if(modelGame.countryMedicalPower[i] > 0){
							modelGame.countryMedicalPower[i]--;
						}
					}
				}
			}

			if(num >= limit2 && modelGame.countryCountDeadPeople[i] < 200){
				if(modelGame.countryCountInfectPeople[i] > 0){
					modelGame.countryCountInfectPeople[i]--;
				}
			}
		}
	}

	//если не заражены то:
	if(a != 5){
		timer1++;

		

		if(timer1 > 100){
			timer1 = 0;
			let aaa = [0,0,0,0,0];//массив в котором указываем какие страны заражены
			for(let i = 0; i < modelGame.countryesInfected.length; i++){
				if(modelGame.countryesInfected[i] == 1){
					for(let j = 0; j < 5; j++){
						if(modelGame.graph[i][j] == 1){
							aaa[j] = 1;
						}
					}
				}
			}
			modelGame.countryesInfected = aaa;//заменяем countryesInfected на новый список зараженных стран
			if(modelGame.countryesInfected[0] == 1){
				viewGame.canvasCircleDraw(modelGame.ctx, 100, 100, 40);
			}
			if(modelGame.countryesInfected[1] == 1){
				viewGame.canvasCircleDraw(modelGame.ctx, 200, 300, 40);
			}
			if(modelGame.countryesInfected[2] == 1){
				viewGame.canvasCircleDraw(modelGame.ctx, 600, 100, 40);
			}
			if(modelGame.countryesInfected[3] == 1){
				viewGame.canvasCircleDraw(modelGame.ctx, 450, 200, 40);
			}
			if(modelGame.countryesInfected[4] == 1){
				viewGame.canvasCircleDraw(modelGame.ctx, 800, 350, 40);
			}
		}
		modelGame.message = infect;
	} else {
		modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Мир полностью заражен' + '<br>';
		modelGame.message = exitGame;
		modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Игра окончена' + '<br>';
	}
	modelGame.eventIsEnable = false;
};

function obrExitGame(){	
	modelGame.eventIsEnable = false;
};


/*создаем объекты событий и навешиваем на них обработчики
по сути перечисляем для какого сообщения какое действие делать
*/
let initialisation = new Event('initialisation');
modelGame.Elem.addEventListener('initialisation', obrInitialisation);

let selectCountry = new Event('selectCountry');
modelGame.Elem.addEventListener('selectCountry', obrSelectCountry);

let infect = new Event('infect');
modelGame.Elem.addEventListener('infect', obrInfect);

let exitGame = new Event('exitGame');
modelGame.Elem.addEventListener('exitGame', obrExitGame);

//иницианилизируем первое вступительное сообщение
modelGame.message = initialisation;
modelGame.eventIsEnable = false;

modelGame.Elem.onmousedown = (event) => {
	modelGame.xmouse = event.pageX;
	modelGame.ymouse = event.pageY;
	modelGame.mouseLeftPress = true;
}

modelGame.Elem.onmouseup = (event) => {
	setTimeout(() => {
		modelGame.mouseLeftPress = false;
	}, 100);
}
//цикл в котором запускаются события
function cycle(){
	if(modelGame.eventIsEnable == false){
		modelGame.eventIsEnable = true;
		modelGame.Elem.dispatchEvent(modelGame.message);
	}
}

modelGame.Elem.dispatchEvent(modelGame.message);


//загрузка ресурсов до начала игры
let countLoad = 0;//считает сколько ресурсов уже загрузилось

let img1 = new Image();
img1.src = './image/world-map.jpg';
img1.onload = () => {
	let pic = new Picture();
	pic.img = img1;
	pic.name = 'worldMap';
	draw.addStore(pic);
	countLoad++;
};

let img2 = new Image();
img2.src = './image/attackSelect.png';
img2.onload = () => {
	let pic = new Picture();
	pic.img = img2;
	pic.name = 'pointTarget';
	draw.addStore(pic);
	countLoad++;
};


var interval1 = setInterval(() => {
	if(countLoad == 2){//когда все ресурсы загрузятся можно продолжать дальше
		clearInterval(interval1);
		setInterval(cycle, 10);
	}
}, 100);