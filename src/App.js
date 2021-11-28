import {useEffect} from 'react' 
import PropTypes from 'prop-types'
import Barcomponent from './component/Barcomponent'
import Piecomponent from './component/Piecomponent'
import {connect} from 'react-redux'
import {fetchData} from './actions/apiAction'


function App({data,fetchData}) {
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className='flexContainer'>
      {data && data.apiData && data.apiData.map((item,index) => <div key={index} className='flexChild'>
        {item.type === 'Bar' && <Barcomponent data={item.elements} />}
        {item.type === 'Pie' && <Piecomponent data={item.elements} />}
      </div>)}
    </div>
  );
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state.apiData
})

export default connect(mapStateToProps, {fetchData})(App);