import ContentLoader from 'react-content-loader';

export const SLDetails = () => {
  const skeletons = []
  for (let i = 0; i < 1; i++) {
    skeletons.push(
      <ContentLoader 
      key={i}
      speed={2}
      interval={0.25}
      width={window.innerWidth < 1000 ? '95vw' : '95vw'}
      height={window.innerWidth < 1000 ? '130vh' : '80vh'}
      backgroundColor="#e9e9e9"
      foregroundColor="#aaa"
    >
      {/* Otras imágenes-Lateral izquierdo */}
      <rect 
        x={window.innerWidth < 1000 ? '1vw' : 0} 
        y={window.innerWidth < 1000 ? '3vh' : '3vh'} 
        rx="10" 
        ry="10" 
        width={window.innerWidth < 1000 ? '12vw' : '7vw'} 
        height={window.innerWidth < 1000 ? "10vh" : "12vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '1vw' : 0} 
        y={window.innerWidth < 1000 ? '15vh' : '18vh'} 
        rx="10" 
        ry="10" 
        width={window.innerWidth < 1000 ? '12vw' : '7vw'} 
        height={window.innerWidth < 1000 ? "10vh" : "12vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '1vw' : 0} 
        y={window.innerWidth < 1000 ? '27vh' : '33vh'} 
        rx="10" 
        ry="10" 
        width={window.innerWidth < 1000 ? '12vw' : '7vw'} 
        height={window.innerWidth < 1000 ? "10vh" : "12vh"} 
      />

      {/* Imágen principal */}
      <rect 
        x={window.innerWidth < 1000 ? '15vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '3vh' : '3vh'} 
        rx="20" 
        ry="20" 
        width={window.innerWidth < 1000 ? '78vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "70vh" : "69vh"} 
      />

      {/* Productos relacionadas 1 */}
      <rect 
        x={window.innerWidth < 1000 ? '15vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '77vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20}
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "15vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '77vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '84vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '89vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      {/* Productos relacionadas 2 */}
      <rect 
        x={window.innerWidth < 1000 ? '15vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '96vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20}
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "15vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '96vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '103vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '108vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      {/* Productos relacionadas 3 */}
      <rect 
        x={window.innerWidth < 1000 ? '15vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '115vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20}
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "15vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '115vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '25vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '122vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />

      <rect 
        x={window.innerWidth < 1000 ? '45vw' : '9vw'} 
        y={window.innerWidth < 1000 ? '127vh' : '3vh'} 
        rx={window.innerWidth < 1000 ? 10 : 20} 
        ry={window.innerWidth < 1000 ? 10 : 20} 
        width={window.innerWidth < 1000 ? '35vw' : '58vw'} 
        height={window.innerWidth < 1000 ? "3vh" : "69vh"} 
      />
    </ContentLoader>
    )
  }

  return (
    <main>
      { 
        skeletons
      }
    </main>
  )
}
