import {Component} from 'react'

const styles = {
    title: {
        marginBottom: '30px',
        backgroundColor: '#fff',
        fontSize: '220px',
        textalign: 'center',
        fontweight: '400',
        mixblendmode: 'multiply',
        position: 'relative',
    },
    video: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectfit: 'cover',
    },

}

class Title extends Component {
    render() {
        return (
            <div>
                <video autoPlay muted loop src="skyline.mp4" type="video/mp4">
                </video>
                <h2 style={styles.title}>ToBeIT Cluster Manager</h2>
            </div>
        )
    }
}

export default Title