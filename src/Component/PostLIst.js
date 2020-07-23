import React from 'react'
import axios from 'axios'
class PostLIst extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                console.log(response)
                this.setState(
                    {
                        posts : response.data
                    }
                )
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render(){
    const Post = this.state.posts.map(item=><h3>{item.title}</h3>)
        return(
           <div>
               {Post}
           </div>
        )
    }
}

export default PostLIst