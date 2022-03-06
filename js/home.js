// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

const articles = [];
const avatar = document.getElementById('img');
const authorContainer = document.getElementById('author');
const jobContainer = document.getElementById('job');
const infoContainer = document.getElementById('info');

function setArticle({ imgSrc, author, job, info }) {
  avatar.src = imgSrc
  avatar.title = author.toUpperCase()
  authorContainer.textContent = author
  jobContainer.textContent = job
  infoContainer.textContent = info
}

function Article(imgSrc, author, job, info) {
  this.imgSrc = imgSrc;
  this.author = author;
  this.job = job;
  this.info = info;
}

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  'Susan Smith',
  'WEB DEVELOPER',
  'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  'Anna Johnson',
  'WEB DESIGNER',
  'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  'Peter Jones',
  'INTERN',
  'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  'Bill Anderson',
  'THE BOSS',
  'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
));

let curArticle = 0;

const [leftArrow, rightArrow] = document.getElementsByClassName('arrow-btn');

const showCurArticle = () => setArticle(articles[curArticle])

leftArrow.addEventListener('click', () => {
  const prevArticle = curArticle - 1;
  curArticle  = prevArticle >= 0 ? prevArticle : articles.length - 1;
  showCurArticle()
})

rightArrow.addEventListener('click', () => {
  const nextArticle = curArticle + 1;
  curArticle  = nextArticle < articles.length ? nextArticle : 0;
  showCurArticle()
})

document.getElementsByClassName('surprise-btn')[0]
  .addEventListener('click', () => {
    let newArticle = getRandomInt(articles.length, curArticle)
    curArticle =  newArticle
    showCurArticle()
  })

function getRandomInt(max, notEqual) {
  let random =  Math.floor(Math.random() * max)
  return random !== notEqual ? random : getRandomInt(max, notEqual)
}

window.addEventListener('load', () => showCurArticle())




/***google map ***/
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


