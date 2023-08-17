import ContentLoader from 'react-content-loader';

export const SLCards = () => {
  const skeletons = []
  for (let j = 0; j < 4; j++) {
    skeletons.push(
      <ContentLoader 
        key={j}
        speed={2}
        interval={0.25}
        width={window.innerWidth < 1000 ? '45vw' : '24vw'}
        height={window.innerWidth < 1000 ? '35vh' : '67vh'}
        backgroundColor="#e9e9e9"
        foregroundColor="#aaa"
      >
        <rect 
          x={window.innerWidth < 1000 ? 0 : 0} 
          y="20" 
          rx="20" 
          ry="20" 
          width={window.innerWidth < 1000 ? '40vw' : '22vw'} 
          height={window.innerWidth < 1000 ? "32vh" : "60vh"} 
        />
      </ContentLoader>
    )
  }

  return (
    <main style={{ display: 'flex', width: '96vw', flexWrap: 'wrap'}}>
      { 
        skeletons
      }
    </main>
  )
}
