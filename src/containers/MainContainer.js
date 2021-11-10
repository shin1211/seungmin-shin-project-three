import mainStyle from './MainContainer.module.css'
const MainContainer = ({ children }) => {

  return (
    <main className={mainStyle.wrapper}>
      <section className={mainStyle['current-list-container']}>
        {children[0]}
        {children[1]}
      </section>

      <section className={mainStyle['old-list-container']}>
        {children[2]}
        {children[3]}
      </section>
    </main>
  )
}

export default MainContainer;