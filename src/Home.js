import React, {useEffect} from 'react';
import {connect} from 'react-redux'




const Home = (props) =>{

    useEffect(()=>{
        console.log("propsHere", props.pageTitle)
    })
    return (
        <div>
            {props.pageTitle}
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )

}

const mapStateToProps = state => {
    const { title } = state
    return {
      pageTitle: title
    }
  }
  
export default connect(mapStateToProps, null)(Home);
  