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
}


// la position central du joueur
const x = canvas.width / 2
const y = canvas.height / 2


// ref de position et couleur
const player = new Player(x, y, 30, '#138D75')

player.draw()

// event de creation de projectile
addEventListener('click',(event) =>{
	const projectile = new Projectile(
		event.clientX, 
		event.clientY, 
		5, 
		'#0D4E41 ', 
		null
		)
	
		projectile.draw()

})

console.log(player)