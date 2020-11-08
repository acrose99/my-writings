/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from "react"

// Size presets, defined by Spotify
const styles = {
       divMain:  {
           display: "flex",
           flexDirection: "row"
       },
       divSecondary: {
           display: "flex",
           flexDirection: "column"
       },
       img: {
           margin: 0,
           padding: 0,
           height: 200
       }
}

function Canvas() {
    let img1="https://cdn.mos.cms.futurecdn.net/c7dppKDbG3JXuMfybV5tUX.jpg"
    let img2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Head_Odysseus_MAR_Sperlonga.jpg/1200px-Head_Odysseus_MAR_Sperlonga.jpg"
    let img3="https://www.minecraft.net/content/dam/minecraft/pdp/Minecraft-xbox-one.jpg"
    let img4="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzM5NTM3NDE5/louis-pasteur-9434402-1-402.jpg"

    return (
        <div style={styles.divMain}>
            <div style={styles.divSecondary}>
                <img style={styles.img} src={img1} alt=""/>
                <img style={styles.img}  src={img2} alt=""/>
            </div>
            <div style={styles.divSecondary}>
                <img style={styles.img}  src={img3} alt=""/>
                <img style={styles.img}  src={img4} alt=""/>
            </div>
        </div>
    )
}

export default Canvas
