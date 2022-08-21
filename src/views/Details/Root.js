/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 00:40:18
 * @LastEditTime: 2022-08-21 22:42:26
 * @LastEditors:  
 */
import { Provider } from 'react-redux'
import { centreStore } from '../../store/centreStore'
import DetailPage from './Details'
import { ContentBox } from '../HomePage/App'

function Root () {
  return (
    <Provider store={centreStore}>
      <ContentBox className='app'>
        <DetailPage />
      </ContentBox>
    </Provider>
  )
}

export default Root