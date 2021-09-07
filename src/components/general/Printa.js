import React, { useState } from "react";




const Printa = (props) => {

    const [upvote, addUpvote] = useState();
    const [replay, addReplay] = useState();

    



return (
    <div class="mainParentNote">

        {props.notes.map((p, index) => <div>
            <p>{p.message}</p>
            </div>

        )}

  
    </div>
)

}

export default Printa;