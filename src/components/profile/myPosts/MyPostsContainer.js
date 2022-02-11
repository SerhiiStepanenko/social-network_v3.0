import {addPostTextAC, updateNewPostTextAC} from "../../../state/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     let onAddPost = () => {
//         props.store.dispatch(addPostTextAC())
//     }
//     let updateNewPostText = (text) =>{
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//     return (
//         <MyPosts updateNewPost={updateNewPostText}
//                  onAddPost={onAddPost}
//                  newPostText={props.store.getState().profilePage.newPostText}
//                  posts={props.store.getState().profilePage.posts}/>
//     )
// }

const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddPost: ()=>{
            dispatch(addPostTextAC())
        },
        updateNewPost: (text)=>{
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
