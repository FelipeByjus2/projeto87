
var canvas = new fabric.Canvas('myCanvas')
blockY = 1;
blockX = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function newImage(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		blockImageObject = Img;

		blockImageObject.scaleToWidth(block_image_Width);
		blockImageObject.scaleToHeight(block_image_height);
		blockImageObject.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '67') // adicione os códigos adequados às teclas
	{
		new_image('rr1.png')
	}
	if (keyPressed == '86') {
		blockX = 200;
		new_image('gr.png')
	}

	if (keyPressed == '65') {
		blockX = 350;
		new_image('yr.png')
	}
	if (keyPressed == '82') {
		blockX = 600;
		new_image('pr.png')
	}
	if (keyPressed == '73') {
		blockX = 700;
		new_image('backg.jpg')
	}

}

