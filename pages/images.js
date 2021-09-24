import Head from 'next/head'

const imagePaths = {
	'wallpaper': ['game_of_thrones_1.jpg', 'mansion_2.jpg'],
	'anime': ['boy_2.jpg', 'boy_3.png', 'chota-bheem_1.png', 'boy_5.jpg'],
	'dog': ['dog_1.jpg', 'dog_3.jpg'],
	'logo': [
		'solid8.png', 'blogger.svg', 'dev.to.svg', 'github.svg',
		'gmail.svg', 'json.svg', 'linkedin.svg', 'mail.svg',
		'telegram.svg', 'twitter.svg', 'vercel.svg',
		'firebase-realtime-database.svg', 'firebase-auth.svg'
	],
	'quote': ['quote_1.png'],
	'people': ['buddha_1.jpg', 'chhatrapati_3.jpg', 'darwin_1.jpg', 'elon_1.png']
}

const ImagesPage = () => {
	return (
		<div>
			<Head>
				<title>Images</title>
				<meta name="description" content="Images hosted for personal use" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{
				Object.keys(imagePaths).map((folder, idx) => (
					<section key={idx} className='d-flex flex-wrap'>
						{
							imagePaths[folder].map((path, idx) =>
								<div key={idx} className="card" style={{ width: '100px' }}>
									<img src={`/images/${folder}/${path}`} className="card-img-top" alt="..." />
									<div className="card-body">
										<a href={`/images/${folder}/${path}`} className="btn btn-primary">Link</a>
									</div>
								</div>
							)
						}
					</section>
				))
			}
		</div>
	)
}

export default ImagesPage