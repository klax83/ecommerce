var items = [];

function Item(name, size, img, color, inStock) {
	this.name = name;
	this.size = size;
	this.img = img;
	this.color = color;
	this.inStock = inStock;

	items.push(this);
};

new Item('thing0', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing1', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing2', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing3', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing4', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing5', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing6', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing7', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing8', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing9', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing10', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing11', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing12', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing13', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing14', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing15', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing16', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing17', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing18', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);
new Item('thing19', 'medium', 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png', 'white', 140);

function displayImg() {
	console.log(this);

	document.getElementById('display').innerHTML = '';
	
	var dispImg = document.createElement('div');
	var image = document.createElement('img');
// 	// var infoDiv = document.createElement('div');
	
	this.children[0].children[1].style.display = 'block';
	this.children[0].children[0].style.display = 'none';
	image.src = this.children[0].children[0].src;
	image.className = 'pt-4 img-fluid';
	dispImg.className = 'text-center p-auto ';
	
	
	dispImg.appendChild(image);
	document.getElementById('display').appendChild(dispImg);

}

function deleteImg() {
	
	this.children[0].children[0].style.display = 'block';
	this.children[0].children[1].style.display = 'none';
}

for(var i = 0; i < items.length; i++) {
	var div = document.createElement('div');
	var li = document.createElement('a');
	var name = document.createElement('p');
	var img = document.createElement('img');
	var size = document.createElement('p');
	var color = document.createElement('p');
	var stock = document.createElement('p');
	var infoDiv = document.createElement('div');
	
	div.className = 'col-lg-3 col-md-4 col-sm-6 col-6 p-0 z'; 
	div.id = i;
	name.textContent = items[i].name;
	img.src = items[i].img;
	img.alt = items[i].name;
	img.className = 'w-100 img-fluid cover height';
	div.addEventListener('mouseover', displayImg);
	div.addEventListener('mouseout', deleteImg);
	size.textContent = "Size: " + items[i].size;
	size.className = 'pt-2'
	color.textContent = "Colors: " + items[i].color;
	stock.textContent = "In stock: " + items[i].inStock;
	infoDiv.className = 'text-center font-weight-bold ';
	infoDiv.id = 'infoDiv';
	infoDiv.style.display = 'none';
	infoDiv.style.height = infoDiv.clientWidth;
	
	
	li.appendChild(img);
	div.appendChild(li);
	// infoDiv.appendChild(name);
	infoDiv.appendChild(size);
	infoDiv.appendChild(color);
	infoDiv.appendChild(stock);
	li.appendChild(infoDiv);

	document.getElementById('target').appendChild(div);


}