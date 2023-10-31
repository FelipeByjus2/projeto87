
var canvas = new fabric.Canvas('myCanvas')
block_y = 1;
block_x = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
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
		console.log(keyPressed)
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
		new_image('br.png')
	}

}

