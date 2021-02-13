const e = React.createElement;

// Display a "Like" <button>
function LikeButton(){
    return e(
      'button',
      { onClick: () => alert("button work!") },
      'Like'
    );
}


// const Button = () => {
//     return <button>Like</button>
// } 

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);