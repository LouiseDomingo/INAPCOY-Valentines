const quotes = [{
	quote: '"But God shows His love for us in that while we were still sinners, Christ died for us."',
	writer: '-Romans 5:8'
}, {
	quote: '"We love because He first loved us."',
	writer: '-1 John 4:19'
}, {
	quote: '"Greater love has no one than this, that someone lay down his life for his friends."',
	writer: '-John 15:13'
} , {
	quote: '"You are loved beyond measure."',
	writer: '-Ephesians 3:19'
} , {
	quote: '"God will always love you."',
	writer: '-1 John 4:16'
} , {
	quote: '"Give thanks to the God of Heaven. His love endures forever."',
	writer: '-Psalm 136:26'
} , {
	quote: '"And now these three remain: faith, hope and love. But the greatest of these is love."',
	writer: '-1 Corinthians 13:13'
} , {
	quote: '"I am with you always, even to the end of the age."',
	writer: '-Matthew 28:20'
} , {
	quote: '"Let all that you do be done with love."',
	writer: '-1 Corinthians 16:14'
} , {
	quote: '"And over all these virtues put on love, which binds them all together in perfect unity."',
	writer: '-Colossians 3:14'
} , {
	quote: '"Above all, love each other deeply, because love covers over a multitude of sins."',
	writer: '-1 Peter 4:8'
} , {
	quote: '"As the Father has loved me, so have I loved you. Now remain in my love."',
	writer: '-John 15:9'
} , {
	quote: '"Because Your love is better than life, my lips will glorify You."',
	writer: '-Psalms 63:3'
}
]


let btn = document.querySelector('#Qbtn');
let quote = document.querySelector('.quote');
let writer = document.querySelector('.writer');

btn.addEventListener("click", function() {
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.innerHTML = quotes[random].quote;
	
	writer.innerHTML = quotes[random].writer;
}) 