import React from "react";




export default function Date(props) {

    const {styleDate} = props

    return(
        <>
            <div className={styleDate}>
                <p>Son 12 Gün</p>
            </div>
        </>
    )
}