// initialisation canvas 
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
// zone etendue init
canvas.width = innerWidth
canvas.height = innerHeight


// le joueur
class Player{
	constructor(x, y, radius, color){
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
	}
// construction du joueur	
	draw(){
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
		c.fillStyle = this.color
		c.fill()
	}
}

// construction des projectiles
class Projectile{
	constructor(x, y, radius, color, velocity){
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity = velocity
	}
	// construction projectiles sur base du joueur
	draw(){
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
		c.fillStyle = this.color
		c.fill()
	}

	update(){
		this.draw()
		this.x = this.x + this.velocity.x
		this.y = this.y + this.velocity.y
	}
}


// la position central du joueur
const x = canvas.width / 2
const y = canvas.height / 2


// ref de position et couleur
const player = new Player(x, y, 30, '#138D75')

player.draw()



const projectiles = []


// animation projectile
function animate(){
	requestAnimationFrame(animate)
	projectiles.forEach((projectile) =>
		{
		projectile.update()
	})
}


// event de creation de projectile
addEventListener('click',(event) =>{
	const angle = Math.atan2(event.clientY - canvas.height /2, event.clientX - canvas.width /2 )
	
	console.log(angle);
	projectiles.push(
		new Projectile(
			canvas.width / 2, 
			canvas.height / 2,
			5,
			'#0D4E41',
			{x: 1, y:1}
		))
})

animate()

console.log(player)













//	creation de projectile
const projectile = new Projectile(
	canvas.width / 2, 
	canvas.height / 2, 
	5, 
	'#0D4E41', 
	{
	x: 1, 
	y: 1	
	}
)
//	creation de projectile2
const projectile2 = new Projectile(
	canvas.width / 2, 
	canvas.height / 2, 
	5, 
	'green', 
	{
	x: -1, 
	y: -1	
	}
)