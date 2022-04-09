import { View } from 'components/View'
import HomeView from 'pages/HomeView'
import styles from 'app.module.css'

// Add routes in this level if need
function App (): JSX.Element {
  return (
    <View flex className={styles.container}>
      <View className={styles.contentContainer}>
        <HomeView />
      </View>
    </View>
  )
}

export default App
