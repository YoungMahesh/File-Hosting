import Head from 'next/head'

const imagePaths = {
	'anime': ['boy_2.jpg', 'boy_3.png', 'chota-bheem_1.png']
}

const ImagesPage = () => {
	return (
		<div>
			<Head>
				<title>Images</title>
				<meta name="description" content="Images hosted for personal use" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className='d-flex flex-wrap'>
				{
					imagePaths.anime.map((path, idx) =>
						<div key={idx} className="card" style={{ width: '300px' }}>
							<img src={`/images/anime/${path}`} className="card-img-top" alt="..." />
							<div className="card-body">
								<a href={`/images/anime/${path}`} className="btn btn-primary">Direct Link</a>
							</div>
						</div>
					)
				}
			</section>
		</div>
	)
}

export default ImagesPage