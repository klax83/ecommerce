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

for(var i = 0; i < items.length; i++) {
	var div = document.createElement('div');
	var li = document.createElement('a');
	var h1 = document.createElement('h1');
	var img = document.createElement('img');
	var a = document.createElement('p');
	var b = document.createElement('p');
	var c = document.createElement('p');
	var butt = document.createElement('button');

	div.className = 'col-lg-3 col-md-6 p-0 z'; 
	h1.textContent = items[i].name;
	img.src = items[i].img;
	img.alt = items[i].name;
	img.className = 'w-100 img-fluid cover height'
	a.textContent = items[i].size;
	b.textContent = items[i].color;
	c.textContent - items[i].inStock;
	butt.textContent = 'More Info';

	// div.appendChild(h1);
	li.appendChild(img);
	div.appendChild(li);
	// div.appendChild(a);
	// div.appendChild(b);
	// div.appendChild(c);
	// div.appendChild(butt);

	document.getElementById('target').appendChild(div);


}